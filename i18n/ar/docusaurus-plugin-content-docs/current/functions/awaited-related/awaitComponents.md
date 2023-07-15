---
title: '$awaitComponents'
description: '$awaitComponents awaits components for given amount of uses.'
id: awaitComponents
---

`$awaitComponents` awaits components for given amount of uses.

## الاستخدام

```php
$awaitComponents[messageID;userFilter;customID;commands;errorMsg?;uses?;awaitData?]
```

## البارامترات

| Field      | النوع   | الديسكبربشين                                                                                                | مطلوب |
| ---------- | ------- | ----------------------------------------------------------------------------------------------------------- |:-----:|
| messageID  | Integer | Message ID.                                                                                                 | true  |
| userFilter | string  | To what the bot will reply <br /> 1. **everyone** <br /> 2. **specific user ID** - any user ID. | true  |
| customID   | string  | Custom ID.                                                                                                  | true  |
| commands   | string  | commands that will be executed, you can separate multiple emojis with a comma ( `,` )                       | true  |
| errorMsg?  | string  | error message when command expires                                                                          | false |
| uses?      | Integer | how many uses until component stops working                                                                 | false |
| awaitData? | string  | awaited data                                                                                                | false |