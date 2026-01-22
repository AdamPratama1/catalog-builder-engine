import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, ArrowRight, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/context/AuthContext';

/**
 * Halaman Login
 * Form untuk autentikasi admin
 * Menampilkan branding di desktop dan form login di center
 */
const Login = () => {
  // State untuk form input
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = useNavigate();
  const { login } = useAuth();

  /**
   * Handle submit form login
   * Validasi username dan password
   * Redirect ke home jika berhasil, tampilkan error jika gagal
   */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulasi delay proses login
    await new Promise((resolve) => setTimeout(resolve, 500));

    if (login(username, password)) {
      // Login berhasil - redirect ke home
      navigate('/');
    } else {
      // Login gagal - tampilkan error dan reset password
      setError('Username atau password salah. Silakan coba lagi.');
      setPassword('');
    }
    setIsLoading(false);
  };

  // Data fitur yang ditampilkan di sisi kiri
  const features = [
    { icon: '🔒', text: 'Keamanan Tingkat Enterprise' },
    { icon: '⚡', text: 'Akses Cepat & Responsif' },
    { icon: '📱', text: 'Interface yang User-Friendly' },
  ];

  // Data statistik yang ditampilkan di sisi kiri
  const stats = [
    { value: '20+', label: 'Tahun' },
    { value: '500+', label: 'Klien' },
    { value: '24/7', label: 'Support' },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-secondary">
      {/* Elemen background animasi */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl floating" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl floating" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Container utama */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
          
          {/* SECTION KIRI - Branding (hanya di desktop) */}
          <div className="hidden lg:flex flex-col justify-center space-y-6 py-12">
            {/* Logo dan Nama Perusahaan */}
            <div className="space-y-4">
              <div className="inline-block">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-2xl">MS</span>
                </div>
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold">
                  <span className="text-primary">Mentari</span>
                  <span className="text-accent">satria</span>
                </h1>
                <p className="text-muted-foreground text-lg mt-2">Solusi IT Terpercaya</p>
              </div>
            </div>

            {/* Deskripsi Perusahaan */}
            <div className="space-y-4 pt-8 border-t border-border">
              <p className="text-foreground text-lg leading-relaxed">
                Akses panel admin untuk mengelola konten dan produk Anda. Sistem keamanan kami menjamin data Anda tetap aman.
              </p>

              {/* Daftar Fitur */}
              <div className="space-y-3 pt-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="text-2xl">{feature.icon}</span>
                    <span className="text-foreground font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Statistik Perusahaan */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-accent">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION KANAN - Form Login */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md">
              
              {/* Logo Mobile (hanya di mobile) */}
              <div className="lg:hidden mb-8">
                <div className="inline-block mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">MS</span>
                  </div>
                </div>
                <h1 className="text-3xl font-bold mb-2">
                  <span className="text-primary">Mentari</span>
                  <span className="text-accent">satria</span>
                </h1>
                <p className="text-muted-foreground">Masuk ke panel admin</p>
              </div>

              {/* Card Form Login */}
              <div className="bg-card/95 rounded-2xl shadow-elevated border border-border p-8 md:p-10 backdrop-blur-sm">
                <h2 className="text-2xl font-bold mb-2 text-foreground">Masuk ke Akun Anda</h2>
                <p className="text-muted-foreground mb-8">Masukkan kredensial admin untuk akses penuh</p>

                {/* Pesan Error */}
                {error && (
                  <div className="mb-6 p-4 rounded-lg bg-destructive/10 border border-destructive/30 flex items-start gap-3">
                    <AlertCircle className="text-destructive w-5 h-5 flex-shrink-0 mt-0.5" />
                    <p className="text-destructive text-sm">{error}</p>
                  </div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Input Username */}
                  <div className="space-y-2">
                    <label htmlFor="username" className="text-sm font-medium text-foreground">
                      Username
                    </label>
                    <Input
                      id="username"
                      type="text"
                      placeholder="username"
                      value={username}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setUsername(e.target.value);
                        setError('');
                      }}
                      className="h-11 rounded-lg border-border bg-background/50 text-foreground placeholder:text-muted-foreground"
                      disabled={isLoading}
                    />
                  </div>

                  {/* Input Password */}
                  <div className="space-y-2">
                    <label htmlFor="password" className="text-sm font-medium text-foreground">
                      Password
                    </label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="password"
                        value={password}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          setPassword(e.target.value);
                          setError('');
                        }}
                        className="h-11 rounded-lg border-border bg-background/50 text-foreground placeholder:text-muted-foreground pr-10"
                        disabled={isLoading}
                      />
                      {/* Tombol Toggle Show/Hide Password */}
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                        disabled={isLoading}
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>

                  {/* Tombol Submit */}
                  <Button
                    type="submit"
                    className="w-full h-11 rounded-lg font-medium text-base group mt-8"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                        Memproses...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-2">
                        Masuk
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    )}
                  </Button>
                </form>
              </div>

              {/* Footer */}
              <p className="text-center text-xs text-muted-foreground mt-6">
                © 2024 PT Sekawan Global Komunika. Semua hak dilindungi.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Style untuk animasi background */}
      <style>{`
        @keyframes floating {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(20px); }
        }
        .floating {
          animation: floating 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Login;