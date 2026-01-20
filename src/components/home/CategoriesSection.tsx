import { Link } from "react-router-dom";
import { categories } from "@/data/products";
import { Server, Network, Laptop, Printer, Mouse, Cloud, Wifi, Monitor, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const iconMap: { [key: string]: any } = {
  Server,
  Network,
  Laptop,
  Printer,
  Mouse,
  Cloud,
  Wifi,
  Monitor,
};

const CategoriesSection = () => {
  return (
    <section id="categories" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Produk Kami</span>
          <h2 className="section-title">
            Kategori Produk{" "}
            <span className="gradient-text">IT Enterprise</span>
          </h2>
          <p className="section-subtitle">
            Kami menyediakan berbagai produk IT berkualitas dari brand-brand ternama untuk kebutuhan infrastruktur IT perusahaan Anda
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const Icon = iconMap[category.icon] || Server;
            return (
              <Link
                key={category.id}
                to={`/products/${category.slug}`}
                className="category-card group text-center"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {category.description}
                </p>
                <span className="inline-flex items-center text-sm font-medium text-primary group-hover:gap-2 transition-all">
                  Lihat Produk
                  <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link to="/products">
              Lihat Semua Produk
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
