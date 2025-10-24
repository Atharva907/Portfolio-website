

@echo off
echo Setting up project structure for Vercel deployment...

REM Create app directory if it doesn't exist
if not exist "app" mkdir app

REM Create components directory in app if it doesn't exist
if not exist "app\components" mkdir app\components

echo Copying layout.js...
copy "srcpp\layout.js" "app\layout.js" /Y

echo Copying page.js...
copy "srcpp\page.js" "app\page.js" /Y

echo Copying globals.css...
copy "srcpp\globals.css" "app\globals.css" /Y

REM Copy component files
echo Copying component files...
copy "srcpp\components\*.jsx" "app\components" /Y

REM Copy favicon.ico using xcopy to handle binary files
echo Copying favicon.ico...
xcopy "srcppavicon.ico" "appavicon.ico" /Y /I

echo Project structure updated successfully!
echo You can now run 'npm run build' to test the build locally.
pause

