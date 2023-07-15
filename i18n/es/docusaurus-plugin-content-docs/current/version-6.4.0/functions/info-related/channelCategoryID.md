---
title: '$channelCategoryID'
description: '$channelCategoryID will return the parent of a specific channel.'
id: channelCategoryID
---

`$channelCategoryID` will return the parent of a specific channel.

## Modo de uso

```php
$channelCategoryID[channelID?]
```

## Parámetros

| Campo    | Tipo    | Parámetros                                                   | Requerido |
| -------- | ------- | ------------------------------------------------------------ |:---------:|
| canalID? | integer | ID of a channel of which you want to retrieve its parent of. |    no     |

## Ejemplo(s)

This will return the category ID of the text channel in where you execute the command:

```javascript
bot.command({
    name: 'channelCategoryID',
    code: `
  $channelCategoryID[$channelID]
  `
});
```