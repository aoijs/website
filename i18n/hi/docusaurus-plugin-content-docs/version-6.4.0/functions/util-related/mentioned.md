---
title: '$mentioned'
description: '$mentioned will return the ID of an user of the mention.'
id: mentioned
---

`$mentioned` will return the ID of an user of the mention.

## प्रोयोग

```php
$mentioned[index;returnSelf?]
```

## पैरामीटर्स

| फील्ड       | टाइप    | डिस्क्रिप्शन                                  |    चाहिए     |
| ----------- | ------- | --------------------------------------------- |:------------:|
| index       | number  | The index of the argument.                    |     true     |
| returnSelf? | boolean | Return the author's ID if user was not found. | असत्य (नहीं) |

## ट्रू (हा)

This will return the ID of the **first** mention if you attempt to mention someone in this command, or else it will return your ID:

```javascript
bot.command({
    name: 'mentioned',
    code: `
  $mentioned[1;true]
  `
});
```
