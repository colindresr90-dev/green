# Parque Industrial Verde (PIV) — Valor Circular Lab

Sitio web oficial del **Parque Industrial Verde**, una iniciativa dedicada a la economía circular a escala industrial. Ofrece infraestructura, trazabilidad y soluciones ambientales para empresas y comunidades en El Salvador.

Este proyecto está construido sobre **TanStack Start** (React 19 + TypeScript + Vite + Tailwind CSS) y utiliza **Nitro** como motor de servidor para una renderización rápida (SSR) y despliegue óptimo.

---

## 🚀 Inicio Rápido (Local)

### Requisitos Previos

Asegúrate de tener instalado [Node.js](https://nodejs.org/) (v18 o superior) o [Bun](https://bun.sh/).

### Instalación de Dependencias

Usa `npm` o `bun` para instalar las dependencias:

```bash
npm install
# o con Bun:
bun install
```

### Servidor de Desarrollo

Inicia el entorno de desarrollo local:

```bash
npm run dev
# o con Bun:
bun run dev
```

El sitio estará disponible en [http://localhost:8080](http://localhost:8080).

---

## 🛠️ Construcción para Producción

Para compilar la aplicación para producción con optimización completa:

```bash
npm run build
# o con Bun:
bun run build
```

Esto compilará el código de cliente y servidor generando un directorio `.output/` listo para el despliegue a través de Nitro.

---

## 📦 Guía de Despliegue (Deployment)

El proyecto está configurado para ejecutarse con soporte nativo de **Nitro**. Puedes desplegarlo fácilmente en los proveedores de hosting más populares conectando este repositorio de GitHub.

### 1. Despliegue en Vercel (Recomendado)
Vercel detecta automáticamente los proyectos de TanStack Start y Nitro con cero configuración.

1. Ve a tu panel de **Vercel** y haz clic en **New Project**.
2. Conecta tu repositorio `green` de GitHub.
3. Vercel detectará el proyecto. Asegúrate de configurar los comandos así:
   - **Framework Preset**: `Vite` o `Other` (Vercel detectará Nitro automáticamente).
   - **Build Command**: `npm run build`
   - **Output Directory**: `.output/public`
4. Haz clic en **Deploy**.

### 2. Despliegue en Netlify
Netlify es socio oficial de TanStack Start y ofrece soporte nativo para funciones en el Edge.

1. Ve a tu panel de **Netlify** y selecciona **Import from Git**.
2. Conecta tu repositorio.
3. Configura los parámetros de construcción:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `.output/public`
4. Haz clic en **Deploy Site**.

### 3. Despliegue en Cloudflare Pages
El preset por defecto de Nitro en el archivo `vite.config.ts` está configurado para ejecutarse en Cloudflare.

1. Ve a tu panel de **Cloudflare Dashboard** > **Workers & Pages**.
2. Crea una nueva Pages App conectando tu repositorio de GitHub.
3. En la configuración de compilación, selecciona:
   - **Framework Preset**: `None`
   - **Build Command**: `npm run build`
   - **Build Output Directory**: `.output/public`
4. En **Environment Variables**, asegúrate de que la versión de Node sea compatible (por ejemplo, `NODE_VERSION: 20`).
5. Guarda y despliega.

---

## 🏗️ Estructura del Proyecto

- `src/components/`: Componentes interactivos y de interfaz de usuario.
- `src/routes/`: Rutas del sitio web basadas en archivos de TanStack Router.
  - `__root.tsx`: Contenedor principal de la aplicación.
  - `index.tsx`: Página de Inicio (Home).
  - `contacto.tsx`: Página de contacto.
  - `materiales.tsx`: Detalle de los materiales gestionados.
  - `servicios.tsx`: Servicios de valorización y logística.
  - `sobre-nosotros.tsx`: Información corporativa.
- `src/lib/`: Utilidades comunes y configuración SEO.
- `src/assets/`: Imágenes, logotipos y recursos multimedia.
- `vite.config.ts`: Configuración del compilador Vite y plugins de TanStack Start + Nitro.
