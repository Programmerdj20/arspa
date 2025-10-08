# Página Nosotros - ARspa

## Descripción

Página de Nosotros diseñada para ARspa que combina calidez emocional con profesionalismo de lujo. La página cuenta la historia personal de Leidis Ramirez, fundadora de ARspa, y presenta la filosofía, valores y proceso del spa de una manera auténtica y conectiva.

## Características Principales

### 🎨 Diseño Visual

-   **Paleta de colores coherente**: Manteniendo los colores dorados y negros existentes del sitio
-   **Tipografía jerárquica**: Poppins para textos profesionales y Dancing Script para toques personales
-   **Animaciones sutiles**: Efectos de aparición al hacer scroll y microinteracciones elegantes
-   **Diseño responsive**: Optimizado para todos los dispositivos, desde móviles hasta desktop

### 📱 Estructura de Contenido

1. **Hero Section Personal**: Presentación impactante con foto de Leidis
2. **Mi Historia**: Timeline visual del recorrido profesional de Leidis
3. **Filosofía ARspa**: Pilares fundamentales del spa
4. **Proceso Transformador**: Versión emocional del proceso de 4 pasos
5. **Misión y Visión**: Propósito y sueños a futuro
6. **Valores**: Sistema hexagonal con los 5 valores principales
7. **Conexión Personal**: Mensaje directo de Leidis a los visitantes
8. **Credenciales**: Base científica y profesional
9. **CTA Final**: Llamada a la acción efectiva con beneficios

### 🚀 Funcionalidades Interactivas

-   **CTAs inteligentes**: Se adaptan según el comportamiento del usuario
-   **CTA flotante**: Aparece estratégicamente al hacer scroll
-   **Animaciones al scroll**: Elementos aparecen progresivamente
-   **Efectos hover**: Interacciones sutiles en tarjetas y botones
-   **Tracking de interacciones**: Medición de clics en CTAs para análisis

## Archivos del Proyecto

### Archivos Principales

-   `src/pages/nosotros.astro` - Página principal de Nosotros
-   `src/styles/nosotros.css` - Estilos específicos para la página
-   `src/scripts/nosotros.js` - Funcionalidades interactivas

### Imágenes Requeridas

Las siguientes imágenes deben estar disponibles en el directorio `public/images/`:

-   `Perfil_nosotros_small.webp` - Versión móvil (280px de ancho)
-   `Perfil_nosotros_medium.webp` - Versión tablet (350px de ancho)
-   `Perfil_nosotros_large.webp` - Versión desktop (450px de ancho)
-   `Perfil_nosotros.webp` - Versión estándar para sección de conexión personal
-   `Banner_hero.webp` - Imagen para CTA final

## Instalación y Configuración

### 1. Asegurar Estructura de Archivos

Verifica que los archivos estén en las siguientes ubicaciones:

```
src/
├── pages/
│   └── nosotros.astro
├── styles/
│   └── nosotros.css
├── scripts/
│   └── nosotros.js
└── layouts/
    └── Layout.astro
```

### 2. Verificar Componentes

Asegúrate de que el componente `BookingModal` esté disponible en:

```
src/components/BookingModal.astro
```

### 3. Configurar Ruta

Añade la ruta a la página en tu configuración de Astro si es necesario. Generalmente, las páginas en `src/pages/` se crean automáticamente.

### 4. Preparar Imágenes

Asegúrate de que todas las imágenes mencionadas estén disponibles en el directorio `public/images/` con los nombres correctos y en formato WebP para optimización.

## Personalización

### Modificar Contenido

Para personalizar el contenido de la página:

1. **Texto Principal**: Edita directamente en `nosotros.astro`
2. **Colores**: Modifica las variables CSS en `nosotros.css`
3. **Animaciones**: Ajusta las clases y efectos en `nosotros.css`
4. **Funcionalidades**: Personaliza el comportamiento en `nosotros.js`

### Cambiar Imágenes

Para actualizar las imágenes:

1. Reemplaza los archivos en `public/images/`
2. Asegúrate de mantener los mismos nombres de archivo
3. Para diferentes tamaños, mantén la estructura de nombres con sufijos `_small`, `_medium`, `_large`

### Ajustar CTAs

Para personalizar las llamadas a la acción:

1. Modifica los textos en los botones en `nosotros.astro`
2. Ajusta los estilos en la sección `.btn-*` de `nosotros.css`
3. Cambia las URLs de destino en los atributos `href`

## Optimización

### Performance

-   Las imágenes utilizan formato WebP para máxima calidad con mínimo peso
-   Implementación de lazy loading para imágenes fuera del viewport
-   CSS y JS optimizados para rápida carga

### SEO

-   Etiquetas semánticas HTML5 para mejor indexación
-   Metadatos optimizados en el encabezado de la página
-   Textos alternativos descriptivos para todas las imágenes
-   Estructura de encabezados jerárquica (h1, h2, h3)

### Accesibilidad

-   Contraste de colores cumple con estándares WCAG
-   Elementos interactivos con tamaño mínimo de 44px para móviles
-   Navegación posible mediante teclado
-   Textos alternativos para lectores de pantalla

## Soporte

Si encuentras algún problema o necesitas asistencia:

1. Verifica que todos los archivos estén en las ubicaciones correctas
2. Asegúrate de que las imágenes estén disponibles con los nombres correctos
3. Revisa la consola del navegador para posibles errores
4. Verifica que el componente `BookingModal` esté correctamente implementado

## Créditos

Diseño y desarrollo por equipo de ARspa, basado en la historia y filosofía de Leidis Ramirez, fundadora del spa.
