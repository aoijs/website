---
title: '$getApplicationCommandOptions'
description: '$getApplicationCommandOptions will return application options of a given application command.'
id: getApplicationCommandOptions
---

`$getApplicationCommandOptions` will return the ID of a given application command.

## Використання

```php
$getApplicationCommandOptions[name;type?]
```

## Параметри

| Поле  | Тип   | Опис                                                                                                           | Обов'язковий |
| ----- | ----- | -------------------------------------------------------------------------------------------------------------- |:------------:|
| назва | рядок | Name of the application command.                                                                               |     так      |
| тип?  | рядок | Application command type. <br /> 1. **global** (default) <br /> 2. **guildID** (specific guild ID) |      ні      |