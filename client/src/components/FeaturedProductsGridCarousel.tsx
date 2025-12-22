import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

type FeaturedProduct = {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
};

export default function FeaturedProductsGridCarousel({
  title = "Featured Products",
  products,
  itemsPerPage = 4, // 2 rows x 3 cols on desktop
}: {
  title?: string;
  products: FeaturedProduct[];
  itemsPerPage?: number;
}) {
  const [[startIndex, direction], setPage] = useState<[number, 1 | -1]>([0, 1]);

  const visible = useMemo(() => {
    if (products.length === 0) return [];
    const count = Math.min(itemsPerPage, products.length);
    return Array.from({ length: count }, (_, i) => products[(startIndex + i) % products.length]);
  }, [products, startIndex, itemsPerPage]);

  const paginate = (dir: 1 | -1) => {
    if (products.length === 0) return;

    setPage(([i]) => {
      const next = (i + dir * itemsPerPage) % products.length;
      const normalized = (next + products.length) % products.length;
      return [normalized, dir];
    });
  };

  const variants = {
    enter: (dir: 1 | -1) => ({ x: dir === 1 ? 120 : -120, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: 1 | -1) => ({ x: dir === 1 ? -120 : 120, opacity: 0 }),
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold mb-4">{title}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A few hand-picked favourites from our range.
          </p>
        </div>

        <div className="relative">
          {/* Left button */}
          <button
            type="button"
            onClick={() => paginate(-1)}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/80 backdrop-blur border p-2 hover:bg-background"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right button */}
          <button
            type="button"
            onClick={() => paginate(1)}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/80 backdrop-blur border p-2 hover:bg-background"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Viewport */}
          <div className="px-10 overflow-hidden">
            <AnimatePresence mode="wait" initial={false} custom={direction}>
              <motion.div
                key={`${startIndex}-${itemsPerPage}`}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="grid grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {visible.map((p) => (
                  <article
                    key={`${p.id}-${startIndex}`}
                    className="rounded-xl border bg-card overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div className="h-40 overflow-hidden">
                      <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-4 space-y-1">
                      <p className="text-xs text-muted-foreground">{p.category}</p>
                      <h3 className="font-semibold">{p.title}</h3>
                      <p className="text-sm text-muted-foreground">{p.description}</p>
                    </div>
                  </article>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
