---
title: $webhookExists
description: '$webhookExists будет проверять, существует ли данный вебхук.'
id: webhookExists
---

`$webhookExists` проверит наличие данного вебхука.

## Использование

```php
$webhookExists[id;token]
```

## Параметры

| Название | Nbg    | Описание               | Нужно |
| -------- | ------ | ---------------------- |:-----:|
| id       | целое  | Идентификатор вебхука. |  да   |
| токен    | строка | Токен вебхука.         |  да   |

## Пример(ы)

Это проверит существует ли данный вебхук:

```javascript
bot.command({
    name: 'webhookExists',
    code: `
  $webhookExists[$splitText[1];$splitText[2]]
  $textSplit[$createWebhook[$channelID;aoi.js is great;$userAvatar[$authorID];Just testing.;, ];, ]
  `
});
```
