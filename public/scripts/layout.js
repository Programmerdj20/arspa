/**
 * Layout - Funcionalidades del menú móvil con integración a OverlayManager
 * Mejoras de accesibilidad y UX según mejores prácticas W3C
 */
document.addEventListener("DOMContentLoaded", function () {
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const sidebarCloseBtn = document.getElementById("sidebar-close-btn");
    const mobileSidebar = document.getElementById("mobile-sidebar");
    const sidebarOverlay = document.getElementById("sidebar-overlay");
    const hamburgerIcon = document.getElementById("hamburger-icon");
    const closeIcon = document.getElementById("close-icon");
    const sidebarNavLinks = document.querySelectorAll(".sidebar-nav-link");

    let isSidebarOpen = false;
    let previousActiveElement = null;

    /**
     * Función para abrir el sidebar
     */
    function openSidebar() {
        // Prevenir apertura múltiple
        if (isSidebarOpen) return;

        // Guardar elemento activo para restaurar después
        previousActiveElement = document.activeElement;

        // Registrar en OverlayManager
        if (window.overlayManager) {
            window.overlayManager.register({
                id: 'mobile-sidebar',
                type: 'sidebar',
                element: sidebarOverlay,
                onClose: closeSidebar
            });
        }

        // Marcar como abierto
        isSidebarOpen = true;

        // Actualizar aria-expanded
        if (mobileMenuBtn) {
            mobileMenuBtn.setAttribute('aria-expanded', 'true');
        }

        // Actualizar aria-hidden
        if (mobileSidebar) {
            mobileSidebar.setAttribute('aria-hidden', 'false');
        }

        // Mostrar overlay con animación
        if (sidebarOverlay) {
            sidebarOverlay.classList.remove("opacity-0", "invisible");
            sidebarOverlay.classList.add("opacity-100", "visible");
        }

        // Mostrar sidebar con slide-in desde la derecha
        if (mobileSidebar) {
            mobileSidebar.classList.remove("translate-x-full");
            mobileSidebar.classList.add("translate-x-0");
        }

        // Cambiar íconos con animación
        if (hamburgerIcon && closeIcon) {
            hamburgerIcon.classList.add("hidden");
            closeIcon.classList.remove("hidden");
        }

        // Enfocar primer link después de abrir
        setTimeout(() => {
            const firstLink = mobileSidebar?.querySelector('.sidebar-nav-link');
            if (firstLink) {
                firstLink.focus();
            }
        }, 300);
    }

    /**
     * Función para cerrar el sidebar
     */
    function closeSidebar() {
        // Prevenir cierre múltiple
        if (!isSidebarOpen) return;

        // Desregistrar del OverlayManager
        if (window.overlayManager) {
            window.overlayManager.unregister('mobile-sidebar');
        }

        // Marcar como cerrado
        isSidebarOpen = false;

        // Actualizar aria-expanded
        if (mobileMenuBtn) {
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
        }

        // Actualizar aria-hidden
        if (mobileSidebar) {
            mobileSidebar.setAttribute('aria-hidden', 'true');
        }

        // Ocultar overlay
        if (sidebarOverlay) {
            sidebarOverlay.classList.remove("opacity-100", "visible");
            sidebarOverlay.classList.add("opacity-0", "invisible");
        }

        // Ocultar sidebar con slide-out hacia la derecha
        if (mobileSidebar) {
            mobileSidebar.classList.remove("translate-x-0");
            mobileSidebar.classList.add("translate-x-full");
        }

        // Cambiar íconos
        if (hamburgerIcon && closeIcon) {
            hamburgerIcon.classList.remove("hidden");
            closeIcon.classList.add("hidden");
        }

        // Restaurar foco al botón del menú
        if (previousActiveElement && previousActiveElement.focus) {
            previousActiveElement.focus();
        }
    }

    /**
     * Toggle sidebar al hacer click en el botón del menú
     */
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener("click", () => {
            if (isSidebarOpen) {
                closeSidebar();
            } else {
                openSidebar();
            }
        });

        // Inicializar aria-expanded
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
    }

    /**
     * Cerrar sidebar al hacer click en el botón de cerrar
     */
    if (sidebarCloseBtn) {
        sidebarCloseBtn.addEventListener("click", closeSidebar);
    }

    /**
     * Cerrar sidebar al hacer click en el overlay
     */
    if (sidebarOverlay) {
        sidebarOverlay.addEventListener("click", closeSidebar);
    }

    /**
     * Cerrar sidebar al hacer click en cualquier link de navegación
     */
    sidebarNavLinks.forEach((link) => {
        link.addEventListener("click", () => {
            if (isSidebarOpen) {
                // Delay para permitir smooth scroll antes de cerrar
                setTimeout(() => {
                    closeSidebar();
                }, 100);
            }
        });
    });

    /**
     * Smooth scroll optimizado para anchor links
     * Usa requestAnimationFrame para mejor performance
     */
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            const target = e.currentTarget;
            if (!target) return;

            const href = target.getAttribute("href");
            if (!href || href === "#") return;

            const element = document.querySelector(href);
            if (!element) return;

            e.preventDefault();

            // Calcular posición considerando header sticky
            const headerOffset = 80; // Altura del header
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            // Smooth scroll con mejor soporte cross-browser
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        });
    });

    /**
     * Inicializar aria-hidden en el sidebar
     */
    if (mobileSidebar) {
        mobileSidebar.setAttribute('aria-hidden', 'true');
    }
});
