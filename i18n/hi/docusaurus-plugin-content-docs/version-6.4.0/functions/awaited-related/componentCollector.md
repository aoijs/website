---
title: '$componentCollector'
description: '$componentCollector will create a collector for the given components.'
id: componentCollector
---

`$componentCollector` will create a collector for the given components.

## प्रोयोग

```php
$componentCollector[messageID;userFilter;time;customIDs;commands;errorMsg?;endcommand?;awaitData?]
```

## पैरामीटर्स

| फील्ड       | टाइप     | डिस्क्रिप्शन                                                                                                |    चाहिए     |
| ----------- | -------- | ----------------------------------------------------------------------------------------------------------- |:------------:|
| messageID   | integer  | The message ID.                                                                                             |     true     |
| userFilter  | स्ट्रिंग | To what the bot will reply. <br /> 1. **everyone** <br /> 2. **specific user ID** - any user ID |     true     |
| time        | स्ट्रिंग | When the command ends/expires.                                                                              |     true     |
| customID    | स्ट्रिंग | The component ID.                                                                                           |     true     |
| commands    | स्ट्रिंग | Commands that will be executed, you can separate multiple emojis with a comma ( `,` ).                      |     true     |
| errorMsg?   | स्ट्रिंग | Error message when command expires.                                                                         | असत्य (नहीं) |
| endcommand? | integer  | End command which will be executed when previous commands were executed.                                    | असत्य (नहीं) |
| awaitData?  | स्ट्रिंग | Awaited Data.                                                                                               | असत्य (नहीं) |
