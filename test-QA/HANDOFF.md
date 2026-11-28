# QA · 2026-11-28

Base productiva: commit `68aed5dee85e9343324bccbf12182c97bd33fdb5` (navegación y cabecera responsive). Los commits posteriores hasta `9236da9d02534eef7d787b2efe89aa03c6e95e0e` contienen los ajustes de contenido aprobados del caso 02 exclusivamente en QA.

Se sincronizan las rutas públicas, recursos, CSS y JavaScript con la raíz de producción. Excepciones intencionales: meta robots noindex en QA, página de verificación editorial y este registro. Se reaplican exclusivamente el bloque del caso 02 en la portada (ES/EN), los capítulos 04–07 del caso 02 (ES/EN) y el CSS del diagrama semántico aprobado. No se modifica producción ni el generador de traducciones i18n de la raíz.

Antes de cualquier futura actualización, comparar los archivos de QA contra la raíz y conservar los cambios de navegación más recientes. Para promover el caso 02, trasladar solo los cambios de contenido y estilos específicos aprobados; no copiar la carpeta QA completa ni su etiqueta noindex. Mantener ES/EN sincronizados. Si se regenera EN, actualizar antes el diccionario de traducción correspondiente.

Verificación: comparación de árboles y contenido del repositorio; revisión visual responsive y despliegue en navegador pendientes.

Ajuste visual QA: nota del diagrama de exploración semántica centrada en el ancho completo de la figura; conectores compensados por el gap real de columnas y unidos mediante un solape mínimo. CSS semantic-02 en ES/EN. Verificación visual en navegador pendiente.

Corrección de las cuatro esquinas del esquema semántico tras captura del usuario: cada codo lateral utiliza un único borde CSS continuo, conectado al centro de su tarjeta y solapado con el eje central. Se mantiene la disposición móvil. Cache CSS semantic-03 (ES/EN). Revisión visual en navegador pendiente.
