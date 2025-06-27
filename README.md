# Mi Proyecto MVC

Este es un proyecto de ejemplo que utiliza el patrón Modelo-Vista-Controlador (MVC) con TypeScript y Express.

## Estructura del Proyecto

```
mi-proyecto-mvc
├── src
│   ├── controllers
│   │   └── HomeController.ts   # Controlador principal que maneja las vistas
│   ├── models
│   │   └── User.ts             # Modelo de usuario que define la estructura del usuario
│   ├── views
│   │   └── home.ejs            # Vista principal que muestra la información del usuario
│   └── app.ts                  # Punto de entrada de la aplicación
├── public                      # Archivos estáticos (CSS, JS, imágenes)
├── package.json                # Configuración de npm y dependencias
├── tsconfig.json               # Configuración de TypeScript
└── README.md                   # Documentación del proyecto
```

## Instalación

1. Clona el repositorio:
   ```sh
   git clone <URL_DEL_REPOSITORIO>
   ```

2. Navega al directorio del proyecto:
   ```sh
   cd mi-proyecto-mvc
   ```

3. Instala las dependencias:
   ```sh
   npm install
   ```

## Cómo iniciar el proyecto

Para iniciar el servidor de desarrollo, ejecuta:

```sh
npm run dev
```

El servidor estará disponible en [http://localhost:3000](http://localhost:3000).

> **Nota:** Si quieres compilar el proyecto y ejecutarlo en modo producción, primero ejecuta:
> ```sh
> npm run build
> ```
> y luego:
> ```sh
> npm start
> ```

## Scripts disponibles

- `npm run dev` — Inicia el servidor en modo desarrollo con recarga automática.
- `npm run build` — Compila el proyecto TypeScript a JavaScript.
- `npm start` — Ejecuta el servidor usando el código compilado (modo producción).

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o envía un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT.