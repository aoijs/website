---
title: '$channelID'
description: '$channelID will return the channel ID of the given channel name.'
id: channelID
---

`$channelID` will return the channel ID of the given channel name.

## प्रोयोग

```php
$channelID[name?]
```

## पैरामीटर्स

| फील्ड | टाइप    | डिस्क्रिप्शन                                            |    चाहिए     |
| ----- | ------- | ------------------------------------------------------- |:------------:|
| name? | integer | Channel name of the channel you want the channel ID of. | असत्य (नहीं) |

## ट्रू (हा)

This will return the channel ID of the channel where you execute the command in:

```javascript
bot.command({
    name: 'channelID',
    code: `
  $channelID
  `
});
```