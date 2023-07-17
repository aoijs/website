---
title: $getReactions
description: '$getReactions gibt Eigenschaften über eine bestimmte Reaktion auf eine bestimmte Nachricht zurück.'
id: getReactions
---

`$getReactions` gibt Eigenschaften über eine bestimmte Reaktion auf eine bestimmte Nachricht zurück.

## Verwendung

```php
$getReactions[channelID;messageID;reaction;force?;option?]
```

## Verwendung

| Feld          | Typ        | Beschreibung                                                                                                                                                                                                                                                         | Erforderlich |
| ------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:------------:|
| channelID     | ganze Zahl | ID des Kanals, in dem sich die Nachricht befindet.                                                                                                                                                                                                                   |     wahr     |
| nachrichtenID | ganze Zahl | ID der Nachricht.                                                                                                                                                                                                                                                    |     wahr     |
| reaktion      | string     | Die Reaktion, von der ihre Informationen zurückgegeben werden.                                                                                                                                                                                                       |     wahr     |
| erzwingen?    | boolean    | 1. **true** (Standard) <br /> 2. **Falsch**                                                                                                                                                                                                                    |    falsch    |
| option?       | string     | Wie wird es die Benutzer zurückgeben, die auf diese Nachricht <br /> 1 reagiert haben. **Benutzername** (Standard) - gibt die Benutzernamen   <br /> 2 zurück. **Erwähnung** - Erwähnt die Benutzer <br /> 3. **id** - gibt die Benutzer-Id zurück |    falsch    |

**Bitte beachten Sie, dass dies nicht ohne die `GuildMessageReactions` Absicht funktioniert.**

## Beispiel(e)

Dies wird alle Benutzer erwähnen, die auf Ihre Nachricht reagiert haben, in diesem Fall nur Ihren Bot:

```javascript
bot.command({
    name: 'getReactions',
    code: `
$getReactions[$channelID;$messageID;👋;true;mention]
$addCmdReactions[👋]
  `
});
```