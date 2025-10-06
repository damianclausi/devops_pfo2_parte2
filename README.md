# DevOps PFO2 PARTE 2
# Descripción del Proyecto

Este repositorio contiene el proyecto de programación Web (front end) desarrollado con **React** y **Vite**, completamente **dockerizado** para facilitar el despliegue y desarrollo en contenedores.

**Basado en:** https://github.com/damianclausi/tp1-react-grupo1arte  - Proyecto Programación Web (Front End)


---

## Descripción del Proyecto

Este repositorio contiene el proyecto de programación Web (front end) desarrollado con **React** y **Vite**, completamente **dockerizado** para facilitar el despliegue y desarrollo en contenedores.

### Objetivos DevOps Cumplidos

**Contenedor Docker** configurado con todos los servicios necesarios  
**Documentación completa** con comandos de ejecución y puertos  
**Preparado para Docker Hub** con instrucciones de subida

### Prueba del Sistema

![Prueba Docker](screenshots/pruebedocker.jpg)

*Sistema ejecutándose correctamente en contenedor Docker*

---

## Stack Tecnológico

- **React 19.1.0** - Biblioteca de JavaScript para interfaces de usuario
- **Vite 6.3.5** - Herramienta de construcción y desarrollo rápido
- **React Router DOM** - Navegación entre páginas
- **React Icons** - Iconografía
- **Docker** - Contenedorización
- **Node.js 20 Alpine** - Imagen base del contenedor

---

## Ejecución con Docker

### Prerrequisitos
- Docker instalado
- Docker Compose instalado

### Comando para ejecutar el proyecto

```bash
# Construir y ejecutar el contenedor
docker-compose up --build

# Ejecutar en segundo plano (recomendado)
docker-compose up -d --build
```

### Acceso a la aplicación

- **URL:** http://localhost:3000
- **Puerto del host:** 3000
- **Puerto del contenedor:** 5173

### Detener el contenedor

```bash
docker-compose down
```

---

## Docker Hub

### Subir imagen a Docker Hub

```bash
# Hacer login en Docker Hub
docker login

# Construir imagen con tag para Docker Hub
docker build -t tuUsuario/devops-pfo2-frontend:latest .

# Subir imagen
docker push tuUsuario/devops-pfo2-frontend:latest
```

### Ejecutar desde Docker Hub

```bash
# Descargar y ejecutar
docker run -p 3000:5173 tuUsuario/devops-pfo2-frontend:latest
```

---

## Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Cristian/       # Componentes específicos
│   ├── Sidebar.jsx     # Navegación lateral
│   └── TopNavbar.jsx   # Barra superior
├── pages/              # Páginas de la aplicación
│   ├── Home.jsx        # Página principal
│   ├── ApiData/        # Páginas de APIs
│   └── [otros].jsx     # Páginas individuales
├── assets/             # Recursos estáticos
├── data/               # Datos JSON
├── App.jsx             # Componente raíz
└── main.jsx            # Punto de entrada

public/                 # Archivos públicos
├── caratulas/          # Imágenes de películas
└── vite.svg           # Logo de Vite

# Archivos Docker
Dockerfile              # Definición del contenedor
docker-compose.yml      # Orquestación de servicios
.dockerignore          # Archivos excluidos del build
```

---

## Desarrollo Local (sin Docker)

Si prefieres ejecutar sin Docker:

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build
npm run preview
```

---

## Características del Contenedor

- **Imagen base:** node:20-alpine (liviana y segura)
- **Puerto expuesto:** 5173
- **Puerto mapeado:** 3000 → 5173
- **Volúmenes:** Código fuente sincronizado para desarrollo
- **Hot reload:** Habilitado para desarrollo en tiempo real
- **Red:** frontend-network para comunicación entre contenedores

---

## Funcionalidades de la Aplicación

-  Single Page Application (SPA) con React
-  Navegación con React Router
-  Consumo de APIs externas (CoinGecko, DragonBall, etc.)
-  Gestión de datos locales (películas desde JSON)
-  Diseño responsivo
-  Interfaz moderna y atractiva

---

> **Proyecto desarrollado para DevOps PFO2 Parte 2**  
> Tecnicatura en Desarrollo de Software  
> Octubre 2025
