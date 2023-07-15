---
title: '$interactionReply'
description: '$interactionReply allows you to send an interaction message reply.'
id: interactionReply
---

`$interactionReply` allows you to send an interaction message reply.

## प्रोयोग

```php
$interactionReply[content?;embeds?;components?;files?;allowedMentions?;ephemeral?]
```

## पैरामीटर्स

| फील्ड            | टाइप     | डिस्क्रिप्शन                                                                                       |    चाहिए     |
| ---------------- | -------- | -------------------------------------------------------------------------------------------------- |:------------:|
| content?         | स्ट्रिंग | Message content.                                                                                   | असत्य (नहीं) |
| embeds?          | स्ट्रिंग | Embed parser.                                                                                      | असत्य (नहीं) |
| components?      | स्ट्रिंग | Component parser.                                                                                  | असत्य (नहीं) |
| files?           | स्ट्रिंग | File Parser.                                                                                       | असत्य (नहीं) |
| allowedMentions? | स्ट्रिंग | Allowed mentions? <br /> 1. **everyone** <br /> 2. **roles** <br /> 3. **users** | असत्य (नहीं) |
| ephemeral?       | boolean  | Visible to the command author only? <br /> 1. **true** <br /> 2. **false** (default)   | असत्य (नहीं) |

## ट्रू (हा)

```javascript
bot.interactionCommand({
    name: "interactionReply",
    prototype: "slash", // button/selectMenu/slash
    code: `
  $interactionReply[Hello, world!;;;;everyone;false]
  `
});
```
