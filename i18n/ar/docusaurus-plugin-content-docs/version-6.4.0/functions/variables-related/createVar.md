---
title: '$createVar'
description: '$createVar will create a new variable.'
id: createVar
---

`$createVar` will create a new variable.

## الاستخدام

```php
$createVar[table;...vars]
```

## البارامترات

| Field   | النوع  | الديسكبربشين             | مطلوب |
| ------- | ------ | ------------------------ |:-----:|
| table   | string | Variable table.          | true  |
| ...vars | string | Variable name and value. | true  |

## مثال

This will create a new variable with the name of "variable" and the value of "value":

```javascript
bot.command({
    name: "createVar",
    code: `
  $createVar[main;variable;value]
  `
});
```