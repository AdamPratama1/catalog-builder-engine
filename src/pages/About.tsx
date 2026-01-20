import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/home/CTASection";
import { CheckCircle, Award, Users, Target, Building, Clock } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Visi",
      description: "Menjadi perusahaan IT terdepan di Indonesia yang menghadirkan solusi teknologi terbaik untuk mendukung transformasi digital bisnis.",
    },
    {
      icon: Building,
      title: "Misi",
      description: "Menyediakan produk dan layanan IT berkualitas dengan harga kompetitif, didukung tim profesional dan dukungan purna jual terbaik.",
    },
    {
      icon: Award,
      title: "Nilai",
      description: "Integritas, profesionalisme, dan komitmen terhadap kepuasan pelanggan menjadi landasan dalam setiap layanan kami.",
    },
  ];

  const milestones = [
    { year: "2000", event: "Didirikan sebagai PT Sekawan Global Komunika" },
    { year: "2005", event: "Menjadi reseller resmi produk server HP Enterprise" },
    { year: "2010", event: "Ekspansi layanan Internet Service Provider" },
    { year: "2015", event: "Mendapatkan sertifikasi ISO 9001:2015" },
    { year: "2020", event: "Melayani lebih dari 500 klien enterprise" },
    { year: "2024", event: "Mengembangkan layanan Cloud dan Managed Services" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Tentang Kami</span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Partner Terpercaya untuk <span className="gradient-text">Solusi IT Enterprise</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Lebih dari dua dekade pengalaman melayani berbagai sektor industri dengan solusi infrastruktur IT yang andal dan profesional.
              </p>
            </div>
          </div>
        </section>

        {/* About Content */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground">
                  PT Sekawan Global Komunika
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  PT Sekawan Global Komunika adalah perusahaan IT Indonesia terkemuka yang bergerak di bidang Internet Service Provider, Project Infrastruktur IT dengan pengalaman lebih dari dua dekade melayani berbagai sektor industri.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Kami mengkhususkan diri dalam penyediaan solusi jasa infrastruktur IT lengkap meliputi Server, Network, Router, Data Center, Pengadaan Perangkat IT, Managed Service, serta layanan Internet Service Provider (ISP) untuk perusahaan, instansi pemerintah, institusi pendidikan, dan korporasi lokal maupun nasional.
                </p>
                <ul className="space-y-3">
                  {[
                    "Vendor resmi berbagai brand IT terkemuka",
                    "Layanan purna jual dan maintenance berkala",
                    "Tim engineer bersertifikasi internasional",
                    "Dukungan teknis 24/7",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop"
                  alt="Mentarisatria Office"
                  className="rounded-2xl shadow-lg"
                />
                <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Clock className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary">20+</div>
                      <div className="text-sm text-muted-foreground">Tahun Pengalaman</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision, Mission, Values */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value) => (
                <div key={value.title} className="category-card text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground">Perjalanan Kami</h2>
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={milestone.year} className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                        {milestone.year}
                      </div>
                      {index < milestones.length - 1 && <div className="w-0.5 h-full bg-border flex-1 mt-2" />}
                    </div>
                    <div className="flex-1 pb-8">
                      <p className="text-foreground font-medium">{milestone.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "500+", label: "Klien Aktif" },
                { value: "1000+", label: "Project Selesai" },
                { value: "50+", label: "Tim Profesional" },
                { value: "24/7", label: "Support" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
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

export default About;
