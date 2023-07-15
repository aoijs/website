---
title: '$getApplicationCommandID'
description: '$getApplicationCommandID will return the ID of a given application command.'
id: getApplicationCommandID
---

`$getApplicationCommandID` will return the ID of a given application command.

## Використання

```php
$getApplicationCommandID[name;type?]
```

## Параметри

| Поле  | Тип   | Опис                                                                                                           | Обов'язковий |
| ----- | ----- | -------------------------------------------------------------------------------------------------------------- |:------------:|
| назва | рядок | Name of the application command.                                                                               |     так      |
| тип?  | рядок | Application command type. <br /> 1. **global** (default) <br /> 2. **guildID** (specific guild ID) |      ні      |

## Приклад(и)

This will return the ID of an application command called "example", (if any):

```javascript
bot.command({
    name: "getApplicationCommandID",
    code: `
  $getApplicationCommandID[example;global]
  `
});
```