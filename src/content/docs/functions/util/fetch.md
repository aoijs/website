---
title: $fetch
description: $fetch will fetch information about a given method using Discord's API.
id: fetch
---

`$fetch` will fetch information about a given method using Discord's API.

## Usage

```php
$fetch[method;query;...properties]
```

## Parameters

| Field         | Type                                                                                              | Description                        | Required |
| ------------- | ------------------------------------------------------------------------------------------------- | ---------------------------------- | :------: |
| method        | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Method to fetch (listed below).    |   true   |
| query         | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Input for the used method.         |   true   |
| ...properties | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Sub properties of query to return. |  false   |

### Methods

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

## Example(s)

This will display information about the initial command message using the `fetch` function (returns `message.id`):

```javascript
client.command({
  name: "fetch",
  code: `
  \`\`\`
  $fetch[message;$messageID;id]
  \`\`\`
  `
});
```
