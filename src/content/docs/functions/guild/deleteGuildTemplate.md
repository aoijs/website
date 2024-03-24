---
title: $deleteGuildTemplate
description: $deleteGuildTemplate will delete a guild template.
id: deleteGuildTemplate
---

`$deleteGuildTemplate` will delete a guild template.

## Usage

```php
$deleteGuildTemplate[templateCode?]
```

## Parameters

| Field        | Type                                                                                              | Description               | Required |
| ------------ | ------------------------------------------------------------------------------------------------- | ------------------------- | :------: |
| templateCode | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The code of the template. |   true   |

## Example(s)

This will delete a guild template.

```javascript
client.command({
  name: "deleteGuildTemplate",
  code: `
  $deleteGuildTemplate[TEMPLATE CODE]
  `
});
```
