---
title: '$interactionEdit'
description: '$interactionEdit will return edit an interaction.'
id: interactionEdit
---

`$interactionEdit` will return edit an interaction.

## प्रोयोग

```php
$interactionEdit[content?;embeds?;components?;files?;allowedMentions?]
```

## पैरामीटर्स

| फील्ड            | टाइप     | डिस्क्रिप्शन                                                                                       |    चाहिए     |
| ---------------- | -------- | -------------------------------------------------------------------------------------------------- |:------------:|
| content?         | स्ट्रिंग | New message content.                                                                               | असत्य (नहीं) |
| embeds?          | स्ट्रिंग | Embed parser.                                                                                      | असत्य (नहीं) |
| components?      | स्ट्रिंग | Component parser.                                                                                  | असत्य (नहीं) |
| files?           | स्ट्रिंग | File parser.                                                                                       | असत्य (नहीं) |
| allowedMentions? | स्ट्रिंग | Allowed mentions? <br /> 1. **users** <br /> 2. **roles** <br /> 3. **everyone** | असत्य (नहीं) |

## ट्रू (हा)

```javascript
bot.interactionCommand({
    name: "interactionEdit",
    prototype: "slash",
    code: `
  $interactionEdit[Bye, World!;;;;everyone]
  $wait[5s]
  $interactionReply[Hello, World!;;;;everyone;false]
  `
});
```
