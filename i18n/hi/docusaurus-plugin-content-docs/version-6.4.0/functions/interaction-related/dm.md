---
title: '$dm'
description: '$dm will send a message to an users Direct Messages.'
id: dm
---

`$dm` will send a message to an users Direct Messages.

## प्रोयोग

```php
$dm[userID]
```

## पैरामीटर्स

| फील्ड  | टाइप    | डिस्क्रिप्शन                         | चाहिए |
| ------ | ------- | ------------------------------------ |:-----:|
| userID | integer | The user which shall receive the DM. | true  |

**Important**:
- You are unable to DM other bots.
- You are unable to DM people who closed their DMs.

## ट्रू (हा)

This will send an DM to you containing "Hello! Did you really think this works?":

```javascript
bot.command({
    name: 'dm',
    code: `
  Hello! Did you really think this works?
  $dm[$authorID]
  `
});
```