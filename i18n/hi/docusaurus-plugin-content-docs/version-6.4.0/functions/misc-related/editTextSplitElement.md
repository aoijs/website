---
title: '$editTextSplitElement'
description: '$editTextSplitElement will edit a specific text split element.'
id: editTextSplitElement
---

`$editTextSplitElement` will edit a specific text split element.

## प्रोयोग

```php
$editTextSplitElement[index;text]
```

## पैरामीटर्स

| फील्ड | टाइप     | डिस्क्रिप्शन                     | चाहिए |
| ----- | -------- | -------------------------------- |:-----:|
| index | स्ट्रिंग | Index of the text split element. | true  |
| text  | स्ट्रिंग | New text split element.          | true  |

## ट्रू (हा)

This will edit the 3rd text split element and change it to "Goodbye":

```javascript
bot.command({
    name: "editTextSplitElement",
    code: `
  $editTextSplitElement[3;Goodbye]
  $textSplit[Hello, Bye, Cya;, ]
  `
});
```