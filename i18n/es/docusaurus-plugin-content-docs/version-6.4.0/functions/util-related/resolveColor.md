---
title: $resolveColor
description: '$resolveColor convertirá un color dado en un tipo determinado.'
id: resolveColor
---

`$resolveColor` convertirá un color dado a un tipo determinado.

## Uso

```php
$resolveColor[type;returnAs?;...data]
```

## Parámetros

| Campo         | Tipo   | Descripción                                    | Requerido |
| ------------- | ------ | ---------------------------------------------- |:---------:|
| type          | string | Qué tipo es la entrada.                        |    sí     |
| ¿volver como? | string | Como el color será retornado.                  |    no     |
| ...datos      | string | Los datos de los datos RVA o de color decimal. |    sí     |

### Tipos

| Tipos   |                   | Devuelve    |
| ------- | ----------------- | ----------- |
| RGB     | rojo, verde, azul | 50, 168, 82 |
| decimal | color hexadecimal | #32a852     |
| número  | color hexadecimal | 80          |

## Ejemplo(s)

Esto devolverá `#32a852` como `50, 168, 82` es el valor RGB de él:

```javascript
bot.command({
    name: 'resolveColor',
    code: `
  $resolveColor[rgb;decimal;50;168;82]
  `
});
```

Esto devolverá `50, 168, 82` como `#32a852` es el color hexadecimal del mismo:

```javascript
bot.command({
    name: 'resolveColor',
    code: `
  $resolveColor[decimal;rgb;#32a852]
  `
});
```

Esto devolverá `3319890` como `#32a852` es el color hexadecimal de él:

```javascript
bot.command({
    name: 'resolveColor',
    code: `
  $resolveColor[decimal;number;#32a852]
  `
});
```