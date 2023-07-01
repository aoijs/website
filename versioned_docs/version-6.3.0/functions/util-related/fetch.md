---
title: $fetch
description: $fetch will fetch information about a given method using Discord's API.
id: fetch
---

`$fetch` will fetch information about a given method using Discord's API.

## Usage

```php
$fetch[method;query;...query]
```

## Parameters

| Field  | Type   | Description                     | Required |
| ------ | ------ | ------------------------------- | :------: |
| method | string | Method to fetch (listed below). |   true   |
| query  | string | Input for the used method.      |   true   |

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

## Example(s)

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
