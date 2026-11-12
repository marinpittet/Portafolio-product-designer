# Portafolio de Andrés Marín

Sitio estático: HTML, CSS y JavaScript sin compilación.

- `index.html`: contenido y rutas de Inicio y Transferencias.
- `index.en.html` y `caso-tef/index.en.html`: versiones en inglés de la portada y el caso de estudio. El selector ES / EN conserva la sección abierta.
- `i18n/en.tsv`: traducciones revisadas; `python i18n/build_english.py` regenera las páginas inglesas después de editar el contenido español.
- `assets/css/styles.css`: estilos y adaptación a móviles.
- `assets/js/main.js`: navegación por hash.
- `assets/images/profile.png`: foto original de perfil con transparencia.
- Raleway y Roboto Slab de Google Fonts alojadas localmente en `assets/fonts`: dos archivos variables WOFF2, subconjunto latino con caracteres españoles, precarga y display=swap. Licencias incluidas. No requiere conexión con servidores de fuentes externos.

GitHub Pages publica automáticamente desde `main`, carpeta raíz. HTTPS.

Repositorio: https://github.com/marinpittet/Portafolio-product-designer
Sitio: https://marinpittet.github.io/Portafolio-product-designer/

`HANDOFF.md` documenta fuentes y pendientes de contenido. Figma solo es una referencia histórica: no acceder ni modificar.

Iconos de interfaz: [Lucide](https://lucide.dev/icons/), SVG oficiales locales y sprite en `assets/icons/lucide/`. Licencia incluida.
