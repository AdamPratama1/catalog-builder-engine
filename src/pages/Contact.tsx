import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waMessage = `Hai Mentarisatria, saya ${formData.name} dari ${formData.company}.\n\n${formData.message}\n\nEmail: ${formData.email}\nTelepon: ${formData.phone}`;
    window.open(`https://wa.me/6281212951737?text=${encodeURIComponent(waMessage)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Hubungi Kami</span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Siap Membantu <span className="gradient-text">Kebutuhan IT Anda</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Konsultasikan kebutuhan infrastruktur IT perusahaan Anda dengan tim ahli kami. Kami siap memberikan solusi terbaik.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">Informasi Kontak</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Alamat Kantor</h3>
                        <p className="text-muted-foreground">
                          Jl. Raya Jakarta Selatan No. 123,<br />
                          Jakarta Selatan 12345, Indonesia
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Telepon</h3>
                        <a href="tel:+6281212951737" className="text-muted-foreground hover:text-primary transition-colors">
                          +62 812-1295-1737
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Email</h3>
                        <a href="mailto:info@mentarisatria.net.id" className="text-muted-foreground hover:text-primary transition-colors">
                          info@mentarisatria.net.id
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Jam Operasional</h3>
                        <p className="text-muted-foreground">
                          Senin - Jumat: 08:00 - 17:00 WIB<br />
                          Sabtu: 09:00 - 13:00 WIB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <div className="bg-primary rounded-2xl p-8 text-primary-foreground">
                  <div className="flex items-center gap-4 mb-4">
                    <MessageCircle className="h-10 w-10" />
                    <div>
                      <h3 className="text-xl font-semibold">Butuh Respon Cepat?</h3>
                      <p className="text-primary-foreground/80">Chat langsung via WhatsApp</p>
                    </div>
                  </div>
                  <Button variant="secondary" size="lg" className="w-full" asChild>
                    <a href="https://wa.me/6281212951737?text=Hai%20Mentarisatria%20saya%20ingin%20konsultasi" target="_blank" rel="noopener noreferrer">
                      Chat via WhatsApp
                    </a>
                  </Button>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-6">Kirim Pesan</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Nama Lengkap</label>
                      <Input
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Email</label>
                      <Input
                        type="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">No. Telepon</label>
                      <Input
                        placeholder="0812-xxxx-xxxx"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Perusahaan</label>
                      <Input
                        placeholder="PT Company Indonesia"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Pesan</label>
                    <Textarea
                      placeholder="Ceritakan kebutuhan IT perusahaan Anda..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    Kirim Pesan
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-muted rounded-2xl h-96 flex items-center justify-center">
              <p className="text-muted-foreground">Google Maps akan ditampilkan di sini</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
