---
title: '$awaitComponentsUntil'
description: '$awaitComponentsUntil awaits message components.'
id: awaitComponentsUntil
---

`$awaitComponentsUntil` awaits message components.

## الاستخدام

```php
$awaitComponentsUntil[channelID;messageID;userFilter;time;customIDs;commands;errorMsg?;awaitData?]
```

## البارامترات

| Field      | النوع   | الديسكبربشين                                                                                               | مطلوب |
| ---------- | ------- | ---------------------------------------------------------------------------------------------------------- |:-----:|
| channelID  | string  | Channel ID.                                                                                                | true  |
| messageID  | string  | Message ID.                                                                                                | true  |
| userFilter | Integer | To what the bot will reply <br /> 1. **everyone** <br /> 2. **specific user ID** - any user ID | true  |
| reactions  | string  | Reactions the bot will be listening to, you can separate multiple emojis with a comma ( `,` )              | true  |
| commands   | string  | Commands that will be executed, you can separate multiple emojis with a comma ( `,` )                      | true  |
| errorMsg?  | string  | Error message when command expires.                                                                        | false |
| awaitData? | string  | Awaited Data.                                                                                              | false |