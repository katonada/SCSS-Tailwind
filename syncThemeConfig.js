// tokens-to-scss.js
const fs = require('fs');
const path = require('path');
const sharedTheme = require('./sharedThemeConfig');

function themeScssMap(obj, name) {
    let scssMap = `$${name}: (\n`;
    Object.keys(obj).forEach((key) => {
        const value = obj[key];
        if (typeof value === 'object' && !Array.isArray(value)) {
            scssMap += `  ${key}: ${themeScssMap(value, key)},\n`;
        } else {
            scssMap += `  ${key}: ${value},\n`;
        }
    });
    scssMap += `);\n`;
    return scssMap;
}

let scssContent = '';
Object.keys(designTokens).forEach((tokenCategoryName) => {
    const tokenCategory = designTokens[tokenCategoryName];
    scssContent += themeScssMap(tokenCategory, tokenCategoryName);
});

fs.writeFileSync(path.resolve(__dirname, 'styles/_themeVariables.scss'), scssContent);
