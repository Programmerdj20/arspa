# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Comandos de Desarrollo

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo en localhost:4321 |
| `npm run build` | Construye el sitio para producción |
| `npm run preview` | Vista previa del build local |
| `npm run astro` | Ejecuta comandos CLI de Astro |

## Stack Tecnológico

- **Astro 5.x** - Framework principal con renderizado estático
- **Tailwind CSS 4.x** - Framework de estilos con configuración personalizada vía Vite plugin
- **TypeScript** - Configuración strict de Astro
- **Vite** - Bundler integrado con Astro

## Arquitectura del Proyecto

### Estructura de Archivos
```
src/
├── layouts/Layout.astro    # Layout principal con header/footer
├── pages/                  # Páginas de la aplicación
│   ├── index.astro        # Página principal del spa
│   └── servicios.astro    # Página de servicios
└── styles/global.css      # Estilos globales con variables CSS personalizadas
```

### Sistema de Estilos
- **Paleta de colores personalizada** definida en `src/styles/global.css` con variables CSS
- **Fuentes**: Poppins (principal) y Dancing Script (decorativa)
- **Colores principales**:
  - `--color-primary: #252525` (navbar)
  - `--color-secondary: #fbe878` (amarillo principal)
  - `--color-accent: #48CAE4` (azul turquesa)
  - `--color-body-bg: #1c1a1d` (fondo del cuerpo)

### Componentes Principales
- **Layout.astro**: Header sticky con navegación responsive, footer con información de contacto, y scripts para menú móvil
- **Hero Section**: Carrusel de imágenes de fondo con superposición de gradiente
- **Navegación**: Links de anchor scrolling con JavaScript para smooth scroll

### Patrón de Desarrollo
- **SPA con múltiples páginas**: Astro maneja el routing basado en archivos
- **Responsive design**: Mobile-first con breakpoints de Tailwind
- **SEO optimizado**: Meta tags, Open Graph, y structured data en Layout.astro
- **Imágenes optimizadas**: WebP format en `public/images/` y `public/icons/`

### Contacto y CTA
- **WhatsApp integration**: Enlace directo con mensaje pre-configurado
- **Número de teléfono**: 301.354.59.97
- **Horarios**: Lunes - Sábado: 8:00 AM - 6:00 PM
- **Ubicación**: Medellín, Colombia