---
title: '$interactionDefer'
description: '$interactionDefer defers an Interaction of the last 15 minutes.'
id: interactionDefer
---

`$interactionDefer` defers an Interaction of the last 15 minutes.

## الاستخدام

```php
$interactionDefer[ephemeral]
```

## البارامترات

| Field     | النوع   | الديسكبربشين                        | مطلوب |
| --------- | ------- | ----------------------------------- |:-----:|
| ephemeral | boolean | Visible to the command author only? | true  |

## مثال

```javascript
bot.command({
    name: 'exampleButton',
    type: 'interaction',
    prototype: 'button',
    code: `
   $interactionFollowUp[This is the second message!] 
   $interactionFollowUp[This is the first message!] 
   $interactionDefer[true]`
});
```