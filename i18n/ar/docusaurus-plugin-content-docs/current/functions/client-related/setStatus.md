---
title: '$setStatus'
description: '$setStatus سيغير حالة البوت.'
id: setStatus
---

`$setStatus` سيغير حالة البوت.

## الاستخدام

```php
$setStatus[name;type;status;URL;afk?]
```

## البارامترات

| الحقل  | النوع           | الديسكبربشين                                                                       | مطلوب |
| ------ | --------------- | ---------------------------------------------------------------------------------- |:-----:|
| name   | string          | محتوى الاستاتس.                                                                    | true  |
| type   | string, integer | 1. PLAYING (default). WATCHING. **STREAMING** <br /> 4. LISTENING. COMPETING | true  |
| string | string          | 1. online (default). Idle. DND. Offline                                            | true  |
| URL    | string          | رابط البث                                                                          | true  |
| afk؟   | boolean         | 1. true. false (default)                                                           | false |

## أمثلة:

هتغير حالت الاستاتس بتاعت البوت **PLAYING** و **online**:

```javascript
bot.command({
    name: 'setStatus',
    code: `
   $setStatus[Hello!;PLAYING;online]`
});
```