---
title: '$interactionDeferUpdate'
description: '$interactionDeferUpdate defers the interaction message that will be updated.'
id: interactionDeferUpdate
---

`$interactionDeferUpdate` defers the interaction message that will be updated.

## प्रोयोग

```php
$interactionDeferUpdate[ephemeral]
```

## पैरामीटर्स

| फील्ड     | टाइप    | डिस्क्रिप्शन                        | चाहिए |
| --------- | ------- | ----------------------------------- |:-----:|
| ephemeral | boolean | Visible to the command author only? | true  |

## ट्रू (हा)

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