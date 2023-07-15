---
title: '$clear'
description: '$clear will delete the amount of given messages in a channel.'
id: clear
---

`$clear` will delete the amount of given messages in a channel.

## الاستخدام

```php
$clear[amount;filter?;returnCount?;channelID?]
```

## البارامترات

| Field        | النوع   | الديسكبربشين                                                                                                                                                 | مطلوب |
| ------------ | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |:-----:|
| amount       | number  | Amount of messages to delete.                                                                                                                                | true  |
| filter?      | string  | Filter of messages which are to delete. <br /> 1. **everyone** (default) <br /> 2. **unPins** <br /> 3. **bot** <br /> 4. **userID** | false |
| returnCount? | boolean | Return the count of deleted messages. <br /> 1. **false** (default) <br /> 2. **true**                                                           | false |
| channelID?   | Integer | In which channel the permissions shall be deleted.                                                                                                           | false |

## مثال

This will delete the most recent fifty messages which are not pinned:

```javascript
bot.command({
    name: 'clear',
    code: `
  $clear[50;unPins;false;$channelID]
  `
});
```
