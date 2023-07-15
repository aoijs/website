---
title: '$awaitComponents'
description: '$awaitComponents awaits components for given amount of uses.'
id: awaitComponents
---

`$awaitComponents` awaits components for given amount of uses.

## प्रोयोग

```php
$awaitComponents[messageID;userFilter;customID;commands;errorMsg?;uses?;awaitData?]
```

## पैरामीटर्स

| फील्ड      | टाइप     | डिस्क्रिप्शन                                                                                                |    चाहिए     |
| ---------- | -------- | ----------------------------------------------------------------------------------------------------------- |:------------:|
| messageID  | integer  | Message ID.                                                                                                 |     true     |
| userFilter | स्ट्रिंग | To what the bot will reply <br /> 1. **everyone** <br /> 2. **specific user ID** - any user ID. |     true     |
| customID   | स्ट्रिंग | Custom ID.                                                                                                  |     true     |
| commands   | स्ट्रिंग | commands that will be executed, you can separate multiple emojis with a comma ( `,` )                       |     true     |
| errorMsg?  | स्ट्रिंग | error message when command expires                                                                          | असत्य (नहीं) |
| uses?      | integer  | how many uses until component stops working                                                                 | असत्य (नहीं) |
| awaitData? | स्ट्रिंग | awaited data                                                                                                | असत्य (नहीं) |