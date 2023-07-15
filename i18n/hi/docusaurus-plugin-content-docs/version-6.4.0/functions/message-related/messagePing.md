---
title: '$messagePing'
description: '$messagePing will return the latency of the message.'
id: messagePing
---

`$messagePing` will return the latency of the message.

## प्रोयोग

```php
$messagePing
```

## उदाहरण

This will return the latency of your message:

```javascript
bot.command({
    name: 'messagePing',
    code: `
  $messagePing
  `
});
```
