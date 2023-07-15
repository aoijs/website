---
title: '$advancedTextSplit'
description: '$advancedTextSplit will split multiple given arguments.'
id: advancedTextSplit
---

`$advancedTextSplit` will split multiple given arguments.

## प्रोयोग

```php
$advancedTextSplit[text;sep;index;sep?;index?]
```

## पैरामीटर्स

| फील्ड | टाइप     | डिस्क्रिप्शन                                      | चाहिए |
| ----- | -------- | ------------------------------------------------- |:-----:|
| text  | स्ट्रिंग | Text to split.                                    | true  |
| sep   | स्ट्रिंग | Separator which is used to split the values.      | true  |
| index | integer  | The position of the text you want to be returned. | true  |

## ट्रू (हा)

This will split `Hello` from `Bye` and return `Hello`:

```javascript
bot.command({
    name: 'advancedTextSplit',
    code: `
  $advancedTextSplit[Hello/Bye;/;1]
  `
});
```
