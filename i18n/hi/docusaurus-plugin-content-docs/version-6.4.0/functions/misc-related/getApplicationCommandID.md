---
title: '$getApplicationCommandID'
description: '$getApplicationCommandID will return the ID of a given application command.'
id: getApplicationCommandID
---

`$getApplicationCommandID` will return the ID of a given application command.

## प्रोयोग

```php
$getApplicationCommandID[name;type?]
```

## पैरामीटर्स

| फील्ड | टाइप     | डिस्क्रिप्शन                                                                                                   |    चाहिए     |
| ----- | -------- | -------------------------------------------------------------------------------------------------------------- |:------------:|
| name  | स्ट्रिंग | Name of the application command.                                                                               |     true     |
| टाइप? | स्ट्रिंग | Application command type. <br /> 1. **global** (default) <br /> 2. **guildID** (specific guild ID) | असत्य (नहीं) |

## ट्रू (हा)

This will return the ID of an application command called "example", (if any):

```javascript
bot.command({
    name: "getApplicationCommandID",
    code: `
  $getApplicationCommandID[example;global]
  `
});
```