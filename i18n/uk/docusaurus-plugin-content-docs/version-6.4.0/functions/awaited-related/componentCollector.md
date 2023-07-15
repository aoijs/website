---
title: '$componentCollector'
description: '$componentCollector will create a collector for the given components.'
id: componentCollector
---

`$componentCollector` will create a collector for the given components.

## Використання

```php
$componentCollector[messageID;userFilter;time;customIDs;commands;errorMsg?;endcommand?;awaitData?]
```

## Параметри

| Поле        | Тип     | Опис                                                                                                        | Обов'язковий |
| ----------- | ------- | ----------------------------------------------------------------------------------------------------------- |:------------:|
| messageID   | integer | The message ID.                                                                                             |     так      |
| userFilter  | рядок   | To what the bot will reply. <br /> 1. **everyone** <br /> 2. **specific user ID** - any user ID |     так      |
| time        | рядок   | When the command ends/expires.                                                                              |     так      |
| customID    | рядок   | The component ID.                                                                                           |     так      |
| commands    | рядок   | Commands that will be executed, you can separate multiple emojis with a comma ( `,` ).                      |     так      |
| errorMsg?   | рядок   | Error message when command expires.                                                                         |      ні      |
| endcommand? | integer | End command which will be executed when previous commands were executed.                                    |      ні      |
| awaitData?  | рядок   | Очікувані Дані.                                                                                             |      ні      |
