/**
 * OverlayManager - Sistema centralizado de gestión de overlays
 * Maneja múltiples capas (modales, sidebars, etc.) sin conflictos
 * Basado en mejores prácticas W3C ARIA y accesibilidad
 */

class OverlayManager {
	constructor() {
		// Stack de overlays activos (LIFO - Last In First Out)
		this.overlayStack = [];

		// Estado del scroll antes de abrir overlays
		this.scrollPosition = 0;

		// Detectar dispositivo móvil
		this.isMobile = () => window.innerWidth < 768;

		// Estado de scroll lock
		this.isScrollLocked = false;

		// Bind de métodos
		this.handleEscape = this.handleEscape.bind(this);

		// Inicializar listener global de ESC
		this.initGlobalListeners();
	}

	/**
	 * Registra un overlay en el stack
	 * @param {Object} overlay - Configuración del overlay
	 * @param {string} overlay.id - Identificador único
	 * @param {string} overlay.type - Tipo: 'modal' | 'sidebar' | 'drawer'
	 * @param {Function} overlay.onClose - Callback al cerrar
	 * @param {HTMLElement} overlay.element - Elemento DOM del overlay
	 * @param {number} overlay.zIndex - Z-index base (opcional)
	 */
	register(overlay) {
		// Validar que no esté ya registrado
		const exists = this.overlayStack.find(o => o.id === overlay.id);
		if (exists) {
			console.warn(`Overlay ${overlay.id} ya está registrado`);
			return false;
		}

		// Agregar al stack
		this.overlayStack.push({
			id: overlay.id,
			type: overlay.type,
			onClose: overlay.onClose,
			element: overlay.element,
			zIndex: overlay.zIndex || this.calculateZIndex(),
			timestamp: Date.now()
		});

		// Aplicar z-index al elemento
		if (overlay.element) {
			overlay.element.style.zIndex = this.overlayStack[this.overlayStack.length - 1].zIndex;
		}

		// Lock scroll si es el primer overlay
		if (this.overlayStack.length === 1) {
			this.lockScroll();
		}

		return true;
	}

	/**
	 * Desregistra un overlay del stack
	 * @param {string} id - ID del overlay a cerrar
	 */
	unregister(id) {
		const index = this.overlayStack.findIndex(o => o.id === id);

		if (index === -1) {
			console.warn(`Overlay ${id} no encontrado en el stack`);
			return false;
		}

		// Remover del stack
		const removed = this.overlayStack.splice(index, 1)[0];

		// Si no quedan overlays, unlock scroll
		if (this.overlayStack.length === 0) {
			this.unlockScroll();
		}

		return true;
	}

	/**
	 * Cierra el overlay más reciente (top del stack)
	 */
	closeTop() {
		if (this.overlayStack.length === 0) return false;

		const topOverlay = this.overlayStack[this.overlayStack.length - 1];

		// Llamar callback de cierre si existe
		if (topOverlay.onClose && typeof topOverlay.onClose === 'function') {
			topOverlay.onClose();
		}

		return true;
	}

	/**
	 * Cierra un overlay específico por ID
	 * @param {string} id - ID del overlay
	 */
	close(id) {
		const overlay = this.overlayStack.find(o => o.id === id);

		if (!overlay) return false;

		if (overlay.onClose && typeof overlay.onClose === 'function') {
			overlay.onClose();
		}

		return true;
	}

	/**
	 * Verifica si un overlay específico está abierto
	 * @param {string} id - ID del overlay
	 */
	isOpen(id) {
		return this.overlayStack.some(o => o.id === id);
	}

	/**
	 * Verifica si hay algún overlay abierto
	 */
	hasOpenOverlays() {
		return this.overlayStack.length > 0;
	}

	/**
	 * Obtiene el overlay activo (top del stack)
	 */
	getActiveOverlay() {
		return this.overlayStack[this.overlayStack.length - 1] || null;
	}

	/**
	 * Calcula el z-index para el próximo overlay
	 */
	calculateZIndex() {
		const baseZIndex = 50;
		const increment = 10;
		return baseZIndex + (this.overlayStack.length * increment);
	}

	/**
	 * Lock del scroll del body
	 */
	lockScroll() {
		if (this.isScrollLocked) return;

		// Guardar posición actual
		this.scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

		if (this.isMobile()) {
			// Solución para móviles (previene bounce scroll en iOS)
			document.body.style.position = 'fixed';
			document.body.style.top = `-${this.scrollPosition}px`;
			document.body.style.width = '100%';
			document.body.style.overflow = 'hidden';
		} else {
			// Desktop
			document.body.style.overflow = 'hidden';
			document.body.style.paddingRight = this.getScrollbarWidth() + 'px';
		}

		this.isScrollLocked = true;
	}

	/**
	 * Unlock del scroll del body
	 */
	unlockScroll() {
		if (!this.isScrollLocked) return;

		if (this.isMobile()) {
			// Restaurar para móviles
			document.body.style.position = '';
			document.body.style.top = '';
			document.body.style.width = '';
			document.body.style.overflow = '';

			// Restaurar posición de scroll
			window.scrollTo(0, this.scrollPosition);
		} else {
			// Desktop
			document.body.style.overflow = '';
			document.body.style.paddingRight = '';
		}

		this.isScrollLocked = false;
		this.scrollPosition = 0;
	}

	/**
	 * Calcula el ancho de la scrollbar para evitar layout shift
	 */
	getScrollbarWidth() {
		// Crear elemento temporal para medir scrollbar
		const outer = document.createElement('div');
		outer.style.visibility = 'hidden';
		outer.style.overflow = 'scroll';
		outer.style.msOverflowStyle = 'scrollbar';
		document.body.appendChild(outer);

		const inner = document.createElement('div');
		outer.appendChild(inner);

		const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;
		outer.parentNode.removeChild(outer);

		return scrollbarWidth;
	}

	/**
	 * Handler global de tecla ESC
	 */
	handleEscape(event) {
		if (event.key === 'Escape' && this.hasOpenOverlays()) {
			event.preventDefault();
			this.closeTop();
		}
	}

	/**
	 * Inicializa listeners globales
	 */
	initGlobalListeners() {
		document.addEventListener('keydown', this.handleEscape);
	}

	/**
	 * Limpia todos los overlays y listeners
	 */
	destroy() {
		// Cerrar todos los overlays
		while (this.overlayStack.length > 0) {
			this.closeTop();
		}

		// Remover listeners
		document.removeEventListener('keydown', this.handleEscape);

		// Unlock scroll
		this.unlockScroll();
	}
}

// Crear instancia global singleton
const overlayManager = new OverlayManager();

// Exportar para uso en módulos
if (typeof module !== 'undefined' && module.exports) {
	module.exports = overlayManager;
}

// Hacer disponible globalmente
window.overlayManager = overlayManager;
