---
title: '$modifyApplicationCommand'
description: '$modifyApplicationCommand will modify an existing application command.'
id: modifyApplicationCommand
---

`$modifyApplicationCommand` will modify an existing application command.

## Використання

```php
$modifyApplicationCommand[guildID/global;appID;name:description:type:options:defaultPermission;...options]
```

## Параметри

| Поле           | Тип             | Опис                                                                                    | Обов'язковий |
| -------------- | --------------- | --------------------------------------------------------------------------------------- |:------------:|
| guildID/global | integer, string | Application command type. <br/> 1. **global** <br/> 2. **specific guildID** |     так      |
| appID          | integer         | Application command ID.                                                                 |     так      |
| ...options     | object          | New data for the application command.                                                   |     так      |