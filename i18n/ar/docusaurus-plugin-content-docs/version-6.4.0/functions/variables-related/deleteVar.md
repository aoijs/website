---
title: '$deleteVar'
description: '$deleteVar will delete a given variable.'
id: deleteVar
---

`$deleteVar` will delete a given variable.

## الاستخدام

```php
$deleteVar[variable;id;table?]
```

## البارامترات

| Field    | النوع          | الديسكبربشين                                  | مطلوب |
| -------- | -------------- | --------------------------------------------- |:-----:|
| variable | string, number | Variable name.                                | true  |
| id       | Integer        | ID of the variable to delete ( userID etc. ). | true  |
| table?   | string         | Variable table.                               | false |

## مثال

This will delete a variable called "Test":

```javascript
bot.command({
    name: "deleteVar",
    code: `
  $deleteVar[Test;$authorID;main]
  `
});
```