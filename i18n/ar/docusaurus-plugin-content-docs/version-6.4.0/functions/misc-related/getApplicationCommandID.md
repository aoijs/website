---
title: '$getApplicationCommandID'
description: '$getApplicationCommandID will return the ID of a given application command.'
id: getApplicationCommandID
---

`$getApplicationCommandID` will return the ID of a given application command.

## الاستخدام

```php
$getApplicationCommandID[name;type?]
```

## البارامترات

| Field  | النوع  | الديسكبربشين                                                                                                   | مطلوب |
| ------ | ------ | -------------------------------------------------------------------------------------------------------------- |:-----:|
| name   | string | Name of the application command.                                                                               | true  |
| النوع? | string | Application command type. <br /> 1. **global** (default) <br /> 2. **guildID** (specific guild ID) | false |

## مثال

This will return the ID of an application command called "example", (if any):

```javascript
bot.command({
    name: "getApplicationCommandID",
    code: `
  $getApplicationCommandID[example;global]
  `
});
```