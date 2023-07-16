---
title: $categoryChannels
description: '$categoryChannels gibt alle Kanäle einer bestimmten Kategorie zurück.'
id: categoryChannels
---

`$categoryChannels` gibt alle Kanäle einer bestimmten Kategorie zurück.

## Verwendung

```php
$categoryChannels[categoryID;option?;sep?]
```

## Verwendung

| Feld       | Typ        | Beschreibung                                                                                                                                                     | Erforderlich |
| ---------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |:------------:|
| categoryID | ganze Zahl | Die ID der Kategorie.                                                                                                                                            |     wahr     |
| option?    | string     | Die Option, in der der Bot die Kanäle zurückgibt. <br /> 1. **Namen** - gibt Kanalnamen (Standard)  <br /> 2 zurück. **ids** - gibt Kanal-IDs zurück |    falsch    |
| sep?       | string     | Das Trennzeichen um die zurückgegebenen Kanäle zu trennen.                                                                                                       |    falsch    |

## Beispiel(e)

Dies gibt alle Kanäle der Kategorie des Kanals zurück, in denen der Befehl ausgeführt wird:

```javascript
bot.command({
    name: 'categoryChannels',
    code: `
  $categoryChannels[$channelCategoryID;names;, ]
  `
});
```