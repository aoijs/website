---
title: $sendWebhook
description: Sends a webhook message to the specified webhook
---

This function sends a message through a webhook

## Usage

```php
$sendWebhook[webhookID;webhookToken;message;options...]
```

### Example

```javascript
bot.command({
name: "send-webhook",
code: `$sendWebhook[793312378162642975;paNWUYLC22oL-t2hbYeu3zrwWXNfVxjn4TmDDVTISNVRbytCbptYM4DETJDTPzG-1JcA;Hello!;{title:Embed<3} {color:RANDOM};{title:Embed 2 WOW} {color:RANDOM}]
`
})
/*
How to find your webhookID/Token
url: https://ptb.discordapp.com/api/webhooks/793312378162642975/paNWUYLC22oL-t2hbYeu3zrwWXNfVxjn4TmDDVTISNVRbytCbptYM4DETJDTPzG-1JcA
Your ID: 793312378162642975
Your Token: paNWUYLC22oL-t2hbYeu3zrwWXNfVxjn4TmDDVTISNVRbytCbptYM4DETJDTPzG-1JcA
*/
```

![Heres a better example](<../discord-examples/assets/image (7).png>)
