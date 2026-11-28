# Sistema de diseño editorial del portafolio

## Dirección artística

El portafolio se lee como una publicación especializada en diseño de producto. La escuela suiza aporta retícula, alineación, jerarquía funcional y espacio negativo. La tipografía y el contraste ordenan la lectura. Cada composición responde a la evidencia y al carácter del artículo.

- **Caso visual.** Transferencias es la referencia para interfaces, comparativas, galerías, hitos y evidencias. Conserva la secuencia y las proporciones de los materiales.
- **Artículo técnico.** El Analizador semántico es la referencia para explicación, diagramas legibles, matrices, tablas y destacados laterales.
- **Ensayo.** Usa una columna continua, citas motivadas por el argumento y espacio para las transiciones.
- **Inicio.** Usa una presentación más sintética de la identidad, los casos y sus accesos.

## Fuente de verdad e identidad

El sistema está en revisión en [test-QA](test-QA/index.html). [editorial.css](test-QA/assets/css/editorial.css) reúne la paleta Éter Botánico, las familias Raleway y Roboto Slab, la escala tipográfica, el espaciado y las composiciones compartidas. Las páginas cargan primero las fuentes locales y sus componentes de base, y después la hoja editorial. Las variantes propias de un artículo se cargan al final. Los estilos de Inicio y las hojas compartidas por los casos mantienen las composiciones y recursos específicos que ya funcionan.

| Función | Tokens y aplicación |
| --- | --- |
| Texto, fondo y estructura | `--ink`, `--text`, `--muted`, `--paper`, `--light` y `--hair`. Usa líneas finas para agrupar o comparar. |
| Numeración y orientación | `--accent` para rótulos, números y acentos. El ámbar brillante queda para pequeñas superficies y geometría. |
| Idea central y énfasis | `--color-highlight-text`, `--green`, `--green-soft` y `--highlight-mark`. El tratamiento del titular combina verde y marcado ámbar. |
| Sección oscura | Fondo `--ink`, texto claro y acentos `--color-highlight-on-dark` o `--green-on-dark`. |
| Tipografía | `--serif` para titulares, entradillas, citas y cifras. `--sans` para prosa, tablas, metadatos y pies. |

Comprueba contraste y foco visible, incluso en superficies oscuras. Acompaña el color con un rótulo, posición, peso o contorno que comunique la distinción.

## Jerarquía y énfasis

Los niveles HTML definen el esquema del documento. Elige la escala visual por función editorial y aplica su clase explícita. Un `h2` puede introducir un capítulo, una ficha, un proceso o una sección de Inicio. Todos conservan su nivel semántico y usan la escala correspondiente a su función.

| Función | Clase | Referencia de escritorio | Uso |
| --- | --- | ---: | --- |
| Titular principal | `.editorial-main-title` | 80–110 px en casos | Titular único de la página. Inicio conserva su escala de portada. |
| Título de capítulo | `.editorial-chapter-title` | 44–66 px | Inicio de una unidad de relato y pausas mayores. |
| Encabezado informativo | `.editorial-info-title` | 28–36 px | Resumen del proyecto, procesos y anexos. |
| Encabezado de Inicio | `.editorial-home-heading` | 26–32 px | «Sobre mí», «Casos de estudio» y secciones equivalentes. |
| Título de ficha o argumento | `.editorial-card-title` y `.editorial-card-summary` | Escala de tarjeta | Nombre y argumento de un caso en Inicio. |
| Subcapítulo | `.editorial-subchapter-title` | 28–36 px | Unidad de relato dentro de un capítulo. Su escala queda bajo la de su capítulo. |
| Título de módulo | `.editorial-module-title` | 20–24 px | Un elemento dentro de un conjunto de métodos o validaciones. |
| Entradilla | `.editorial-deck` | 22–32 px | Argumento narrativo de apertura. Inicio usa su variante `.editorial-home-deck`. |
| Destacado | `.pull-small` o `.editorial-aside` | 24–28 px | Idea que orienta o cierra una parte del relato. |
| Prosa | `.editorial-body` o `.reading-copy` | 16–18 px | Lectura continua y antecedentes con interlineado cercano a 1,7. |
| Pie y nota | `.editorial-note` y pies de figura | 12–14 px | Aclaración editorial, atribución, confidencialidad o límite de la evidencia. |
| Etiqueta | `.editorial-label` y metadatos de ficha | 11–13 px | Orientación, numeración y categorías. |

En un resumen de proyecto, usa el encabezado informativo, el estilo de prosa para las fechas y antecedentes, y el estilo de nota para las aclaraciones. Aplica la entradilla solo al argumento narrativo elegido. Conserva la clase de cada párrafo aunque se mueva dentro del bloque. La posición y los selectores como `p:first-child` quedan reservados para el espaciado estructural.

Las medidas son referencias. Comprueba las escalas fluidas y el orden visual con las fuentes cargadas. Un salto de línea fijo requiere una justificación editorial y revisión a 320 px.

Usa `<strong>` con peso 600 o 700 para una idea que se entienda al escanear, como una decisión, un hallazgo o un cambio de enfoque. Destaca fragmentos completos con moderación. Usa `<em>` para énfasis semántico, extranjerismos y matices. Las citas literales y los comentarios de usuarios van entre comillas. La clase `.editorial-highlight` aplica el tratamiento cromático a un segmento breve de un titular o cita editorial.

## Retícula y ritmo

- `.editorial-grid` establece seis columnas en escritorio sobre el ancho disponible del artículo. Usa `.editorial-grid--split` para 4 + 2, `.editorial-grid--two` para 3 + 3 y `.editorial-grid--three` para 2 + 2 + 2. La variante `.editorial-grid--matrix` ordena hasta cuatro bloques como 2 × 2 desde 1024 px.
- `.reading-copy` limita la medida a aproximadamente 60–75 caracteres según la composición, el contenido y la fuente. Una columna lateral o dispositivo estrecho puede requerir una medida menor. Los hallazgos laterales usan `.editorial-aside` con una línea superior y una sola idea.
- Las figuras de gran ancho se reservan para diagramas, matrices, comparativas y otros elementos que requieren ese espacio. Alinea el borde de la figura con el inicio del texto. Verifica que el orden de lectura del HTML siga funcionando al apilar las columnas.
- Usa `--editorial-chapter-gap`, `--editorial-subsection`, `--editorial-figure` y `--editorial-paragraph` para distinguir capítulos, apartados, pausas gráficas y párrafos. Los subcapítulos se separan 64–88 px en escritorio y 40–56 px en móvil.
- El índice fijo de los casos se muestra a partir de 1280 px. La composición del artículo cambia a una columna por debajo de 800 px, incluidos los anchos fraccionarios. El intervalo a partir de 800 px admite comparativas y bloques modulares cuando cada columna conserva una lectura cómoda.

## Patrones de composición

| Patrón | Función y regla de uso |
| --- | --- |
| Portada, entradilla y ficha | `.case-hero`, `.hero-layout`, `.editorial-deck`, `.hero-meta` y `.editorial-intro`. Presenta el argumento y los datos del proyecto. La portada puede ser tipográfica o combinarse con una figura cuando aporta contexto. |
| Índice y capítulos | `.rail`, `.chapter-nav`, `.chapter-head` y `.chapter-subhead`. Mantén correspondencia entre número, rótulo y ancla. Conserva las anclas publicadas y la jerarquía H1–H3. |
| Destacados | Usa `.pull-small` dentro de la prosa, `.editorial-aside` en la retícula 4 + 2 y `.editorial-quote` o `.closing-quote` para una pausa mayor. Reutiliza una frase del artículo cuando haya evidencia o una conclusión que merezca ese espacio. |
| Cifras y resultados | Usa `.editorial-statline` con `dt` y `dd` para comparar resultados cualitativos o intervalos aproximados. Identifica el resultado protagonista con posición, tipografía y color. Conserva la nota metodológica junto a las cifras. Reserva escalas y barras para mediciones comparables. |
| Tablas | Usa `.editorial-table` y HTML semántico con encabezados de fila y columna. Identifica la tabla por título o pie. En móvil deja replegar el texto y reserva el desplazamiento horizontal para una matriz que realmente lo requiera. |
| Diagramas, procesos y matrices | Combina `.editorial-figure` con `.editorial-figure--open` para alinear la figura con la prosa o con `.editorial-figure--contained` cuando un fondo o marco agrupa su contenido. Usa un `figcaption`, conserva el orden de lectura y apila las columnas al estrecharse la vista. |
| Imágenes y comparativas | Usa `.media-frame`, `.figure-pair`, las galerías o `.landing-comparison-grid` de Transferencias. Respeta proporciones, estado anterior y posterior, pies y texto alternativo útil. La comparación y el video conservan sus controles. |
| Nota y confidencialidad | Usa `.editorial-note` para metodología, alcance o estado editorial y `.case-confidentiality` para condiciones específicas. Mantén la nota junto al elemento que contextualiza. |
| Retrospectiva y cierre | La retrospectiva admite una matriz cuando hay unidades independientes. La reflexión final puede cerrar con `.chapter-retro` y `.closing-quote`. Mantén un anexo o demostración con `.editorial-appendix` y un estado legible. |

Usa `--editorial-figure-inset` para el espacio interior de una figura contenida en los cuatro lados. La referencia es 24–32 px en escritorio y 16–20 px en móvil. Alinea el título, el pie y el cuerpo al mismo borde interior. Una figura abierta puede llevar una sola línea de apertura. En componentes segmentados, como el benchmark de Transferencias, la navegación puede llegar al borde y cada panel de contenido aplica el mismo espacio interior.

### Ejemplo de hallazgo lateral

```html
<div class="editorial-grid editorial-grid--split">
  <div class="reading-copy">
    <p>Texto del artículo que establece el contexto.</p>
  </div>
  <aside class="editorial-aside">
    <p>Fragmento aprobado que sintetiza el hallazgo.</p>
  </aside>
</div>
```

## Mantenimiento y revisión

1. Reutiliza los componentes y tokens existentes. Registra una variante local cuando responda a una necesidad exclusiva del artículo.
2. Actualiza esta guía y la hoja compartida en el mismo cambio cada vez que se modifique una regla editorial.
3. Conserva las palabras del relato, sus datos, enlaces y funcionalidades. Revisa ambos idiomas cuando el contenido esté disponible en ES / EN.
4. Comprueba en navegador 1920, 1440, 1280, 1279, 1024, 800, 799, 393 y 320 px. Revisa la carga de fuentes, contraste, reflujo, longitud de línea, navegación, interacciones y contenido. Usa [la matriz de revisión](test-QA/verificacion-editorial.html) para comprobar las relaciones entre tamaños, el espaciado interior y el reflujo. Completa la matriz con inspección visual en los cambios de composición. Registra los tamaños y las pruebas que se ejecutaron.
5. Durante una revisión, utiliza los archivos bajo `test-QA/`. Publica los cambios de producción únicamente tras la aprobación explícita del propietario.
