---
title: '$modifyWebhook'
description: '$modifyWebhook будет изменять данный вебхук.'
id: modifyWebhook
---

`$modifyWebhook` изменит данный вебхук.

## Использование

```php
$modifyWebhook[webhookID;name;avatar;channelID?;reason?]
```

## Параметры

| Название   | Nbg    | Описание                                                      | Нужно |
| ---------- | ------ | ------------------------------------------------------------- |:-----:|
| webhookID  | целое  | Идентификатор webhook для изменения.                          |  да   |
| название   | строка | Новое имя вебхука.                                            |  да   |
| аватар     | строка | Новый аватар вебхука.                                         |  да   |
| ID канала? | целое  | ID канала, в котором находится webhook.                       | ложь  |
| причина?   | строка | Причина, которая будет отображаться в журнале аудита гильдии. | ложь  |

## Пример(ы)

Это изменит существующий вебхук и изменит его аватар на ваш аватар пользователя:

```javascript
bot.command({
    name: 'modifyWebhook',
    code: `
  $modifyWebhook[webhookID;Hello!;$userAvatar[$authorID];$channelID;Testing!]
  «
});
```