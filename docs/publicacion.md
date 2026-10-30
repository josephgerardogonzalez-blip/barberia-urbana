# Guía para publicar Barbería Urbana

La página es un sitio estático: el archivo de entrada es `index.html` y el JavaScript está en `js/main.js`. No hay que ejecutar una compilación. Para que el sitio cargue, el navegador debe tener internet porque Tailwind Play CDN, Google Fonts y las fotografías se cargan desde servicios externos.

## Antes de publicarlo

1. Abre la carpeta `outputs/barberia-urbana-publicar` en el Explorador de archivos. Preparé esta copia para publicar el código y los documentos, dejando las capturas locales fuera.
2. Comprueba que `index.html` esté directamente dentro de esa carpeta y que existan `js/main.js`, `README.md` y `docs/`.
3. El proyecto usa Tailwind Play CDN para el ejercicio. Tailwind lo describe como una opción de desarrollo; para un sitio de producción se recomienda compilar Tailwind.
4. El repositorio será público: cualquier persona podrá ver los archivos que subas. La carpeta preparada no contiene `docs/capturas/`; esas evidencias se conservan en el proyecto original de tu computador.
5. El formulario solo valida datos de ejemplo; no envía ni guarda solicitudes.

## Opción recomendada: GitHub Pages

Esta opción crea el repositorio público y aloja el sitio en GitHub.

### 1. Crear el repositorio

1. Inicia sesión en [GitHub](https://github.com/).
2. Abre el menú **+** de la esquina superior derecha y elige **New repository**.
3. Escribe un nombre sencillo, por ejemplo `barberia-urbana`.
4. En **Visibility**, selecciona **Public**.
5. Deja desactivada la opción para crear un README inicial. El proyecto ya tiene su propio `README.md`.
6. Pulsa **Create repository**. GitHub documenta estos pasos en su [guía para crear repositorios](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository).

### 2. Subir el sitio y sus documentos

Para que la dirección del sitio funcione, `index.html` debe quedar en la raíz del repositorio. Sube los elementos de la carpeta `barberia-urbana`, sin envolverlos en una carpeta externa.

1. En el repositorio, selecciona **Add file** → **Upload files**.
2. Desde el Explorador de archivos, abre `outputs/barberia-urbana-publicar`.
3. En esa ventana, pulsa **Ctrl+A** para seleccionar lo que está dentro de la carpeta: `index.html`, `README.md`, `js` y `docs`.
4. Arrastra la selección al área de carga de GitHub. Al hacerlo, el `index.html` debe quedar en la raíz del repositorio, junto con `README.md`, `js/` y `docs/`.
5. En **Commit changes**, escribe `Subir proyecto Barbería Urbana` y confirma **Commit changes**.

La interfaz web de GitHub permite cargar archivos o carpetas; cada archivo subido desde el navegador debe ser menor de 25 MiB. Consulta [cómo subir archivos a un repositorio](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository).

### 3. Activar GitHub Pages

1. En el repositorio, abre **Settings**.
2. En el menú lateral, elige **Pages**.
3. En **Build and deployment**, selecciona **Deploy from a branch**.
4. En **Branch**, elige `main` y la carpeta `/(root)`; pulsa **Save**.
5. Espera a que aparezca el enlace del sitio en esa misma sección. La primera publicación puede tardar unos minutos; GitHub indica que los cambios pueden tardar hasta 10 minutos.
6. La dirección tendrá esta forma: `https://TU-USUARIO.github.io/barberia-urbana/`. Cambia `TU-USUARIO` por tu nombre de usuario real de GitHub.

La documentación oficial explica cómo elegir una rama y una carpeta como fuente de publicación en [GitHub Pages](https://docs.github.com/en/pages/quickstart?library=true).

### 4. Comprobarlo desde el celular

1. Copia la dirección que muestra **Settings → Pages**.
2. Ábrela en el navegador del celular con conexión a internet.
3. Comprueba el menú, el tema claro/oscuro, los servicios, las preguntas y que el formulario advierta que es una demostración.
4. Si algo no carga, revisa primero que `index.html` esté en la raíz y que la subida incluya `js/main.js`.

## Alternativa: Netlify Drop

Netlify permite publicar una carpeta estática arrastrándola a su zona de despliegue. La guía oficial está en [Netlify Drop](https://docs.netlify.com/start/quickstarts/netlify-drop-quickstart/) y en [crear despliegues](https://docs.netlify.com/deploy/create-deploys/).

1. Inicia sesión en Netlify y abre su opción **Add new project** → **Deploy manually** (el nombre puede variar con la interfaz).
2. En el Explorador, arrastra la carpeta `barberia-urbana-publicar` a la zona de carga.
3. Cuando termine el despliegue, Netlify mostrará una dirección del sitio. Ábrela en el celular y repite las comprobaciones anteriores.

## Si no aparece la página

- Confirma que el archivo se llame exactamente `index.html` y no `index.html.txt`.
- En GitHub Pages, confirma `main` y `/(root)` en **Settings → Pages**.
- Comprueba que `js/main.js` esté dentro de `js/` y que la carpeta esté en la raíz del repositorio.
- Recarga después de esperar unos minutos. Las imágenes y estilos externos necesitan conexión a internet.
