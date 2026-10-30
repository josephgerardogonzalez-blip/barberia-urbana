# Guion de sustentación: Barbería Urbana

**Duración prevista:** unos 8 minutos. Es un borrador para practicar; ajusta las frases personales para que describan tu experiencia real. Los tiempos son orientativos.

## 0:00–0:40 · Presentación

> Hola. Mi proyecto se llama Barbería Urbana y es una página ficticia que desarrollé para el taller universitario sobre creación de sitios web con Tailwind CSS e inteligencia artificial. La propuesta está dirigida a personas que buscan cortes y cuidado de barba en un espacio moderno. No representa un negocio real: los precios, horarios y datos de contacto son ejemplos, y el formulario no hace reservas.

## 0:40–1:25 · Diseño y tecnologías

> Elegí una identidad visual de barbería contemporánea. El carbón `#18181B` da el fondo oscuro, el dorado `#D4AF37` destaca botones y detalles, y los fondos claros permiten cambiar al tema claro. Para los títulos usé Playfair Display y para el texto Manrope. El tema y las fuentes se definen con `@theme` de Tailwind CSS 4.
>
> La estructura está en `index.html`; las interacciones están en `js/main.js`; la bitácora, esta guía y el guion están en `docs/`. La página usa HTML, Tailwind CSS 4 y JavaScript sin frameworks. Tailwind Play CDN facilitó el trabajo del ejercicio, aunque para producción se recomienda compilar Tailwind.

## 1:25–2:15 · Aprendizajes de la investigación

> De la investigación y la práctica me llevo tres aprendizajes. Primero, Tailwind construye estilos combinando clases pequeñas en el HTML y permite personalizar colores y fuentes con el tema. Segundo, los prefijos `sm:`, `md:` y `lg:` sirven para adaptar el diseño a distintos anchos, por ejemplo apilar o poner en columnas las tarjetas. Tercero, la inteligencia artificial es más útil cuando recibe un problema concreto y un resultado comprobable; sus sugerencias hay que revisarlas en el navegador y en las herramientas de validación.

## 2:15–3:05 · Las cinco partes del prompt maestro

> Organicé el prompt maestro en cinco partes. La primera define el rol de desarrollo y mi contexto como estudiante principiante. La segunda fija las tecnologías y límites, como HTML, Tailwind 4 y JavaScript puro. La tercera describe el diseño y los requisitos de la página: secciones, accesibilidad y funciones. La cuarta establece el método de trabajo por fases, con pruebas, bitácora y tres cambios manuales hechos por mí. La quinta explica cómo quería recibir la ayuda: en español, con palabras sencillas, archivos completos y sin inventar pruebas ni resultados.

## 3:05–4:25 · Bitácora de iteraciones

> La bitácora registra seis ajustes comprobados. En la galería corregí una imagen que no cargaba. Después mejoré el contraste de los errores y de los iconos en modo oscuro, y ajusté el contorno de foco para que se vea en superficies claras y oscuras. También actualicé el texto alternativo de la foto principal para describir la barba que aparece. Finalmente, Lighthouse señaló una oportunidad de entrega de imágenes: reduje su tamaño y calidad y activé carga diferida debajo del hero.
>
> La primera medición Mobile dio 62 en rendimiento y 100 en las otras categorías. Después del ajuste de imágenes, la captura mostró 97 en rendimiento y mantuvo 100 en accesibilidad, buenas prácticas y SEO. Es el resultado de esa ejecución; Lighthouse puede variar entre ejecuciones.

## 4:25–6:20 · Demostración del sitio

> Ahora voy a recorrer la página. En la parte superior está el menú, que se convierte en botón hamburguesa en una ventana estrecha. El botón de tema alterna entre modo oscuro y claro. En el hero están la imagen principal, el mensaje y los botones que llevan a servicios y contacto.
>
> En servicios se muestran tres opciones y precios de ejemplo en pesos colombianos. La sección “Nosotros” y las fotografías se identifican como contenido ilustrativo. En preguntas frecuentes, al abrir una respuesta se puede leer la información y el control indica su estado.
>
> En el formulario, los campos son obligatorios y el correo se revisa. Si se deja vacío, aparecen mensajes junto a los campos; si el correo tiene formato incorrecto, se indica cómo corregirlo. Con datos ficticios válidos, aparece un aviso de demostración. No se envían ni se guardan los datos, y no se confirma una cita real.

## 6:20–7:20 · Cambios manuales y clases de Tailwind

> El taller pedía tres cambios sin usar inteligencia artificial. Yo cambié manualmente el precio de Corte clásico de 35.000 a 38.000 pesos, adapté su descripción y actualicé el texto alternativo de una foto de la galería para explicar qué aparece.
>
> Algunas clases de Tailwind que puedo explicar son `px-4`, que agrega espacio horizontal; `grid`, que organiza elementos en una cuadrícula; `md:grid-cols-2`, que pone dos columnas desde el ancho mediano; `lg:grid-cols-3`, que permite tres columnas en pantallas grandes; `hover:-translate-y-1`, que eleva un poco una tarjeta al pasar el puntero; y `focus-visible:`, que muestra un estilo al navegar con teclado. También definí colores propios en `@theme`.

## 7:20–8:00 · Pruebas y conclusión personal

> Revisé el diseño en ventanas estrechas y confirmé el menú móvil y el formulario apilado. Probé el cambio de tema, las preguntas, los errores del formulario y su aviso de validación. El validador W3C mostró dos mensajes relacionados con la sintaxis específica de Tailwind Play CDN; los dejé documentados y comprobé la página en el navegador. Lighthouse registró 97 en rendimiento y 100 en las otras tres categorías en la segunda captura.
>
> Para cerrar, completa esta frase con tu experiencia verdadera: “Lo que más aprendí fue ________, y la parte que más me costó fue ________. Si continuara el proyecto, mejoraría ________.” Gracias.

## Antes de grabar

- Practica con cronómetro una vez y ajusta las pausas para no pasar de nueve minutos.
- Ten abiertas la página, la bitácora y la captura final de Lighthouse.
- Usa únicamente datos ficticios si muestras el formulario.
- Las capturas guardadas en `docs/capturas/` pueden mostrar parte de una ruta local de Windows. Si compartes la sustentación o subes material público, oculta esa parte o usa capturas recortadas.
- Completa las tres partes en blanco de la conclusión con tu opinión personal.
