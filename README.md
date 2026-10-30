# Barbería Urbana

Sitio web ficticio para el taller universitario “Investigación y desarrollo de un sitio web con Tailwind CSS e inteligencia artificial”. Se construyó con HTML5, Tailwind CSS 4 y JavaScript puro.

**Página publicada:** [Abrir Barbería Urbana](https://josephgerardogonzalez-blip.github.io/barberia-urbana/)

## Descripción

La página presenta una barbería ficticia con servicios, galería, preguntas frecuentes y un formulario de demostración. Los precios, horarios y datos de contacto son ejemplos; no describen un negocio real.

## Archivos

- `index.html`: contenido y estructura de la página.
- `js/main.js`: funciones del menú móvil, cambio de tema, acordeón y validación del formulario.
- `docs/bitacora-iteraciones.md`: registro de las iteraciones con IA, pruebas y cambios manuales del estudiante.

## Funciones

- Diseño adaptable a computador, tableta y celular.
- Menú móvil que se abre y se cierra.
- Cambio entre modo claro y oscuro.
- Preguntas frecuentes desplegables.
- Formulario con campos obligatorios y validación del correo.
- Mensajes de error junto a los campos.
- Aviso de demostración al validar datos.

El formulario no envía ni guarda información y no reserva citas reales.

## Tecnologías

- HTML5.
- Tailwind CSS 4 mediante Play CDN.
- JavaScript puro.
- Fuentes Manrope y Playfair Display.

El Play CDN se usó para el ejercicio académico. Tailwind lo recomienda para desarrollo y aprendizaje; para producción se recomienda compilar Tailwind.

## Validación W3C

Se subió `index.html` al validador W3C. El informe mostró dos errores: no acepta `type="text/tailwindcss"` y marca `@theme` como una regla desconocida. Se conservaron porque forman parte del bloque que Tailwind Play CDN utiliza para procesar los estilos personalizados. Por eso, el resultado W3C no quedó libre de errores. La página también se comprobó en el navegador.

## Lighthouse

En la primera revisión Mobile, Lighthouse mostró Rendimiento 62, Accesibilidad 100, Buenas prácticas 100 y SEO 100. Después de optimizar las imágenes, la revisión mostró Rendimiento 97 y mantuvo las otras tres categorías en 100. Las puntuaciones pueden variar entre ejecuciones.

## Cambios manuales

El estudiante realizó estos tres cambios directamente en el código:

- Cambió el precio de ejemplo de Corte clásico a `$38.000`.
- Modificó la descripción de ese servicio.
- Actualizó el texto alternativo de una imagen de la galería.

## Publicación

El sitio está publicado en GitHub Pages desde la rama `main` y la carpeta raíz del repositorio. Se comprobó que abre en computador y celular.

## Bitácora

Consulta la [bitácora de iteraciones](docs/bitacora-iteraciones.md) para ver los prompts, los cambios comprobados y las pruebas realizadas.
