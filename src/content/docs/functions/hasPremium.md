---
title: $hasPremium
description: $hasPremium will check if the provided user or guild is subscribed to premium
id: hasPremium
---

`$hasPremium` will check if the provided user or guild is subscribed to [premium](https://discord.com/developers/docs/monetization/overview).

## Usage

```aoi
$hasPremium[skuID;id?;type?]
```

## Parameters

| Field         | Type                                                                                                    | Description                                                                        | Required |
| ------------- | ------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | :------: |
| skuID         | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)       | Your generated [SKU ID](https://discord.com/developers/docs/resources/sku).        |   true   |
| id?           | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number  )     | User or guild ID.                                                                  |  false   |
| type?         | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number  )     | Entitlement type. <br /> 1. **user** (default) <br /> 2. **guild**                 |  false   |

## Example(s)

This will check if the provided user is subscribed to [premium](https://discord.com/developers/docs/monetization/overview).

```javascript
client.command({
    name: "hasPremium",
    code: `
   $hasPremium[123456789;$userID;user] 
   $comment[Example value of SKU ID]
  `
});
```
