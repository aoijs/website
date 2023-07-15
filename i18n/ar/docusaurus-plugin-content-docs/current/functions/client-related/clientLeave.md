---
title: '$clientLeave'
description: '$clientLeave سيجعل البوت الخاص بك يخرج من سيرفر محدد.'
id: clientLeave
---

$clientLeave سيجعل البوت الخاص بك يخرج من سيرفر محدد

## الأستخدام

```php
$clientLeave[guildID?]
```

## الحقول

| الحقل    | النوع   | الوصف                                           | مطلوب |
| -------- | ------- | ----------------------------------------------- |:-----:|
| guildID? | Integer | The ID of the guild which your bot shall leave. | false |

## مثال:

هذا سيجعل البوت الخاص بك يغادر السيرفر الذي انت فيه:

```javascript
bot.command({
    name: 'clientLeave',
    code: `
  $clientLeave[$guildID]
  $wait[2s]
  $sendMessage[Bye, I'm leaving!]
  `
});
```
