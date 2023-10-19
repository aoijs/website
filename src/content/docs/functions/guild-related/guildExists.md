---
title: $guildExists
description: $guildExists will check if the given guild exists.
id: guildExists
---

`$guildExists` will check if the given guild exists.

## Usage

```php
$guildExists[guildId]
```

## Parameters

| Field   | Type                                                                                                | Description | Required |
| ------- | --------------------------------------------------------------------------------------------------- | ----------- | :------: |
| guildId | [integer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Integer) | Guild ID.   |   true   |

## Example(s)

This will return `true` your guild exists:

```javascript
client.command({
  name: "guildExists",
  code: `
  $guildExists[$guildID]
  `,
});
```
