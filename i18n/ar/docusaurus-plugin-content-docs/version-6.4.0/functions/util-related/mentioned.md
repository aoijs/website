---
title: '$mentioned'
description: '$mentioned will return the ID of an user of the mention.'
id: mentioned
---

`$mentioned` will return the ID of an user of the mention.

## الاستخدام

```php
$mentioned[index;returnSelf?]
```

## البارامترات

| Field       | النوع   | الديسكبربشين                                  | مطلوب |
| ----------- | ------- | --------------------------------------------- |:-----:|
| index       | number  | The index of the argument.                    | true  |
| returnSelf? | boolean | Return the author's ID if user was not found. | false |

## مثال

This will return the ID of the **first** mention if you attempt to mention someone in this command, or else it will return your ID:

```javascript
bot.command({
    name: 'mentioned',
    code: `
  $mentioned[1;true]
  `
});
```
