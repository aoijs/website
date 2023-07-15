---
title: '$clientTyping'
description: '$clientTyping will make your bot type in a channel (show that it''s typing).'
id: clientTyping
---

`$clientTyping` will make your bot type in a channel (show that it's typing).

## प्रोयोग

```php
$clientTyping
```

## उदाहरण

This will display your bot as typing and send "Hello!" as message:

```javascript
bot.command({
    name: 'clientTyping',
    code: `
  Hello!
  $clientTyping
  `
});
```
