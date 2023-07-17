---
title: $archiveThread
description: '$archiveThread будет архивировать или разархивировать конкретную тему.'
id: archiveThread
---

`$archiveThread` будет архивировать или разархивировать конкретную тему.

## Использование

```php
$archiveThread[threadID;channelID?;archive?;reason?]
```

## Параметры

| Название      | Nbg     | Описание                                                      | Нужно |
| ------------- | ------- | ------------------------------------------------------------- |:-----:|
| threadID      | целое   | ID темы.                                                      |  да   |
| ID канала?    | целое   | ID канала где находится поток.                                | ложь  |
| архивировать? | boolean | Архивировать данный поток?                                    | ложь  |
| причина?      | строка  | Причина, которая будет отображаться в журнале аудита гильдии. | ложь  |

## Пример(ы)

Это будет архивировать созданный поток:

```javascript
bot.command({
    name: 'archiveThread',
    code: `
  $archiveThread[$channelID;$get[id];true;testing]
  $let[id;$createThread[$channelID;example;1440;public;$messageID;true]]  
  `
});
```
