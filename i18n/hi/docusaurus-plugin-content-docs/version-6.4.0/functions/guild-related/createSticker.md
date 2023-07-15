---
title: '$createSticker'
description: '$createSticker will create a sticker.'
id: createSticker
---

`$createSticker` will create a sticker.

## प्रोयोग

```php
$createSticker[guildID;URL;name;returnSticker?;tags;description;reason]
```

## पैरामीटर्स

| फील्ड          | टाइप     | डिस्क्रिप्शन                                                                                        |    चाहिए     |
| -------------- | -------- | --------------------------------------------------------------------------------------------------- |:------------:|
| guildID        | integer  | Guild ID of where the sticker will be created in.                                                   |     true     |
| URL            | स्ट्रिंग | Image URL (**png only**).                                                                           |     true     |
| name           | स्ट्रिंग | The sticker name.                                                                                   |     true     |
| returnSticker? | boolean  | Return the sticker after its creation. <br /> 1. **true** <br /> 2. **false** (default) | असत्य (नहीं) |
| tags?          | स्ट्रिंग | Sticker tags.                                                                                       | असत्य (नहीं) |
| डिस्क्रिप्शन?  | स्ट्रिंग | The description of the sticker.                                                                     | असत्य (नहीं) |
| reason?        | स्ट्रिंग | Reason that will be displayed in the guild's audit logs.                                            | असत्य (नहीं) |

## ट्रू (हा)

This will create a sticker called `Imagine`:

```javascript
bot.command({
    name: 'createSticker',
    code: `
  $createSticker[$guildID;https://cdn.discordapp.com/attachments/1061712111052521493/1066397675278323734/692445926480150611.png;Imagine;true;money;Random sticker;Testing.]
  `
});
```
