# Bitácora de iteraciones con IA

Proyecto: **Barbería Urbana** · Taller universitario de Tailwind CSS 4 e inteligencia artificial.

Esta bitácora se completará después de ejecutar las comprobaciones del proyecto. Cada resultado debe describir una observación real; no se deben inventar fallos, mejoras ni resultados de pruebas.

| N.º | Prompt de ajuste enviado | Problema observado que buscaba resolver | Resultado comprobado | ¿Funcionó? |
|---:|---|---|---|---|
| 1 | “Revisa la galería y reemplaza la fotografía que aparece rota por una imagen de barbería que cargue; conserva un texto alternativo descriptivo.” | En la captura del navegador, la tercera foto de la galería no cargó y apareció el texto alternativo en su lugar. | Reemplacé la URL por la foto del hero. Después de recargar, el estudiante confirmó que la foto ya aparece cargada. | Sí |
| 2 | “Comprueba el contraste del asterisco obligatorio y de los mensajes de error en modo oscuro; ajusta el color para que el texto normal alcance al menos 4,5:1.” | El rojo `#b42318` sobre la tarjeta oscura `#27272a` daba 2,27:1, por debajo del mínimo de 4,5:1. | Hice que el texto de error cambie según el tema: conserva `#b42318` en claro y usa `#fca5a5` en oscuro. El contraste calculado en la tarjeta oscura es 7,85:1. | Sí, por cálculo de contraste |
| 3 | “Ajusta el color de los iconos de servicios para que se distingan también en modo oscuro y conserven contraste suficiente sobre sus círculos de fondo.” | En modo oscuro, los iconos carbón sobre el fondo dorado translúcido daban 1,78:1, insuficiente para distinguir el componente. | Cambié los iconos a un color de acento que se adapta al tema. El contraste calculado en oscuro es 6,48:1 y en claro es 5,92:1. | Sí, por cálculo de contraste |
| 4 | “Revisa el indicador de foco sobre superficies claras y oscuras; usa un color de contorno que se distinga sin perder visibilidad sobre la barra y el hero oscuros.” | El contorno dorado `#d4af37` sobre el fondo claro tenía 1,93:1, poco visible. | El foco ahora usa un tono oscuro en superficies claras (6,25:1 sobre papel) y amarillo claro en fondos oscuros (11,52:1 sobre carbón); barra y hero conservan un contorno claro. | Sí, por cálculo de contraste |
| 5 | “Revisa el texto alternativo de la imagen principal y haz que describa lo que realmente se ve en la fotografía.” | La foto principal muestra a un barbero perfilando una barba con tijeras, pero su texto alternativo mencionaba el cabello y un espejo. | Actualicé el texto alternativo para describir el arreglo de barba que se observa. | Sí, comprobado visualmente con la captura |
| 6 | “Reduce el peso de las fotografías que Lighthouse señaló, conserva un tamaño visual adecuado y carga de forma diferida las imágenes que están debajo del hero.” | La auditoría Mobile estimó que se podían ahorrar 191 KiB en la entrega de imágenes. La foto de “Nosotros” también se cargaba desde el inicio aunque está debajo del hero. | Reduje las dimensiones y calidad de las URLs de Unsplash y añadí carga diferida a las fotos que están debajo del hero. En la segunda medición Mobile, Rendimiento subió de 62 a 97; Accesibilidad, Buenas prácticas y SEO se mantuvieron en 100. | Sí, según la segunda captura de Lighthouse |

## Cómo completar una entrada

1. Anota qué viste en el navegador o en una herramienta de revisión.
2. Convierte esa observación en una instrucción concreta para la IA.
3. Registra el cambio realizado y vuelve a comprobar el mismo caso.
4. Indica si el resultado resolvió el problema, solo lo mejoró o no lo resolvió.

## Comprobaciones manuales observadas

| Caso | Resultado observado | Estado |
|---|---|---|
| Enviar el formulario con todos los campos vacíos | Apareció un mensaje junto a cada campo obligatorio y el foco quedó en el campo Nombre. Evidencia: captura compartida por el estudiante. | Correcto |
| Probar el correo `correo invalido` y dejar los otros campos vacíos | El correo mostró “Escribe un correo válido, por ejemplo nombre@dominio.com.” Los otros cuatro campos continuaron con el mensaje de obligatorio. Evidencia: captura compartida por el estudiante. | Correcto |
| Enviar datos de ejemplo válidos | El formulario mostró el aviso “Formulario validado en esta demostración. No se envió ni reservó una cita.” Evidencia: captura compartida por el estudiante. | Correcto |
| Cambiar de modo oscuro a modo claro | La página pasó a superficies claras y el botón cambió su etiqueta a “Modo oscuro”. La captura también muestra el foco visible del botón. | Correcto |
| Abrir preguntas consecutivas del acordeón | El estudiante confirmó que cada respuesta se despliega y que al abrir otra se cierra la anterior. | Correcto |
| Menú en ventana estrecha | El estudiante confirmó que el menú móvil aparece, se abre y se cierra al seleccionar un enlace. | Correcto |
| Revisar el diseño en una ventana tipo tableta | La captura muestra el menú móvil y el formulario en dos columnas sin desbordamiento horizontal visible. | Correcto para ancho tipo tableta |
| Revisar el diseño en una ventana tipo celular | La captura más estrecha muestra los campos del formulario apilados en una columna, el botón de menú visible y sin desbordamiento horizontal aparente. | Correcto según la captura |
| Subir `index.html` al validador W3C | El checker mostró dos errores: no reconoce `type="text/tailwindcss"` en el bloque `style` y marca `@theme` como regla desconocida. | Se conservó el bloque porque es la sintaxis documentada por Tailwind Play CDN para estilos personalizados. El sitio carga en el navegador; estos dos mensajes reflejan que el checker no interpreta las extensiones de Tailwind. Referencia: https://tailwindcss.com/docs/installation/play-cdn |
| Ejecutar Lighthouse en Chrome, modo Mobile | La captura mostró Rendimiento 62, Accesibilidad 100, Buenas prácticas 100 y SEO 100 para `http://127.0.0.1:8765/`. Métricas visibles: FCP 4,1 s, LCP 4,1 s, TBT 580 ms, CLS 0 y Speed Index 4,1 s. Insights: recursos que bloquean renderizado (ahorro estimado 1.340 ms), caché (12 KiB), latencia de solicitud (16 KiB) y entrega de imágenes (191 KiB). | Puntuaciones e insights registrados. Falta identificar los recursos concretos de la auditoría de renderizado bloqueante antes de decidir un ajuste. |
| Repetir Lighthouse Mobile tras optimizar imágenes | La optimización redujo las dimensiones y calidad de las imágenes y añadió carga diferida debajo del hero. | La captura mostró Rendimiento 97, Accesibilidad 100, Buenas prácticas 100 y SEO 100. | Mejoró el rendimiento de 62 a 97 en esta medición; las otras tres puntuaciones conservaron 100. |

## Cambios manuales realizados por el estudiante

| N.º | Cambio | Comprobación |
|---:|---|---|
| 1 | Cambió el precio de ejemplo del corte clásico de `$35.000` a `$38.000` en `index.html`. | El archivo guardado contiene `$38.000` en la tarjeta “Corte clásico”. |
| 2 | Cambió la descripción de Corte clásico por “Un corte diseñado para ti, con acabado limpio y un estilo que habla de ti.” | El archivo guardado contiene el nuevo texto en la primera tarjeta de servicios. |
| 3 | Actualizó el texto alternativo de la segunda foto de galería para describir el corte observado. | El archivo guardado contiene `alt="Barbero cortando el cabello de un cliente desde atrás"`. |
