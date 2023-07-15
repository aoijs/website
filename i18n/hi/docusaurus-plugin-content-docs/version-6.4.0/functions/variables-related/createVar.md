---
title: '$createVar'
description: '$createVar will create a new variable.'
id: createVar
---

`$createVar` will create a new variable.

## प्रोयोग

```php
$createVar[table;...vars]
```

## पैरामीटर्स

| फील्ड   | टाइप     | डिस्क्रिप्शन             | चाहिए |
| ------- | -------- | ------------------------ |:-----:|
| table   | स्ट्रिंग | Variable table.          | true  |
| ...vars | स्ट्रिंग | Variable name and value. | true  |

## ट्रू (हा)

This will create a new variable with the name of "variable" and the value of "value":

```javascript
bot.command({
    name: "createVar",
    code: `
  $createVar[main;variable;value]
  `
});
```