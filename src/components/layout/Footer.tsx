import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { categories } from "@/data/products";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary-foreground flex items-center justify-center">
                <span className="text-primary font-bold text-xl">MS</span>
              </div>
              <div>
                <span className="text-2xl font-bold">Mentari</span>
                <span className="text-2xl font-bold text-accent">satria</span>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              PT Sekawan Global Komunika adalah perusahaan IT Indonesia terkemuka yang bergerak di bidang Internet Service Provider, Project Infrastruktur IT dengan pengalaman lebih dari dua dekade.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Tautan Cepat</h3>
            <ul className="space-y-3">
              {["Home", "Tentang Kami", "Layanan", "Produk", "Kontak"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Kategori Produk</h3>
            <ul className="space-y-3">
              {categories.slice(0, 6).map((category) => (
                <li key={category.id}>
                  <Link
                    to={`/products/${category.slug}`}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Hubungi Kami</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-accent" />
                <span className="text-primary-foreground/80 text-sm">
                  Jl. Raya Jakarta Selatan No. 123,<br />
                  Jakarta Selatan 12345, Indonesia
                </span>
              </li>
              <li>
                <a href="tel:+6281212951737" className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  <Phone size={18} className="flex-shrink-0 text-accent" />
                  <span className="text-sm">+62 812-1295-1737</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@mentarisatria.net.id" className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  <Mail size={18} className="flex-shrink-0 text-accent" />
                  <span className="text-sm">info@mentarisatria.net.id</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© 2024 Mentarisatria. All rights reserved. PT Sekawan Global Komunika</p>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="hover:text-primary-foreground transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-primary-foreground transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
