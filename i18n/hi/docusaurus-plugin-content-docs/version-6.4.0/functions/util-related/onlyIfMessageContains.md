---
title: '$onlyIfMessageContains'
description: '$onlyIfMessageContains will check if the message contains the given text and if not return a error message.'
id: onlyIfMessageContains
---

`$onlyIfMessageContains` will check if the message contains the given text and if not return a error message.

## प्रोयोग

```php
$onlyIfMessageContains[content;...text;error]
```

## पैरामीटर्स

| फील्ड   | टाइप     | डिस्क्रिप्शन                                 | चाहिए |
| ------- | -------- | -------------------------------------------- |:-----:|
| content | स्ट्रिंग | Message which should contain the given text. | true  |
| text    | स्ट्रिंग | Text to check for in the message.            | true  |
| error   | स्ट्रिंग | Error to return.                             | true  |

## ट्रू (हा)

This will return the error message as "aoi.js" does not appear in "Hello!":

```javascript
bot.command({
    name: "onlyIfMessageContains",
    code: `
    Ok.
    $onlyIfMessageContains[Hello!;aoi.js;Couldn't find that word!]
    `
});
```