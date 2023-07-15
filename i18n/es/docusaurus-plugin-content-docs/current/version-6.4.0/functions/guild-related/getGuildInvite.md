---
title: '$getGuildInvite'
description: '$getGuildInvite will create a guild invite.'
id: getGuildInvite
---

`$getGuildInvite` will create a guild invite.

## Modo de uso

```php
$getGuildInvite[guildID?;...options]
```

## Parámetros

| Campo       | Tipo   | Descripción                                           | Requerido |
| ----------- | ------ | ----------------------------------------------------- |:---------:|
| servidorID? | entero | The guild ID of which the invite will be returned of. |    no     |
| opciones?   | cadena | Invite option object.                                 |    no     |

<details>
  <summary><h3> Invite Target Types </h3></summary>

| TYPE                 | VALUE |
| -------------------- | ----- |
| STREAM               | 1     |
| EMBEDDED_APPLICATION | 2     |

</details>

## Ejemplo(s)

This will create an invite of the channel where the command is executed in:

```javascript
bot.command({
    name: 'getGuildInvite',
    code: `
  $getGuildInvite[$guildID]
  `
});
```

### Advanced Example

Create Temporary Invites with limited uses:

```javascript
bot.command({
    name: 'getGuildInvite',
    code: `
  $getGuildInvite[$guildID;{
            "temporary": true,
            "maxAge": 650,
            "maxUses": 25,
            "unique": true
  }]
  `
});
```
