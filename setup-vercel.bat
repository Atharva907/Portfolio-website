
@echo off
echo Setting up project structure for Vercel deployment...

REM Create app directory if it doesn't exist
if not exist "app" mkdir app

REM Copy all necessary files from src/app to app
echo Copying layout.js...
copy "srcpp\layout.js" "app\layout.js" /Y

echo Copying page.js...
copy "srcpp\page.js" "app\page.js" /Y

echo Copying globals.css...
copy "srcpp\globals.css" "app\globals.css" /Y

echo Copying favicon.ico...
copy "srcppavicon.ico" "appavicon.ico" /Y

REM Create components directory in app if it doesn't exist
if not exist "app\components" mkdir app\components

echo Copying component files...
copy "srcpp\components\*.jsx" "app\components" /Y

echo Project structure updated successfully!
echo You can now run 'npm run build' to test the build locally.
pause
