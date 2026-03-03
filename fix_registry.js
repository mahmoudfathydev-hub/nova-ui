const fs = require('fs');

let content = fs.readFileSync('src/registry/buttons.tsx', 'utf8');

const components = [
    'ShimmerButton', 'MagneticButton', 'ThreeDPressButton', 'ShinyGradientButton', 'AnimatedBorderButton', 'GlassButton', 'IconRevealButton', 'GlowPulseButton'
];

for (const name of components) {
    const fileContent = fs.readFileSync(`src/components/ui/Button/${name}.tsx`, 'utf8');
    const escaped = JSON.stringify(fileContent);

    const previewMatch = content.match(new RegExp(`preview:\\s*<${name}(?:\\s+[^>]*)?/>,`));

    if (previewMatch) {
        // Replaces the string code: "(whatever)" with the new escaped string
        const regex = new RegExp(`preview:\\s*<${name}(?:\\s+[^>]*)?/>,\\s*code:\\s*".*?"`, 'g');
        content = content.replace(regex, `${previewMatch[0]}\n    code: ${escaped}`);
    }
}

// Remove any remaining @/ aliases just to be safe (like in Button.tsx)
content = content.replace(/@\/components\/ui\/Button/g, '../components/ui/Button');

fs.writeFileSync('src/registry/buttons.tsx', content);

console.log(content);
