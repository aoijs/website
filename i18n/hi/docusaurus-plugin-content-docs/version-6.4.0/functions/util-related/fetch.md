---
title: '$fetch'
description: '$fetch will fetch information about a given method using Discord''s API.'
id: fetch
---

`$fetch` will fetch information about a given method using Discord's API.

## प्रोयोग

```php
$fetch[method;query;...query]
```

## पैरामीटर्स

| फील्ड  | टाइप     | डिस्क्रिप्शन                    | चाहिए |
| ------ | -------- | ------------------------------- |:-----:|
| method | स्ट्रिंग | Method to fetch (listed below). | true  |
| query  | स्ट्रिंग | Input for the used method.      | true  |

<details>
  <summary><h3> Methods </h3></summary>

| Methods             |
| ------------------- |
| message             |
| channel             |
| user                |
| invite              |
| webhook             |
| application         |
| command             |
| guildPreview        |
| guildTemplate       |
| premiumStickerPacks |
| sticker             |
| guildCommand        |
| default             |

</details>

## ट्रू (हा)

This will display information about the initial command message using the `fetch` function:

```javascript
bot.command({
    name: 'fetch',
    code: `
  \`\`\`
  $fetch[message;$messageID]
  \`\`\`
  `
});
```
