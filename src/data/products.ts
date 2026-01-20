export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  specs: string[];
  brand: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  productCount: number;
}

export const categories: Category[] = [
  {
    id: "1",
    name: "Server, Storage & Parts",
    slug: "server-storage-parts",
    description: "Enterprise server, storage solutions dan spare parts berkualitas tinggi",
    icon: "Server",
    productCount: 8
  },
  {
    id: "2",
    name: "Network, Router, Firewall, Access Point",
    slug: "network-router-firewall",
    description: "Perangkat jaringan enterprise untuk konektivitas optimal",
    icon: "Network",
    productCount: 8
  },
  {
    id: "3",
    name: "PC, Laptop, MiniPC",
    slug: "pc-laptop-minipc",
    description: "Komputer dan laptop untuk produktivitas bisnis",
    icon: "Laptop",
    productCount: 8
  },
  {
    id: "4",
    name: "Printer, Projector & Scanner",
    slug: "printer-projector-scanner",
    description: "Solusi cetak, presentasi dan digitalisasi dokumen",
    icon: "Printer",
    productCount: 8
  },
  {
    id: "5",
    name: "Accessories",
    slug: "accessories",
    description: "Aksesoris IT pendukung produktivitas kerja",
    icon: "Mouse",
    productCount: 8
  },
  {
    id: "6",
    name: "Hosting, Domain, SSL, Cloud",
    slug: "hosting-domain-ssl-cloud",
    description: "Layanan hosting, domain dan cloud infrastructure",
    icon: "Cloud",
    productCount: 8
  },
  {
    id: "7",
    name: "Internet, Local Loop, Metro, FTTH",
    slug: "internet-local-loop-metro",
    description: "Layanan konektivitas internet dedicated dan broadband",
    icon: "Wifi",
    productCount: 8
  },
  {
    id: "8",
    name: "Digital Signage, Videotron, Display, Tablet",
    slug: "digital-signage-videotron",
    description: "Solusi display digital dan multimedia advertising",
    icon: "Monitor",
    productCount: 8
  }
];

export const products: Product[] = [
  // Server, Storage & Parts
  {
    id: "srv-001",
    name: "HPE ProLiant DL380 Gen10 Plus",
    description: "Server rack 2U dengan performa tinggi untuk enterprise workload",
    price: "Rp 85.000.000",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
    category: "server-storage-parts",
    specs: ["Intel Xeon Silver 4314 2.4GHz", "32GB DDR4 RAM", "1.2TB SAS HDD", "800W PSU"],
    brand: "HPE"
  },
  {
    id: "srv-002",
    name: "Dell PowerEdge R750",
    description: "Server 2U rack yang powerful untuk virtualisasi dan database",
    price: "Rp 92.000.000",
    image: "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=400&h=300&fit=crop",
    category: "server-storage-parts",
    specs: ["Intel Xeon Gold 5318Y", "64GB DDR4 ECC", "2x 480GB SSD", "Dual PSU 800W"],
    brand: "Dell"
  },
  {
    id: "srv-003",
    name: "Synology RackStation RS1221+",
    description: "NAS rack 8-bay untuk enterprise storage dan backup",
    price: "Rp 28.500.000",
    image: "https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?w=400&h=300&fit=crop",
    category: "server-storage-parts",
    specs: ["AMD Ryzen V1500B", "4GB DDR4 ECC", "8x 3.5\" SATA Bay", "4x 1GbE LAN"],
    brand: "Synology"
  },
  {
    id: "srv-004",
    name: "QNAP TS-h886-D1622",
    description: "NAS Enterprise dengan ZFS untuk data integrity maksimal",
    price: "Rp 42.000.000",
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=400&h=300&fit=crop",
    category: "server-storage-parts",
    specs: ["Intel Xeon D-1622", "8GB DDR4 ECC", "8x Bay HDD/SSD", "2x 10GbE + 4x 2.5GbE"],
    brand: "QNAP"
  },
  {
    id: "srv-005",
    name: "Lenovo ThinkSystem SR650 V2",
    description: "Server 2U rack serbaguna untuk berbagai workload",
    price: "Rp 78.000.000",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
    category: "server-storage-parts",
    specs: ["Intel Xeon Silver 4310", "32GB DDR4", "960GB NVMe SSD", "750W PSU"],
    brand: "Lenovo"
  },
  {
    id: "srv-006",
    name: "HPE MSA 2060 SAN Storage",
    description: "Storage area network entry-level untuk SMB",
    price: "Rp 125.000.000",
    image: "https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?w=400&h=300&fit=crop",
    category: "server-storage-parts",
    specs: ["Dual Controller", "12x 3.5\" LFF Bay", "16Gb FC / 10GbE iSCSI", "SAS 12Gbps"],
    brand: "HPE"
  },
  {
    id: "srv-007",
    name: "Intel Xeon Gold 6348 Processor",
    description: "Prosesor server 28-core untuk performa maksimal",
    price: "Rp 45.000.000",
    image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&h=300&fit=crop",
    category: "server-storage-parts",
    specs: ["28 Cores / 56 Threads", "2.6GHz Base / 3.5GHz Turbo", "42MB Cache", "235W TDP"],
    brand: "Intel"
  },
  {
    id: "srv-008",
    name: "Samsung PM1733 3.84TB NVMe SSD",
    description: "SSD Enterprise U.2 NVMe untuk performa tinggi",
    price: "Rp 18.500.000",
    image: "https://images.unsplash.com/photo-1597138804456-e7dca7f59d54?w=400&h=300&fit=crop",
    category: "server-storage-parts",
    specs: ["3.84TB Capacity", "PCIe Gen4 x4", "6,400MB/s Read", "1 DWPD Endurance"],
    brand: "Samsung"
  },

  // Network, Router, Firewall, Access Point
  {
    id: "net-001",
    name: "Cisco Catalyst 9300-48P",
    description: "Enterprise switch 48-port PoE+ dengan DNA software",
    price: "Rp 65.000.000",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=300&fit=crop",
    category: "network-router-firewall",
    specs: ["48x 1GbE PoE+", "4x 10G Uplink", "UADP 2.0 ASIC", "Stackable"],
    brand: "Cisco"
  },
  {
    id: "net-002",
    name: "Fortinet FortiGate 100F",
    description: "Next-Gen Firewall dengan throughput tinggi",
    price: "Rp 48.000.000",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
    category: "network-router-firewall",
    specs: ["20 Gbps Firewall", "1 Gbps NGFW", "18x GE RJ45", "FortiGuard Services"],
    brand: "Fortinet"
  },
  {
    id: "net-003",
    name: "MikroTik CCR2004-16G-2S+",
    description: "Cloud Core Router dengan performa tinggi",
    price: "Rp 12.500.000",
    image: "https://images.unsplash.com/photo-1606765962248-7ff407b51667?w=400&h=300&fit=crop",
    category: "network-router-firewall",
    specs: ["AL73400 4-Core", "4GB DDR4", "16x 1GbE + 2x 10G SFP+", "RouterOS v7"],
    brand: "MikroTik"
  },
  {
    id: "net-004",
    name: "Ubiquiti UniFi U6 Enterprise",
    description: "WiFi 6E Access Point untuk high-density deployment",
    price: "Rp 8.500.000",
    image: "https://images.unsplash.com/photo-1606765962248-7ff407b51667?w=400&h=300&fit=crop",
    category: "network-router-firewall",
    specs: ["WiFi 6E (6 GHz)", "4x4 MU-MIMO", "2.5GbE PoE+", "300+ Client Capacity"],
    brand: "Ubiquiti"
  },
  {
    id: "net-005",
    name: "Aruba CX 6300M-48G",
    description: "Enterprise switch dengan modular uplink",
    price: "Rp 55.000.000",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=300&fit=crop",
    category: "network-router-firewall",
    specs: ["48x 1GbE", "4x SFP56 Slot", "VSX/VSF Capable", "ArubaOS-CX"],
    brand: "Aruba"
  },
  {
    id: "net-006",
    name: "Palo Alto PA-440",
    description: "Next-Gen Firewall untuk branch office",
    price: "Rp 35.000.000",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
    category: "network-router-firewall",
    specs: ["2.5 Gbps Firewall", "1.5 Gbps Threat Prevention", "8x 1GbE", "PAN-OS 10"],
    brand: "Palo Alto"
  },
  {
    id: "net-007",
    name: "Ruckus R750 Access Point",
    description: "WiFi 6 AP dengan BeamFlex+ technology",
    price: "Rp 9.200.000",
    image: "https://images.unsplash.com/photo-1606765962248-7ff407b51667?w=400&h=300&fit=crop",
    category: "network-router-firewall",
    specs: ["WiFi 6 (802.11ax)", "8x8:8 Streams", "2.5GbE + 1GbE", "512 Client Capacity"],
    brand: "Ruckus"
  },
  {
    id: "net-008",
    name: "Juniper EX3400-48P",
    description: "Enterprise access switch dengan advanced features",
    price: "Rp 42.000.000",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=300&fit=crop",
    category: "network-router-firewall",
    specs: ["48x 1GbE PoE+", "4x 10G SFP+", "2x 40G QSFP+", "Virtual Chassis"],
    brand: "Juniper"
  },

  // PC, Laptop, MiniPC
  {
    id: "pc-001",
    name: "Dell OptiPlex 7090 Tower",
    description: "Desktop bisnis dengan performa dan keamanan enterprise",
    price: "Rp 18.500.000",
    image: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=400&h=300&fit=crop",
    category: "pc-laptop-minipc",
    specs: ["Intel Core i7-11700", "16GB DDR4", "512GB NVMe SSD", "Intel UHD 750"],
    brand: "Dell"
  },
  {
    id: "pc-002",
    name: "Lenovo ThinkPad X1 Carbon Gen 10",
    description: "Ultrabook premium untuk profesional mobile",
    price: "Rp 32.000.000",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop",
    category: "pc-laptop-minipc",
    specs: ["Intel Core i7-1260P", "16GB LPDDR5", "512GB SSD", "14\" 2.8K OLED"],
    brand: "Lenovo"
  },
  {
    id: "pc-003",
    name: "HP EliteDesk 800 G8 Mini",
    description: "Mini PC powerful untuk ruang kerja modern",
    price: "Rp 14.500.000",
    image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=400&h=300&fit=crop",
    category: "pc-laptop-minipc",
    specs: ["Intel Core i5-11500T", "8GB DDR4", "256GB NVMe", "WiFi 6 + BT5"],
    brand: "HP"
  },
  {
    id: "pc-004",
    name: "ASUS ExpertBook B9 OLED",
    description: "Laptop bisnis ultra-ringan dengan layar OLED",
    price: "Rp 28.000.000",
    image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400&h=300&fit=crop",
    category: "pc-laptop-minipc",
    specs: ["Intel Core i7-1255U", "16GB LPDDR5", "512GB PCIe SSD", "14\" OLED FHD"],
    brand: "ASUS"
  },
  {
    id: "pc-005",
    name: "Intel NUC 12 Pro",
    description: "Mini PC kompak dengan performa desktop",
    price: "Rp 12.000.000",
    image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=400&h=300&fit=crop",
    category: "pc-laptop-minipc",
    specs: ["Intel Core i7-1260P", "Barebone (RAM/SSD separate)", "2x Thunderbolt 4", "WiFi 6E"],
    brand: "Intel"
  },
  {
    id: "pc-006",
    name: "Lenovo ThinkCentre M920q Tiny",
    description: "Desktop ultra-compact untuk produktivitas bisnis",
    price: "Rp 11.500.000",
    image: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=400&h=300&fit=crop",
    category: "pc-laptop-minipc",
    specs: ["Intel Core i5-9500T", "8GB DDR4", "256GB SSD", "Intel UHD 630"],
    brand: "Lenovo"
  },
  {
    id: "pc-007",
    name: "Dell Latitude 5540",
    description: "Laptop bisnis 15\" dengan performa reliable",
    price: "Rp 19.500.000",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop",
    category: "pc-laptop-minipc",
    specs: ["Intel Core i5-1345U", "16GB DDR4", "512GB SSD", "15.6\" FHD IPS"],
    brand: "Dell"
  },
  {
    id: "pc-008",
    name: "HP ProDesk 400 G9 SFF",
    description: "Desktop Small Form Factor untuk office modern",
    price: "Rp 13.500.000",
    image: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=400&h=300&fit=crop",
    category: "pc-laptop-minipc",
    specs: ["Intel Core i5-12500", "8GB DDR4", "512GB NVMe", "Intel UHD 770"],
    brand: "HP"
  },

  // Printer, Projector & Scanner
  {
    id: "prt-001",
    name: "HP LaserJet Enterprise M611dn",
    description: "Printer mono laser enterprise dengan kecepatan tinggi",
    price: "Rp 18.500.000",
    image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=400&h=300&fit=crop",
    category: "printer-projector-scanner",
    specs: ["65 ppm Mono", "Duplex Print", "1200x1200 dpi", "550-Sheet Tray"],
    brand: "HP"
  },
  {
    id: "prt-002",
    name: "Epson EB-L630SU Projector",
    description: "Projector laser WUXGA untuk ruang meeting besar",
    price: "Rp 42.000.000",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=300&fit=crop",
    category: "printer-projector-scanner",
    specs: ["6000 Lumens", "WUXGA (1920x1200)", "2,500,000:1 Contrast", "Laser Light Source"],
    brand: "Epson"
  },
  {
    id: "prt-003",
    name: "Fujitsu fi-7160 Scanner",
    description: "Document scanner untuk high-volume scanning",
    price: "Rp 12.500.000",
    image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=400&h=300&fit=crop",
    category: "printer-projector-scanner",
    specs: ["60 ppm / 120 ipm", "80-Sheet ADF", "600 dpi", "USB 3.0"],
    brand: "Fujitsu"
  },
  {
    id: "prt-004",
    name: "Canon imageCLASS MF746Cx",
    description: "MFP laser warna untuk workgroup printing",
    price: "Rp 14.800.000",
    image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=400&h=300&fit=crop",
    category: "printer-projector-scanner",
    specs: ["27 ppm Color/Mono", "Print/Scan/Copy/Fax", "WiFi + Ethernet", "5\" Touch LCD"],
    brand: "Canon"
  },
  {
    id: "prt-005",
    name: "BenQ LU960ST Projector",
    description: "Projector short-throw untuk installation profesional",
    price: "Rp 65.000.000",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=300&fit=crop",
    category: "printer-projector-scanner",
    specs: ["5500 Lumens", "WUXGA Short Throw", "BlueCore Laser", "HDBaseT Input"],
    brand: "BenQ"
  },
  {
    id: "prt-006",
    name: "Brother MFC-L8900CDW",
    description: "MFP laser warna dengan NFC dan cloud printing",
    price: "Rp 12.000.000",
    image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=400&h=300&fit=crop",
    category: "printer-projector-scanner",
    specs: ["31 ppm Color/Mono", "Duplex Print/Scan", "250-Sheet Tray", "NFC Card Reader"],
    brand: "Brother"
  },
  {
    id: "prt-007",
    name: "Epson WorkForce DS-870",
    description: "Sheet-fed scanner untuk dokumentasi office",
    price: "Rp 8.500.000",
    image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=400&h=300&fit=crop",
    category: "printer-projector-scanner",
    specs: ["65 ppm / 130 ipm", "100-Sheet ADF", "600 dpi", "Ultrasonic Sensor"],
    brand: "Epson"
  },
  {
    id: "prt-008",
    name: "ViewSonic LS831WU Projector",
    description: "Ultra Short Throw projector untuk meeting room",
    price: "Rp 55.000.000",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=300&fit=crop",
    category: "printer-projector-scanner",
    specs: ["4500 Lumens", "WUXGA UST", "Laser Phosphor", "100\" at 12cm"],
    brand: "ViewSonic"
  },

  // Accessories
  {
    id: "acc-001",
    name: "Logitech MX Master 3S",
    description: "Mouse wireless premium untuk produktivitas maksimal",
    price: "Rp 1.850.000",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop",
    category: "accessories",
    specs: ["8K DPI Sensor", "Quiet Clicks", "USB-C Charging", "Multi-Device"],
    brand: "Logitech"
  },
  {
    id: "acc-002",
    name: "Dell UltraSharp U2722D Monitor",
    description: "Monitor 27\" 4K untuk profesional kreatif",
    price: "Rp 9.500.000",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=300&fit=crop",
    category: "accessories",
    specs: ["27\" 4K UHD", "USB-C 90W PD", "100% sRGB", "IPS Black Panel"],
    brand: "Dell"
  },
  {
    id: "acc-003",
    name: "Logitech MX Keys S Keyboard",
    description: "Keyboard wireless untuk typing profesional",
    price: "Rp 1.650.000",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=300&fit=crop",
    category: "accessories",
    specs: ["Backlit Keys", "Smart Illumination", "USB-C Charging", "Multi-Device"],
    brand: "Logitech"
  },
  {
    id: "acc-004",
    name: "Poly Studio P15 Video Bar",
    description: "All-in-one video conferencing untuk personal workspace",
    price: "Rp 8.500.000",
    image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=400&h=300&fit=crop",
    category: "accessories",
    specs: ["4K Camera", "NoiseBlock AI", "Acoustic Fence", "USB-C Connection"],
    brand: "Poly"
  },
  {
    id: "acc-005",
    name: "Samsung T7 Shield 2TB SSD",
    description: "Portable SSD tahan banting untuk mobile professional",
    price: "Rp 3.200.000",
    image: "https://images.unsplash.com/photo-1597138804456-e7dca7f59d54?w=400&h=300&fit=crop",
    category: "accessories",
    specs: ["2TB Capacity", "1050MB/s Transfer", "IP65 Rated", "USB 3.2 Gen2"],
    brand: "Samsung"
  },
  {
    id: "acc-006",
    name: "APC Back-UPS Pro 1500VA",
    description: "UPS dengan AVR untuk proteksi perangkat IT",
    price: "Rp 4.500.000",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
    category: "accessories",
    specs: ["1500VA / 865W", "AVR + Surge Protection", "LCD Display", "USB + Serial"],
    brand: "APC"
  },
  {
    id: "acc-007",
    name: "LG 34WP85C-B UltraWide Monitor",
    description: "Monitor ultrawide curved untuk multitasking",
    price: "Rp 12.500.000",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=300&fit=crop",
    category: "accessories",
    specs: ["34\" WQHD Curved", "USB-C 90W", "HDR10", "sRGB 99%"],
    brand: "LG"
  },
  {
    id: "acc-008",
    name: "Jabra Evolve2 85 Headset",
    description: "Headset wireless ANC untuk remote working",
    price: "Rp 6.800.000",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
    category: "accessories",
    specs: ["Active Noise Cancelling", "40mm Speakers", "37hr Battery", "MS Teams Certified"],
    brand: "Jabra"
  },

  // Hosting, Domain, SSL, Cloud
  {
    id: "hst-001",
    name: "Cloud VPS Standard",
    description: "Virtual Private Server dengan SSD NVMe untuk aplikasi bisnis",
    price: "Rp 500.000/bulan",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
    category: "hosting-domain-ssl-cloud",
    specs: ["4 vCPU Core", "8GB RAM", "160GB NVMe SSD", "Unlimited Bandwidth"],
    brand: "Mentari Cloud"
  },
  {
    id: "hst-002",
    name: "Domain .co.id Registration",
    description: "Registrasi domain .co.id untuk identitas bisnis Indonesia",
    price: "Rp 350.000/tahun",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
    category: "hosting-domain-ssl-cloud",
    specs: ["1 Tahun Registration", "DNS Management", "Domain Privacy", "Email Forwarding"],
    brand: "Mentari Domain"
  },
  {
    id: "hst-003",
    name: "SSL Certificate Wildcard",
    description: "SSL Wildcard untuk unlimited subdomain protection",
    price: "Rp 2.500.000/tahun",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=400&h=300&fit=crop",
    category: "hosting-domain-ssl-cloud",
    specs: ["Wildcard Coverage", "256-bit Encryption", "Unlimited Subdomains", "99.9% Browser Support"],
    brand: "DigiCert"
  },
  {
    id: "hst-004",
    name: "Dedicated Server Enterprise",
    description: "Server dedicated untuk enterprise workload",
    price: "Rp 8.500.000/bulan",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
    category: "hosting-domain-ssl-cloud",
    specs: ["Intel Xeon E-2288G", "64GB DDR4 ECC", "2x 1TB NVMe SSD", "10Gbps Network"],
    brand: "Mentari Dedicated"
  },
  {
    id: "hst-005",
    name: "Cloud Backup Solution",
    description: "Backup otomatis ke cloud dengan enkripsi end-to-end",
    price: "Rp 750.000/bulan",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
    category: "hosting-domain-ssl-cloud",
    specs: ["1TB Storage", "Daily Backup", "30-Day Retention", "AES-256 Encryption"],
    brand: "Mentari Backup"
  },
  {
    id: "hst-006",
    name: "Email Hosting Business",
    description: "Email profesional dengan domain sendiri",
    price: "Rp 150.000/user/bulan",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
    category: "hosting-domain-ssl-cloud",
    specs: ["50GB Mailbox", "Custom Domain", "Antispam + Antivirus", "Mobile Sync"],
    brand: "Mentari Mail"
  },
  {
    id: "hst-007",
    name: "Private Cloud Infrastructure",
    description: "Cloud infrastructure private untuk enterprise",
    price: "Rp 25.000.000/bulan",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
    category: "hosting-domain-ssl-cloud",
    specs: ["Dedicated Resources", "VMware vSphere", "24/7 Managed", "99.99% SLA"],
    brand: "Mentari Private Cloud"
  },
  {
    id: "hst-008",
    name: "Web Hosting Premium",
    description: "Shared hosting dengan performa tinggi untuk website bisnis",
    price: "Rp 250.000/bulan",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
    category: "hosting-domain-ssl-cloud",
    specs: ["Unlimited Storage", "Unlimited Bandwidth", "Free SSL", "cPanel Control"],
    brand: "Mentari Hosting"
  },

  // Internet, Local Loop, Metro, FTTH
  {
    id: "int-001",
    name: "Dedicated Internet 100 Mbps",
    description: "Internet dedicated simetris dengan ratio 1:1",
    price: "Rp 12.500.000/bulan",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
    category: "internet-local-loop-metro",
    specs: ["100 Mbps Symmetric", "1:1 Ratio", "99.5% SLA", "24/7 Support"],
    brand: "Mentari Internet"
  },
  {
    id: "int-002",
    name: "Metro Ethernet 1 Gbps",
    description: "Koneksi Metro Ethernet point-to-point",
    price: "Rp 35.000.000/bulan",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=300&fit=crop",
    category: "internet-local-loop-metro",
    specs: ["1 Gbps Point-to-Point", "Fiber Optic", "Low Latency", "Private Network"],
    brand: "Mentari Metro"
  },
  {
    id: "int-003",
    name: "FTTH Business 500 Mbps",
    description: "Fiber to the Home untuk bisnis dengan kecepatan tinggi",
    price: "Rp 2.500.000/bulan",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
    category: "internet-local-loop-metro",
    specs: ["500 Mbps Download", "100 Mbps Upload", "Static IP", "Unlimited Quota"],
    brand: "Mentari Fiber"
  },
  {
    id: "int-004",
    name: "Local Loop E1/E3",
    description: "Leased line untuk koneksi antar lokasi",
    price: "Rp 8.000.000/bulan",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=300&fit=crop",
    category: "internet-local-loop-metro",
    specs: ["2Mbps E1 / 34Mbps E3", "Point-to-Point", "SLA 99.9%", "Copper/Fiber"],
    brand: "Mentari Leased Line"
  },
  {
    id: "int-005",
    name: "Internet Broadband Office 200 Mbps",
    description: "Internet bisnis dengan harga terjangkau",
    price: "Rp 1.500.000/bulan",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
    category: "internet-local-loop-metro",
    specs: ["200 Mbps Download", "50 Mbps Upload", "Dynamic IP", "Fair Usage Policy"],
    brand: "Mentari Broadband"
  },
  {
    id: "int-006",
    name: "MPLS VPN Service",
    description: "Virtual Private Network untuk interkoneksi multi-site",
    price: "Rp 15.000.000/bulan",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=300&fit=crop",
    category: "internet-local-loop-metro",
    specs: ["Multi-Site VPN", "QoS Guaranteed", "Managed Router", "Nationwide Coverage"],
    brand: "Mentari MPLS"
  },
  {
    id: "int-007",
    name: "SD-WAN Solution",
    description: "Software-Defined WAN untuk optimasi multi-link",
    price: "Rp 5.000.000/bulan",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
    category: "internet-local-loop-metro",
    specs: ["Multi-Link Aggregation", "Automatic Failover", "Cloud Optimization", "Centralized Management"],
    brand: "Mentari SD-WAN"
  },
  {
    id: "int-008",
    name: "Dedicated Internet 1 Gbps",
    description: "Internet dedicated gigabit untuk enterprise",
    price: "Rp 85.000.000/bulan",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
    category: "internet-local-loop-metro",
    specs: ["1 Gbps Symmetric", "1:1 Ratio", "99.9% SLA", "Multiple IP Block"],
    brand: "Mentari Internet"
  },

  // Digital Signage, Videotron, Display, Tablet
  {
    id: "dsp-001",
    name: "Samsung Smart Signage 55\"",
    description: "Display digital signage untuk retail dan corporate",
    price: "Rp 18.500.000",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=300&fit=crop",
    category: "digital-signage-videotron",
    specs: ["55\" 4K UHD", "500 nits Brightness", "24/7 Operation", "Built-in SoC"],
    brand: "Samsung"
  },
  {
    id: "dsp-002",
    name: "LG LED Videotron P2.5",
    description: "Videotron indoor LED dengan pitch 2.5mm",
    price: "Rp 85.000.000/m²",
    image: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?w=400&h=300&fit=crop",
    category: "digital-signage-videotron",
    specs: ["P2.5 Pixel Pitch", "1000 nits Brightness", "16:9 Cabinet", "Front Maintenance"],
    brand: "LG"
  },
  {
    id: "dsp-003",
    name: "iPad Pro 12.9\" 256GB",
    description: "Tablet premium untuk presentasi dan mobile working",
    price: "Rp 21.000.000",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop",
    category: "digital-signage-videotron",
    specs: ["12.9\" Liquid Retina XDR", "M2 Chip", "256GB Storage", "WiFi + Cellular"],
    brand: "Apple"
  },
  {
    id: "dsp-004",
    name: "Interactive Touch Display 75\"",
    description: "Display interaktif untuk meeting room dan classroom",
    price: "Rp 65.000.000",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=300&fit=crop",
    category: "digital-signage-videotron",
    specs: ["75\" 4K UHD", "20-Point Touch", "Built-in Android", "Wireless Screen Share"],
    brand: "ViewSonic"
  },
  {
    id: "dsp-005",
    name: "Outdoor LED Display P4",
    description: "LED display outdoor untuk advertising billboard",
    price: "Rp 45.000.000/m²",
    image: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?w=400&h=300&fit=crop",
    category: "digital-signage-videotron",
    specs: ["P4 Pixel Pitch", "5000 nits Brightness", "IP65 Waterproof", "High Refresh Rate"],
    brand: "Absen"
  },
  {
    id: "dsp-006",
    name: "Samsung Galaxy Tab S9+ Enterprise",
    description: "Tablet Android enterprise dengan Knox security",
    price: "Rp 16.500.000",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop",
    category: "digital-signage-videotron",
    specs: ["12.4\" AMOLED", "Snapdragon 8 Gen 2", "256GB Storage", "Knox Security"],
    brand: "Samsung"
  },
  {
    id: "dsp-007",
    name: "Video Wall Controller 4K",
    description: "Controller untuk video wall multi-display",
    price: "Rp 28.000.000",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
    category: "digital-signage-videotron",
    specs: ["4K60 Input/Output", "Up to 16 Displays", "HDMI/DP/USB-C", "Remote Management"],
    brand: "Datapath"
  },
  {
    id: "dsp-008",
    name: "Digital Poster 43\" Portrait",
    description: "Digital poster untuk retail dan hospitality",
    price: "Rp 12.500.000",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=300&fit=crop",
    category: "digital-signage-videotron",
    specs: ["43\" FHD Portrait", "400 nits", "18/7 Operation", "WiFi + USB Playback"],
    brand: "LG"
  }
];

export const getProductsByCategory = (categorySlug: string): Product[] => {
  return products.filter(product => product.category === categorySlug);
};

export const getProductById = (productId: string): Product | undefined => {
  return products.find(product => product.id === productId);
};

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find(category => category.slug === slug);
};
