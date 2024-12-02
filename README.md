# S2.2. E-commerce

## Descripción del Proyecto

Este proyecto implementa una tienda en línea utilizando **HTML**, **CSS**, **Bootstrap**, y **JavaScript**. Se enfoca en la creación de un diseño responsivo, la integración de funcionalidades interactivas y el uso de Sass para optimizar los estilos.

### Características

- **E-commerce Responsivo**: El diseño se adapta a diferentes tamaños de pantalla (escritorio, tablet y móvil) utilizando Bootstrap y media queries.
- **Bootstrap 5**: Utilización de componentes predefinidos para acelerar el desarrollo, como menús, tarjetas de productos y formularios.
- **Sass**: Organización modular de estilos mediante Sass, lo que facilita la personalización y reutilización de código.
- **JavaScript**: Implementación de funcionalidades como manejo de carrito, promociones y validaciones.
- **Estructura Modular**: Código organizado para mejorar la mantenibilidad y escalabilidad del proyecto.

## Estructura del Proyecto

La estructura de archivos y carpetas es la siguiente:

```
/S2.2.-E-commerce
├── index.html # Página principal de la tienda 
├── checkout.html # Página de checkout 
├── /css # Carpeta para estilos CSS 
│   ├── main.css # Estilos CSS principales compilados desde Sass 
│   ├── main.css.map # Mapa fuente para depuración 
│   ├── main.scss # Archivo principal de Sass que importa otros parciales 
│   └── styles.css # Archivo inicial de estilos 
├── /images # Carpeta para almacenar imágenes 
├── /js # Carpeta para scripts JavaScript 
│   ├── checkout.js # Funcionalidad para la página de checkout 
│   └── shop.js # Funcionalidad principal para la tienda 
├── .gitignore # Archivos y carpetas ignorados por Git 
├── package-lock.json # Archivo generado automáticamente para gestión de dependencias 
├── package.json # Archivo de configuración para npm 
└── README.md # Este archivo
```

## Tecnologías Utilizadas

- **HTML5**: Lenguaje de marcado utilizado para la estructura de la página web.
- **CSS3**: Para los estilos visuales y la creación del diseño responsivo.
- **Bootstrap 5**: Framework de diseño que proporciona componentes predefinidos para acelerar el desarrollo.
- **Sass**: Preprocesador CSS que permite escribir estilos más organizados y reutilizables.
- **JavaScript**: Lenguaje de programación utilizado para la interactividad, como el menú desplegable y la validación de formularios.
- **jQuery** (si es necesario para algunos componentes de Bootstrap): Para facilitar la manipulación del DOM y la interactividad.

## Instalación

   ```bash
   git clone https://github.com/basantades/S2.2.-E-commerce.git
   ```