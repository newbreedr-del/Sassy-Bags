# Sassy Luxury Hand Bags - E-Commerce Store

A high-end e-commerce store for Sassy Luxury Hand Bags, built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Modern Design**: Beautiful UI with floating bubbles, smooth animations, and pastel color scheme
- **Product Catalog**: 49 products across 5 categories (Bags, Belts, Shoes, Wallets, Watches)
- **Shopping Cart**: Slide-out cart drawer with quantity management
- **Checkout Flow**: Multi-step checkout with shipping and payment forms
- **Responsive Design**: Fully responsive across all devices
- **Animations**: Smooth page transitions and hover effects using Framer Motion

## Pages

- **Home**: Bold hero section, featured products, and newsletter signup
- **Shop**: Full product catalog with category filtering and search
- **Collections**: Curated product collections
- **About**: Company story, values, and timeline
- **Contact**: Contact form and business information
- **Checkout**: Multi-step checkout process

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **State Management**: React Hooks

## Installation

**IMPORTANT**: Before installing, you need to free up disk space on your system. The previous npm install failed due to insufficient disk space.

1. Free up disk space on your system
2. Install dependencies:
   ```bash
   npm install
   ```

## Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Home page
│   ├── shop/
│   │   └── page.tsx      # Shop page with product catalog
│   ├── collections/
│   │   └── page.tsx      # Collections page
│   ├── about/
│   │   └── page.tsx      # About page
│   ├── contact/
│   │   └── page.tsx      # Contact page
│   ├── checkout/
│   │   └── page.tsx      # Checkout page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   ├── Header.tsx        # Navigation header
│   ├── Footer.tsx        # Footer component
│   ├── FloatingBubbles.tsx  # Animated background bubbles
│   └── ShoppingCart.tsx  # Shopping cart drawer
└── lib/
    └── utils.ts          # Utility functions
```

## Images

All product images are organized in the `public/images/` directory by category:
- `public/images/bags/` - 12 bag images
- `public/images/belts/` - 10 belt images
- `public/images/shoes/` - 9 shoe images
- `public/images/wallets/` - 7 wallet images
- `public/images/watches/` - 11 watch images

## Customization

### Colors

The brand colors are defined in `tailwind.config.ts`:
- Primary: Purple (#4A1C6B)
- Accent Pink: (#FF6B9D)
- Accent Purple: (#C084FC)
- Accent Orange: (#FB923C)
- Accent Blue: (#60A5FA)

### Products

Product data is defined in `src/app/shop/page.tsx`. You can add, remove, or modify products in the `products` array.

## Future Enhancements

- Backend integration for real product data
- Payment gateway integration (PayFast, Yoco, etc.)
- User authentication and accounts
- Order tracking
- Wishlist functionality
- Product reviews and ratings
- Advanced search and filtering

## License

© 2024 Sassy Luxury Hand Bags. All rights reserved.
