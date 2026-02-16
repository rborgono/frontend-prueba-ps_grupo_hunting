# Frontend - Prueba Técnica Full Stack PS Grupo Hunting

Este repositorio contiene el frontend de la aplicación el cual fue desarrollado en Angular.  
A continuación se explica cómo instalar y levantar la aplicación en entorno local.

---

## Requisitos

- Node.js >= 22.x
- npm >= 10.x
- Angular CLI >= 16.x (opcional si no lo instalas global)

---

## Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/rborgono/frontend-prueba-ps_grupo_hunting
cd frontend-prueba-ps_grupo_hunting
```

2. Instalar dependencias:
```bash
npm install
```

3. Revisar configuración de environments en src/environments. Allí se define la URL desde la cual se consume la API del backend.

4. Ejecutar la aplicación (asegurarse primero que el servidor de backend se encuentre corriendo):
```bash
ng serve --port 4200
```
