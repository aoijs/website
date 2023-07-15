---
title: '$findInCache'
description: '$findInCache will search for given arguments in your bot''s cache.'
id: findInCache
---

`$findInCache` will search for given arguments in your bot's cache.

## Використання

```php
$findInCache[type;name;prop;value;findType?;returnValue?]
```

## Параметри

| Поле         | Тип     | Опис                                                                                                                                                | Обов'язковий |
| ------------ | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |:------------:|
| тип          | рядок   | Type of the object to search.                                                                                                                       |     так      |
| назва        | рядок   | Name of the object to search.                                                                                                                       |     так      |
| prop         | рядок   | Property.                                                                                                                                           |     так      |
| value        | рядок   | Property value.                                                                                                                                     |     так      |
| findType?    | рядок   | 1. **includes** <br /> 2. **startsWith** <br /> 3. **endsWith** <br /> 4. **>=**, **==**, **===** (default), **<=**, **<**, **>** |      ні      |
| returnValue? | boolean | 1. **true* <br /> 2. **false**                                                                                                                |      ні      |