# Añade temas light y dark a tu web con poco esfuerzo

Este repositorio contiene un ejemplo de cómo implementar un cambio de tema (light y dark) en tu sitio web utilizando CSS y un poco de JavaScript. El objetivo es mantener la simplicidad y evitar la dependencia de bibliotecas externas.

## ¿Cómo funciona?

El cambio de tema se logra utilizando las capacidades de CSS para definir variables y realizar cálculos. Las variables se definen en la pseudo-clase `:root`, lo que permite su acceso global. Los colores para los temas light y dark se calculan dinámicamente y se almacenan en estas variables.
El cambio entre los temas se realiza mediante una clase CSS que se añade o se quita del elemento `html` del documento. Esta clase altera la propiedad `color-scheme` de CSS, que se hereda en todos los elementos del documento.
La elección del usuario se guarda en el almacenamiento local del navegador y se aplica cada vez que se carga la página.

## Estructura del proyecto

El proyecto consta de dos páginas HTML (`index.html` y `about.html`), una hoja de estilos CSS (`global.css`) que importa otra hoja de estilos (`colors.css`) donde se definen las variables y reglas de color, y un archivo JavaScript (`script.js`) que gestiona el cambio de tema.

## Código relevante

El cambio de tema se realiza en `script.js` con la función `initializeTheme()`. Esta función se encarga de cambiar el tema del sitio web entre claro y oscuro cuando el usuario hace clic en el botón de alternancia de tema. La preferencia del usuario se guarda en el almacenamiento local del navegador.

```javascript
function initializeTheme() {
    document.getElementById("theme-toggle").addEventListener("click", () => {
        const isDark = document.documentElement.classList.toggle("dark");
        document.getElementById("theme-toggle").textContent = isDark ? "🌜": "🌞";
        localStorage.setItem("theme", isDark ? "dark" : "light");
    });

    const currentTheme = () => localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.classList.add(currentTheme());
}

initializeTheme();
```


Las variables y reglas de color se definen en colors.css. Aquí se establecen los colores para los temas light y dark utilizando la función light-dark() de CSS.
```
:root {
    color-scheme: light dark;
    --complimentary: 180;
    --split-complimentary: 150;
    --triadic: 120;
    --analogous: 30;

    --hue: 250;
    --secondary-hue: calc(var(--hue) + var(--complimentary));

    --color-primary: light-dark(lch(55% 80 var(--hue)), lch(20% 20 var(--hue)));
    --color-secondary: light-dark(lch(55% 80 var(--secondary-hue)), lch(20% 20 var(--secondary-hue)));

    --color: light-dark(lch(20% 0 var(--hue)), lch(98% 0 var(--hue)));
    --color--lighter: light-dark(lch(40% 0 var(--hue)), lch(65% 0 var(--hue)));
    --color-bg: light-dark(lch(98% 0 var(--hue)), lch(20% 0 var(--hue)));
}

.light {
    color-scheme: light;
}
.dark {
    color-scheme: dark;
}
```

Más información
Para más detalles sobre cómo funciona este proyecto,
consulta el artículo completo en Añade en tu web temas
light y dark con poco esfuerzo en tu web.