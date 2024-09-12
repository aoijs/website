---
title: $deleteCacheData
description: $deleteCacheData will delete given cache data.
id: deleteCacheData
---

`$setCacheData` will delete given cache data.

## Usage

```aoi
$deleteCacheData[type;cacheName;cacheKey]
```

## Parameters

| Field      | Type                                                                                              | Description  | Required |
| ---------- | ------------------------------------------------------------------------------------------------- | ------------ | :------: |
| type       | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Cache type.  |   true   |
| cacheName  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Cache name.  |   true   |
| cacheKey   | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Cache key.   |   true   |


## Cache Types

| Field         | 
| --------------| 
| Group         | 
| LinkedList    | 
| PriorityQueue | 

