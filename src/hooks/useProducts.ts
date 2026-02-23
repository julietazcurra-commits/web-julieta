import { useTranslation } from 'react-i18next';
import { productsData, type Product } from '../lib/productsData';

export function useProducts() {
    const { t } = useTranslation();

    const translatedProducts: Product[] = productsData.map((product) => {
        // Determine the base key for this product
        const baseKey = `products.items.${product.slug}`;

        return {
            ...product,
            name: t(`${baseKey}.name`),
            shortDescription: t(`${baseKey}.shortDesc`),
            description: t(`${baseKey}.desc`),
            specs: product.specs.map((spec) => {
                // specs mapping depends on how we structured i18n
                // We have:
                // products.items.{slug}.specs.origin
                // products.items.{slug}.specs.format
                // products.items.{slug}.specs.quality
                // And the labels in products.specs.origin, etc.

                // We need to map the spec label to a key.
                // Original labels: "Origin", "Export Format", "Quality"
                let labelKey = '';
                let valueKey = '';

                if (spec.label === 'Origin') {
                    labelKey = 'origin';
                    valueKey = 'origin';
                } else if (spec.label === 'Export Format') {
                    labelKey = 'format';
                    valueKey = 'format';
                } else if (spec.label === 'Quality') {
                    labelKey = 'quality';
                    valueKey = 'quality';
                }

                return {
                    label: t(`products.specs.${labelKey}`),
                    value: t(`${baseKey}.specs.${valueKey}`),
                };
            }),
        };
    });

    return {
        products: translatedProducts,
    };
}
