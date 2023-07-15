---
title: '$slashOption'
description: '$slashOption returns data of a slash command option.'
id: slashOption
---

`$slashOption` returns data of a slash command option.

## प्रोयोग

```php
$slashOption[option]
```

## पैरामीटर्स

| फील्ड  | टाइप     | डिस्क्रिप्शन | चाहिए |
| ------ | -------- | ------------ |:-----:|
| option | स्ट्रिंग | Option name. | true  |

## ट्रू (हा)

```javascript
$createApplicationCommand[global;exampleslash;Simple example slash command.;true;slash;[{
    "name": "exampleOption",
    "description": "example slash command option",
    "required": true,
    "type": 3
}]]
```

```javascript
bot.command({
    name: 'exampleslash',
    type: 'interaction',
    prototype: 'slash',
    code: `
    $interactionReply[What a great example! You entered $slashOption[exampleOption]!]`
});
```