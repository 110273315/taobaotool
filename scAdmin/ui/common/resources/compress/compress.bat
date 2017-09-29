@echo off
 
echo build...

node r.js -o buildconfig_js.js
node r.js -o buildconfig_css.js

echo Press any key to exit!
echo. & pause