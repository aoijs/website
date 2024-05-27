---
title: $arrayForEach
description: $arrayForEach will execute an awaited command for each item in the array.
id: arrayForEach
---

`$arrayForEach` will execute an awaited command for each item in the array.

## Usage

```aoi
$arrayForEach[name;awaitedCommand;awaitData?]
```

## Parameters

| Field          | Type                                                                                              | Description                  | Required |
| -------------- | ------------------------------------------------------------------------------------------------- | ---------------------------- | :------: |
| name           | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Array name.                  |   true   |
| awaitedCommand | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Awaited command to executed. |   true   |
| awaitData?     | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Awaited Data.                |  false   |
