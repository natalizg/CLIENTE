# Buscador de Países en Angular 17.

Esta aplicación es un buscador de países que se conecta a la API RestCountries para proporcionar información detallada sobre diferentes países de todo el mundo. La aplicación consta de varios componentes funcionales y de navegación, así como un servicio personalizado para manejar la conexión con la API y la gestión de datos.

## Componentes:

- PaisInput: Este componente permite al usuario buscar países por nombre.
- PaisTabla: Muestra los resultados de la búsqueda en forma de tabla.
- Sidebar: Actúa como una barra de navegación y contiene enlaces a las diferentes páginas de la aplicación.
- VerPais: Muestra información detallada sobre un país específico cuando se hace clic en él.

## Páginas:
Las páginas están agrupadas en la carpeta pages y representan la estructura base de la aplicación (también son componentes). Las páginas disponibles son:

- Por Pais: Permite buscar países por su nombre.
- Por Región: Permite buscar países por región.
- Por Capital: Permite buscar países por capital.
- Sobre Nosotros: Proporciona información sobre el equipo y el propósito de la aplicación.
- Contacto: Permite a los usuarios ponerse en contacto con nosotros para obtener más información o solicitar servicios.

## Servicio:

- PaisService: Este servicio se encarga de establecer la conexión con la API RestCountries y proporciona datos a los diferentes componentes según sea necesario.


## Interfaz:

- Country: Interfaz que define la estructura de los datos de país recibidos de la API.
Funcionamiento


La aplicación comienza en la página "Sobre Nosotros" por defecto. Desde allí, los usuarios pueden navegar a través del sidebar a las diferentes páginas y utilizar las funcionalidades de búsqueda proporcionadas por los componentes correspondientes.


Desarrollado por Natalia Zg
