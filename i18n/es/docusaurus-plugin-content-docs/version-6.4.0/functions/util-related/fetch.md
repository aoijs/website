---
title: '$fetch'
description: '$fetch obtendrá información sobre un método determinado usando la API de Discord.'
id: fetch
---

`$fetch` obtendrá información sobre un método determinado usando la API de Discord.

## Uso

```php
$fetch[método;consulta;...consulta]
```

## Parámetros

| Campo    | Tipo   | Descripción                                  | Requerido |
| -------- | ------ | -------------------------------------------- |:---------:|
| método   | cadena | Método de búsqueda (listado a continuación). | verdadero |
| consulta | cadena | Entrada para el método utilizado.            | verdadero |

<details>
  <summary><h3> Métodos </h3></summary>

| Métodos             |
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

Esto mostrará información sobre el mensaje de comando inicial usando la función `fetch`:

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
