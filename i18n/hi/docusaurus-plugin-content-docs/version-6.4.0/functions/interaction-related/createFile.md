---
title: '$createFile'
description: '$createFile will create a file attachment.'
id: createFile
---

`$createFile` will create a file attachment.

## प्रोयोग

```php
$createFile[attachment;name]
```

## पैरामीटर्स

| फील्ड      | टाइप     | डिस्क्रिप्शन                | चाहिए |
| ---------- | -------- | --------------------------- |:-----:|
| attachment | स्ट्रिंग | Content of the file.        | true  |
| name       | स्ट्रिंग | The name of the attachment. | true  |

## ट्रू (हा)

This will create a text file called **`example.txt`** with the text "This is an example!":

```javascript
bot.command({
    name: 'createFile',
    code: `
  $createFile[This is an example!;example.txt]
  `
});
```
