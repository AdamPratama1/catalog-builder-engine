import { Link, useParams } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/products/ProductCard";
import { categories, getProductsByCategory, getCategoryBySlug, products } from "@/data/products";
import { Server, Network, Laptop, Printer, Mouse, Cloud, Wifi, Monitor, ChevronRight } from "lucide-react";

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

const Products = () => {
  const { categorySlug } = useParams();
  const currentCategory = categorySlug ? getCategoryBySlug(categorySlug) : null;
  const displayProducts = categorySlug ? getProductsByCategory(categorySlug) : products;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 md:pt-32">
        {/* Breadcrumb */}
        <div className="bg-muted/50 border-b border-border">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex items-center gap-2 text-sm">
              <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
              <Link to="/products" className={`${!categorySlug ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"} transition-colors`}>
                Produk
              </Link>
              {currentCategory && (
                <>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  <span className="text-foreground font-medium">{currentCategory.name}</span>
                </>
              )}
            </nav>
          </div>
        </div>

        {/* Page Header */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                {currentCategory ? currentCategory.name : "Semua Produk"}
              </h1>
              <p className="text-lg text-muted-foreground">
                {currentCategory
                  ? currentCategory.description
                  : "Jelajahi berbagai produk IT berkualitas dari brand-brand ternama untuk kebutuhan infrastruktur IT perusahaan Anda"}
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar - Categories */}
            <aside className="lg:col-span-1">
              <div className="sticky top-28 space-y-4">
                <h2 className="font-semibold text-foreground mb-4">Kategori</h2>
                <nav className="space-y-1">
                  <Link
                    to="/products"
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      !categorySlug
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    <Server className="h-5 w-5" />
                    <span>Semua Produk</span>
                    <span className="ml-auto text-xs opacity-70">({products.length})</span>
                  </Link>
                  {categories.map((category) => {
                    const Icon = iconMap[category.icon] || Server;
                    return (
                      <Link
                        key={category.id}
                        to={`/products/${category.slug}`}
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                          categorySlug === category.slug
                            ? "bg-primary text-primary-foreground"
                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                        <span className="text-sm">{category.name}</span>
                        <span className="ml-auto text-xs opacity-70">({category.productCount})</span>
                      </Link>
                    );
                  })}
                </nav>
              </div>
            </aside>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-6">
                <p className="text-muted-foreground">
                  Menampilkan <span className="font-medium text-foreground">{displayProducts.length}</span> produk
                </p>
              </div>
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {displayProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
