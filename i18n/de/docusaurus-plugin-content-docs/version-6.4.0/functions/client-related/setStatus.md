---
title: '$setStatus'
description: '$setStatus ändert den Kundenstatus.'
id: setStatus
---

`$setStatus` ändert den Client-Status.

## Verwendung

```php
$setStatus[name;type;status;URL;afk?]
```

## Verwendung

| Feld   | Typ              | Beschreibung                                                                                                                                     | Erforderlich |
| ------ | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |:------------:|
| Name   | string           | Der Inhalt des Status.                                                                                                                           |     wahr     |
| typ    | string, Ganzzahl | 1. **SPIELEN** (Standard) <br /> 2. **WATCHING** <br /> 3. **STREAMING** <br /> 4. **LISTENING** <br /> 5. **COMPETING** |     wahr     |
| status | string           | 1. **online** (Standard) <br /> 2. **Leerlauf** <br /> 3. **dnd** <br /> 4. **unsichtbar**                                     |     wahr     |
| URL    | string           | URL (Streaming-Status)                                                                                                                           |     wahr     |
| afk?   | boolean          | 1. **true** <br /> 2. **false** (Standard)                                                                                                 |    falsch    |

## Beispiel(e)

Dies ändert den Client-Status auf **SPIELEN** und **online**:

```javascript
bot.command({
    name: 'setStatus',
    code: `
   $setStatus[Hello!;PLAYING;online]`
});
```