const ClientsSection = () => {
  const clients = [
    "Bank Indonesia",
    "Telkom Indonesia",
    "Pertamina",
    "PLN",
    "Garuda Indonesia",
    "BCA",
    "Mandiri",
    "BNI",
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Dipercaya Oleh</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-2">
            Ratusan Perusahaan dan Instansi
          </h2>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {clients.map((client) => (
            <div
              key={client}
              className="bg-card rounded-xl p-6 md:p-8 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="text-lg md:text-xl font-semibold text-muted-foreground/60">{client}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
