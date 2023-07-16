---
title: '$findInCache'
description: '$findInCache wird nach angegebenen Argumenten im Cache Ihres Bots suchen.'
id: findInCache
---

`$findInCache` wird nach angegebenen Argumenten im Cache Ihres Bots suchen.

## Verwendung

```php
$findInCache[type;name;prop;value;findType?;returnValue?]
```

## Verwendung

| Feld          | Typ     | Beschreibung                                                                                                                                          | Erforderlich |
| ------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |:------------:|
| typ           | string  | Typ des zu suchenden Objekts.                                                                                                                         |     wahr     |
| name          | string  | Name des zu suchenden Objekts.                                                                                                                        |     wahr     |
| prop          | string  | Eigenschaft.                                                                                                                                          |     wahr     |
| wert          | string  | Objektwert.                                                                                                                                           |     wahr     |
| findType?     | string  | 1. **enthält** <br /> 2. **startet mit** <br /> 3. **endet mit** <br /> 4. **>=**, **==**, **===** (Standard), **<=**, **<**, **>** |    falsch    |
| return Value? | boolean | 1. **wahr* <br /> 2. **false**                                                                                                                  |    falsch    |