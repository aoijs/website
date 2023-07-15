---
title: '$modifyApplicationCommand'
description: '$modifyApplicationCommand will modify an existing application command.'
id: modifyApplicationCommand
---

`$modifyApplicationCommand` will modify an existing application command.

## प्रोयोग

```php
$modifyApplicationCommand[guildID/global;appID;name:description:type:options:defaultPermission;...options]
```

## पैरामीटर्स

| फील्ड          | टाइप            | डिस्क्रिप्शन                                                                            | चाहिए |
| -------------- | --------------- | --------------------------------------------------------------------------------------- |:-----:|
| guildID/global | integer, string | Application command type. <br/> 1. **global** <br/> 2. **specific guildID** | true  |
| appID          | integer         | Application command ID.                                                                 | true  |
| ...options     | object          | New data for the application command.                                                   | true  |