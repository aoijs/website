---
title: '$mentionType'
description: '$mentionType will return the type of the mention.'
id: mentionType
---

`$mentionType` will return the type of the mention.

## प्रोयोग

```php
$mentionType[content]
```

## पैरामीटर्स

| फील्ड   | टाइप     | डिस्क्रिप्शन                                     | चाहिए |
| ------- | -------- | ------------------------------------------------ |:-----:|
| content | स्ट्रिंग | The mention whose mention type will be returned. | true  |

<details>
  <summary> <h3> Mention Types </h3></summary>

| टाइप     | डिस्क्रिप्शन                      |
| -------- | --------------------------------- |
| everyone | `@everyone` and `@here` mentions. |
| users    | All user mentions.                |
| roles    | All role mentions.                |
| all      | Everything listed above.          |

</details>

## ट्रू (हा)

This will return `users` as you're an user:

```javascript
bot.command({
    name: 'mentionType',
    code: `
  $mentionType[<@$authorID>]
  `
});
```
