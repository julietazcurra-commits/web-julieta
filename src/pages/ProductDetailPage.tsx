import { useParams, Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useProducts } from "../hooks/useProducts";
import { images } from "../lib/images";
import { Button } from "../components/ui/Button";
import "./ProductDetail.css";

export function ProductDetailPage() {
  const { t } = useTranslation();
  const { slug } = useParams<{ slug: string }>();
  const { getProductBySlug } = useProducts();

  const product = slug ? getProductBySlug(slug) : undefined;

  if (!product) {
    return (
      <section className="page-section">
        <div className="page-container">
          <p>Product not found.</p>
          <Button to="/products" variant="secondary">Back to Products</Button>
        </div>
      </section>
    );
  }

  const mainImage = images[product.imageId];

  return (
    <section className="page-section">
      <div className="page-container">
        <Link
          to="/products"
          style={{
            display: "inline-block",
            marginBottom: "var(--space-xl)",
            color: "var(--color-accent)",
            fontSize: "14px",
            fontWeight: 500
          }}
        >
          ← {t('nav.products')}
        </Link>

        <div className="product-detail-grid">
          <div className="product-detail-image-wrap">
            <img
              src={mainImage}
              alt={product.name}
            />
          </div>

          <div>
            <h1 className="product-detail-title">{product.name}</h1>
            <p className="product-detail-description">
              {product.description}
            </p>

            <div className="product-specs-section">
              <h3 className="product-specs-title">{t('products.specs.title')}</h3>
              <dl>
                {product.specs.map((spec) => (
                  <div key={spec.label} className="product-spec-item">
                    <dt className="product-spec-label">{spec.label}</dt>
                    <dd className="product-spec-value">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {product.galleryIds.length > 0 && (
          <div className="product-gallery-section">
            <h3 className="product-gallery-title">Gallery</h3>
            <div className="product-gallery-grid">
              {product.galleryIds.map((id, i) => (
                <div key={id} className="product-gallery-item">
                  <img
                    src={images[id]}
                    alt={`${product.name} gallery image ${i + 1}`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
