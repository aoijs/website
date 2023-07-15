---
title: '$awaitComponentsUntil'
description: '$awaitComponentsUntil awaits message components.'
id: awaitComponentsUntil
---

`$awaitComponentsUntil` awaits message components.

## Використання

```php
$awaitComponentsUntil[channelID;messageID;userFilter;time;customIDs;commands;errorMsg?;awaitData?]
```

## Параметри

| Поле       | Тип     | Опис                                                                                                       | Обов'язковий |
| ---------- | ------- | ---------------------------------------------------------------------------------------------------------- |:------------:|
| channelID  | рядок   | Channel ID.                                                                                                |     так      |
| messageID  | рядок   | Message ID.                                                                                                |     так      |
| userFilter | integer | To what the bot will reply <br /> 1. **everyone** <br /> 2. **specific user ID** - any user ID |     так      |
| reactions  | рядок   | Reactions the bot will be listening to, you can separate multiple emojis with a comma ( `,` )              |     так      |
| commands   | рядок   | Commands that will be executed, you can separate multiple emojis with a comma ( `,` )                      |     так      |
| errorMsg?  | рядок   | Error message when command expires.                                                                        |      ні      |
| awaitData? | рядок   | Очікувані Дані.                                                                                            |      ні      |