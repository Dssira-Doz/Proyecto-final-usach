# Proyecto Final USACH

Este proyecto es una aplicación web desarrollada con React y Vite, que simula un blog y portafolio de servicios digitales. Incluye vistas para blog, contacto, servicios, proyectos, y más.

## Estructura del Proyecto

- `public/`: Archivos estáticos, imágenes y datos del blog (`blogData.json`).
- `src/`: Código fuente principal.
  - `App.jsx`: Componente principal que orquesta la estructura de la aplicación, renderizando el Header, Hero, Pilares, BlogPreview y Footer.
  - `main.jsx`: Punto de entrada de la app, monta el componente `App` en el DOM y aplica los estilos globales.
  - `components/`: Componentes reutilizables (Header, Footer, BlogPreview, etc).
  - `views/`: Vistas principales de la aplicación (Home, Blog, Contacto, etc).
  - `styles/`: Archivos SCSS globales y utilitarios.
  - `assets/`: Imágenes y recursos gráficos.
- `index.html`: Archivo HTML principal.
- `vite.config.js`: Configuración de Vite.
- `package.json`: Dependencias y scripts del proyecto.

## Instalación y Ejecución

1. Clona el repositorio:
   ```bash
   git clone <url-del-repositorio>
   cd Proyecto-final-usach
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
4. Abre la aplicación en tu navegador en `http://localhost:5173` (o el puerto que indique la terminal).

## Scripts Disponibles
- `npm run dev`: Inicia el servidor de desarrollo.
- `npm run build`: Genera la versión de producción.
- `npm run preview`: Previsualiza la versión de producción.

## Notas
- Los datos del blog se encuentran en `public/blogData.json`.
- Las imágenes deben estar en la carpeta `public/images` o `src/assets` según su uso.
- El proyecto utiliza SCSS para los estilos.

## Demo
https://dssira-doz.github.io/Proyecto-final-usach

## Autoría
Proyecto realizado como entrega final para la Universidad de Santiago de Chile.
