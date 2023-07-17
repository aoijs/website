---
title: '$setCacheData'
description: '$setCacheData ändert die angegebenen Cache-Daten.'
id: setCacheData
---

`$setCacheData` wird die angegebenen Cache-Daten ändern.

## Verwendung

```php
$setCacheData[type;cacheName;cacheKey;cacheValue]
```

## Verwendung

| Feld      | Typ    | Beschreibung     | Erforderlich |
| --------- | ------ | ---------------- |:------------:|
| typ       | string | Cache type.      |     wahr     |
| cacheName | string | Cache-Name.      |     wahr     |
| cacheKey  | string | Cache-Schlüssel. |     wahr     |
| cacheWert | string | Cachewert.       |     wahr     |