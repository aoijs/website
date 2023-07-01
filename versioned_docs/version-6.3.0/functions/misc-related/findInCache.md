---
title: $findInCache
description: $findInCache will search for given arguments in your bot's cache.
id: findInCache
---

`$findInCache` will search for given arguments in your bot's cache.

## Usage

```php
$findInCache[type;name;prop;value;findType?;returnValue?]
```

## Parameters

| Field        | Type    | Description                                                                                                                       | Required |
| ------------ | ------- | --------------------------------------------------------------------------------------------------------------------------------- | :------: |
| type         | string  | Type of the object to search.                                                                                                     |   true   |
| name         | string  | Name of the object to search.                                                                                                     |   true   |
| prop         | string  | Property.                                                                                                                         |   true   |
| value        | string  | Property value.                                                                                                                   |   true   |
| findType?    | string  | 1. **includes** <br /> 2. **startsWith** <br /> 3. **endsWith** <br /> 4. **>=**, **==**, **===** (default), **<=**, **<**, **>** |  false   |
| returnValue? | boolean | 1. **true* <br /> 2. **false**                                                                                                    |  false   |