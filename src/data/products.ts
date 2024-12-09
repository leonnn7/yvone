import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: 'deck-1',
    name: 'Klassisches Häkeldeckchen',
    description: 'Handgehäkeltes Deckchen aus feiner Baumwolle, 30cm Durchmesser',
    price: 49.90,
    imageUrl: 'https://picsum.photos/800/800?random=1',
    additionalImages: [
      'https://picsum.photos/800/800?random=2',
      'https://picsum.photos/800/800?random=3'
    ],
    isCustomizable: true,
    category: 'standard',
    size: 'mittel',
    style: 'klassisch',
    tags: ['klassisch', 'traditionell', 'baumwolle']
  },
  {
    id: 'deck-2',
    name: 'Vintage Spitzendeckchen',
    description: 'Traditionelles Muster in cremeweiss, 25cm Durchmesser',
    price: 39.90,
    imageUrl: 'https://picsum.photos/800/800?random=4',
    additionalImages: [
      'https://picsum.photos/800/800?random=5',
      'https://picsum.photos/800/800?random=6'
    ],
    isCustomizable: false,
    category: 'standard',
    size: 'klein',
    style: 'vintage',
    tags: ['vintage', 'spitze', 'cremeweiss']
  },
  {
    id: 'deck-3',
    name: 'Romantisches Blumendeckchen',
    description: 'Zartes Häkeldeckchen mit Blumenmuster, 35cm Durchmesser',
    price: 59.90,
    imageUrl: 'https://picsum.photos/800/800?random=7',
    additionalImages: [
      'https://picsum.photos/800/800?random=8',
      'https://picsum.photos/800/800?random=9'
    ],
    isCustomizable: true,
    category: 'custom',
    size: 'mittel',
    style: 'klassisch',
    tags: ['romantisch', 'blumen', 'zart']
  },
  {
    id: 'deck-4',
    name: 'Modernes Geometriedeckchen',
    description: 'Zeitgenössisches Design mit geometrischen Mustern, 40cm Durchmesser',
    price: 64.90,
    imageUrl: 'https://picsum.photos/800/800?random=10',
    additionalImages: [
      'https://picsum.photos/800/800?random=11',
      'https://picsum.photos/800/800?random=12'
    ],
    isCustomizable: true,
    category: 'custom',
    size: 'gross',
    style: 'modern',
    tags: ['modern', 'geometrisch', 'zeitgenössisch']
  },
  {
    id: 'deck-5',
    name: 'Miniatur Häkeldeckchen Set',
    description: 'Set aus 3 kleinen Deckchen, je 15cm Durchmesser',
    price: 45.90,
    imageUrl: 'https://picsum.photos/800/800?random=13',
    additionalImages: [
      'https://picsum.photos/800/800?random=14',
      'https://picsum.photos/800/800?random=15'
    ],
    isCustomizable: false,
    category: 'standard',
    size: 'klein',
    style: 'klassisch',
    tags: ['miniatur', 'set', 'klein']
  },
  {
    id: 'deck-6',
    name: 'Ovales Tischdeckchen',
    description: 'Elegantes ovales Design, 45x30cm',
    price: 54.90,
    imageUrl: 'https://picsum.photos/800/800?random=16',
    additionalImages: [
      'https://picsum.photos/800/800?random=17',
      'https://picsum.photos/800/800?random=18'
    ],
    isCustomizable: true,
    category: 'custom',
    size: 'gross',
    style: 'klassisch',
    tags: ['oval', 'elegant', 'tisch']
  },
  {
    id: 'deck-7',
    name: 'Rustikales Landhaus Deckchen',
    description: 'Naturinspiriertes Design, 40cm Durchmesser',
    price: 49.90,
    imageUrl: 'https://picsum.photos/800/800?random=19',
    additionalImages: [
      'https://picsum.photos/800/800?random=20',
      'https://picsum.photos/800/800?random=21'
    ],
    isCustomizable: false,
    category: 'standard',
    size: 'gross',
    style: 'rustikal',
    tags: ['rustikal', 'landhaus', 'natur']
  },
  {
    id: 'deck-8',
    name: 'Festliches Sternendeckchen',
    description: 'Weihnachtliches Design mit Sternen, 35cm Durchmesser',
    price: 59.90,
    imageUrl: 'https://picsum.photos/800/800?random=22',
    additionalImages: [
      'https://picsum.photos/800/800?random=23',
      'https://picsum.photos/800/800?random=24'
    ],
    isCustomizable: true,
    category: 'custom',
    size: 'mittel',
    style: 'festlich',
    tags: ['festlich', 'sterne', 'weihnachten']
  },
  {
    id: 'deck-9',
    name: 'Mediterranes Spitzendeckchen',
    description: 'Südländisches Flair, 30cm Durchmesser',
    price: 44.90,
    imageUrl: 'https://picsum.photos/800/800?random=25',
    additionalImages: [
      'https://picsum.photos/800/800?random=26',
      'https://picsum.photos/800/800?random=27'
    ],
    isCustomizable: false,
    category: 'standard',
    size: 'mittel',
    style: 'vintage',
    tags: ['mediterran', 'spitze', 'südländisch']
  },
  {
    id: 'deck-10',
    name: 'Art Deco Deckchen',
    description: 'Inspiriert von den 1920er Jahren, 25cm Durchmesser',
    price: 69.90,
    imageUrl: 'https://picsum.photos/800/800?random=28',
    additionalImages: [
      'https://picsum.photos/800/800?random=29',
      'https://picsum.photos/800/800?random=30'
    ],
    isCustomizable: true,
    category: 'custom',
    size: 'klein',
    style: 'vintage',
    tags: ['art deco', '1920er', 'vintage']
  },
  {
    id: 'deck-11',
    name: 'Jugendstil Deckchen',
    description: 'Elegantes Design im Jugendstil, 35cm Durchmesser',
    price: 74.90,
    imageUrl: 'https://picsum.photos/800/800?random=31',
    additionalImages: [
      'https://picsum.photos/800/800?random=32',
      'https://picsum.photos/800/800?random=33'
    ],
    isCustomizable: true,
    category: 'custom',
    size: 'mittel',
    style: 'vintage',
    tags: ['jugendstil', 'elegant', 'vintage']
  },
  {
    id: 'deck-12',
    name: 'Skandinavisches Deckchen',
    description: 'Minimalistisches nordisches Design, 30cm Durchmesser',
    price: 54.90,
    imageUrl: 'https://picsum.photos/800/800?random=34',
    additionalImages: [
      'https://picsum.photos/800/800?random=35',
      'https://picsum.photos/800/800?random=36'
    ],
    isCustomizable: false,
    category: 'standard',
    size: 'mittel',
    style: 'modern',
    tags: ['skandinavisch', 'minimalistisch', 'nordisch']
  }
];