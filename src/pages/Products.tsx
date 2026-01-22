import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/products/ProductCard";
import RichTextEditor from "@/components/ui/RichTextEditor";
import DOMPurify from "dompurify";
import {
  categories,
  getCategoryBySlug,
  products as initialProducts,
} from "@/data/products";
import {
  Server,
  Network,
  Laptop,
  Printer,
  Mouse,
  Cloud,
  Wifi,
  Monitor,
  ChevronRight,
} from "lucide-react";
import { lsGet, lsSet } from "@/lib/utils";
import { isAdmin } from "@/lib/auth";

/* ================= ICON MAP ================= */

const iconMap: Record<string, any> = {
  Server,
  Network,
  Laptop,
  Printer,
  Mouse,
  Cloud,
  Wifi,
  Monitor,
};

/* ================= UTILS ================= */

const cleanHtml = (html: string) =>
  html
    ? html
        .replace(/<p><br><\/p>/gi, "")
        .replace(/<p><\/p>/gi, "")
        .replace(/&nbsp;/gi, "")
        .trim()
    : "";

/* ================= COMPONENT ================= */

const Products = () => {
  const { categorySlug } = useParams();
  const navigate = useNavigate();

  const [productList, setProductList] = useState<any[]>(() =>
    lsGet<any[]>("products.data", initialProducts) ?? initialProducts
  );

  const [editingProductId, setEditingProductId] = useState<number | null>(null);
  const [editedProduct, setEditedProduct] = useState<any>(null);

  const currentCategory = categorySlug
    ? getCategoryBySlug(categorySlug)
    : null;

  const displayProducts = categorySlug
    ? productList.filter((p) => p.category === categorySlug)
    : productList;

  /* ================= HANDLERS ================= */

  const handleEdit = (product: any) => {
    if (!isAdmin()) {
      navigate("/login");
      return;
    }
    setEditingProductId(product.id);
    setEditedProduct({ ...product });
  };

  const handleSave = () => {
    if (!isAdmin()) {
      navigate("/login");
      return;
    }

    const updatedProducts = productList.map((p) =>
      p.id === editingProductId
        ? {
            ...editedProduct,
            description: cleanHtml(editedProduct.description),
          }
        : p
    );

    setProductList(updatedProducts);
    lsSet("products.data", updatedProducts);
    setEditingProductId(null);
    setEditedProduct(null);
  };

  const handleCancel = () => {
    setEditingProductId(null);
    setEditedProduct(null);
  };

  const updateField = (field: string, value: any) =>
    setEditedProduct({ ...editedProduct, [field]: value });

  const updateSpec = (index: number, value: string) => {
    const specs = [...editedProduct.specs];
    specs[index] = value;
    setEditedProduct({ ...editedProduct, specs });
  };

  const removeSpec = (index: number) =>
    setEditedProduct({
      ...editedProduct,
      specs: editedProduct.specs.filter((_: string, i: number) => i !== index),
    });

  const addSpec = () =>
    setEditedProduct({
      ...editedProduct,
      specs: [...editedProduct.specs, ""],
    });

  /* ================= RENDER ================= */

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 md:pt-32">
        {/* ===== Breadcrumb ===== */}
        <div className="bg-muted/50 border-b border-border">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex items-center gap-2 text-sm">
              <Link
                to="/"
                className="text-muted-foreground hover:text-foreground"
              >
                Home
              </Link>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
              <Link
                to="/products"
                className={
                  !categorySlug
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }
              >
                Produk
              </Link>
              {currentCategory && (
                <>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  <span className="text-foreground font-medium">
                    {currentCategory.name}
                  </span>
                </>
              )}
            </nav>
          </div>
        </div>

        {/* ===== Header ===== */}
        <section className="py-12 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-3">
              {currentCategory ? currentCategory.name : "Semua Produk"}
            </h1>
            <p className="text-muted-foreground">
              {currentCategory
                ? currentCategory.description
                : "Jelajahi berbagai produk IT berkualitas"}
            </p>
          </div>
        </section>

        {/* ===== Content ===== */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-28">
                <h2 className="font-semibold mb-4">Kategori</h2>
                <nav className="space-y-1">
                  <Link
                    to="/products"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg bg-muted"
                  >
                    <Server className="h-5 w-5" /> Semua Produk
                  </Link>

                  {categories.map((cat) => {
                    const Icon = iconMap[cat.icon] || Server;
                    return (
                      <Link
                        key={cat.id}
                        to={`/products/${cat.slug}`}
                        className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted"
                      >
                        <Icon className="h-5 w-5" /> {cat.name}
                      </Link>
                    );
                  })}
                </nav>
              </div>
            </aside>

            {/* Products */}
            <div className="lg:col-span-3">
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {displayProducts.map((product) =>
                  editingProductId === product.id ? (
                    /* ===== EDIT MODE ===== */
                    <div
                      key={product.id}
                      className="border rounded-xl p-4 space-y-3 bg-muted"
                    >
                      {["name", "brand", "price", "image"].map((field) => (
                        <input
                          key={field}
                          value={editedProduct[field]}
                          onChange={(e) =>
                            updateField(field, e.target.value)
                          }
                          className="w-full border px-3 py-2 rounded"
                          placeholder={field}
                        />
                      ))}

                      <select
                        value={editedProduct.category}
                        onChange={(e) =>
                          updateField("category", e.target.value)
                        }
                        className="w-full border px-3 py-2 rounded"
                      >
                        {categories.map((cat) => (
                          <option key={cat.id} value={cat.slug}>
                            {cat.name}
                          </option>
                        ))}
                      </select>

                      {/* Specs */}
                      <div>
                        <p className="text-sm font-medium mb-1">
                          Spesifikasi
                        </p>
                        {editedProduct.specs.map(
                          (spec: string, i: number) => (
                            <div key={i} className="flex gap-2 mb-2">
                              <input
                                value={spec}
                                onChange={(e) =>
                                  updateSpec(i, e.target.value)
                                }
                                className="flex-1 border px-3 py-2 rounded"
                              />
                              <button
                                onClick={() => removeSpec(i)}
                                className="px-3 bg-red-500 text-white rounded"
                              >
                                Hapus
                              </button>
                            </div>
                          )
                        )}
                        <button
                          onClick={addSpec}
                          className="text-sm px-3 py-1 bg-green-500 text-white rounded"
                        >
                          Tambah Spesifikasi
                        </button>
                      </div>

                      <RichTextEditor
                        value={editedProduct.description || ""}
                        onChange={(v) =>
                          updateField("description", v)
                        }
                      />

                      <div className="flex gap-2">
                        <button
                          onClick={handleSave}
                          className="flex-1 bg-primary text-primary-foreground py-2 rounded"
                        >
                          Simpan
                        </button>
                        <button
                          onClick={handleCancel}
                          className="flex-1 bg-muted py-2 rounded"
                        >
                          Batal
                        </button>
                      </div>
                    </div>
                  ) : (
                    /* ===== VIEW MODE ===== */
                    <div key={product.id} className="relative">
                      <ProductCard
                        product={{
                          ...product,
                          description: DOMPurify.sanitize(
                            cleanHtml(product.description)
                          ),
                        }}
                      />

                      <button
                        onClick={() => handleEdit(product)}
                        className={`absolute top-3 right-3 px-3 py-1 rounded text-xs
                          ${
                            isAdmin()
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted text-muted-foreground"
                          }`}
                      >
                        {isAdmin() ? "Edit Produk" : "Login untuk Edit"}
                      </button>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Products;
