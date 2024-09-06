---
title: $setCacheData
description: $setCacheData will modify given cache data.
id: setCacheData
---

`$setCacheData` will modify given cache data.

## Usage

```aoi
$setCacheData[type;cacheName;cacheKey;cacheValue]
```

## Parameters

| Field      | Type                                                                                              | Description  | Required |
| ---------- | ------------------------------------------------------------------------------------------------- | ------------ | :------: |
| type       | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Cache type.  |   true   |
| cacheName  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Cache name.  |   true   |
| cacheKey   | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Cache key.   |   true   |
| cacheValue | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Cache value. |   true   |

## Cache Types

| Field         | 
| --------------| 
| Group         | 
| LinkedList    | 
| PriorityQueue | 

