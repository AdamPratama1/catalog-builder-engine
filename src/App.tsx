import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/context/AuthContext";

// Halaman utama
import Index from "./pages/Index";
import Products from "./pages/Products";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Login from "./pages/login";
import NotFound from "./pages/NotFound";

// Setup React Query untuk state management
const queryClient = new QueryClient();

/**
 * Komponen utama aplikasi
 * Menyediakan:
 * - Query Client untuk data fetching
 * - Auth Provider untuk autentikasi
 * - Tooltip Provider untuk tooltip
 * - Toast dan Sonner untuk notifikasi
 * - Router untuk navigasi halaman
 */
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Halaman publik - bisa diakses tanpa login */}
            <Route path="/" element={<Index />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:categorySlug" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/tentang-kami" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/layanan" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/kontak" element={<Contact />} />
            
            {/* Halaman autentikasi */}
            <Route path="/login" element={<Login />} />
            
            {/* Halaman 404 - harus paling akhir */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;