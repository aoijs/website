---
title: '$modifyApplicationCommand'
description: '$modifyApplicationCommand will modify an existing application command.'
id: modifyApplicationCommand
---

`$modifyApplicationCommand` will modify an existing application command.

## الاستخدام

```php
$modifyApplicationCommand[guildID/global;appID;name:description:type:options:defaultPermission;...options]
```

## البارامترات

| Field          | النوع           | الديسكبربشين                                                                            | مطلوب |
| -------------- | --------------- | --------------------------------------------------------------------------------------- |:-----:|
| guildID/global | integer, string | Application command type. <br/> 1. **global** <br/> 2. **specific guildID** | true  |
| appID          | Integer         | Application command ID.                                                                 | true  |
| ...options     | object          | New data for the application command.                                                   | true  |