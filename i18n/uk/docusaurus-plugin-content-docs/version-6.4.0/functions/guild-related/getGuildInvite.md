---
title: '$getGuildInvite'
description: '$getGuildInvite will create a guild invite.'
id: getGuildInvite
---

`$getGuildInvite` will create a guild invite.

## Використання

```php
$getGuildInvite[guildID?;...options]
```

## Параметри

| Поле     | Тип     | Опис                                                  | Обов'язковий |
| -------- | ------- | ----------------------------------------------------- |:------------:|
| guildID? | integer | The guild ID of which the invite will be returned of. |      ні      |
| options? | рядок   | Invite option object.                                 |      ні      |

<details>
  <summary><h3> Invite Target Types </h3></summary>

| TYPE                 | VALUE |
| -------------------- | ----- |
| STREAM               | 1     |
| EMBEDDED_APPLICATION | 2     |

</details>

## Приклад(и)

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
