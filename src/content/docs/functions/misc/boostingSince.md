---
title: $boostingSince
description: $boostingSince will return the starting date of someone boosting a specific guild.
id: boostingSince
---

`$boostingSince` will return the starting date of someone boosting a specific guild.

## Usage

```aoi
$boostingSince[guildID?;userID?;format?]
```

## Parameters

| Field    | Type                                                                                              | Description                                                                      | Required |
| -------- | ------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | :------: |
| guildID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The ID of the guild of where you want to check how long someone's been boosting. |  false   |
| userID?  | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The user ID you want to check the boosting start date of.                        |  false   |
| format?  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The format that the date will be returned in, listed below.                      |  false   |

| Format |                                                         |
| ------ | ------------------------------------------------------- |
| ms     | 1652643158052                                           |
| date   | Sun May 15 2022 20:32:38 GMT+0100 (British Summer Time) |

## Example(s)

This will return the date when you started boosting (wont work when you're not boosting):

```javascript
client.command({
    name: "boostingSince",
    code: `
  $boostingSince[$guildID;$authorID;date]
  `
});
```
