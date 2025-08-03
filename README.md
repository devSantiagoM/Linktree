# 🚀 Santiago Martinez - Personal LinkTree

[![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.0.4-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.11-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js)](https://nodejs.org/)

Un portafolio personal moderno y elegante construido con React, TypeScript y TailwindCSS. Este proyecto presenta una página de enlaces estilo LinkTree con efectos visuales atractivos y una experiencia de usuario optimizada.

## ✨ Características

[![Responsive](https://img.shields.io/badge/Responsive-Design-4A90E2?style=for-the-badge&logo=responsive)](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)
[![Performance](https://img.shields.io/badge/Performance-Optimized-00D4AA?style=for-the-badge&logo=speedtest)](https://web.dev/performance/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Typed-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Modern](https://img.shields.io/badge/Modern-Design-FF6B6B?style=for-the-badge&logo=design)](https://www.figma.com/)

- **🎨 Diseño Moderno**: Interfaz elegante con gradientes y efectos visuales
- **📱 Responsive**: Optimizado para todos los dispositivos
- **⚡ Performance**: Construido con Vite para máxima velocidad
- **🎯 TypeScript**: Código tipado para mayor robustez
- **🎭 Animaciones**: Efectos visuales suaves y atractivos
- **🔗 Enlaces Dinámicos**: Sistema de tarjetas interactivas para enlaces
- **🎨 TailwindCSS**: Estilos modernos y consistentes
- **📦 Componentes Reutilizables**: Arquitectura modular y escalable

## 🛠️ Tecnologías Utilizadas

### Frontend

- **React 19** - Biblioteca de interfaz de usuario
- **TypeScript** - Tipado estático para JavaScript
- **Vite** - Herramienta de construcción rápida
- **TailwindCSS 4** - Framework de CSS utilitario
- **Lucide React** - Iconografía moderna

### Herramientas de Desarrollo

- **ESLint** - Linting de código
- **Prettier** - Formateo de código
- **shadcn/ui** - Componentes de UI reutilizables

## 📁 Estructura del Proyecto

```
linktree/
├── src/
│   ├── components/
│   │   ├── ui/           # Componentes de UI reutilizables
│   │   │   ├── card.tsx
│   │   │   ├── button.tsx
│   │   │   └── square.tsx
│   │   ├── hero.tsx      # Componente principal con enlaces
│   │   ├── footer.tsx    # Pie de página
│   │   └── curveloop.tsx # Componente de animación de texto
│   ├── lib/              # Utilidades y configuraciones
│   ├── assets/           # Recursos estáticos
│   ├── App.tsx           # Componente raíz
│   └── main.tsx          # Punto de entrada
├── public/               # Archivos públicos
├── package.json          # Dependencias y scripts
├── vite.config.ts        # Configuración de Vite
├── tailwind.config.js    # Configuración de TailwindCSS
└── tsconfig.json         # Configuración de TypeScript
```

## 🚀 Instalación y Uso

### Prerrequisitos

- Node.js (versión 18 o superior)
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**

   ```bash
   git clone <tu-repositorio>
   cd linktree
   ```

2. **Instalar dependencias**

   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**

   ```bash
   npm run dev
   ```

4. **Construir para producción**

   ```bash
   npm run build
   ```

5. **Vista previa de la construcción**
   ```bash
   npm run preview
   ```

## 🎨 Componentes Principales

### Hero Component (`src/components/hero.tsx`)

- Contiene la información personal y enlaces principales
- Sistema de tarjetas interactivas con gradientes
- Animaciones de hover y transiciones suaves
- Integración con redes sociales y portafolio

### Footer Component (`src/components/footer.tsx`)

- Pie de página con información de copyright
- Efectos visuales con gradientes y animaciones
- Enlaces a portafolio personal

### UI Components

- **Card**: Tarjetas interactivas para enlaces
- **Button**: Botones reutilizables con variantes
- **Square**: Componente de fondo animado

## 🔧 Configuración

### Personalización de Enlaces

Edita el array `links` en `src/components/hero.tsx`:

```typescript
const links = [
  {
    title: "Tu Título",
    description: "Tu descripción",
    icon: TuIcono,
    url: "https://tu-url.com",
    color: "from-color1 to-color2",
  },
  // ... más enlaces
];
```

### Colores y Estilos

- Los colores se configuran usando clases de TailwindCSS
- Los gradientes se definen en el array `links`
- Los estilos globales están en `src/App.css`

## 📱 Responsive Design

El proyecto está optimizado para:

- **Desktop**: Layout de dos columnas
- **Tablet**: Layout adaptativo
- **Mobile**: Layout de una columna

## 🎯 Características Destacadas

### Efectos Visuales

- **Fondo Animado**: Cuadrados interactivos con efectos hover
- **Gradientes**: Colores dinámicos en tarjetas y texto
- **Animaciones**: Transiciones suaves en todos los elementos
- **CurvedLoop**: Componente de texto animado con tecnologías

### Performance

- **Lazy Loading**: Componentes cargados bajo demanda
- **Optimización de Imágenes**: Uso eficiente de recursos
- **Bundle Splitting**: Código dividido para mejor carga

## 🔗 Enlaces Incluidos

- **Portfolio Web**: Proyectos y trabajos
- **GitHub**: Código y repositorios
- **LinkedIn**: Perfil profesional
- **Frontend Projects**: React, Next.js, Vue
- **Backend APIs**: Node.js, Python, Databases
- **Contacto**: Formulario de contacto

## 🚀 Despliegue

[![Vercel](https://img.shields.io/badge/Vercel-Deploy-000000?style=for-the-badge&logo=vercel)](https://vercel.com/)
[![Netlify](https://img.shields.io/badge/Netlify-Deploy-00C7B7?style=for-the-badge&logo=netlify)](https://www.netlify.com/)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Deploy-222222?style=for-the-badge&logo=github)](https://pages.github.com/)

### Vercel (Recomendado)

1. Conecta tu repositorio a Vercel
2. Configura las variables de entorno si es necesario
3. Despliega automáticamente

### Netlify

1. Sube tu código a GitHub
2. Conecta con Netlify
3. Configura el directorio de build: `dist`

### GitHub Pages

```bash
npm run build
# Sube la carpeta dist a tu repositorio
```

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Santiago Martinez**

[![Portfolio](https://img.shields.io/badge/Portfolio-Website-FF6B6B?style=for-the-badge&logo=globe)](https://santiagomartinez-developer.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-@devSantiagoM-181717?style=for-the-badge&logo=github)](https://github.com/devSantiagoM)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Santiago%20Martínez-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/santiago-mart%C3%ADnez-5496b8364/)

- Portfolio: [santiagomartinez-developer.vercel.app](https://santiagomartinez-developer.vercel.app/)
- GitHub: [@devSantiagoM](https://github.com/devSantiagoM)
- LinkedIn: [Santiago Martínez](https://www.linkedin.com/in/santiago-mart%C3%ADnez-5496b8364/)

## 🙏 Agradecimientos

- [shadcn/ui](https://ui.shadcn.com/) por los componentes de UI
- [Lucide](https://lucide.dev/) por los iconos
- [TailwindCSS](https://tailwindcss.com/) por el framework de CSS
- [Vite](https://vitejs.dev/) por la herramienta de construcción

---

⭐ Si te gusta este proyecto, ¡dale una estrella al repositorio!
