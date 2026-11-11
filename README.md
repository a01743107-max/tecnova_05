# TEC NOVA · Landing page

Sitio web estático para GitHub Pages. No utiliza librerías, cuentas ni servidor; los cohetes de fondo están animados con CSS + SVG.

## Publicar en GitHub Pages

1. Descomprime el ZIP y sube **el contenido de la carpeta** a la raíz de un repositorio de GitHub (por ejemplo `tec-nova`). No subas únicamente el ZIP.
2. En el repositorio abre **Settings → Pages**.
3. En **Build and deployment**, elige **Deploy from a branch**.
4. Selecciona `main` y `/(root)` y guarda.
5. La dirección de un repositorio de proyecto suele ser `https://TU-USUARIO.github.io/tec-nova/`. Cambia `TU-USUARIO` por tu nombre de GitHub y usa el nombre real de tu repositorio.

El sitio funciona tanto en una URL de proyecto como en una URL de usuario porque usa rutas relativas.

## Personalizar

- **Integrantes y proyectos:** edita `data.js` y reemplaza los textos de ejemplo. Agrega o quita registros en los arreglos `members` y `projects`.
- **Fotos:** guarda tus fotos en `assets/` y cambia `image: ""` por `image: "assets/foto.jpg"` en el integrante correspondiente.
- **Textos principales:** edita `index.html`.
- **Colores y animaciones:** modifica las variables al inicio de `styles.css`.
- **Logos:** están en `assets/escudo.webp` y `assets/logo-horizontal.webp` (se incluyen también PNG).

## Archivos

- `index.html`: estructura del sitio.
- `styles.css`: diseño, responsive y cohetes animados.
- `script.js`: navegación móvil, tarjetas, entradas al desplazar.
- `data.js`: datos editables para miembros y proyectos.
- `assets/`: imágenes y favicon.

## Accesibilidad y rendimiento

- Sin dependencias externas y sin seguimiento de usuarios.
- Animaciones desactivables automáticamente mediante `prefers-reduced-motion`.
- Menú adaptable, navegación por teclado y textos alternativos en imágenes.
- Las tarjetas de equipo/proyectos son **plantillas**, no información factual del equipo.
