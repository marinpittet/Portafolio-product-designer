# Estado del portafolio · 2026-11-06

HTML original recuperado desde Portfolio/MVP/sitio-web/sitio-web. Se conserva una copia original en esa ubicación.

## Cambios
- Discovery del caso TEF actualizado con el relato del usuario en «MVP Portafolio HTML».
- Encargo y diagnóstico en septiembre de 2023 distinguidos del período de diseño previamente documentado.
- Alcance >80 %, metodología Useberry, cuatro hallazgos, benchmark y limitaciones documentados sin añadir resultados de pruebas.
- Figma se mantiene únicamente como referencia histórica. No acceder ni modificar.
- Las secciones restantes y las cifras atribuidas al CV se conservan del MVP; no se han verificado de nuevo contra ese documento.

## Pendientes
- Retomar más adelante cómo se organizaron la ideación y la priorización. No preguntar durante la publicación.
- Repositorio conectado mediante GitHub: https://github.com/marinpittet/Portafolio-product-designer. HTML y .nojekyll subidos a main.
- GitHub Pages activado desde main / (root), con HTTPS. El usuario hizo público el repositorio.
- HTML sin proceso de compilación; navegación por hash compatible con Pages. Las actualizaciones en main se publican automáticamente.
- Raleway y Roboto Slab de Google Fonts alojadas localmente como WOFF2 variables, con precarga y display=swap.
- Estilos y navegación separados en assets/css y assets/js; foto original en assets/images/profile.png.


## QA de portada · 2026-11-26

- Base validada contra `main` en `dd2e266e8034ffa63ac1a032379bd2d0ec37dcbd`. Fuente editorial para ES: textos aprobados en la conversación de Portafolio. La portada EN incluye la traducción de esos bloques.
- Rutas de portada `/index.html` y `/index.en.html`. Anclas `#sobre-mi`, `#proyectos`, `#analisis-ia` y `#juego-rol`. El índice mantiene `./caso-tef/` en ES y `./caso-tef/index.en.html` en EN.
- Los apoyos visuales del 02 y 03 son ejemplos editoriales estáticos en HTML. El 02 usa una matriz accesible de respuestas NPS sintéticas con tres etapas aprobadas: Resumen del pedido, Pago y Comprobante de compra. En anchos estrechos las filas se apilan como fichas. Los iconos del 03 identifican voz y texto.
- Verificado: diferencias acotadas a la portada, los estilos nuevos y la traducción. Los archivos de TEF, el hero, la navegación y el footer coinciden con la base. Los enlaces internos y los recursos referenciados por ambas portadas existen.
- Vista de revisión: `/test-QA/#analisis-ia` en GitHub Pages. La matriz conserva la paleta y las fuentes locales del sitio. Queda pendiente la aprobación de la portada antes de incorporar los cambios a producción.
- QA previo: la navegación cambia a la de escritorio en anchos fraccionales entre los rangos de estilos existentes. El ajuste de los breakpoints generales queda pendiente.

## Abrir y publicar

1. Extrae `sitio-web.zip`. Abre una terminal en la carpeta `sitio-web` y ejecuta `python -m http.server 8000`.
2. Abre `http://localhost:8000/#proyectos` en el navegador. El selector ES / EN conserva la sección abierta.
3. Tras aprobar QA, copia el contenido de la carpeta a la raíz de la rama que GitHub Pages tiene configurada para publicar. Conserva el archivo `.nojekyll`. Para este repositorio, la fuente documentada es `main` y la carpeta raíz.
