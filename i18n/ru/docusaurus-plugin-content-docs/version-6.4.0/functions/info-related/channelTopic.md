---
title: $channelTopic
description: '$channelTopic вернет тему данного канала.'
id: channelTopic
---

`$channelTopic` вернет тему данного канала.

## Использование

```php
$channelTopic[channelID?]
```

## Параметры

| Название   | Nbg   | Описание                            | Нужно |
| ---------- | ----- | ----------------------------------- |:-----:|
| ID канала? | целое | ID канала для возврата темы канала. | ложь  |

## Пример(ы)

Это вернёт тему канала в которой вы выполняете команду в:

```javascript
bot.command({
    имя: 'channelTopic',
    код: `
  $channelTopic[$channelID]
  `
});
```