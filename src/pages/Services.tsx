import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/home/CTASection";
import { Server, Wifi, Shield, Cloud, Wrench, Headphones, Database, Monitor, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Server,
      title: "Pengadaan Server & Data Center",
      description: "Solusi server enterprise dan data center yang aman, scalable, dan terpercaya untuk kebutuhan bisnis Anda.",
      features: [
        "Server HPE, Dell, Lenovo",
        "Storage & SAN Solutions",
        "Rackmount & Blade Server",
        "Data Center Design & Build",
      ],
      link: "/products/server-storage-parts",
    },
    {
      icon: Wifi,
      title: "Network & Infrastructure",
      description: "Desain dan implementasi infrastruktur jaringan enterprise dengan perangkat berkualitas tinggi.",
      features: [
        "Enterprise Switch & Router",
        "WiFi & Access Point",
        "Structured Cabling",
        "Network Assessment",
      ],
      link: "/products/network-router-firewall",
    },
    {
      icon: Shield,
      title: "Security Solutions",
      description: "Proteksi keamanan siber dengan firewall, antivirus, dan solusi keamanan enterprise.",
      features: [
        "Next-Gen Firewall",
        "Endpoint Protection",
        "Security Assessment",
        "Penetration Testing",
      ],
      link: "/products/network-router-firewall",
    },
    {
      icon: Cloud,
      title: "Cloud & Hosting",
      description: "Layanan cloud, hosting, domain, dan SSL untuk kebutuhan digital presence bisnis Anda.",
      features: [
        "Cloud VPS & Dedicated",
        "Web Hosting Premium",
        "Domain & SSL",
        "Email Hosting",
      ],
      link: "/products/hosting-domain-ssl-cloud",
    },
    {
      icon: Database,
      title: "Internet Service Provider",
      description: "Layanan internet dedicated dan broadband untuk konektivitas bisnis yang andal.",
      features: [
        "Dedicated Internet",
        "Metro Ethernet",
        "FTTH Business",
        "SD-WAN & MPLS",
      ],
      link: "/products/internet-local-loop-metro",
    },
    {
      icon: Monitor,
      title: "Digital Signage & Display",
      description: "Solusi display digital dan multimedia untuk kebutuhan advertising dan presentasi.",
      features: [
        "LED Videotron Indoor/Outdoor",
        "Interactive Touch Display",
        "Digital Signage Solutions",
        "Video Wall Controller",
      ],
      link: "/products/digital-signage-videotron",
    },
    {
      icon: Wrench,
      title: "IT Managed Services",
      description: "Layanan pengelolaan IT harian, maintenance, dan monitoring sistem 24/7.",
      features: [
        "Outsourcing IT Staff",
        "Preventive Maintenance",
        "Remote Monitoring",
        "Backup & Recovery",
      ],
      link: "/contact",
    },
    {
      icon: Headphones,
      title: "IT Support & Consultation",
      description: "Tim support profesional siap membantu kebutuhan IT Anda dengan SLA terjamin.",
      features: [
        "Helpdesk Support 24/7",
        "IT Consultation",
        "System Integration",
        "Project Management",
      ],
      link: "/contact",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Layanan Kami</span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Layanan Infrastruktur IT <span className="gradient-text">Profesional</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Solusi lengkap jasa server dan network enterprise untuk mendukung transformasi digital bisnis Anda
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service) => (
                <div key={service.title} className="category-card">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <service.icon className="h-7 w-7 text-primary" />
                    </div>
                    <div className="flex-1 space-y-4">
                      <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                            <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button variant="outline" asChild>
                        <Link to={service.link}>Pelajari Lebih Lanjut</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Mengapa Memilih Kami?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Kami berkomitmen memberikan layanan terbaik dengan standar profesional untuk setiap klien
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Pengalaman 20+ Tahun", description: "Berpengalaman melayani berbagai industri" },
                { title: "Tim Bersertifikasi", description: "Engineer dengan sertifikasi internasional" },
                { title: "Vendor Resmi", description: "Partner resmi brand IT terkemuka" },
                { title: "Support 24/7", description: "Layanan dukungan teknis non-stop" },
              ].map((item) => (
                <div key={item.title} className="text-center p-6">
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
