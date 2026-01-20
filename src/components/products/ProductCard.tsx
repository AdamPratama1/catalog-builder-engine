import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="product-card group">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
            {product.brand}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        <div>
          <h3 className="font-semibold text-foreground text-lg mb-1 line-clamp-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-2">{product.description}</p>
        </div>

        {/* Specs */}
        <ul className="space-y-1">
          {product.specs.slice(0, 2).map((spec, index) => (
            <li key={index} className="text-xs text-muted-foreground flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
              {spec}
            </li>
          ))}
        </ul>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-3 border-t border-border">
          <div>
            <span className="text-xs text-muted-foreground">Harga mulai</span>
            <p className="text-lg font-bold text-primary">{product.price}</p>
          </div>
          <Button size="sm" asChild>
            <a
              href={`https://wa.me/6281212951737?text=Hai%20Mentarisatria%20saya%20ingin%20bertanya%20tentang%20${encodeURIComponent(product.name)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Tanya Harga
              <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
