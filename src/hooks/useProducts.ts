import { useTranslation } from 'react-i18next';
import { productsData, type Product } from '../lib/productsData';

export function useProducts() {
    const { t } = useTranslation();

    const translatedProducts: Product[] = productsData.map((product) => {
        const baseKey = `products.items.${product.slug}`;

        const labelKeyFor = (label: string) => {
            switch (label) {
                case 'Origin':
                    return 'origin';
                case 'Season':
                    return 'season';
                case 'Markets':
                    return 'markets';
                case 'Packaging':
                    return 'packaging';
                default:
                    return '';
            }
        };

        return {
            ...product,
            category: t(`${baseKey}.category`),
            name: t(`${baseKey}.name`),
            shortDescription: t(`${baseKey}.desc`),
            description: t(`${baseKey}.desc`),
            specs: product.specs.map((spec) => {
                const key = labelKeyFor(spec.label);
                return {
                    label: t(`products.specs.${key}`),
                    value: t(`${baseKey}.specs.${key}`),
                };
            }),
        };
    });

    return {
        products: translatedProducts,
    };
}
