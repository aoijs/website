---
title: '$interactionDefer'
description: '$interactionDefer defers an Interaction of the last 15 minutes.'
id: interactionDefer
---

`$interactionDefer` defers an Interaction of the last 15 minutes.

## प्रोयोग

```php
$interactionDefer[ephemeral]
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
   $interactionFollowUp[This is the second message!] 
   $interactionFollowUp[This is the first message!] 
   $interactionDefer[true]`
});
```