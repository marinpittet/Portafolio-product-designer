# Caso de estudio TEF — entrega editorial 2026-11-12

## Rama
- Rama de trabajo: `feat/caso-tef-editorial`, derivada de `main`.
- `main` no se modifica ni se publica esta versión.
- Ruta del caso: `caso-tef/index.html`; Home actualizado para enlazar el caso.

## Contenido
- Guion editorial aprobado: siete capítulos y retrospectiva.
- Tesis: «Menos pasos no siempre significa menos esfuerzo».
- Se distinguen pruebas de usabilidad, decisiones, trade-offs, despliegue y reflexión.
- No se atribuye aumento causal de +10 puntos de NPS.

## Diseño y comportamiento
- Estilo editorial basado en Raleway/Roboto Slab y acento #F45F00.
- Los diagramas, procesos, flujos, comparaciones conceptuales y timeline se crean con HTML/CSS, no se rasterizan. Las capturas originales y wireframes reconstruidos se tratan como evidencia.
- Reproducción de cortina de éxito con controles manuales, sin autoplay y con sonido opcional; JS mejora de foco, lectura y navegación.
- Responsive con puntos de control 799/800/1279/1280 px.

## Material multimedia en la rama pública
- **No se suben** los medios originales que todavía contienen información personal o financiera. Los contenedores muestran un fallback accesible mientras falten las imágenes y el video.
- El ZIP de revisión local contiene las imágenes y video originales dentro de `caso-tef/media/`, y no debe publicarse sin anonimizar.
- Nombres de archivos y medios previstos figuran en `caso-tef/media/README.md`.
- Benchmarks históricos reales: no accesibles. Los ejemplos disponibles se identifican como ilustrativos.

## Verificación
- Revisión estática de rutas, etiquetas, recursos del paquete local y sintaxis JS realizada.
- Verificación visual en navegador completo: NO VERIFICADO; el navegador de este entorno bloquea la navegación a archivos y localhost.
- Falta revisión visual final en el entorno del usuario y sustitución de medios anonimizados antes de publicar.
