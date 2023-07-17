---
title: '$replaceTextWithRegex'
description: '$replaceTextWithRegex reemplazará expresiones regulares específicas en un texto. Esto funciona de forma similar a $replaceText.'
id: replaceTextWithRegex
---

`$replaceTextWithRegex` reemplazará segmentos específicos de texto.

## Uso

```php
$replaceTextWithRegex[text;reg;flags;newText]
```

## Parámetros

| Campo    | Tipo   | Descripción                     | Requerido |
| -------- | ------ | ------------------------------- |:---------:|
| text     | string | Texto que desea modificar.      |    sí     |
| reg      | cadena | El regex que será reemplazado.  |    sí     |
| banderas | cadena | [banderas](#flags).             |    sí     |
| newText  | string | El texto que reemplazará `reg`. |    no     |

<details open>
  <summary><h2> banderas </h2></summary>

| Banderas |                                                              |
|:--------:| ------------------------------------------------------------ |
|    g     | Reemplazar todas las coincidencias (mayúsculas y minúsculas) |
|    m     | Coincidencia múltiple                                        |
|    i     | Reemplazar todas las coincidencias (mayúsculas y minúsculas) |

</details>

## Ejemplo(s)

Esto reemplazará `más` por `menos`:

```javascript
bot.command({
    name: 'replaceTextWithRegex',
    code: `
  $replaceTextWithRegex[This function is more complicated than it looks.;more;g;less]
  `
});  
```

### Ejemplo avanzado

Esto reemplazará `menos` con `más`:

```javascript
bot.command({
    name: 'replaceTextWithRegex',
    code: `
  $replaceTextWithRegex[This function is more complicated than it looks.;lESs;i;more]
  `
});  
```