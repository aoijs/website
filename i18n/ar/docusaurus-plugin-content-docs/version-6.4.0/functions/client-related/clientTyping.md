---
title: '$clientTyping'
description: '$clientTyping خذا سيجعل بوتك يظهر على انه يكتب في الروم.'
id: clientTyping
---

$clientTyping خذا سيجعل بوتك يظهر على انه يكتب في الروم.

## الأستخدام

```php
$clientTyping
```

## مثال

هذا سيجعل بوتك يظهر على انه يكتب ثم سيرسل Hello:

```javascript
bot.command({
    name: 'clientTyping',
    code: `
  Hello!
  $clientTyping
  `
});
```
