---
title: '$addField'
description: '$addField will add a field in an embed.'
id: addField
---

`$addField` will add a field in an embed.

## प्रोयोग

```php
$addField[fieldTitle;fieldDescription;inline?]
```

## पैरामीटर्स

| फील्ड             | टाइप     | डिस्क्रिप्शन                  |    चाहिए     |
| ----------------- | -------- | ----------------------------- |:------------:|
| fieldTitle?       | स्ट्रिंग | The title of the field.       |     true     |
| fieldDescription? | स्ट्रिंग | The description of the field. |     true     |
| inline?           | boolean  | If the field is inline.       | असत्य (नहीं) |

## ट्रू (हा)

This will send an embed with a field and description:

```javascript
bot.command({
    name: 'addField',
    code: `
  $addField[Example;Look at this!;false]
  $description[Hello!]
  `
});
```
