---
title: '$getGuildInvite'
description: '$getGuildInvite will create a guild invite.'
id: getGuildInvite
---

`$getGuildInvite` will create a guild invite.

## प्रोयोग

```php
$getGuildInvite[guildID?;...options]
```

## पैरामीटर्स

| फील्ड    | टाइप     | डिस्क्रिप्शन                                          |    चाहिए     |
| -------- | -------- | ----------------------------------------------------- |:------------:|
| guildID? | integer  | The guild ID of which the invite will be returned of. | असत्य (नहीं) |
| options? | स्ट्रिंग | Invite option object.                                 | असत्य (नहीं) |

<details>
  <summary><h3> Invite Target Types </h3></summary>

| TYPE                 | VALUE |
| -------------------- | ----- |
| STREAM               | 1     |
| EMBEDDED_APPLICATION | 2     |

</details>

## ट्रू (हा)

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
