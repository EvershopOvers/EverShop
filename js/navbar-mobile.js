/**
 * navbar-mobile.js
 * Controla el menú mobile: expansión integrada al header y
 * animación hamburguesa ↔ X en el botón toggler.
 *
 * No depende de Bootstrap JS para el collapse.
 * Compatible con todos los navegadores modernos.
 */

(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', function () {

        var toggler = document.getElementById('menuToggle');
        var menu = document.getElementById('navbarNavDropdown');
        var navbar = toggler ? toggler.closest('.navbar') : null;

        if (!toggler || !menu || !navbar) return;

        /**
         * Abre o cierra el menú según su estado actual.
         */
        toggler.addEventListener('click', function () {
            var isOpen = menu.classList.contains('menu-open');

            if (isOpen) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        /**
         * Cierra el menú si el usuario hace clic fuera del navbar.
         */
        document.addEventListener('click', function (e) {
            if (navbar && !navbar.contains(e.target)) {
                closeMenu();
            }
        });

        /**
         * Cierra el menú cuando se selecciona un enlace
         * (útil en SPA o para mejorar UX en mobile).
         */
        var navLinks = menu.querySelectorAll('.nav-link');
        navLinks.forEach(function (link) {
            link.addEventListener('click', function () {
                closeMenu();
            });
        });

        /* ---- Funciones auxiliares ---- */

        function openMenu() {
            menu.classList.add('menu-open');
            toggler.classList.add('is-open');
            toggler.setAttribute('aria-expanded', 'true');
            toggler.setAttribute('aria-label', 'Cerrar menú');

            // Reducido a 200ms para coincidir con la transición CSS
            setTimeout(function () {
                var navbarHeight = navbar.offsetHeight;
                document.body.style.paddingTop = navbarHeight + 'px';
            }, 150);
        }

        function closeMenu() {
            menu.classList.remove('menu-open');
            toggler.classList.remove('is-open');
            toggler.setAttribute('aria-expanded', 'false');
            toggler.setAttribute('aria-label', 'Abrir menú');

            // Restaurar el padding según el tamaño real de pantalla
            document.body.style.paddingTop = '';
        }
    });

})();
