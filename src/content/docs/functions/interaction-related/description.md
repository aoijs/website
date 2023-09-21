---
title: $description
description: $description is used for embeds to add an description field.
id: description
---

`$description` is used for embeds to add an description field.

## Usage

```php
$description[index?;description]
```

## Parameters

| Field       | Type   | Description                            | Required |
| ----------- | ------ | -------------------------------------- | :------: |
| index?      | number | The embed index.                       |  false   |
| description | string | The content of the embeds description. |   true   |

## Example(s)

This will send an embed with the content `aoi.js is great!`:

```javascript
client.command({
  name: "embed",
  code: `
  $description[aoi.js is great!]
  `,
});
```
