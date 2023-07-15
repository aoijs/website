---
title: '$roleId'
description: '$roleId will return the ID of a role.'
id: roleId
---

`$roleId` will return the ID of a role.

## Використання

```php
$roleId[roleResolver;guildID?]
```

## Параметри

| Поле         | Тип   | Опис                                           | Обов'язковий |
| ------------ | ----- | ---------------------------------------------- |:------------:|
| roleResolver | рядок | Name of the role.                              |     так      |
| guildID?     | рядок | ID of the guild where the role was created in. |      ні      |

## Приклад(и)

This will return the role ID of a role called `Owner` (this example won't work if you dont have that role):

```javascript
bot.command({
    name: 'roleId',
    code: `
  $roleId[Owner;$guildID]
  `
});
```