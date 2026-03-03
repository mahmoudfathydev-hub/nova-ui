import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.join(__dirname, '..');

// Update buttons.tsx
const buttonsRegistryPath = path.join(root, 'src/registry/buttons.tsx');
let buttonsContent = fs.readFileSync(buttonsRegistryPath, 'utf-8');

const advancedButtons = [
    { id: 'shimmer', file: 'ShimmerButton.tsx' },
    { id: 'magnetic', file: 'MagneticButton.tsx' },
    { id: 'three-d-press', file: 'ThreeDPressButton.tsx' },
    { id: 'shiny-gradient', file: 'ShinyGradientButton.tsx' },
    { id: 'animated-border', file: 'AnimatedBorderButton.tsx' },
    { id: 'glass', file: 'GlassButton.tsx' },
    { id: 'icon-reveal', file: 'IconRevealButton.tsx' },
    { id: 'glow-pulse', file: 'GlowPulseButton.tsx' }
];

for (const btn of advancedButtons) {
    const filePath = path.join(root, 'src/components/ui/Button/advanced', btn.file);
    if (fs.existsSync(filePath)) {
        const code = fs.readFileSync(filePath, 'utf-8');
        const encodedCode = JSON.stringify(code);

        // Exact Regex to find the code property for the specific given ID
        const pattern = new RegExp(`(id:\\s*"${btn.id}"[\\s\\S]*?code:\\s*)\`.*?\``);
        buttonsContent = buttonsContent.replace(pattern, `$1${encodedCode}`);
    }
}
fs.writeFileSync(buttonsRegistryPath, buttonsContent);

// Update cards.tsx
const cardsRegistryPath = path.join(root, 'src/registry/cards.tsx');
let cardsContent = fs.readFileSync(cardsRegistryPath, 'utf-8');

const advancedCards = [
    { id: 'glassmorphism', file: 'GlassmorphismCard.tsx' },
    { id: 'spotlight', file: 'SpotlightCard.tsx' },
    { id: 'parallax', file: 'ParallaxCard.tsx' },
    { id: 'hover-expand', file: 'HoverExpandCard.tsx' },
    { id: 'animated-border', file: 'AnimatedBorderCard.tsx' },
    { id: 'floating', file: 'FloatingCard.tsx' },
    { id: 'interactive-action', file: 'InteractiveActionCard.tsx' }
];

for (const card of advancedCards) {
    const filePath = path.join(root, 'src/components/ui/Card/advanced', card.file);
    if (fs.existsSync(filePath)) {
        const code = fs.readFileSync(filePath, 'utf-8');
        const encodedCode = JSON.stringify(code);

        const pattern = new RegExp(`(id:\\s*"${card.id}"[\\s\\S]*?code:\\s*)\`.*?\``);
        cardsContent = cardsContent.replace(pattern, `$1${encodedCode}`);
    }
}
fs.writeFileSync(cardsRegistryPath, cardsContent);

console.log('Registry updated successfully!');
