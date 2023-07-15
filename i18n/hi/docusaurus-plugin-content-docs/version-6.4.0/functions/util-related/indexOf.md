---
title: '$indexOf'
description: '$indexOf will return the index of the given character.'
id: indexOf
---

`$indexOf` will return the index of the given character.

## प्रोयोग

```php
$indexOf[string;char]
```

## पैरामीटर्स

| फील्ड    | टाइप     | डिस्क्रिप्शन                                    | चाहिए |
| -------- | -------- | ----------------------------------------------- |:-----:|
| स्ट्रिंग | स्ट्रिंग | The text the bot will be checking the index of. | true  |
| char     | स्ट्रिंग | The characters the bot will be checking for.    | true  |

## ट्रू (हा)

This will return `8` as it's the first occurring position of the character `w`:

```javascript
bot.command({
    name: 'indexOf',
    code: `
  $indexOf[Hello, what is wrong with you?;w]
  `
});
```
