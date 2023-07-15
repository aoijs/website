---
title: '$clear'
description: '$clear will delete the amount of given messages in a channel.'
id: clear
---

`$clear` will delete the amount of given messages in a channel.

## प्रोयोग

```php
$clear[amount;filter?;returnCount?;channelID?]
```

## पैरामीटर्स

| फील्ड        | टाइप     | डिस्क्रिप्शन                                                                                                                                                 |    चाहिए     |
| ------------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |:------------:|
| amount       | number   | Amount of messages to delete.                                                                                                                                |     true     |
| filter?      | स्ट्रिंग | Filter of messages which are to delete. <br /> 1. **everyone** (default) <br /> 2. **unPins** <br /> 3. **bot** <br /> 4. **userID** | असत्य (नहीं) |
| returnCount? | boolean  | Return the count of deleted messages. <br /> 1. **false** (default) <br /> 2. **true**                                                           | असत्य (नहीं) |
| channelID?   | integer  | In which channel the permissions shall be deleted.                                                                                                           | असत्य (नहीं) |

## ट्रू (हा)

This will delete the most recent fifty messages which are not pinned:

```javascript
bot.command({
    name: 'clear',
    code: `
  $clear[50;unPins;false;$channelID]
  `
});
```
