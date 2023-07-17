---
title: '$channelCategoryID'
description: '$channelCategoryID поверне батька спеціального каналу.'
id: channelCategoryID
---

`$channelCategoryID` поверне батьківський канал.

## Використання

```php
$channelCategoryID[channelID?]
```

## Параметри

| Поле       | Тип  | Опис                                                           | Обов'язковий |
| ---------- | ---- | -------------------------------------------------------------- |:------------:|
| ID каналу? | ціле | ID каналу, з якого ви хочете отримати його батьківський канал. |      ні      |

## Приклад(и)

Це поверне ID категорії текстового каналу, в якому ви виконаєте команду:

```javascript
bot.command({
    name: 'channelCategoryID',
    код: `
  $channelCategoryID[$channelID]
  `
});
```