const fs = require('fs');
const path = require('path');

const screensDir = 'c:\\Users\\Baap\\Desktop\\demo\\src\\screens';
const files = fs.readdirSync(screensDir).filter(f => f.endsWith('.tsx'));

for (const f of files) {
  const fp = path.join(screensDir, f);
  let content = fs.readFileSync(fp, 'utf8');

  // Regex to match the Styles block at the bottom
  const stylesRegex = /const\s+styles\s*=\s*StyleSheet\.create\({[\s\S]*}\);\s*$/;
  const match = content.match(stylesRegex);

  if (match) {
    let stylesContent = match[0];
    
    // Find all potential imports needed
    let styleImports = new Set();
    styleImports.add('StyleSheet');
    if (stylesContent.includes('Platform.')) styleImports.add('Platform');
    if (stylesContent.includes('Dimensions.')) styleImports.add('Dimensions');
    
    let importReactNative = `import { ${Array.from(styleImports).join(', ')} } from 'react-native';`;
    
    // Handle specific custom constants/theme imports if they're used
    let themeImportsLine = '';
    const themeRegex = /import\s+{[^}]+}\s+from\s+'\.\.\/constants\/theme';/;
    const themeMatch = content.match(themeRegex);
    if (themeMatch && (stylesContent.includes('Colors.') || stylesContent.includes('Spacing.') || stylesContent.includes('BorderRadius.') || stylesContent.includes('FontSize.'))) {
      themeImportsLine = themeMatch[0];
    }
    
    let baseName = f.replace('.tsx', '');
    let styleFileName = `${baseName}Styles.ts`;
    
    let cssFileContent = `${importReactNative}\n`;
    if (themeImportsLine) {
        cssFileContent += `${themeImportsLine}\n`;
    }
    cssFileContent += `\nexport ${stylesContent}`;
    
    fs.writeFileSync(path.join(screensDir, styleFileName), cssFileContent);

    // Remove styles from original file
    content = content.replace(stylesRegex, '');
    
    // Add import to original file right after 'react' or 'react-native'
    const importStatement = `import { styles } from './${baseName}Styles';\n`;
    const reactNativeImport = /import\s+{[^}]+}\s+from\s+'react-native';\n/;
    if (content.match(reactNativeImport)) {
        content = content.replace(reactNativeImport, `$&${importStatement}`);
    } else {
        // Fallback: put it after the first import
        content = content.replace(/(import [^\n]+\n+)/, `$1${importStatement}`);
    }
    
    fs.writeFileSync(fp, content);
    console.log(`Splitted styles for ${f} -> ${styleFileName}`);
  }
}
