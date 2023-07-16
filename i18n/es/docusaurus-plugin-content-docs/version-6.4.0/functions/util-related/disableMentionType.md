---
title: '$disableMentionType'
description: '$disableMentionType will disable a specific mention type.'
id: disableMentionType
---

`$disableMentionType` will disable a specific mention type.

## Uso

```php
$disableMentionType[type]
```

## Parámetros

| Campo | Tipo   | Descripción                          | Requerido |
| ----- | ------ | ------------------------------------ |:---------:|
| type  | cadena | Type of mention you want to disable. | verdadero |

<details>
  <summary> <h2> Available Types </h2></summary>

| Tipo     | Descripción                         |
| -------- | ----------------------------------- |
| everyone | `@everyone` and `@here` mentions.   |
| users    | All user mentions.                  |
| roles    | All role mentions.                  |
| all      | Roles, users and any other mention. |

</details>

## Ejemplo(s)

This will stop the bot from mentioning you:

```javascript
bot.command({
    name: 'mention',
    code: `
<@$authorID>
$disableMentionType[users] 
  `
});
```

This will stop the bot from mentioning anyone or anything:

```javascript
bot.command({
    name: 'mention',
    code: `
<@$authorID>
$disableMentionType[all] 
  `
});
```
