# Instrucciones Detalladas para Correcciones

## 1. Corregir menú hamburguesa

**Problema:** El menú hamburguesa dejó de funcionar después de mover el script a un archivo externo.

**Solución:**

1. En `src/layouts/Layout.astro`, reemplazar la línea:

    ```html
    <script src="/scripts/layout.js"></script>
    ```

    Por el script inline original:

    ```html
    <script>
        // Todo el código JavaScript del archivo layout.js
    </script>
    ```

2. Alternativamente, asegurarse de que el script externo se cargue correctamente:
    ```html
    <script src="/scripts/layout.js" type="module"></script>
    ```

## 2. Corregir alineación del contenido en desktop

**Problema:** Todo el contenido está alineado a la izquierda en versión desktop.

**Solución:**

1. En `src/styles/nosotros.css`, modificar las clases de contenedor:

    ```css
    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
        width: 100%;
    }

    .section-padding {
        padding: 80px 0;
    }
    ```

2. Para elementos específicos, añadir:
    ```css
    .hero-content,
    .mensaje-content,
    .final-cta-content {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 3rem;
    }
    ```

## 3. Eliminar emojis y reemplazar con iconos profesionales

**Problema:** Uso excesivo de emojis que no son profesionales.

**Solución:**

1. Reemplazar todos los emojis en `src/pages/nosotros.astro` por iconos SVG:

    - Reemplazar `💫` por:

        ```html
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path
                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            />
        </svg>
        ```

    - Reemplazar `🌟` por:

        ```html
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
            />
        </svg>
        ```

    - Reemplazar `💝` por:
        ```html
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            />
        </svg>
        ```

2. Aplicar estilos consistentes para todos los iconos:
    ```css
    .btn-icon svg,
    .paso-icono svg,
    .hexagono-icono svg {
        color: var(--color-gold-light);
        margin-right: 0.5rem;
    }
    ```

## 4. Corregir enlace a nosotros

**Problema:** El enlace en el navbar no lleva correctamente a la página.

**Solución:**

1. En `src/layouts/Layout.astro`, verificar que el enlace sea:

    ```html
    <a
        href="/nosotros"
        class="text-gold-light text-base font-medium transition-all duration-300 hover:text-white hover:scale-105 relative group"
    >
        Nosotros
        <span
            class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-luxury transition-all duration-300 group-hover:w-full"
        ></span>
    </a>
    ```

2. Asegurarse de que el archivo de la página sea `src/pages/nosotros.astro`

## 5. Corregir visualización de imágenes

**Problema:** Las imágenes no se muestran adecuadamente.

**Solución:**

1. En `src/pages/nosotros.astro`, verificar las rutas de las imágenes:

    ```html
    <img
        src="/images/Perfil_nosotros.webp"
        alt="Leidis Ramirez - Fundadora de ARspa"
        class="imagen-perfil"
    />
    ```

2. Asegurarse de que las imágenes existan en el directorio `public/images/`:

    - `Perfil_nosotros_small.webp`
    - `Perfil_nosotros_medium.webp`
    - `Perfil_nosotros_large.webp`
    - `Perfil_nosotros.webp`
    - `Banner_hero.webp`

3. Añadir estilos para asegurar la visualización correcta:
    ```css
    .imagen-perfil,
    .imagen-intima,
    .cta-image {
        max-width: 100%;
        height: auto;
        display: block;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    }
    ```

## Implementación Paso a Paso:

1. **PRIMERO:** Corregir el menú hamburguesa restaurando el script inline en `Layout.astro`
2. **SEGUNDO:** Corregir la alineación del contenido modificando las clases CSS en `nosotros.css`
3. **TERCERO:** Reemplazar todos los emojis por iconos SVG profesionales en `nosotros.astro`
4. **CUARTO:** Verificar y corregir el enlace a nosotros en `Layout.astro`
5. **QUINTO:** Verificar y corregir la visualización de imágenes en ambos archivos

## Verificación Final:

1. Probar el menú hamburguesa en dispositivos móviles
2. Verificar la alineación del contenido en desktop
3. Confirmar que no haya emojis en la página
4. Probar el enlace a nosotros desde el menú de navegación
5. Verificar que todas las imágenes se muestren correctamente
