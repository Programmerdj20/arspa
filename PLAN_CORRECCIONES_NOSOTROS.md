# Plan de Correcciones - Página Nosotros

## Problemas Identificados:

1. **Menú hamburguesa no funciona** - El script se movió a un archivo externo pero no se está cargando correctamente
2. **Contenido alineado incorrectamente** - Todo el contenido está tirado a la izquierda en versión desktop
3. **Emojis inapropiados** - Uso excesivo de emojis que no son profesionales
4. **Enlace a nosotros no funciona** - El enlace en el navbar no lleva correctamente a la página
5. **Imágenes no se muestran adecuadamente** - Problemas con la visualización de imágenes

## Acciones Correctivas:

### 1. Corregir menú hamburguesa

**Archivo a modificar:** `src/layouts/Layout.astro`

Solución:

-   Asegurar que el script `layout.js` se cargue correctamente
-   Verificar que los IDs de los elementos coincidan
-   Reimplementar el script dentro de `Layout.astro` si es necesario

### 2. Corregir alineación del contenido

**Archivos a modificar:**

-   `src/styles/nosotros.css`
-   `src/pages/nosotros.astro`

Solución:

-   Actualizar las clases CSS para usar flexbox/justify-content: center
-   Asegurar contenedores con anchos máximos apropiados
-   Usar márgenes automáticos para centrar contenido

### 3. Eliminar emojis inapropiados

**Archivos a modificar:**

-   `src/pages/nosotros.astro`

Solución:

-   Reemplazar todos los emojis por iconos SVG profesionales
-   Mantener un diseño limpio y profesional
-   Usar la paleta de colores dorada de la marca para los iconos

### 4. Corregir enlace a nosotros

**Archivos a modificar:**

-   `src/layouts/Layout.astro`

Solución:

-   Verificar que el enlace `/nosotros` esté correctamente configurado
-   Asegurar que la ruta coincida con el nombre del archivo

### 5. Corregir visualización de imágenes

**Archivos a modificar:**

-   `src/pages/nosotros.astro`
-   `src/styles/nosotros.css`

Solución:

-   Verificar que las rutas de las imágenes sean correctas
-   Asegurar que las imágenes existan en el directorio `/public/images/`
-   Añadir estilos para asegurar que las imágenes se muestren correctamente

## Implementación Prioritaria:

1. **PRIMERO:** Corregir el menú hamburguesa para restaurar la funcionalidad básica
2. **SEGUNDO:** Corregir la alineación del contenido en desktop
3. **TERCERO:** Reemplazar todos los emojis por iconos profesionales
4. **CUARTO:** Verificar y corregir el enlace a nosotros
5. **QUINTO:** Verificar y corregir la visualización de imágenes

## Estándares Profesionales a Aplicar:

-   Diseño limpio y minimalista
-   Tipografía consistente y legible
-   Paleta de colores profesional (negro, dorado, tonos tierra)
-   Iconos SVG en lugar de emojis
-   Espaciado adecuado entre elementos
-   Alineación centrada en versiones desktop
-   Navegación intuitiva y funcional

## Resultados Esperados:

Una página Nosotros profesional, funcional y visualmente atractiva que:

-   Tenga una navegación completamente funcional
-   Muestre el contenido correctamente alineado
-   Utilice iconos profesionales en lugar de emojis
-   Permita acceder correctamente desde el menú de navegación
-   Muestre todas las imágenes adecuadamente
