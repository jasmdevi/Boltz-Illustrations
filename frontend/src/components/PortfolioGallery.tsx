import React, { useMemo, useState } from 'react';

type Artwork = {
  id: string;
  title: string;
  year: number;
  medium: 'Ink' | 'Watercolor' | 'Digital' | 'Gouache';
  image: string;   // Use remote links for now; replace with local assets when ready
  tags?: string[];
};

const ARTWORKS: Artwork[] = [
  {
    id: '1',
    title: 'Night Bloom',
    year: 2025,
    medium: 'Watercolor',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200',
    tags: ['floral', 'color'],
  },
  {
    id: '2',
    title: 'Kinetic Lines',
    year: 2024,
    medium: 'Ink',
    image: 'https://images.unsplash.com/photo-1504198453319-5ce911bafcde?q=80&w=1200',
    tags: ['motion', 'monochrome'],
  },
  {
    id: '3',
    title: 'City After Rain',
    year: 2025,
    medium: 'Digital',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200',
    tags: ['neon', 'urban'],
  },
  {
    id: '4',
    title: 'Oracle',
    year: 2023,
    medium: 'Gouache',
    image: 'https://images.unsplash.com/photo-1496317899792-9d7dbcd928a1?q=80&w=1200',
    tags: ['portrait'],
  },
  {
    id: '5',
    title: 'Fjord Light',
    year: 2024,
    medium: 'Watercolor',
    image: 'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?q=80&w=1200',
    tags: ['landscape'],
  },
  {
    id: '6',
    title: 'Vermilion',
    year: 2025,
    medium: 'Ink',
    image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1200',
    tags: ['figure'],
  },
];

const MEDIUMS: Array<Artwork['medium'] | 'All'> = ['All', 'Ink', 'Watercolor', 'Digital', 'Gouache'];

const PortfolioGallery: React.FC = () => {
  const [medium, setMedium] = useState<Artwork['medium'] | 'All'>('All');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ARTWORKS.filter(a => {
      const matchMedium = medium === 'All' || a.medium === medium;
      const text = `${a.title} ${a.tags?.join(' ') ?? ''}`.toLowerCase();
      const matchQuery = q.length === 0 || text.includes(q);
      return matchMedium && matchQuery;
    });
  }, [medium, query]);

  return (
    <>
      <div className="gallery-controls">
        <div className="pills">
          {MEDIUMS.map(m => (
            <button
              key={m}
              className={`pill ${m === medium ? 'active' : ''}`}
              onClick={() => setMedium(m)}
            >
              {m}
            </button>
          ))}
        </div>
        <input
          className="search"
          placeholder="Search titles or tags…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className="gallery-grid">
        {filtered.map((art) => (
          <figure className="card" key={art.id}>
            <img src={art.image} alt={art.title} loading="lazy" />
            <figcaption className="card-caption">
              <div>
                <strong>{art.title}</strong>
                <span className="muted">{art.year} • {art.medium}</span>
              </div>
              {art.tags && <div className="tags">
                {art.tags.map(t => <span className="tag" key={t}>{t}</span>)}
              </div>}
            </figcaption>
          </figure>
        ))}
      </div>
    </>
  );
};

export default PortfolioGallery;
