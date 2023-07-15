---
title: '$setStatus'
description: '$setStatus will change the client''s status.'
id: setStatus
---

`$setStatus` will change the client's status.

## प्रोयोग

```php
$setStatus[name;type;status;URL;afk?]
```

## पैरामीटर्स

| फील्ड  | टाइप            | डिस्क्रिप्शन                                                                                                                                    |    चाहिए     |
| ------ | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |:------------:|
| name   | स्ट्रिंग        | The content of the status.                                                                                                                      |     true     |
| टाइप   | string, integer | 1. **PLAYING** (default) <br /> 2. **WATCHING** <br /> 3. **STREAMING** <br /> 4. **LISTENING** <br /> 5. **COMPETING** |     true     |
| status | स्ट्रिंग        | 1. **online** (default) <br /> 2. **idle** <br /> 3. **dnd** <br /> 4. **invisible**                                          |     true     |
| URL    | स्ट्रिंग        | URL (streaming status)                                                                                                                          |     true     |
| afk?   | boolean         | 1. **true** <br /> 2. **false** (default)                                                                                                 | असत्य (नहीं) |

## ट्रू (हा)

This will change the client's status to **PLAYING** and **online**:

```javascript
bot.command({
    name: 'setStatus',
    code: `
   $setStatus[Hello!;PLAYING;online]`
});
```