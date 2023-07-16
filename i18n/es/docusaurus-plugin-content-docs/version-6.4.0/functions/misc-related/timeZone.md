---
title: '$timeZone'
description: '$timeZone cambiará la zona horaria de cualquier función de tiempo en el comando usado.'
id: timeZone
---

`$timeZone` cambiará la zona horaria de cualquier función de tiempo en el comando usado.

## Uso

```php
$timeZone[zona horaria]
```

## Parámetros

| Campo        | Tipo   | Parámetros                      | Requerido |
| ------------ | ------ | ------------------------------- |:---------:|
| zona horaria | string | Formato de zona horaria/idioma. |   falso   |

Puedes encontrar todas las zonas horarias __* *[aquí](https://gist.githubusercontent.com/diogocapela/12c6617fc87607d11fd62d2a4f42b02a/raw/8b5abde6f9c7d5570df3a2aa22325d7d20a8b5d7/moment-js-timezones.txt) **__.

## Ejemplo(s)

Puedes cambiar la zona horaria usando `$timezone`:

```javascript
bot.command({
    name: "time",
    code: `
    $hour:$minute:$second
    $timeZone[America/New_York]
    ` // devuelve la hora actual de Nueva York
});
```