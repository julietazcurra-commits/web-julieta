# Documentacion operativa del sitio

Esta guia resume como administrar productos en la pagina `/products` y donde esta gestionada la infraestructura del proyecto.

## 1) Gestion de productos en `/products`

No existen subpaginas individuales por producto. Todos los productos se muestran en una unica pagina `/products`.


### Archivos que se tocan

- `src/lib/productsData.ts`: estructura base de cada producto (`slug`, `imageId`, `specs`)
- `src/i18n.ts`: textos del producto por idioma (`es`, `en`, `zh`)
- `src/lib/images.ts`: mapeo de IDs de imagen a archivos en `public/images`
- `public/images/*`: imagenes del producto

### A) Editar un producto existente

1. Buscar el producto por `slug` en `src/lib/productsData.ts`.
2. Ajustar imagen principal (`imageId`) si hace falta.
3. Actualizar textos en `src/i18n.ts` en:
   - `translation.products.items.<slug>` para cada idioma
4. Si cambias o agregas imagenes:
   - subir archivos en `public/images`
   - mapearlas en `src/lib/images.ts`

### B) Agregar un producto nuevo

1. Crear nuevo objeto en `src/lib/productsData.ts` con:
   - `name`
   - `slug` (unico, en minusculas y con guiones)
   - `shortDescription`
   - `description`
   - `specs`
   - `imageId`
2. Agregar traducciones del nuevo `slug` en `src/i18n.ts` para cada idioma:
   - `products.items.<nuevo-slug>.name`
   - `products.items.<nuevo-slug>.shortDesc`
   - `products.items.<nuevo-slug>.desc`
   - `products.items.<nuevo-slug>.specs.origin`
   - `products.items.<nuevo-slug>.specs.format`
   - `products.items.<nuevo-slug>.specs.quality`
3. Agregar imagenes a `public/images` y su mapeo en `src/lib/images.ts`.
4. Agregar la card del producto en `src/components/home/HeroProducts.tsx` si se quiere mostrar en el home.

### C) Donde guardar las imagenes para que funcionen

- Carpeta obligatoria: `public/images/`
- Ruta que se usa en codigo: siempre empieza con `/images/...` (sin `public` en la URL)
- Ejemplo:
  - archivo fisico: `public/images/almonds-box.webp`
  - mapeo en `src/lib/images.ts`: `"almondsBox": "/images/almonds-box.webp"`
  - uso en `productsData.ts`: `imageId: "almondsBox"`

Recomendacion:
- usar nombres en minusculas con guiones (`almonds-box.webp`)
- preferir `.webp` cuando sea posible por rendimiento

### Importante sobre specs

El hook `src/hooks/useProducts.ts` mapea specs en base a etiquetas fijas del dataset (`Origin`, `Export Format`, `Quality`).  
Si agregas nuevos tipos de spec, hay que actualizar ese hook para contemplarlas.

## 2) Infraestructura y accesos rapidos

### Estado general

- Deploy del sitio: **Vercel**
- Dominio: **DonWeb**
- Proveedor de email: **Namecheap Private Email** (servicio economico aprox. USD 14/anio)

### URLs de acceso

- Vercel (dashboard): `https://vercel.com/dashboard`
- DonWeb (mi cuenta): `https://micuenta.donweb.com/es-ar/ingresar`
- Namecheap Private Email (login): `https://privateemail.com/`

## 3) Checklist rapido antes de publicar cambios

- Verificar que el `slug` nuevo no se repita.
- Confirmar textos en cada idioma (`es`, `en`, `zh`).
- Revisar que todas las imagenes nuevas existan y carguen.
- Probar navegacion:
  - `/products`
  - responsive mobile y desktop

