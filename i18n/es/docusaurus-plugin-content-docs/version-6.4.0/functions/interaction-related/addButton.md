---
title: '$addButton'
description: '$addButton añadirá un botón al mensaje del bot.'
id: addButton
---

`$addButton` añadirá un botón al mensaje del bot.

## Uso

```php
$addButton[índice;etiqueta;estilo;ID personalizado;desactivado?;emoji?]
```

## Parámetros

| Campo            | Tipo    | Descripción                                                                                                             | Requerido |
| ---------------- | ------- | ----------------------------------------------------------------------------------------------------------------------- |:---------:|
| índice           | número  | En que (acción)fila aparece el botón.                                                                                   | verdadero |
| etiqueta         | cadena  | El texto que se mostrará en el botón como etiqueta.                                                                     | verdadero |
| estilo           | string  | El botón **[estilo](https://discord.com/developers/docs/interactions/message-components#button-object-button-styles)**. | verdadero |
| ID personalizado | string  | El ID personalizado del componente utilizado para identificar el botón.                                                 | verdadero |
| desactivado?     | boolean | ¿Hacer el botón inutilizable/desactivado? <br /> 1. **true** <br /> 2. **false** (por defecto)              |   falso   |
| emoji?           | cadena  | Los emoji mostrados en el botón.                                                                                        |   falso   |

<details open>
  <summary><h3> Tipos de botón </h3></summary>

| Nombre        | Valor     | Color                  |                                                                                                         |
| ------------- | --------- | ---------------------- | ------------------------------------------------------------------------------------------------------- |
| Primary       | 1         | borroso                | `$addButton[1;Example Button!;primary;ID personalizado;false]`                                          |
| Secondary     | 2         | gris                   | `$addButton[1;Example Button!;secondary;ID personalizado;false]`                                        |
| Success       | 3         | verde                  | `$addButton[1;Example Button!;success;ID personalizado;false]`                                          |
| Danger        | 4         | rojo                   | `$addButton[1;Example Button!;danger;ID personalizado;false]`                                           |
| Link          | 5         | gris, navega a una URL | `$addButton[1;Example Button!;link;https://discord.gg;false]`                                           |
| Custom Emoji  | cualquier | cualquier              | `$addButton[1;Example Button!;link;ID personalizado;false;nombre de emoji,emojiID,animado(true/false)]` |
| Unicode Emoji | cualquier | cualquier              | `$addButton[1;Example Button!;link;ID personalizado;false;😀]`                                           |

</details>

## Ejemplo(s)

Esto añade un botón principal y de enlace al mensaje del bot:

```javascript
bot.command({
    name: 'addButton',
    code: `
    Hola!
    $addButton[1;ejemplo Botón!;primary;ejemploBotón;false;💔]
    $addButton[1;ejemplo Botón!;link;https://discord.gg;false]
  `
});
```
```javascript
bot.interactionCommand({
    name: 'exampleButton',
    prototype: 'button',
    code: `
    $interactionReply[¡Impresionante interacción de botones!]
  `
});
```