---
title: '$categoryChannels'
description: '$categoryChannels will return all channels of a given category.'
id: categoryChannels
---

`$categoryChannels` will return all channels of a given category.

## Modo de uso

```php
$categoryChannels[categoryID;option?;sep?]
```

## Parámetros

| Campo      | Tipo     | Parámetros                                                                                                                                                 | Requerido |
| ---------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |:---------:|
| categoryID | entero   | The ID of the category.                                                                                                                                    | verdadero |
| opción?    | consulta | The option the bot will return the channels in. <br /> 1. **names** - returns channel names (default)  <br /> 2. **ids** - returns channel IDs |    no     |
| sep?       | string   | The separator to separate the returned channels.                                                                                                           |   falso   |

## Ejemplo(s)

This will return all channels of the category of the channel where you execute the command in:

```javascript
bot.command({
    name: 'categoryChannels',
    code: `
  $categoryChannels[$channelCategoryID;names;, ]
  `
});
```