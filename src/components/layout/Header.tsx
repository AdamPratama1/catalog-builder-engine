import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { categories } from "@/data/products";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Tentang Kami", path: "/about" },
    { name: "Layanan", path: "/services" },
    { name: "Produk", path: "/products", hasDropdown: true },
    { name: "Kontak", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+6281212951737" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone size={14} />
              <span>+62 812-1295-1737</span>
            </a>
            <a href="mailto:info@mentarisatria.net.id" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Mail size={14} />
              <span>info@mentarisatria.net.id</span>
            </a>
          </div>
          <div className="text-primary-foreground/80">
            Solusi IT Terpercaya Sejak 2000
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg md:text-xl">MS</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-xl md:text-2xl font-bold text-primary">Mentari</span>
              <span className="text-xl md:text-2xl font-bold text-accent">satria</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.hasDropdown ? (
                  <button
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1 ${
                      location.pathname.startsWith("/products")
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-muted"
                    }`}
                    onMouseEnter={() => setIsProductsOpen(true)}
                    onMouseLeave={() => setIsProductsOpen(false)}
                  >
                    {link.name}
                    <ChevronDown size={16} className={`transition-transform ${isProductsOpen ? "rotate-180" : ""}`} />
                  </button>
                ) : (
                  <Link
                    to={link.path}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive(link.path)
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    {link.name}
                  </Link>
                )}

                {/* Products Dropdown */}
                {link.hasDropdown && (
                  <div
                    className={`absolute top-full left-0 w-72 bg-card rounded-xl shadow-lg border border-border py-2 transition-all duration-200 ${
                      isProductsOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                    }`}
                    onMouseEnter={() => setIsProductsOpen(true)}
                    onMouseLeave={() => setIsProductsOpen(false)}
                  >
                    <Link
                      to="/products"
                      className="block px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors font-medium border-b border-border mb-2"
                    >
                      Semua Produk
                    </Link>
                    {categories.map((category) => (
                      <Link
                        key={category.id}
                        to={`/products/${category.slug}`}
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button asChild>
              <a href="https://wa.me/6281212951737?text=Hai%20Mentarisatria%20saya%20ingin%20konsultasi" target="_blank" rel="noopener noreferrer">
                Konsultasi Gratis
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-card border-t border-border">
          <div className="container mx-auto px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.hasDropdown ? (
                  <div className="space-y-2">
                    <button
                      className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-foreground hover:bg-muted transition-colors"
                      onClick={() => setIsProductsOpen(!isProductsOpen)}
                    >
                      {link.name}
                      <ChevronDown size={16} className={`transition-transform ${isProductsOpen ? "rotate-180" : ""}`} />
                    </button>
                    {isProductsOpen && (
                      <div className="pl-4 space-y-1">
                        <Link
                          to="/products"
                          className="block px-4 py-2 rounded-lg text-sm text-foreground hover:bg-muted transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Semua Produk
                        </Link>
                        {categories.map((category) => (
                          <Link
                            key={category.id}
                            to={`/products/${category.slug}`}
                            className="block px-4 py-2 rounded-lg text-sm text-muted-foreground hover:bg-muted transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {category.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className={`block px-4 py-3 rounded-lg transition-colors ${
                      isActive(link.path)
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-muted"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-border">
              <Button className="w-full" asChild>
                <a href="https://wa.me/6281212951737?text=Hai%20Mentarisatria%20saya%20ingin%20konsultasi" target="_blank" rel="noopener noreferrer">
                  Konsultasi Gratis
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
