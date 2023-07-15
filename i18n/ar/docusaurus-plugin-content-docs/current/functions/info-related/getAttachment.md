---
title: '$getAttachment'
description: '$getAttachment will return the properties of an attachment.'
id: getAttachment
---

`$getAttachment` will return the properties of an attachment.

## الاستخدام

```php
$getAttachment[channelID;messageID;index?;option?]
```

## البارامترات

| Field     | النوع   | الديسكبربشين                                    | مطلوب |
| --------- | ------- | ----------------------------------------------- |:-----:|
| channelID | Integer | The channel of where the message is present in. | true  |
| messageID | Integer | The message ID.                                 | true  |
| index?    | number  | Attachment index.                               | false |
| option?   | string  | The option to retrieve.                         | false |