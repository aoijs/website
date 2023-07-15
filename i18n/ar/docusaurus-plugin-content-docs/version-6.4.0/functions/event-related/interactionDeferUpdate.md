---
title: '$interactionDeferUpdate'
description: '$interactionDeferUpdate defers the interaction message that will be updated.'
id: interactionDeferUpdate
---

`$interactionDeferUpdate` defers the interaction message that will be updated.

## الاستخدام

```php
$interactionDeferUpdate[ephemeral]
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
   $interactionFollowUp[This is the first message!]
   $interactionEdit[This is the second message!]
   $interactionDeferUpdate[true]`
});
```