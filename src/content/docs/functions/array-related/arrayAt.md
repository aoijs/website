---
title: $arrayAt
description: $arrayAt will choose the index (position) of the array element to be returned. Returns nothing if the given index can not be found.
id: arrayAt
---

`$arrayAt` will choose the index (position) of the array element to be returned. Returns nothing if the given index can not be found.

## Usage

```php
$arrayAt[name;index]
```

## Parameters

| Field | Type   | Description                  | Required |
| ----- | ------ | ---------------------------- | :------: |
| name  | string | Name of the array.           |   true   |
| index | string | The position of the element. |   true   |

## Example(s)

- This will return `Aoi.dashboard`:

```javascript
client.command({
  name: "array-at",
  code: `
  $arrayAt[Aoi;3]
  
  $createArray[Aoi;Aoi.music;Aoi.panel;Aoi.dashboard;Aoi]
  `,
  // Returns "Aoi.dashboard"
});
```
