---
title: '$channelOverwrites'
description: '$channelOverwrites will return the given channel''s overwrites.'
id: channelOverwrites
---

`$channelOverwrites` will return the given channel's overwrites.

## प्रोयोग

```php
$channelOverwrites[channelID?;response?;sep?]
```

## पैरामीटर्स

| फील्ड      | टाइप     | डिस्क्रिप्शन                                                         |    चाहिए     |
| ---------- | -------- | -------------------------------------------------------------------- |:------------:|
| channelID? | integer  | ID of the channel you want the channel overwrites of.                | असत्य (नहीं) |
| response?  | स्ट्रिंग | The format the channel overwrites will be returned in.               | असत्य (नहीं) |
| sep?       | स्ट्रिंग | The separator to split the channel overwrites if there are multiple. | असत्य (नहीं) |

|    टाइप     | Output                         |
|:-----------:| ------------------------------ |
| `{mention}` | Mentions the role or user      |
|  `{type}`   | Returns the type, user or role |
|  `{allow}`  | The granted permissions        |
|  `{deny}`   | The denied permissions         |

## ट्रू (हा)

This will return the channel overwrites of the channel where you execute the command in:

```javascript
bot.command({
    name: 'channelOverwrites',
    code: `
  $channelOverwrites[$channelID;{mention} {type} {allow} {deny};, ]
  `
});
```