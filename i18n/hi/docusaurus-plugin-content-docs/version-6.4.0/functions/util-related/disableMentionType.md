---
title: '$disableMentionType'
description: '$disableMentionType will disable a specific mention type.'
id: disableMentionType
---

`$disableMentionType` will disable a specific mention type.

## प्रोयोग

```php
$disableMentionType[type]
```

## पैरामीटर्स

| फील्ड | टाइप     | डिस्क्रिप्शन                         | चाहिए |
| ----- | -------- | ------------------------------------ |:-----:|
| टाइप  | स्ट्रिंग | Type of mention you want to disable. | true  |

<details>
  <summary> <h2> Available Types </h2></summary>

| टाइप     | डिस्क्रिप्शन                        |
| -------- | ----------------------------------- |
| everyone | `@everyone` and `@here` mentions.   |
| users    | All user mentions.                  |
| roles    | All role mentions.                  |
| all      | Roles, users and any other mention. |

</details>

## ट्रू (हा)

This will stop the bot from mentioning you:

```javascript
bot.command({
    name: 'mention',
    code: `
<@$authorID>
$disableMentionType[users] 
  `
});
```

This will stop the bot from mentioning anyone or anything:

```javascript
bot.command({
    name: 'mention',
    code: `
<@$authorID>
$disableMentionType[all] 
  `
});
```
