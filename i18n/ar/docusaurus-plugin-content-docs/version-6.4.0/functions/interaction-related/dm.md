---
title: '$dm'
description: '$dm will send a message to an users Direct Messages.'
id: dm
---

`$dm` will send a message to an users Direct Messages.

## الاستخدام

```php
$dm[userID]
```

## البارامترات

| Field  | النوع   | الديسكبربشين                         | مطلوب |
| ------ | ------- | ------------------------------------ |:-----:|
| userID | Integer | The user which shall receive the DM. | true  |

**Important**:
- You are unable to DM other bots.
- You are unable to DM people who closed their DMs.

## مثال

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