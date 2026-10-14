# UI/UX Design Prompts & Design System: « ដំណើរកំសាន្ត » (Domnoer Komsan)

---

## 1. Midjourney v6 Prompts

### Option A: Desktop Hero & Booking Interface (Primary)
```text
UI/UX web interface design for a modern luxury travel portal in Cambodia named "Domnoer Komsan", high-end dark slate background with vibrant emerald green (#059669) and warm amber gold (#F59E0B) glowing accents, majestic Angkor Wat sunrise hero photograph with soft atmospheric mist, floating glassmorphism search filter bar with location, dates, and budget selectors, modern destination cards displaying Siem Reap, Kampot, and Koh Rong with price tags in USD and KHR, sleek bilingual Khmer and Latin typography, clean minimalism, Figma UI presentation, Dribbble trending, 8k resolution, photorealistic studio lighting, responsive desktop dashboard layout --ar 16:9 --v 6.0 --style raw --q 2
```

### Option B: Mobile-First Responsive App Preview
```text
Mobile app UI/UX design mockups for Cambodian travel booking platform "Domnoer Komsan", showcase of two iPhone 15 Pro screens side by side, clean light mode interface with emerald green (#059669) navigation and amber gold badges, Khmer script headings, bottom navigation bar, card carousel of Mondulkiri elephant sanctuary and Koh Rong turquoise waters, floating booking CTA button, Behance portfolio showcase, soft ambient studio shadows, ultra clean vector aesthetic, 8k --ar 16:9 --v 6.0
```

### Option C: Card Grid & Exploration Experience
```text
Modern travel marketplace UI component library, grid of 4 travel destination cards for Cambodia: Angkor Wat temple, Kampot pepper plantations, Mondulkiri waterfalls, and Koh Rong beaches, high-end travel badges, user reviews 4.9 stars, dual-currency pricing pill "$120 / ៛492,000", sleek micro-interactions, dark emerald and champagne gold accents on pure white cards, soft 3D elevation, Figma mockup, 8k --ar 16:9 --v 6.0
```

---

## 2. DALL-E 3 / ChatGPT Prompt

```text
A sleek, modern UI/UX design mockup of a responsive travel portal for Cambodia named "Domnoer Komsan". The webpage features a clean, high-end aesthetic combining deep emerald green (#059669), rich slate grey (#0F172A), and warm amber gold (#F59E0B). 

At the top, there is a navigation bar with a subtle logo featuring a compass and Khmer typography, a language toggle switch (ខ្មែរ / EN), and a "Book Now" button. 

The hero section displays a breathtaking panoramic view of Angkor Wat at golden hour with an elegant title overlay in Khmer script: "ដំណើរកំសាន្ត - រកឃើញភាពអស្ចារ្យនៃកម្ពុជា". 

An overlapping search filter card features dropdowns for Destination, Travel Style, and Budget, followed by a responsive grid of four travel cards representing Siem Reap, Kampot, Koh Rong, and Mondulkiri, each with crisp photography, rating stars, and dual-currency prices ($ and ៛). Designed in a clean Figma portfolio presentation style.
```

---

## 3. Recommended Design System & Tokens

| Element | Specification | Tailwind Equivalent |
| :--- | :--- | :--- |
| **Primary Color** | Emerald Green `#059669` | `bg-emerald-600` / `text-emerald-600` |
| **Dark Emerald** | Deep Green `#064E3B` | `bg-emerald-900` |
| **Accent Gold** | Amber Gold `#F59E0B` | `bg-amber-500` / `text-amber-500` |
| **Surface Light** | Crisp Ivory `#FDFCFB` | `bg-stone-50` / `bg-slate-50` |
| **Surface Dark** | Slate Navy `#0F172A` | `bg-slate-900` |
| **Khmer Font** | Kantumruy Pro / Battambang / Koh Santepheap | Google Fonts |
| **Latin Font** | Outfit / Plus Jakarta Sans / Inter | Google Fonts |
| **Corner Radius** | `1rem` (Cards) & `0.75rem` (Buttons) | `rounded-2xl` & `rounded-xl` |
| **Shadows** | Soft colored glow: `0 10px 25px -5px rgba(5, 150, 105, 0.15)` | `shadow-xl shadow-emerald-900/10` |
