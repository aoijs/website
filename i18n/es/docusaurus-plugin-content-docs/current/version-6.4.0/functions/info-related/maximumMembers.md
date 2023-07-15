---
title: '$maximumMembers'
description: '$maximumMembers will return the maximal amount of members a guild can have.'
id: maximumMembers
---

`$maximumMembers` will return the maximal amount of members a guild can have.

## Modo de uso

```php
$maximumMembers[guildID?]
```

## Parámetros

| Campo       | Tipo    | Parámetros           | Requerido |
| ----------- | ------- | -------------------- |:---------:|
| servidorID? | integer | The ID of the guild. |    no     |

## Ejemplo(s)

This will return the maximum of members you can have in your guild:

```javascript
bot.command({
    name: 'maximumMembers',
    code: `
  You can have: $maximumMembers[$guildID] Members in this guild!
  `
});
```
