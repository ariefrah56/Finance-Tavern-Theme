// ============================================
// MEDIEVAL TAVERN FINANCE APP - JAVASCRIPT
// ============================================

class FinanceApp {
    constructor() {
        this.transactions = [];
        this.chart = null;
        this.init();
    }

    init() {
        this.loadFromStorage();
        this.setupEventListeners();
        this.updateDashboard();
        this.renderTransactions();
        this.initChart();
        this.populateCategoryFilter();
        this.setDefaultDate();
    }

    // ========== Event Listeners ==========
    setupEventListeners() {
        // Type toggle buttons
        document.querySelectorAll('.type-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.toggleType(e));
        });

        // Form submission
        document.getElementById('transactionForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.addTransaction();
        });

        // Filter controls
        document.getElementById('filterType').addEventListener('change', () => this.renderTransactions());
        document.getElementById('filterCategory').addEventListener('change', () => this.renderTransactions());

        // Number Pad
        document.querySelectorAll('.numpad-btn').forEach(btn => {
            btn.addEventListener('click', () => this.handleNumPadInput(btn.dataset.value));
        });

        // Quick Notes
        document.querySelectorAll('.note-btn').forEach(btn => {
            if (btn.id === 'clearDescription') {
                btn.addEventListener('click', () => {
                    document.getElementById('description').value = '';
                });
            } else {
                btn.addEventListener('click', () => {
                    document.getElementById('description').value = btn.dataset.text;
                });
            }
        });

        // iOS PWA Focus Fix
        this.setupIOSFocusFix();
    }

    handleNumPadInput(value) {
        const amountInput = document.getElementById('amount');
        let rawVal = this.stripThousandSeparators(amountInput.value) || '';

        if (value === 'C') {
            rawVal = '';
        } else if (value === 'DEL') {
            rawVal = rawVal.slice(0, -1);
        } else {
            if (rawVal.length < 12) {
                rawVal += value;
            }
        }

        amountInput.value = this.formatInputNumber(rawVal);
    }

    formatInputNumber(val) {
        if (!val) return '';
        return val.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    stripThousandSeparators(val) {
        return val.replace(/\./g, '');
    }

    setupIOSFocusFix() {
        const inputs = document.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('touchstart', (e) => {
                // Force focus on touch for standalone mode
                if (window.navigator.standalone) {
                    input.focus();
                }
            }, { passive: true });
        });
    }

    // ========== Type Toggle ==========
    toggleType(e) {
        const btn = e.target;
        const type = btn.dataset.type;

        // Update button states
        document.querySelectorAll('.type-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Update hidden input
        document.getElementById('transactionType').value = type;

        // Show/hide category optgroups
        const incomeGroup = document.getElementById('incomeCategories');
        const expenseGroup = document.getElementById('expenseCategories');

        if (type === 'income') {
            incomeGroup.style.display = '';
            expenseGroup.style.display = 'none';
            incomeGroup.querySelector('option').selected = true;
        } else {
            incomeGroup.style.display = 'none';
            expenseGroup.style.display = '';
            expenseGroup.querySelector('option').selected = true;
        }
    }

    // ========== Add Transaction ==========
    addTransaction() {
        const type = document.getElementById('transactionType').value;
        const amount = parseFloat(this.stripThousandSeparators(document.getElementById('amount').value));
        const category = document.getElementById('category').value;
        const description = document.getElementById('description').value;
        const date = document.getElementById('date').value;

        if (isNaN(amount) || amount <= 0) {
            alert("Please enter a valid amount!");
            return;
        }

        const transaction = {
            id: Date.now(),
            type,
            amount,
            category,
            description,
            date
        };

        this.transactions.unshift(transaction);
        this.saveToStorage();
        this.updateDashboard();
        this.renderTransactions();
        this.updateChart();
        this.populateCategoryFilter();

        // Reset form
        document.getElementById('transactionForm').reset();
        this.setDefaultDate();

        // Reset to income type
        document.querySelectorAll('.type-btn').forEach(b => b.classList.remove('active'));
        document.querySelector('.type-btn[data-type="income"]').classList.add('active');
        document.getElementById('transactionType').value = 'income';
        document.getElementById('incomeCategories').style.display = '';
        document.getElementById('expenseCategories').style.display = 'none';

        // Show success feedback
        this.showNotification('Transaction recorded in the ledger! 📜');
    }

    // ========== Delete Transaction ==========
    deleteTransaction(id) {
        if (confirm('Remove this entry from the ledger?')) {
            this.transactions = this.transactions.filter(t => t.id !== id);
            this.saveToStorage();
            this.updateDashboard();
            this.renderTransactions();
            this.updateChart();
            this.populateCategoryFilter();
            this.showNotification('Transaction removed from ledger ❌');
        }
    }

    // ========== Dashboard Calculations ==========
    updateDashboard() {
        const currentMonth = new Date().getMonth();
        const currentYear = new Date().getFullYear();

        const monthTransactions = this.transactions.filter(t => {
            const tDate = new Date(t.date);
            return tDate.getMonth() === currentMonth && tDate.getFullYear() === currentYear;
        });

        // Monthly income/expense (for cards display)
        const totalIncome = monthTransactions
            .filter(t => t.type === 'income')
            .reduce((sum, t) => sum + t.amount, 0);

        const totalExpense = monthTransactions
            .filter(t => t.type === 'expense')
            .reduce((sum, t) => sum + t.amount, 0);

        // FIXED: Calculate total balance from ALL transactions (not just this month)
        const allTimeIncome = this.transactions
            .filter(t => t.type === 'income')
            .reduce((sum, t) => sum + t.amount, 0);

        const allTimeExpense = this.transactions
            .filter(t => t.type === 'expense')
            .reduce((sum, t) => sum + t.amount, 0);

        const balance = allTimeIncome - allTimeExpense;

        // Update UI
        document.getElementById('totalIncome').textContent = this.formatCurrency(totalIncome);
        document.getElementById('totalExpense').textContent = this.formatCurrency(totalExpense);
        document.getElementById('totalBalance').textContent = this.formatCurrency(balance);
    }

    // ========== Render Transactions ==========
    renderTransactions() {
        const container = document.getElementById('transactionList');
        const filterType = document.getElementById('filterType').value;
        const filterCategory = document.getElementById('filterCategory').value;

        let filtered = this.transactions;

        // Filter by type
        if (filterType !== 'all') {
            filtered = filtered.filter(t => t.type === filterType);
        }

        // Filter by category
        if (filterCategory !== 'all') {
            filtered = filtered.filter(t => t.category === filterCategory);
        }

        // Update count
        document.getElementById('transactionCount').textContent =
            `${filtered.length} ${filtered.length === 1 ? 'entry' : 'entries'}`;

        // Render
        if (filtered.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <span class="empty-icon">📜</span>
                    <p>No transactions found</p>
                    <small>Try adjusting your filters</small>
                </div>
            `;
            return;
        }

        container.innerHTML = filtered.map(t => this.createTransactionCard(t)).join('');
    }

    createTransactionCard(transaction) {
        const icon = transaction.type === 'income' ? '💰' : '🪙';
        const sign = transaction.type === 'income' ? '+' : '-';
        const formattedDate = new Date(transaction.date).toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });

        return `
            <div class="transaction-card ${transaction.type}">
                <div class="transaction-icon">${icon}</div>
                <div class="transaction-details">
                    <div class="transaction-amount">${sign}${this.formatCurrency(transaction.amount)}</div>
                    <div class="transaction-category">${transaction.category}</div>
                    <div class="transaction-description">${transaction.description || 'No description'}</div>
                    <div class="transaction-date">📅 ${formattedDate}</div>
                </div>
                <button class="delete-btn" onclick="app.deleteTransaction(${transaction.id})">
                    🗑️ Remove
                </button>
            </div>
        `;
    }

    // ========== Chart ==========
    initChart() {
        const ctx = document.getElementById('cashFlowChart').getContext('2d');

        this.chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: [],
                datasets: [
                    {
                        label: '💰 Gold Earned',
                        data: [],
                        borderColor: '#2e7d32',
                        backgroundColor: 'rgba(46, 125, 50, 0.1)',
                        borderWidth: 3,
                        tension: 0.4,
                        fill: true
                    },
                    {
                        label: '🪙 Gold Spent',
                        data: [],
                        borderColor: '#c62828',
                        backgroundColor: 'rgba(198, 40, 40, 0.1)',
                        borderWidth: 3,
                        tension: 0.4,
                        fill: true
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top',
                        labels: {
                            font: {
                                family: 'Cinzel',
                                size: 12
                            },
                            color: '#3e2723'
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(62, 39, 35, 0.9)',
                        titleFont: {
                            family: 'Cinzel',
                            size: 14
                        },
                        bodyFont: {
                            family: 'MedievalSharp',
                            size: 13
                        },
                        padding: 12,
                        cornerRadius: 8
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            font: {
                                family: 'Cinzel',
                                size: 11
                            },
                            color: '#5d4037'
                        },
                        grid: {
                            color: 'rgba(139, 69, 19, 0.1)'
                        }
                    },
                    x: {
                        ticks: {
                            font: {
                                family: 'Cinzel',
                                size: 11
                            },
                            color: '#5d4037'
                        },
                        grid: {
                            color: 'rgba(139, 69, 19, 0.1)'
                        }
                    }
                }
            }
        });

        this.updateChart();
    }

    updateChart() {
        // Get last 7 days
        const days = 7;
        const labels = [];
        const incomeData = [];
        const expenseData = [];

        for (let i = days - 1; i >= 0; i--) {
            const date = new Date();
            date.setDate(date.getDate() - i);
            const dateStr = date.toISOString().split('T')[0];

            labels.push(date.toLocaleDateString('id-ID', { day: 'numeric', month: 'short' }));

            const dayIncome = this.transactions
                .filter(t => t.type === 'income' && t.date === dateStr)
                .reduce((sum, t) => sum + t.amount, 0);

            const dayExpense = this.transactions
                .filter(t => t.type === 'expense' && t.date === dateStr)
                .reduce((sum, t) => sum + t.amount, 0);

            incomeData.push(dayIncome);
            expenseData.push(dayExpense);
        }

        this.chart.data.labels = labels;
        this.chart.data.datasets[0].data = incomeData;
        this.chart.data.datasets[1].data = expenseData;
        this.chart.update();
    }

    // ========== Category Filter ==========
    populateCategoryFilter() {
        const categories = [...new Set(this.transactions.map(t => t.category))];
        const select = document.getElementById('filterCategory');

        const currentValue = select.value;
        select.innerHTML = '<option value="all">All Categories</option>';

        categories.forEach(cat => {
            const option = document.createElement('option');
            option.value = cat;
            option.textContent = cat;
            select.appendChild(option);
        });

        select.value = currentValue;
    }

    // ========== Utilities ==========
    formatCurrency(amount) {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(amount);
    }

    setDefaultDate() {
        const today = new Date().toISOString().split('T')[0];
        document.getElementById('date').value = today;
    }

    showNotification(message) {
        // Simple alert for now - can be enhanced with toast notifications
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #ffd700, #b8860b);
            color: #3e2723;
            padding: 15px 25px;
            border-radius: 10px;
            border: 3px solid #3e2723;
            font-family: 'MedievalSharp', cursive;
            font-size: 14px;
            font-weight: bold;
            box-shadow: 0 6px 15px rgba(0,0,0,0.3);
            z-index: 1000;
            animation: slideIn 0.3s ease;
        `;
        notification.textContent = message;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 2000);
    }

    // ========== Local Storage ==========
    saveToStorage() {
        localStorage.setItem('tavernLedger', JSON.stringify(this.transactions));
    }

    loadFromStorage() {
        const stored = localStorage.getItem('tavernLedger');
        if (stored) {
            this.transactions = JSON.parse(stored);
        }
    }
}

// Add animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize app
const app = new FinanceApp();
