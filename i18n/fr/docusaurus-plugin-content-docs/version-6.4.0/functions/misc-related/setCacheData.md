---
title: '$setCacheData'
description: '$setCacheData will modify given cache data.'
id: setCacheData
---

`$setCacheData` will modify given cache data.

## Usage

```php
$setCacheData[type;cacheName;cacheKey;cacheValue]
```

## Parameters

| Field      | Type   | Description  | Required |
| ---------- | ------ | ------------ |:--------:|
| type       | string | Cache type.  |   true   |
| cacheName  | string | Cache name.  |   true   |
| cacheKey   | string | Cache key.   |   true   |
| cacheValue | string | Cache value. |   true   |