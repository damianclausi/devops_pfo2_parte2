# DevOps PFO2 Parte 2 - Proyecto Programación Web (Front End)

Este repositorio contiene el proyecto de programación Web (front end) desarrollado con React y Vite, configurado para ejecutarse en contenedores Docker.

## 📋 Descripción

Proyecto de desarrollo front-end utilizando:
- **React 19.1.0** - Biblioteca de JavaScript para construir interfaces de usuario
- **Vite 6.3.5** - Herramienta de construcción rápida para desarrollo web moderno
- **React Router DOM** - Navegación entre páginas
- **React Icons** - Iconografía

## 🐳 Configuración Docker

### Prerrequisitos
- Docker instalado en tu sistema
- Docker Compose instalado

### Comandos para ejecutar el proyecto

#### Opción 1: Usando Docker Compose (Recomendado)
```bash
# Construir y ejecutar el contenedor
docker-compose up --build

# Ejecutar en segundo plano
docker-compose up -d --build

# Detener el contenedor
docker-compose down
```

#### Opción 2: Usando Docker directamente
```bash
# Construir la imagen
docker build -t devops-pfo2-frontend .

# Ejecutar el contenedor
docker run -p 3000:5173 -v $(pwd):/app -v /app/node_modules devops-pfo2-frontend
```

### 🌐 Acceso a la aplicación

Una vez que el contenedor esté ejecutándose, la aplicación estará disponible en:
- **URL:** http://localhost:3000
- **Puerto del host:** 3000
- **Puerto del contenedor:** 5173

### 📦 Información del contenedor

- **Imagen base:** node:18-alpine
- **Puerto expuesto:** 5173
- **Puerto mapeado en host:** 3000
- **Volúmenes:** 
  - Código fuente mapeado para desarrollo en vivo
  - node_modules persistente

## 🚀 Docker Hub

### Subir imagen a Docker Hub

```bash
# Construir la imagen con tag para Docker Hub
docker build -t tu-usuario/devops-pfo2-frontend:latest .

# Hacer login en Docker Hub
docker login

# Subir la imagen
docker push tu-usuario/devops-pfo2-frontend:latest
```

### Descargar y ejecutar desde Docker Hub

```bash
# Descargar la imagen
docker pull tu-usuario/devops-pfo2-frontend:latest

# Ejecutar contenedor desde Docker Hub
docker run -p 3000:5173 tu-usuario/devops-pfo2-frontend:latest
```

## 🛠️ Desarrollo

### Estructura del proyecto
```
src/
├── components/          # Componentes reutilizables
├── pages/              # Páginas de la aplicación
├── assets/             # Recursos estáticos
├── data/               # Datos JSON
├── App.jsx             # Componente principal
└── main.jsx            # Punto de entrada

public/                 # Archivos públicos estáticos
```

### Scripts disponibles
- `npm run dev` - Ejecutar en modo desarrollo
- `npm run build` - Construir para producción
- `npm run preview` - Previsualizar build de producción
- `npm run lint` - Ejecutar linter

## 📝 Notas técnicas

- El contenedor está configurado para desarrollo con hot-reload
- Los archivos se sincronizan automáticamente entre el host y el contenedor
- La aplicación se ejecuta en modo desarrollo por defecto
- Red personalizada para comunicación entre contenedores si es necesario

## 👥 Equipo de desarrollo

Este proyecto fue desarrollado como parte del curso de DevOps PFO2.

---

**Repositorio:** https://github.com/damianclausi/devops_pfo2_parte2