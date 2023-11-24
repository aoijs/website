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

| Field     | Type                                                                                              | Description                                     | Required |
| --------- | ------------------------------------------------------------------------------------------------- | ----------------------------------------------- | :------: |
| channelID | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The channel of where the message is present in. |   true   |
| messageID | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The message ID.                                 |   true   |
| index?    | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Attachment index.                               |  false   |
| option?   | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The option to retrieve.                         |  false   |
