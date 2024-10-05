---
title: $consume
description: $getAvatarDecoration will return an static image of the provided users' avatar decoration
id: consume
---

`$getAvatarDecoration` will return an static image of the provided users' avatar decoration.

## Usage

```aoi
$getAvatarDecoration[userID?;extension?;size?]
```

## Parameters

| Field               | Type                                                                                                | Description                                                         | Required  |
| ------------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- | :-------: |
| userID?             | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   | The user ID you want to check.                                      |   false   |
| extension?          | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | The file extension of the decoration. (default: png)               |   false   |
| size?               | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   | The decoration image size. (default: 4096)                          |   false   |


## Example(s)


```javascript
client.command({
    name: "getAvatarDecoration",
    code: `
   $getAvatarDecoration[$authorID]
  `
});
```

