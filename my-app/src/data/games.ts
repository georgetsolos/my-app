export type Game = {
  id: string;
  slug: string;
  title: string;
  rating: number;
  category: string;
  cardImage: string;
  heroImage: string;
};

// Placeholder rating/category — replace once the real API is available.
const meta: Record<string, { rating: number; category: string }> = {
  'camper-van-make-it-home': { rating: 4.4, category: 'Adventure' },
  'cast-n-chill': { rating: 4.2, category: 'Casual' },
  'cat-chess': { rating: 4.5, category: 'Puzzle' },
  'cat-mail-co': { rating: 4.3, category: 'Simulation' },
  'cozy-solitaire': { rating: 4.6, category: 'Card' },
  'cozy-sudoku': { rating: 4.5, category: 'Puzzle' },
  'grimshire': { rating: 4.1, category: 'RPG' },
  'heartopia': { rating: 4.7, category: 'Cozy' },
  'islanders-new-shores': { rating: 4.4, category: 'Strategy' },
  'koroneko': { rating: 4.2, category: 'Puzzle' },
  'leaf-it-alone': { rating: 4.3, category: 'Cozy' },
  'leafy-corner': { rating: 4.5, category: 'Simulation' },
  'little-corners': { rating: 4.4, category: 'Puzzle' },
  'organized-inside': { rating: 4.6, category: 'Puzzle' },
  'palia': { rating: 4.5, category: 'Simulation' },
  'shelve-the-potions': { rating: 4.3, category: 'Puzzle' },
  'tailside-cozy-cafe-sim': { rating: 4.2, category: 'Simulation' },
  'the-wild-at-heart': { rating: 4.6, category: 'Adventure' },
  'tiny-glade': { rating: 4.4, category: 'Puzzle' },
  'tukoni-forest-keepers': { rating: 4.7, category: 'Adventure' },
  'vacation-cafe-simulator': { rating: 4.1, category: 'Simulation' },
  'whisper-of-the-house': { rating: 4.5, category: 'Adventure' },
  'winter-burrow': { rating: 4.3, category: 'Cozy' },
  'wytchwood': { rating: 4.6, category: 'Adventure' },
};

const slugs = Object.keys(meta);

function titleize(slug: string): string {
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

export const games: Game[] = slugs.map((slug, i) => ({
  id: String(i + 1),
  slug,
  title: titleize(slug),
  rating: meta[slug].rating,
  category: meta[slug].category,
  cardImage: `/games/${slug}-card.jpg`,
  heroImage: `/games/${slug}-hero.jpg`,
}));