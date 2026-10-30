# Barbería Urbana

Sitio web ficticio para el taller universitario **“Investigación y desarrollo de un sitio web con Tailwind CSS e inteligencia artificial”**. Se construyó con HTML5, Tailwind CSS 4 y JavaScript puro.

## Abrir el proyecto

1. Abre la carpeta `barberia-urbana` en el Explorador de archivos.
2. Haz doble clic en `index.html` para abrirlo en el navegador.
3. Mantén conexión a internet para cargar Tailwind CSS, las fuentes y las fotografías externas.

El proyecto no necesita una instalación ni un proceso de compilación para esta versión inicial.

## Archivos

- `index.html`: contenido de la página, enlaces a los recursos externos y estilos. En su bloque `@theme` se definen los colores y las fuentes de Tailwind.
- `js/main.js`: menú móvil, selector de tema, acordeón de preguntas frecuentes, fecha mínima y validación del formulario.
- `docs/bitacora-iteraciones.md`: registro de las iteraciones, pruebas y tres cambios manuales del estudiante.
## Funciones de la página

- Diseño adaptable a celular, tableta y computador, con variantes `sm:`, `md:` y `lg:`.
- Menú móvil que se abre, se cierra con Escape y se cierra al elegir una sección.
- Modo claro y oscuro, con preferencia guardada en este navegador cuando el almacenamiento está disponible.
- Acordeón de preguntas frecuentes.
- Formulario con campos obligatorios, validación de correo y errores junto a los campos.
- Aviso de demostración cuando los datos pasan la validación.

**El formulario no envía ni almacena datos y no reserva una cita.** Los nombres, precios, horarios, teléfono y correo son ficticios. No se muestra una dirección real. Los enlaces sociales llevan a las páginas generales de esas redes y no representan perfiles oficiales.

## Tailwind CSS y publicación

Esta versión usa el Play CDN de Tailwind CSS 4 para facilitar el inicio sin instalar paquetes. El Play CDN está pensado para desarrollo y aprendizaje; antes de publicar un sitio de producción se recomienda configurar Tailwind mediante un proceso de compilación.

## Estado de revisión

La página y sus funciones principales se revisaron con capturas del navegador y reportes del estudiante. La bitácora contiene cinco iteraciones iniciales y una optimización adicional medida en Lighthouse. Tres cambios manuales del estudiante están completos. En la primera ejecución Mobile, Lighthouse mostró Rendimiento 62, Accesibilidad 100, Buenas prácticas 100 y SEO 100; después de optimizar imágenes, la segunda ejecución mostró Rendimiento 97 y mantuvo las otras categorías en 100. El sitio ya está publicado en GitHub Pages y se comprobó desde computador y celular.

Las comprobaciones manuales confirmadas incluyen validación obligatoria y de correo, aviso de envío válido, cambio de tema, acordeón, menú móvil y diseño en ventana tipo tableta y celular. Los tres cambios manuales se registran en `docs/bitacora-iteraciones.md`.

## Validación HTML

Se subió `index.html` al validador W3C. El checker mostró dos errores en el bloque de Tailwind: no reconoce `type="text/tailwindcss"` ni la directiva `@theme`. Se conservaron porque la [guía oficial de Tailwind Play CDN](https://tailwindcss.com/docs/installation/play-cdn) usa esa sintaxis para permitir CSS personalizado procesado por Tailwind. Este resultado queda registrado; quitar esas indicaciones podría impedir que Tailwind genere el tema personalizado.

## Lighthouse

La primera ejecución en modo Mobile mostró estos resultados: **Rendimiento 62, Accesibilidad 100, Buenas prácticas 100 y SEO 100**. Lighthouse mostró FCP 4,1 s, LCP 4,1 s, TBT 580 ms, CLS 0 y Speed Index 4,1 s. Entre las oportunidades visibles estaban recursos que bloquean el renderizado (ahorro estimado de 1.340 ms) y una mejor entrega de imágenes (191 KiB). Después de reducir dimensiones y calidad de imágenes y añadir carga diferida debajo del hero, la segunda ejecución mostró Rendimiento **97**, con Accesibilidad, Buenas prácticas y SEO en **100**. Las puntuaciones pueden variar entre ejecuciones; estos valores corresponden a las capturas del estudiante.

Las capturas de W3C, Lighthouse, formulario, tema y vista móvil se conservan en `docs/capturas/` como evidencia local. No se incluyen en la copia preparada para publicar: una captura deja ver parte de la ruta local de Windows. No son necesarias para que el sitio funcione.

## Entrega y sustentación

- [Bitácora de iteraciones](docs/bitacora-iteraciones.md)
