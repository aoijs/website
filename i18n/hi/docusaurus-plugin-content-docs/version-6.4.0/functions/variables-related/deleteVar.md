---
title: '$deleteVar'
description: '$deleteVar will delete a given variable.'
id: deleteVar
---

`$deleteVar` will delete a given variable.

## प्रोयोग

```php
$deleteVar[variable;id;table?]
```

## पैरामीटर्स

| फील्ड    | टाइप           | डिस्क्रिप्शन                                  |    चाहिए     |
| -------- | -------------- | --------------------------------------------- |:------------:|
| variable | string, number | Variable name.                                |     true     |
| id       | integer        | ID of the variable to delete ( userID etc. ). |     true     |
| table?   | स्ट्रिंग       | Variable table.                               | असत्य (नहीं) |

## ट्रू (हा)

This will delete a variable called "Test":

```javascript
bot.command({
    name: "deleteVar",
    code: `
  $deleteVar[Test;$authorID;main]
  `
});
```