import { CheckCircle, Users, Shield, Headphones } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Users,
      title: "Tim Berpengalaman",
      description: "Didukung oleh tim profesional dengan pengalaman puluhan tahun di industri IT",
    },
    {
      icon: Shield,
      title: "Solusi Scalable & Aman",
      description: "Infrastruktur yang dapat berkembang sesuai kebutuhan dengan standar keamanan enterprise",
    },
    {
      icon: Headphones,
      title: "SLA Profesional",
      description: "Komitmen Service Level Agreement untuk menjamin uptime dan kualitas layanan terbaik",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Tentang Kami</span>
              <h2 className="section-title">
                Partner Terpercaya untuk{" "}
                <span className="gradient-text">Solusi IT Enterprise</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                PT Sekawan Global Komunika adalah perusahaan IT Indonesia terkemuka yang bergerak di bidang Internet Service Provider, Project Infrastruktur IT dengan pengalaman lebih dari dua dekade melayani berbagai sektor industri.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Kami mengkhususkan diri dalam penyediaan solusi jasa infrastruktur IT lengkap meliputi Server, Network, Router, Data Center, Pengadaan Perangkat IT, Managed Service, serta layanan Internet Service Provider (ISP) untuk perusahaan, instansi pemerintah, institusi pendidikan, dan korporasi lokal maupun nasional.
              </p>
            </div>

            {/* Checklist */}
            <ul className="space-y-3">
              {[
                "Vendor resmi berbagai brand IT terkemuka",
                "Layanan purna jual dan maintenance berkala",
                "Konsultasi gratis untuk kebutuhan IT anda",
                "Harga kompetitif dengan kualitas terjamin",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-foreground">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="category-card flex items-start gap-5"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
