/**
 * Sistema de animaciones al hacer scroll
 * Optimizado con IntersectionObserver para mejor performance
 */
const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px",
};

// Usar requestIdleCallback si está disponible para no bloquear el main thread
const scheduleAnimation = window.requestIdleCallback || ((cb) => setTimeout(cb, 1));

const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            scheduleAnimation(() => {
                entry.target.classList.add("animate-in");
                animationObserver.unobserve(entry.target);
            });
        }
    });
}, observerOptions);

// Observar elementos animables
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
        animationObserver.observe(el);
    });

    // Sistema de CTAs inteligentes
    new CTAManager();
});

// Funciones globales para CTAs
// NOTA: openBookingModal ya está definida en BookingModal.astro
// No redefinir para evitar conflictos

function openWhatsAppCommunity() {
    const message = encodeURIComponent(
        "¡Hola! Me interesa unirme a la comunidad de ARspa."
    );
    window.open(`https://wa.me/573013545997?text=${message}`, "_blank");
}

function trackCTA(ctaType) {
    // Analytics tracking
    if (typeof window.gtag !== "undefined") {
        window.gtag("event", "cta_click", {
            event_category: "engagement",
            event_label: ctaType,
            value: 1,
        });
    }

    // Console para debugging
    console.log(`CTA Interaction: ${ctaType}`);
}

// Sistema de CTAs inteligentes
class CTAManager {
    constructor() {
        this.init();
    }

    init() {
        this.setupTracking();
        this.setupSmartCTAs();
        this.setupScrollCTAs();
    }

    // Tracking de interacciones
    setupTracking() {
        document
            .querySelectorAll('[onclick*="trackCTA"]')
            .forEach((element) => {
                element.addEventListener("click", (e) => {
                    const target = e.target;
                    const onclickAttr = target.getAttribute("onclick");
                    if (onclickAttr) {
                        const match = onclickAttr.match(
                            /trackCTA\('([^']+)'\)/
                        );
                        const ctaType = match ? match[1] : "";
                        this.trackCTAInteraction(ctaType);
                    }
                });
            });
    }

    trackCTAInteraction(ctaType) {
        trackCTA(ctaType);
    }

    // CTAs inteligentes basados en comportamiento
    setupSmartCTAs() {
        const userBehavior = this.getUserBehavior();
        this.adjustCTAsBasedOnBehavior(userBehavior);
    }

    getUserBehavior() {
        const timeOnPage = performance.now();
        const scrollDepth = this.getScrollDepth();
        const sectionsViewed = this.getSectionsViewed();

        return {
            timeOnPage,
            scrollDepth,
            sectionsViewed,
        };
    }

    adjustCTAsBasedOnBehavior(behavior) {
        // Si el usuario pasó tiempo en la sección de valores, mostrar CTA de comunidad
        if (behavior.sectionsViewed.includes("valores")) {
            this.highlightCommunityCTA();
        }

        // Si el usuario vio todo el proceso, destacar CTA de consulta
        if (behavior.sectionsViewed.includes("proceso")) {
            this.highlightConsultationCTA();
        }
    }

    // CTA flotante que aparece al hacer scroll
    setupScrollCTAs() {
        let scrollCTAShown = false;
        let scrollTimeout = null;

        // Debounce optimizado para scroll
        const handleScroll = () => {
            if (scrollTimeout) return;

            scrollTimeout = setTimeout(() => {
                const scrollPercentage = this.getScrollDepth();

                if (scrollPercentage > 50 && !scrollCTAShown) {
                    this.showScrollCTA();
                    scrollCTAShown = true;
                }

                scrollTimeout = null;
            }, 100);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
    }

    showScrollCTA() {
        const scrollCTA = document.createElement("div");
        scrollCTA.className = "scroll-cta";
        scrollCTA.innerHTML = `
      <div class="scroll-cta-content">
        <p>¿Lista para tu transformación?</p>
        <button onclick="openBookingModal()" class="scroll-cta-btn">
          Reservar Ahora
        </button>
        <button onclick="this.parentElement.parentElement.remove()" class="scroll-cta-close">
          ×
        </button>
      </div>
    `;

        document.body.appendChild(scrollCTA);

        // Animación de entrada
        setTimeout(() => {
            scrollCTA.classList.add("show");
        }, 100);
    }

    getScrollDepth() {
        const scrollTop =
            window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight =
            document.documentElement.scrollHeight - window.innerHeight;
        return (scrollTop / scrollHeight) * 100;
    }

    getSectionsViewed() {
        const sections = [];
        document.querySelectorAll("section[id]").forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                sections.push(section.id);
            }
        });
        return sections;
    }

    highlightCommunityCTA() {
        const communityCTA = document.querySelector(".btn-community");
        if (communityCTA) {
            communityCTA.classList.add("highlight-cta");
        }
    }

    highlightConsultationCTA() {
        const consultationCTA = document.querySelector(".btn-emotional");
        if (consultationCTA) {
            consultationCTA.classList.add("highlight-cta");
        }
    }
}

// Exportar funciones para uso global
// openBookingModal ya está definida globalmente en BookingModal.astro
window.openWhatsAppCommunity = openWhatsAppCommunity;
window.trackCTA = trackCTA;
