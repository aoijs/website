---
title: '$cpu'
description: '$cpu will return CPU usage of a process or the OS.'
id: cpu
---

`$cpu` will return CPU usage of a process or the OS.

## प्रोयोग

```php
$cpu[option?]
```

## पैरामीटर्स

| फील्ड   | टाइप     | डिस्क्रिप्शन                                                                                                                                                                    |    चाहिए     |
| ------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:------------:|
| option? | स्ट्रिंग | The option that the CPU usage will be returned of. <br /> 1. **os** - returns the CPU usage of the bot <br /> 2. **process** - returns the CPU usage of the process | असत्य (नहीं) |

## ट्रू (हा)

This will return the CPU usage of your bot:

```javascript
bot.command({
    name: 'cpu',
    code: `
  OS: $cpu[os] 
  Process: $cpu[process] 
  `
});
```