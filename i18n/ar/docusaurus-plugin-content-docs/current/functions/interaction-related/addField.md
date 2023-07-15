---
title: '$addField'
description: '$addField will add a field in an embed.'
id: addField
---

`$addField` will add a field in an embed.

## الاستخدام

```php
$addField[fieldTitle;fieldDescription;inline?]
```

## البارامترات

| Field             | النوع   | الديسكبربشين                  | مطلوب |
| ----------------- | ------- | ----------------------------- |:-----:|
| fieldTitle?       | string  | The title of the field.       | true  |
| fieldDescription? | string  | The description of the field. | true  |
| inline?           | boolean | If the field is inline.       | false |

## مثال

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
