# 🚀 Santiago Martinez - Personal LinkTree

Un portafolio personal moderno y elegante construido con React, TypeScript y TailwindCSS. Este proyecto presenta una página de enlaces estilo LinkTree con efectos visuales atractivos y una experiencia de usuario optimizada.

## ✨ Características

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
