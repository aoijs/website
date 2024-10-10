---
title: $deleteTestEntitlement
description: $deleteTestEntitlement will delete the provided test entitlement
id: deleteTestEntitlement
---

`$deleteTestEntitlement` will delete the provided test entitlement.

## Usage

```aoi
$deleteTestEntitlement[skuID]
```

## Parameters

| Field         | Type                                                                                                | Description                                                                    | Required |
| ------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | :------: |
| skuID         | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   | Your generated [SKU ID](https://discord.com/developers/docs/resources/sku).    |   true   |

## Example(s)

This will delete the provided test entitlement:

```javascript
client.command({
    name: "deleteTestEntitlement",
    code: `
   $deleteTestEntitlement[123456789] 
   $comment[Example value of SKU ID]
  `
});
```
