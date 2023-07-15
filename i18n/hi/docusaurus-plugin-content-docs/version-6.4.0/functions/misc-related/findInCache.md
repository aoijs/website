---
title: '$findInCache'
description: '$findInCache will search for given arguments in your bot''s cache.'
id: findInCache
---

`$findInCache` will search for given arguments in your bot's cache.

## प्रोयोग

```php
$findInCache[type;name;prop;value;findType?;returnValue?]
```

## पैरामीटर्स

| फील्ड        | टाइप     | डिस्क्रिप्शन                                                                                                                                        |    चाहिए     |
| ------------ | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |:------------:|
| टाइप         | स्ट्रिंग | Type of the object to search.                                                                                                                       |     true     |
| name         | स्ट्रिंग | Name of the object to search.                                                                                                                       |     true     |
| prop         | स्ट्रिंग | Property.                                                                                                                                           |     true     |
| value        | स्ट्रिंग | Property value.                                                                                                                                     |     true     |
| findType?    | स्ट्रिंग | 1. **includes** <br /> 2. **startsWith** <br /> 3. **endsWith** <br /> 4. **>=**, **==**, **===** (default), **<=**, **<**, **>** | असत्य (नहीं) |
| returnValue? | boolean  | 1. **true* <br /> 2. **false**                                                                                                                | असत्य (नहीं) |