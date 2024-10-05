---
title: $createTestEntitlement
description: $createTestEntitlement will create a new test entitlement
id: createTestEntitlement
---

`$createTestEntitlement` will create a new test entitlement.

## Usage

```aoi
$createTestEntitlement[skuID;id?;type?;returnID?]
```

## Parameters

| Field         | Type                                                                                                  | Description                                                                    | Required |
| ------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | :------: |
| skuID         | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)     | Your generated [SKU ID](https://discord.com/developers/docs/resources/sku).    |   true   |
| id?           | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number  )   | User or guild ID.                                                              |  false   |
| type?         | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number  )   | Entitlement type. <br /> 1. **user** (default) <br /> 2. **guild**             |  false   |
| returnID?     | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean  ) | Return message ID?                                                             |  false   |


## Example(s)

This will create a test entitlement with the provided `skuID`:

```javascript
client.command({
    name: "createTestEntitlement",
    code: `
   $createTestEntitlement[123456789;$userID;user;false] 
   $comment[Example value of skuID]
  `
});
```
