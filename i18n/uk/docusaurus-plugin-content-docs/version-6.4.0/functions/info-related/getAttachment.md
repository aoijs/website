---
title: '$getAttachment'
description: '$getAttachment will return the properties of an attachment.'
id: getAttachment
---

`$getAttachment` will return the properties of an attachment.

## Використання

```php
$getAttachment[channelID;messageID;index?;option?]
```

## Параметри

| Поле      | Тип     | Опис                                            | Обов'язковий |
| --------- | ------- | ----------------------------------------------- |:------------:|
| channelID | integer | The channel of where the message is present in. |     так      |
| messageID | integer | The message ID.                                 |     так      |
| index?    | number  | Attachment index.                               |      ні      |
| option?   | рядок   | The option to retrieve.                         |      ні      |