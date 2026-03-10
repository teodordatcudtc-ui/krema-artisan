import type { Metadata } from 'next';
import MenuFilter from '@/components/MenuFilter';

export const metadata: Metadata = {
  title: 'Meniu',
  description:
    'Meniul Krema – torturi artizanale, prăjituri fine, macarons și deserturi premium realizate manual în Popești-Leordeni.',
};

export default function MeniuPage() {
  return (
    <section className="bg-white pt-28 pb-24 min-h-screen" aria-label="Meniu produse">
      <div className="max-w-7xl mx-auto px-6">
        <MenuFilter />
      </div>
    </section>
  );
}
