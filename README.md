# Landing Page en React con Componente de Cubo 3D

![card](public/img/card.png)
![mack](public/img/mack.png)
![celular](public/img/celular.png)



Este repositorio contiene una Landing Page desarrollada en React utilizando Vite como bundler y Tailwind CSS para los estilos. Además, se incluye un componente de cubo 3D implementado con la librería Spline.

## Características

- **React**: Utilizado como el framework principal para la construcción de la aplicación.
- **Vite**: Herramienta de construcción rápida para proyectos web modernos.
- **Tailwind CSS**: Framework de utilidades de estilos CSS para crear interfaces adaptables y atractivas de manera rápida.
- **Spline**: Librería utilizada para el componente del cubo 3D, proporcionando funcionalidades de interpolación y aproximación de splines.

## Instalación

1. Clona este repositorio en tu máquina local:

```bash
git clone <URL_DEL_REPO>
```

2. Navega al directorio del proyecto:

```bash
cd nombre_del_proyecto
```

3. Instala las dependencias:

```bash
npm install
```

## Uso

Para ejecutar la aplicación en modo de desarrollo, utiliza el siguiente comando:

```bash
npm run dev
```

Esto iniciará un servidor de desarrollo y abrirá la aplicación en tu navegador predeterminado. Si deseas construir la aplicación para producción, utiliza el comando:

```bash
npm run build
```

Este comando generará una versión optimizada de la aplicación lista para ser desplegada.

## Obtención de datos de las tarjetas

Los datos de las tarjetas se obtienen utilizando la función `map()` en un arreglo. Este arreglo contiene los datos de las tarjetas y puede ser modificado según sea necesario para añadir, eliminar o modificar las tarjetas.

```javascript
const tarjetas = [
  { id: 1, titulo: 'Tarjeta 1', contenido: 'Contenido de la tarjeta 1' },
  { id: 2, titulo: 'Tarjeta 2', contenido: 'Contenido de la tarjeta 2' },
  { id: 3, titulo: 'Tarjeta 3', contenido: 'Contenido de la tarjeta 3' },
];

const tarjetasRenderizadas = tarjetas.map((tarjeta) => (
  <div key={tarjeta.id} className="tarjeta">
    <h2>{tarjeta.titulo}</h2>
    <p>{tarjeta.contenido}</p>
  </div>
));
```

## Contribución

¡Las contribuciones son bienvenidas! Si encuentras algún problema o tienes sugerencias para mejorar este proyecto, no dudes en abrir un issue o enviar un pull request.

## Licencia

Este proyecto está bajo la Licencia [MIT](LICENSE).
