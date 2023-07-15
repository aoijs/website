---
title: '$interactionUpdate'
description: '$interactionUpdate will update an existing interaction.'
id: interactionUpdate
---

`$interactionUpdate` will return update an existing interaction.

## الاستخدام

```php
$interactionUpdate[content?;embeds?;components?;files?]
```

## البارامترات

| Field       | النوع  | الديسكبربشين         | مطلوب |
| ----------- | ------ | -------------------- |:-----:|
| content?    | string | New message content. | false |
| embeds?     | string | Embed parser.        | false |
| components? | string | Component parser.    | false |
| files?      | string | File parser.         | false |

## مثال

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