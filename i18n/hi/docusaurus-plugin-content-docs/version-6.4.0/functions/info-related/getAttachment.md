---
title: '$getAttachment'
description: '$getAttachment will return the properties of an attachment.'
id: getAttachment
---

`$getAttachment` will return the properties of an attachment.

## प्रोयोग

```php
$getAttachment[channelID;messageID;index?;option?]
```

## पैरामीटर्स

| फील्ड     | टाइप     | डिस्क्रिप्शन                                    |    चाहिए     |
| --------- | -------- | ----------------------------------------------- |:------------:|
| channelID | integer  | The channel of where the message is present in. |     true     |
| messageID | integer  | The message ID.                                 |     true     |
| index?    | number   | Attachment index.                               | असत्य (नहीं) |
| option?   | स्ट्रिंग | The option to retrieve.                         | असत्य (नहीं) |