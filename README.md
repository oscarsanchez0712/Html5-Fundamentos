# Fundamentos de HTML5 — Demostración

Aplicación Flask que sirve una página interactiva con demostraciones en vivo de HTML5: estructura semántica, formularios con validación nativa, `<canvas>`, `<progress>`/`<meter>`/`<details>` y `localStorage`. Diseño responsivo (móvil, tablet, escritorio).

## Estructura

```
html5-flask-app/
├── app.py
├── templates/
│   └── index.html
└── static/
    ├── css/
    │   └── style.css
    └── js/
        └── script.js
```

## Requisitos

- Python 3.8 o superior
- Flask

## Instalación y ejecución

1. Extrae el zip (mantén las carpetas `templates/` y `static/` junto a `app.py`).
2. Abre una terminal en esa carpeta.
3. Instala Flask:
   ```
   pip install flask
   ```
4. Ejecuta la app:
   ```
   python app.py
   ```
5. Abre el navegador en:
   ```
   http://127.0.0.1:5000
   ```

## Contenido de la demostración

| Sección | Elementos HTML5 |
|---|---|
| Semántica | `header`, `nav`, `main`, `article`, `aside`, `footer` |
| Formularios | `input type="email"`, `range`, `date`, `color`, validación nativa |
| Gráficos | `canvas` con dibujo interactivo (mouse y táctil) |
| Contenido | `progress`, `meter`, `details`/`summary` |
| Web APIs | `localStorage` (contador persistente) |

No requiere base de datos ni conexión a internet, salvo para cargar las tipografías de Google Fonts.
