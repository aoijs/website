---
title: $switch
description: $switch will select and execute an action based on matching a value to predefined cases.
id: switch
---

`$switch` will select and execute an action based on matching a value to predefined cases.

## Usage

```aoi
$switch[value;case]
```

## Parameters

| Field     | Type                                                                                              | Description                                                                                                                                                                                                            | Required |
| --------- | ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------: |
| value     | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |	The value to compare against cases.                                                                                                                                                                                    |   true   |
| case      | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Contains cases in the format `{case:<comparisonValue>:<awaitedCmd>}`, where `comparisonValue` can be a specific value. If none of the cases match, use `{case:default:<awaitedCmd>}` to handle the default behavior.   |   true   |

## Example(s)

```javascript
client.command({
    name: "switch",
    code: `
 $switch[2;
     $comment[If 2 == 3 execute this]
     {case:3:awaitedName}
     $comment[If 2 == 4 execute this]
     {case:4:awaitedName}
     $comment[If none are correct, execute this]
     {default:awaitedName}
 ]
  `
});
```
