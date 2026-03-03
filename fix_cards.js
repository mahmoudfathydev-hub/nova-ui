const fs = require('fs');

let content = fs.readFileSync('src/registry/cards.tsx', 'utf8');

const components = [
    'GlassmorphismCard', 'SpotlightCard', 'ParallaxCard', 'HoverExpandCard', 'AnimatedBorderCard', 'FloatingCard', 'InteractiveActionCard'
];

for (const name of components) {
    if (fs.existsSync(`src/components/ui/Card/${name}.tsx`)) {
        let fileContent = fs.readFileSync(`src/components/ui/Card/${name}.tsx`, 'utf8');

        // Remove @/lib/utils completely and replace cn with inline function
        fileContent = fileContent.replace(/import { cn } from "@\/lib\/utils";/g, 'function cn(...classes: (string | undefined | false)[]) {\n    return classes.filter(Boolean).join(" ");\n}');

        // Replace absolute aliases with relative
        fileContent = fileContent.replace(/@\/components\/ui\/Card/g, '../components/ui/Card');
        fileContent = fileContent.replace(/@\/components\/ui\/Button/g, '../components/ui/Button');

        fs.writeFileSync(`src/components/ui/Card/${name}.tsx`, fileContent);

        const escaped = JSON.stringify(fileContent);

        const previewMatch = content.match(new RegExp(`preview:\\s*<${name}(?:\\s+[^>]*)?/>,`));

        if (previewMatch) {
            const regex = new RegExp(`preview:\\s*<${name}(?:\\s+[^>]*)?/>,\\s*code:\\s*".*?"`, 'gs');
            content = content.replace(regex, `${previewMatch[0]}\n    code: ${escaped}`);
        }
    } else {
        console.log(`Missing ${name}`);
    }
}

// Fix imports in cards.tsx
content = content.replace(/@\/components\/ui\/Card\/advanced/g, '../components/ui/Card');
content = content.replace(/@\/components\/ui\/Card/g, '../components/ui/Card');
content = content.replace(/@\/components\/ui\/Button/g, '../components/ui/Button');

fs.writeFileSync('src/registry/cards.tsx', content);

console.log("Done updating arrays and imports.");
