import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&h=1080&fit=crop')`,
        }}
      />
      <div className="hero-overlay absolute inset-0" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl floating" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-foreground/10 rounded-full blur-3xl floating" style={{ animationDelay: "1.5s" }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-24 md:pt-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-white/90 text-sm font-medium fade-in-up">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            Trusted IT Solutions Provider Since 2000
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight fade-in-up" style={{ animationDelay: "0.1s" }}>
            Solusi Infrastruktur IT,
            <br />
            <span className="text-accent">Server, Internet & Network</span>
            <br />
            Terpercaya
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto fade-in-up" style={{ animationDelay: "0.2s" }}>
            PT Sekawan Global Komunika - Perusahaan IT Indonesia yang menghadirkan layanan jasa infrastruktur IT, Pengadaan Server/Part dan Networking, Data Center, dan Internet Service Provider untuk korporasi anda
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Button size="lg" className="w-full sm:w-auto group" asChild>
              <a href="https://wa.me/6281212951737?text=Hai%20Mentarisatria%20saya%20ingin%20konsultasi" target="_blank" rel="noopener noreferrer">
                Konsultasi Gratis
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 hover:text-white" asChild>
              <a href="tel:+6281212951737">
                <Phone className="mr-2 h-5 w-5" />
                Hubungi Kami
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pt-12 fade-in-up" style={{ animationDelay: "0.4s" }}>
            {[
              { value: "20+", label: "Tahun Pengalaman" },
              { value: "500+", label: "Klien Aktif" },
              { value: "1000+", label: "Project Selesai" },
              { value: "24/7", label: "Support" },
            ].map((stat) => (
              <div key={stat.label} className="text-center glass-card p-4 rounded-xl">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-1">{stat.value}</div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/60">
        <span className="text-sm">Scroll Down</span>
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
