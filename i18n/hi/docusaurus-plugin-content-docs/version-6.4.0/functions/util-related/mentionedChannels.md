---
title: '$mentionedChannels'
description: '$mentionedChannels will return the ID of a channel retrieved from the mention.'
id: mentionedChannels
---

`$mentionedChannels` will return the ID of a channel retrieved from the mention.

## प्रोयोग

```php
$mentionedChannels[index;returnSelf?]
```

## पैरामीटर्स

| फील्ड       | टाइप    | डिस्क्रिप्शन                                                                               |    चाहिए     |
| ----------- | ------- | ------------------------------------------------------------------------------------------ |:------------:|
| index       | number  | The index of the argument.                                                                 |     true     |
| returnSelf? | boolean | Return the ID of the channel where the command was executed in when channel was not found. | असत्य (नहीं) |

## ट्रू (हा)

This will return the ID of the **first** mention if you attempt to mention any channel in this command, or else it will return the channel ID of the channel where the command was executed in:

```javascript
bot.command({
    name: 'mentionedChannels',
    code: `
  $mentionedChannels[1;true]
  `
});
```
