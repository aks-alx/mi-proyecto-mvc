# Mi Proyecto MVC

Este es un proyecto de ejemplo que utiliza el patrón Modelo-Vista-Controlador (MVC) con TypeScript y Express.

## Estructura del Proyecto

```
mi-proyecto-mvc
├── src
│   ├── controllers
│   │   └── HomeController.ts   # Controlador principal que maneja las vistas
│   ├── models
│   │   └── User.ts              # Modelo de usuario que define la estructura del usuario
│   ├── views
│   │   └── home.ejs             # Vista principal que muestra la información del usuario
│   └── app.ts                   # Punto de entrada de la aplicación
├── package.json                  # Configuración de npm y dependencias
├── tsconfig.json                # Configuración de TypeScript
└── README.md                    # Documentación del proyecto
```

## Instalación

1. Clona el repositorio:
   ```
   git clone <URL_DEL_REPOSITORIO>
   ```

2. Navega al directorio del proyecto:
   ```
   cd mi-proyecto-mvc
   ```

3. Instala las dependencias:
   ```
   npm install
   ```

## Uso

Para iniciar la aplicación, ejecuta el siguiente comando:

```
npm start
```

La aplicación estará disponible en `http://localhost:3000`.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o envía un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT.