@echo off
echo ========================================
echo   Starting Golek Tavern Finance Server
echo ========================================
echo.
echo Server akan running di:
echo http://localhost:8000
echo.
echo Untuk akses dari HP:
echo 1. Cek IP Address dibawah ini
echo 2. Di HP, buka: http://[IP_ADDRESS]:8000
echo.
echo ========================================

REM Get IP Address
for /f "tokens=2 delims=:" %%a in ('ipconfig ^| findstr /c:"IPv4"') do (
    echo Your IP Address: %%a
    echo.
    echo Buka di HP: http:%%a:8000
    echo.
)

echo ========================================
echo Starting server...
echo Press Ctrl+C to stop server
echo ========================================
echo.

REM Check if Python is installed
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Python tidak terinstall!
    echo.
    echo Silakan install Python dari: https://www.python.org/downloads/
    echo Atau gunakan cara alternatif di README.md
    pause
    exit /b 1
)

REM Start Python HTTP server
python -m http.server 8000
