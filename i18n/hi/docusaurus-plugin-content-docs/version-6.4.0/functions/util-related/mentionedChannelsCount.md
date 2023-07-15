---
title: '$mentionedChannelsCount'
description: '$mentionedChannelsCount will return the amount of channel mentions within a message.'
id: mentionedChannelsCount
---

`$mentionedChannelsCount` will return the amount of channel mentions within a message.

## प्रोयोग

```php
$mentionedChannelsCount
```

## उदाहरण

This will return the amount of channel mentions in the given text:

```javascript
bot.command({
    name: 'mentionedChannelsCount',
    code: `
  $mentionedChannelsCount
  <#837531672341381190> <#869210515065426012> <#805852932938661900>
  `
});
```
