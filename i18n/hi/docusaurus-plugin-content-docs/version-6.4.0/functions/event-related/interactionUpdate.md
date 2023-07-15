---
title: '$interactionUpdate'
description: '$interactionUpdate will update an existing interaction.'
id: interactionUpdate
---

`$interactionUpdate` will return update an existing interaction.

## प्रोयोग

```php
$interactionUpdate[content?;embeds?;components?;files?]
```

## पैरामीटर्स

| फील्ड       | टाइप     | डिस्क्रिप्शन         |    चाहिए     |
| ----------- | -------- | -------------------- |:------------:|
| content?    | स्ट्रिंग | New message content. | असत्य (नहीं) |
| embeds?     | स्ट्रिंग | Embed parser.        | असत्य (नहीं) |
| components? | स्ट्रिंग | Component parser.    | असत्य (नहीं) |
| files?      | स्ट्रिंग | File parser.         | असत्य (नहीं) |

## ट्रू (हा)

```javascript
bot.interactionCommand({
    name: "interactionUpdate",
    prototype: "slash",
    code: `
  $interactionReply[Hello, World!;;{actionRow:{button:Example Button!:primary:customID:false}};;everyone;false]
  `
});
```

```js
bot.interactionCommand({
    name: "customID",
    prototype: "button",
    code: `
  $interactionUpdate[Bye, world.]
  `
});
```