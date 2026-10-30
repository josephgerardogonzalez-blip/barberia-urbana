# Bitácora de iteraciones con IA

Proyecto: **Barbería Urbana** · Taller universitario de Tailwind CSS 4 e inteligencia artificial.

Esta bitácora reúne seis iteraciones de mejora, comprobaciones realizadas y tres cambios manuales del estudiante. Los resultados corresponden a observaciones y capturas compartidas durante la revisión.

## Prompt maestro del proyecto

El siguiente es el texto íntegro del encargo inicial. Los prompts de la tabla son las instrucciones concretas usadas en cada iteración de mejora.

<details>
<summary>Ver prompt maestro completo</summary>

# PROYECTO ACADÉMICO: BARBERÍA URBANA CON TAILWIND CSS 4

## 1. Rol

Actúa como un desarrollador frontend con experiencia en HTML, Tailwind CSS 4, JavaScript, diseño UX/UI, accesibilidad web y publicación de sitios web. También actúa como mi tutor personal de programación, porque soy estudiante de Ingeniería de Software y necesito aprender cómo funciona todo lo que desarrolles.

## 2. Contexto

Estoy realizando un taller universitario individual llamado "Investigación y desarrollo de un sitio web con Tailwind CSS e inteligencia artificial".

Debo crear una página web funcional para una barbería ficticia llamada "Barbería Urbana". Todavía estoy empezando y necesito que me guíes paso a paso.

Mi nivel de programación es básico. Explícame en español, con palabras sencillas, qué archivos creas, dónde están, para qué sirve cada uno y cómo funciona el código.

El proyecto debe cumplir los requisitos académicos indicados a continuación. No quiero que te limites a darme fragmentos de código: necesito que trabajes sobre los archivos del proyecto cuando las herramientas y permisos disponibles lo permitan.

## 3. Tecnologías y restricciones

- HTML5.
- Tailwind CSS 4.
- JavaScript puro, sin React, Vue, Bootstrap ni otras librerías de interfaz.
- Puedes utilizar Google Fonts, con un máximo de dos familias tipográficas.
- Para la versión inicial puedes usar el Play CDN oficial de Tailwind CSS 4, tal como permite la guía del taller.
- Si utilizas Play CDN, explica que está pensado para desarrollo y no es la opción recomendada para producción.
- No instales programas, paquetes ni dependencias sin explicarme para qué sirven y solicitar mi autorización cuando sea necesario.
- No borres ni sobrescribas archivos existentes sin comprobar primero su contenido y explicarme el cambio.
- No inventes resultados de pruebas, puntuaciones de Lighthouse ni enlaces de publicación.

## 4. Diseño de la página

Crea una página moderna, elegante y profesional para una barbería.

Nombre: Barbería Urbana.

Estilo visual: moderno, masculino, elegante y relacionado con el mundo de las barberías.

Paleta inicial:
- Color dominante: negro carbón #18181B.
- Color secundario: gris claro #E5E7EB.
- Color de acento: dorado #D4AF37.
- Color para éxito: verde.
- Color para errores: rojo.
- Color para advertencias: amarillo.

Aplica la regla 60-30-10 de manera aproximada y comprueba el contraste de los textos y botones.

Define los colores y las fuentes personalizadas con el mecanismo @theme de Tailwind CSS 4.

Utiliza una jerarquía tipográfica clara, espacios consistentes, tarjetas ordenadas, imágenes apropiadas y animaciones moderadas.

## 5. Secciones obligatorias

Construye una página que incluya, en este orden:

1. Navbar con nombre o logo de la barbería y enlaces a las secciones.
2. Menú hamburguesa funcional en dispositivos móviles.
3. Hero con imagen principal, título, descripción y botones para consultar servicios y solicitar una cita.
4. Sección de servicios en tarjetas con nombre, descripción y precios de ejemplo en pesos colombianos.
5. Sección "Nosotros" con información ficticia claramente presentada como contenido de ejemplo.
6. Galería de fotografías relacionadas con barbería y cortes de cabello.
7. Preguntas frecuentes mediante un acordeón funcional con JavaScript.
8. Formulario para solicitar una cita con nombre, correo, teléfono, servicio y fecha.
9. Pie de página con datos de ejemplo, horarios y enlaces a redes sociales.

Los datos de contacto deben identificarse como ficticios y no debes inventar direcciones reales.

## 6. Funcionalidades obligatorias

- Diseño responsive para celular, tableta y computador.
- Utilizar los prefijos responsive sm:, md: y lg: como mínimo.
- Menú hamburguesa que se abra y se cierre correctamente.
- Cerrar el menú móvil al seleccionar un enlace.
- Botón funcional para cambiar entre modo claro y modo oscuro.
- Estados hover, focus y disabled cuando correspondan.
- Indicadores de foco visibles para usuarios que navegan con teclado.
- Formulario con campos obligatorios.
- Validación del formato del correo mediante JavaScript.
- Mostrar los errores junto a los campos correspondientes.
- Mostrar un toast de confirmación al enviar correctamente el formulario.
- Incluir al menos un componente adicional, como el acordeón de preguntas frecuentes.
- Añadir textos alternativos descriptivos a las imágenes.
- Mantener etiquetas asociadas a los campos del formulario.
- Respetar un contraste mínimo de 4.5:1 para el texto normal.
- Evitar que el formulario afirme que una cita real quedó reservada si todavía no existe un sistema de reservas conectado.

## 7. Método de trabajo

Trabaja por fases y no des por terminada una fase sin comprobar sus resultados.

### Fase 1: revisar y planificar

Comprueba la carpeta de trabajo y explícame qué contiene.

Si está vacía, propón una estructura sencilla para el proyecto.

Muéstrame el mapa de la página, los archivos necesarios y las funciones que tendrá.

### Fase 2: crear la página

Crea los archivos necesarios y escribe el código completo.

Para cada archivo, explícame:
- Qué contiene.
- Para qué sirve.
- Qué partes son importantes.
- Cómo se relaciona con los demás archivos.

Mantén el proyecto sencillo y organizado para que un estudiante principiante pueda entenderlo.

### Fase 3: ejecutar y corregir

Comprueba el funcionamiento de la página en el navegador cuando las herramientas disponibles lo permitan.

Revisa los errores de JavaScript, el menú móvil, el cambio de tema, el acordeón, el formulario y el diseño responsive.

No afirmes que algo funciona si no lo has probado.

### Fase 4: bitácora de prompts

Necesito registrar un mínimo de cinco iteraciones de mejora con IA para el taller.

Después de identificar problemas reales, ayúdame a redactar cinco prompts de ajuste diferentes.

Para cada iteración registra:
- Número.
- Prompt de ajuste enviado.
- Problema que buscaba resolver.
- Resultado obtenido.
- Si funcionó o no.

No inventes errores ni resultados. Si una prueba no detecta problemas, propón mejoras reales de diseño o accesibilidad y registra el resultado comprobado.

Guarda la bitácora en un archivo Markdown que después pueda incorporar al README.md de GitHub.

### Fase 5: tres cambios manuales

El profesor exige tres modificaciones realizadas directamente por mí, sin usar IA para hacerlas.

No las realices automáticamente.

En su lugar, enséñame tres cambios pequeños y útiles, uno por uno. Indícame el archivo, la sección exacta, qué código debo buscar y qué debo cambiar. Déjame realizar cada modificación y después ayúdame a comprobarla.

### Fase 6: pruebas

Explícame cómo:
- Probar la página en diferentes tamaños de pantalla.
- Validar el HTML con https://validator.w3.org/.
- Ejecutar Lighthouse en Google Chrome.
- Revisar accesibilidad y contraste.
- Guardar las capturas de las pruebas.

Ayúdame a corregir los problemas que se encuentren. No inventes puntuaciones ni capturas.

### Fase 7: publicación

Cuando la página esté lista, explícame cómo:
- Crear un repositorio público en GitHub.
- Subir los archivos y las imágenes.
- Crear un README.md con la descripción del proyecto y la bitácora.
- Publicar la página mediante GitHub Pages o Netlify.
- Comprobar que el sitio se abra desde un celular.

No publiques ni modifiques cuentas externas sin mi autorización.

### Fase 8: preparación de la sustentación

Cuando terminemos, prepara un guion sencillo para un video de aproximadamente ocho minutos, con un máximo de nueve minutos.

Debe incluir:
1. Presentación de la barbería, público objetivo, colores y fuentes.
2. Tres aprendizajes de la investigación sobre Tailwind CSS e IA.
3. Explicación de las cinco partes del prompt maestro.
4. Bitácora de iteraciones.
5. Demostración de la página y sus funcionalidades.
6. Explicación de los tres cambios manuales y de al menos cinco clases de Tailwind.
7. Conclusiones personales.

Adapta el guion a lo que realmente hayamos construido y probado.

## 8. Forma de explicarme las cosas

- Háblame siempre en español.
- Usa palabras sencillas y ejemplos concretos.
- No des por hecho que conozco Git, GitHub, terminales o herramientas de desarrollo.
- Si necesito ejecutar un comando, dime dónde abrir la terminal, qué debo escribir y qué resultado debería ver.
- Si aparece un error, explícame qué significa y cómo solucionarlo paso a paso.
- No me entregues demasiadas instrucciones técnicas de golpe.
- Diferencia claramente lo que haces tú, lo que debo hacer yo y lo que falta por comprobar.
- No digas que el proyecto está terminado hasta que se hayan revisado los requisitos.

## 9. Primera acción

Empieza únicamente con la Fase 1.

Revisa la carpeta de trabajo, comprueba si hay archivos existentes y explícame el plan. Después continúa de manera ordenada con la creación del proyecto, sin saltarte las explicaciones.

Quiero terminar con una página web funcional, el código organizado, las pruebas realizadas, la bitácora documentada y el proyecto listo para publicar.

</details>

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
| Ejecutar Lighthouse en Chrome, modo Mobile | La captura mostró Rendimiento 62, Accesibilidad 100, Buenas prácticas 100 y SEO 100 para `http://127.0.0.1:8765/`. Métricas visibles: FCP 4,1 s, LCP 4,1 s, TBT 580 ms, CLS 0 y Speed Index 4,1 s. Insights: recursos que bloquean renderizado (ahorro estimado 1.340 ms), caché (12 KiB), latencia de solicitud (16 KiB) y entrega de imágenes (191 KiB). | Se registraron las puntuaciones e insights de esa ejecución. La oportunidad de renderizado bloqueante quedó anotada; en la iteración 6 se priorizó optimizar imágenes y no se realizó un ajuste específico para los recursos bloqueantes. |
| Repetir Lighthouse Mobile tras optimizar imágenes | La optimización redujo las dimensiones y calidad de las imágenes y añadió carga diferida debajo del hero. La captura mostró Rendimiento 97, Accesibilidad 100, Buenas prácticas 100 y SEO 100. | El rendimiento subió de 62 a 97 en esta medición; las otras tres puntuaciones se mantuvieron en 100. |

## Cambios manuales realizados por el estudiante

| N.º | Cambio | Comprobación |
|---:|---|---|
| 1 | Cambió el precio de ejemplo del corte clásico de `$35.000` a `$38.000` en `index.html`. | El archivo guardado contiene `$38.000` en la tarjeta “Corte clásico”. |
| 2 | Cambió la descripción de Corte clásico por “Un corte diseñado para ti, con acabado limpio y un estilo que habla de ti.” | El archivo guardado contiene el nuevo texto en la primera tarjeta de servicios. |
| 3 | Actualizó el texto alternativo de la segunda foto de galería para describir el corte observado. | El archivo guardado contiene `alt="Barbero cortando el cabello de un cliente desde atrás"`. |
