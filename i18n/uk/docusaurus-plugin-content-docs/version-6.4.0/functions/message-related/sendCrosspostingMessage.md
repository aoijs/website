---
title: '$sendCrosspostingMessage'
description: Вірус $sendCrosspostingMessage перетне дане повідомлення для заданих каналів.
id: sendCrosspostingMessage
---

`$sendCrosspostingMessage` переправить дане повідомлення на вказані канали.

## Використання

```php
$sendCrosspostingMessage[content;...channelIDs]
```

## Параметри

| Поле          | Тип   | Опис                               | Обов'язковий |
| ------------- | ----- | ---------------------------------- |:------------:|
| зміст         | рядок | Повідомлення для надсилання.       |     так      |
| ...ID каналів | ціле  | Де надіслати вказане повідомлення. |     так      |

## Приклад(и)

На цьому сервері повідомлення перетне повідомлення про декілька каналів:

```javascript
bot.command({
    name: 'sendCrosspostingMessage',
    код: `
   $sendCrosspostingMessage[Hello!;$channelID;$randomChannelID]
  `
});
```
