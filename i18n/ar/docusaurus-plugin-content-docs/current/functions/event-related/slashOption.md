---
title: '$slashOption'
description: '$slashOption returns data of a slash command option.'
id: slashOption
---

`$slashOption` returns data of a slash command option.

## الاستخدام

```php
$slashOption[option]
```

## البارامترات

| Field  | النوع  | الديسكبربشين | مطلوب |
| ------ | ------ | ------------ |:-----:|
| option | string | Option name. | true  |

## مثال

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