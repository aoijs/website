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

| Field                                        | Type                                                                                                | Description                                                                                                                       | Required |
| -------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | :------: |
| type                                         | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | Type of the object to search.                                                                                                     |   true   |
| name                                         | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | Name of the object to search.                                                                                                     |   true   |
| prop                                         | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | Property.                                                                                                                         |   true   |
| value                                        | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | Property value.                                                                                                                   |   true   |
| findType?                                    | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | 1. **includes** <br /> 2. **startsWith** <br /> 3. **endsWith** <br /> 4. **>=**, **==**, **===** (default), **<=**, **<**, **>** |  false   |
| returnValue?                                 | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) |
 1. **true\* <br /> 2. **false\*\*                                                                   | false                                                                                                                             |
