@echo off
echo ========================================
echo Starting Sanjay's Portfolio Dev Server
echo ========================================
echo.

REM Add Node.js to PATH for this session
set "PATH=C:\Program Files\nodejs;%PATH%"

REM Verify Node.js is available
echo Checking Node.js installation...
node --version
echo.

REM Start the development server
echo Starting Next.js development server...
echo The website will be available at: http://localhost:3000
echo.
echo Press Ctrl+C to stop the server
echo.

npm run dev

pause
