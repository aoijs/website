---
title: '$nonEscape'
description: '$nonEscape will stop escaping special characters.'
id: nonEscape
---

`$nonEscape` will stop escaping special characters.

## الاستخدام

```php
$nonEscape[message]
```

## البارامترات

| Field   | النوع  | الديسكبربشين                       | مطلوب |
| ------- | ------ | ---------------------------------- | ----- |
| message | string | Text you don't want to be escaped. | true  |

## مثال

This will stop from escaping certain characters:

```javascript
bot.command({
    name: 'nonEscape',
    code: `
  $nonEscape[Hello [;)]]
  `
});
```
