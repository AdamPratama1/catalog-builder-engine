import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-foreground/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Siap Membangun Infrastruktur IT yang Andal?
          </h2>
          <p className="text-lg md:text-xl text-white/80">
            Konsultasikan kebutuhan IT perusahaan Anda dengan tim ahli kami. Dapatkan solusi terbaik dengan harga kompetitif.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="secondary" className="w-full sm:w-auto group" asChild>
              <a href="https://wa.me/6281212951737?text=Hai%20Mentarisatria%20saya%20ingin%20konsultasi" target="_blank" rel="noopener noreferrer">
                Konsultasi Gratis
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 hover:text-white" asChild>
              <a href="tel:+6281212951737">
                <Phone className="mr-2 h-5 w-5" />
                +62 812-1295-1737
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
