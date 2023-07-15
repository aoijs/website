---
title: '$awaitComponentsUntil'
description: '$awaitComponentsUntil awaits message components.'
id: awaitComponentsUntil
---

`$awaitComponentsUntil` awaits message components.

## प्रोयोग

```php
$awaitComponentsUntil[channelID;messageID;userFilter;time;customIDs;commands;errorMsg?;awaitData?]
```

## पैरामीटर्स

| फील्ड      | टाइप     | डिस्क्रिप्शन                                                                                               |    चाहिए     |
| ---------- | -------- | ---------------------------------------------------------------------------------------------------------- |:------------:|
| channelID  | स्ट्रिंग | Channel ID.                                                                                                |     true     |
| messageID  | स्ट्रिंग | Message ID.                                                                                                |     true     |
| userFilter | integer  | To what the bot will reply <br /> 1. **everyone** <br /> 2. **specific user ID** - any user ID |     true     |
| reactions  | स्ट्रिंग | Reactions the bot will be listening to, you can separate multiple emojis with a comma ( `,` )              |     true     |
| commands   | स्ट्रिंग | Commands that will be executed, you can separate multiple emojis with a comma ( `,` )                      |     true     |
| errorMsg?  | स्ट्रिंग | Error message when command expires.                                                                        | असत्य (नहीं) |
| awaitData? | स्ट्रिंग | Awaited Data.                                                                                              | असत्य (नहीं) |