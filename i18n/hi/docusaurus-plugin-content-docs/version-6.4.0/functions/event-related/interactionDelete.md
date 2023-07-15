---
title: '$interactionDelete'
description: '$interactionDelete will delete a reply of an interaction.'
id: interactionDelete
---

`$interactionDelete` will delete a reply of an interaction.

## प्रोयोग

```php
$interactionDelete
```

## उदाहरण

This will delete the interaction after 5 seconds.

```javascript
bot.interactionCommand({
    name: "interactionDelete",
    prototype: "button",
    code: `
  $interactionDelete
  $wait[5s]
  $interactionReply[Hello, World!;;;;everyone;false]
  `
});
```
