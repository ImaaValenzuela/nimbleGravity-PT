# NimbleGravity PT

Read this README in [English](#english) or [Spanish](#spanish).

## English

### Description
This is a job listing application built with React and TypeScript. It allows users to view job opportunities, connect with candidates, and manage job-related data.

### Features
- Job listing display
- Candidate connection form
- User profile header
- Custom hooks for jobs and candidates
- API integration

### Tech Stack
- **Frontend**: React 19.2.0, TypeScript
- **Build Tool**: Vite
- **Linting**: ESLint
- **Styling**: CSS

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/ImaaValenzuela/nimbleGravity-PT.git
   cd nimblegravity-pt
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file based on `.env.example` and configure your environment variables.

### Usage
- Start the development server:
  ```bash
  npm run dev
  ```

- Build for production:
  ```bash
  npm run build
  ```

- Preview the production build:
  ```bash
  npm run preview
  ```

- Lint the code:
  ```bash
  npm run lint
  ```

### Project Structure
- `src/components/`: React components (JobCard, JobList, ConnectForm, etc.)
- `src/hooks/`: Custom hooks (useJobs, useCandidate)
- `src/api.ts`: API functions
- `src/types.ts`: TypeScript type definitions

## Spanish

### Descripción
Esta es una aplicación de listado de trabajos construida con React y TypeScript. Permite a los usuarios ver oportunidades de empleo, conectarse con candidatos y gestionar datos relacionados con trabajos.

### Características
- Visualización de listados de trabajos
- Formulario de conexión de candidatos
- Encabezado de perfil de usuario
- Hooks personalizados para trabajos y candidatos
- Integración con API

### Pila Tecnológica
- **Frontend**: React 19.2.0, TypeScript
- **Herramienta de Construcción**: Vite
- **Linting**: ESLint
- **Estilos**: CSS

### Instalación
1. Clona el repositorio:
   ```bash
   git clone https://github.com/ImaaValenzuela/nimbleGravity-PT.git
   cd nimblegravity-pt
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Crea un archivo `.env` basado en `.env.example` y configura tus variables de entorno.

### Uso
- Inicia el servidor de desarrollo:
  ```bash
  npm run dev
  ```

- Construye para producción:
  ```bash
  npm run build
  ```

- Previsualiza la construcción de producción:
  ```bash
  npm run preview
  ```

- Linta el código:
  ```bash
  npm run lint
  ```

### Estructura del Proyecto
- `src/components/`: Componentes de React (JobCard, JobList, ConnectForm, etc.)
- `src/hooks/`: Hooks personalizados (useJobs, useCandidate)
- `src/api.ts`: Funciones de API
- `src/types.ts`: Definiciones de tipos TypeScript
