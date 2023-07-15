---
title: '$createChannelInvite'
description: '$createChannelInvite will create a channel invite.'
id: createChannelInvite
---

`$createChannelInvite` will create a channel invite.

## الاستخدام

```php
$createChannelInvite[channelID?;...options]
```

## البارامترات

| Field      | النوع   | الديسكبربشين                                        | مطلوب |
| ---------- | ------- | --------------------------------------------------- |:-----:|
| channelID? | Integer | The channel ID of which the invite will be created. | false |
| options?   | object  | Invite options.                                     | false |

<details open>
  <summary><h3> Invite Target Types </h3></summary>

| TYPE                 | VALUE |
| -------------------- | ----- |
| STREAM               | 1     |
| EMBEDDED_APPLICATION | 2     |

</details>

## مثال

This will create an invite of the channel where the command is executed in:

```javascript
bot.command({
    name: 'createChannelInvite',
    code: `
  $createChannelInvite[$channelID]
  `
});
```

### Advanced Example(s)

Create Temporary Invites with limited uses:

```javascript
bot.command({
    name: 'createChannelInvite',
    code: `
  $createChannelInvite[$channelID;{
            "temporary": true,
            "maxAge": 650,
            "maxUses": 25,
            "unique": true
  }]
  `
});
```

Create Activity Invites:

```javascript
bot.command({
    name: 'createChannelInvite',
    code: `
  $createChannelInvite[voiceID;{
            "targetApplication": "application ID",
            "targetType": 2
  }]
  `
});
```
