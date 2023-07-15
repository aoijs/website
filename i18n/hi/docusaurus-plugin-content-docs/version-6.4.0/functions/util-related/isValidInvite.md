---
title: '$isValidInvite'
description: '$isValidInvite will check if the given invite is valid.'
id: isValidInvite
---

`$isValidInvite` will check if the given invite is valid.

## प्रोयोग

```php
$isValidInvite[inviteResolver]
```

## पैरामीटर्स

| फील्ड          | टाइप     | डिस्क्रिप्शन       | चाहिए |
| -------------- | -------- | ------------------ |:-----:|
| inviteResolver | स्ट्रिंग | Guild invite link. | true  |

## ट्रू (हा)

This will return `true` as `https://discord.gg/aoi-js-server-akarui-development-team-773352845738115102` is an valid invite:

```javascript
bot.command({
    name: 'isValidInvite',
    code: `
  $isValidInvite[https://discord.gg/aoi-js-server-akarui-development-team-773352845738115102]
  `
});
```
