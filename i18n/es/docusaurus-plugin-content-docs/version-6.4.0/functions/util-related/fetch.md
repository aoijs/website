---
title: '$fetch'
description: '$fetch will fetch information about a given method using Discord''s API.'
id: fetch
---

`$fetch` will fetch information about a given method using Discord's API.

## Uso

```php
$fetch[method;query;...query]
```

## Parámetros

| Campo    | Tipo   | Descripción                     | Requerido |
| -------- | ------ | ------------------------------- |:---------:|
| method   | string | Method to fetch (listed below). |    sí     |
| consulta | cadena | Input for the used method.      |    sí     |

<details>
  <summary><h3> Methods </h3></summary>

| Methods             |
| ------------------- |
| message             |
| channel             |
| user                |
| invite              |
| webhook             |
| application         |
| command             |
| guildPreview        |
| guildTemplate       |
| premiumStickerPacks |
| sticker             |
| guildCommand        |
| default             |

</details>

## Ejemplo(s)

This will display information about the initial command message using the `fetch` function:

```javascript
bot.command({
    name: 'fetch',
    code: `
  \`\`\`
  $fetch[message;$messageID]
  \`\`\`
  `
});
```
