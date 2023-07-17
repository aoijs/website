---
title: '$isChannelManageable'
description: '$isChannelManageable перевірить, чи доступний для управління каналом.'
id: isChannelManageable
---

`$isChannelManageable` буде перевірити, чи є канал керованим чи ні.

## Використання

```php
$isChannelManageable[channelID?]
```

## Параметри

| Поле       | Тип  | Опис                                                   | Обов'язковий |
| ---------- | ---- | ------------------------------------------------------ |:------------:|
| ID каналу? | ціле | ID каналу, який перевіряє, чи є канал керованим чи ні. |      ні      |

## Приклад(и)

Це поверне `true` або `false` в залежності від того, що канал ви виконуєте в менеджері команди:

```javascript
bot.command({
    name: 'isChannelManageable',
    код: `
  $isChannelManageable[$channelID]
  `
});
```
