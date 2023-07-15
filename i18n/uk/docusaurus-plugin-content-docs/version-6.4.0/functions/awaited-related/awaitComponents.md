---
title: '$awaitComponents'
description: '$awaitComponents awaits components for given amount of uses.'
id: awaitComponents
---

`$awaitComponents` awaits components for given amount of uses.

## Використання

```php
$awaitComponents[messageID;userFilter;customID;commands;errorMsg?;uses?;awaitData?]
```

## Параметри

| Поле       | Тип     | Опис                                                                                                        | Обов'язковий |
| ---------- | ------- | ----------------------------------------------------------------------------------------------------------- |:------------:|
| messageID  | integer | Message ID.                                                                                                 |     так      |
| userFilter | рядок   | To what the bot will reply <br /> 1. **everyone** <br /> 2. **specific user ID** - any user ID. |     так      |
| customID   | рядок   | Custom ID.                                                                                                  |     так      |
| commands   | рядок   | commands that will be executed, you can separate multiple emojis with a comma ( `,` )                       |     так      |
| errorMsg?  | рядок   | error message when command expires                                                                          |      ні      |
| uses?      | integer | how many uses until component stops working                                                                 |      ні      |
| awaitData? | рядок   | awaited data                                                                                                |      ні      |