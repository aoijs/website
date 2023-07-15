---
title: $getAttachment
description: $getAttachment will return the properties of an attachment.
id: getAttachment
---

`$getAttachment` will return the properties of an attachment.

## Usage

```php
$getAttachment[channelID;messageID;index?;option?]
```

## Parameters

| Field     | Type    | Description                                     | Required |
| --------- | ------- | ----------------------------------------------- | :------: |
| channelID | integer | The channel of where the message is present in. |   true   |
| messageID | integer | The message ID.                                 |   true   |
| index?    | number  | Attachment index.                               |  false   |
| option?   | string  | The option to retrieve.                         |  false   |