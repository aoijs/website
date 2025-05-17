---
title: $clientPrefixes
description: $clientPrefixes will return the client prefix(es).
id: clientPrefixes
---

`$clientPrefixes` will return the client prefix(es).

## Usage

```aoi
$clientPrefixes[sep?]
```

## Parameters

| Field     | Type                                                                                                | Description                                           | Required |
| --------- | --------------------------------------------------------------------------------------------------- | ----------------------------------------------------- | :------: |
| sep?      | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | Separator used between prefixes. Default is `,`.      |  false   |


## Example(s)

This will return all your prefix(es) separated by a comma and a space:

```javascript
client.command({
    name: "clientPrefixes",
    code: `
  $clientPrefixes[, ]
  `
});
```
