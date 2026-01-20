import { Server, Wifi, Shield, Cloud, Wrench, Headphones } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      icon: Server,
      title: "Pengadaan Server & Data Center",
      description: "Solusi server enterprise dan data center yang aman, scalable, dan terpercaya untuk kebutuhan bisnis Anda.",
      link: "/products/server-storage-parts",
    },
    {
      icon: Wifi,
      title: "Network & Infrastructure",
      description: "Desain dan implementasi infrastruktur jaringan enterprise dengan perangkat berkualitas tinggi.",
      link: "/products/network-router-firewall",
    },
    {
      icon: Shield,
      title: "Security Solutions",
      description: "Proteksi keamanan siber dengan firewall, antivirus, dan solusi keamanan enterprise.",
      link: "/products/network-router-firewall",
    },
    {
      icon: Cloud,
      title: "Cloud & Hosting",
      description: "Layanan cloud, hosting, domain, dan SSL untuk kebutuhan digital presence bisnis Anda.",
      link: "/products/hosting-domain-ssl-cloud",
    },
    {
      icon: Wrench,
      title: "IT Managed Services",
      description: "Layanan pengelolaan IT harian, maintenance, dan monitoring sistem 24/7.",
      link: "/services",
    },
    {
      icon: Headphones,
      title: "IT Support & Consultation",
      description: "Tim support profesional siap membantu kebutuhan IT Anda dengan SLA terjamin.",
      link: "/contact",
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Layanan Kami</span>
          <h2 className="section-title">
            Layanan Infrastruktur IT{" "}
            <span className="gradient-text">Profesional</span>
          </h2>
          <p className="section-subtitle">
            Solusi lengkap jasa server dan network enterprise untuk mendukung transformasi digital bisnis Anda
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to={service.link}
              className="category-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
