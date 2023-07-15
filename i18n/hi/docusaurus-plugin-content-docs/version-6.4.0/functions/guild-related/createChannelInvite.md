---
title: '$createChannelInvite'
description: '$createChannelInvite will create a channel invite.'
id: createChannelInvite
---

`$createChannelInvite` will create a channel invite.

## प्रोयोग

```php
$createChannelInvite[channelID?;...options]
```

## पैरामीटर्स

| फील्ड      | टाइप    | डिस्क्रिप्शन                                        |    चाहिए     |
| ---------- | ------- | --------------------------------------------------- |:------------:|
| channelID? | integer | The channel ID of which the invite will be created. | असत्य (नहीं) |
| options?   | object  | Invite options.                                     | असत्य (नहीं) |

<details open>
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
