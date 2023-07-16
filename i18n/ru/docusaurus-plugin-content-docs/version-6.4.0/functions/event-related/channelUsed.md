---
title: $channelUsed
description: '$channelUsed вернет ID канала с которого произошел событие.'
id: channelUsed
---

`$channelUsed` вернет ID канала, на который было вызвано событие.

## Использование

```php
$channelUsed
```

## Пример(ы)

Это вернет количество ролей вашей гильдии:

**Вы требуете `onMessageDelete` в вашем основном файле, чтобы использовать этот пример!**

```javascript
bot.deletedCommand({
    channel: "channelID",
    code: `$userTag удалил сообщение в <#$channelUsed>!`
});
```
