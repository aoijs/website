---
title: $guildChannelExists
description: '$guildChannelExists wird prüfen, ob ein bestimmter Gildenkanal existiert.'
id: guildChannelExists
---

`$guildChannelExists` wird überprüfen, ob ein bestimmter Gildenkanal existiert.

## Verwendung

```php
$guildChannelExists[guildID;channelResolver]
```

## Verwendung

| Feld            | Typ                      | Beschreibung                                    | Erforderlich |
| --------------- | ------------------------ | ----------------------------------------------- |:------------:|
| guildID         | ganze Zahl               | ID der Gilde, in der der Gildenkanal existiert. |     wahr     |
| channelResolver | ganzzahlige Zeichenkette | Kanal-ID oder Name des Kanals.                  |     wahr     |

## Beispiel(e)

Dies wird überprüft, ob ein Gildenkanal mit dem Namen `Regeln` existiert. Alternativ kannst du stattdessen die Kanal-ID verwenden:

```javascript
bot.command({
    name: 'guildChannelExists',
    code: `
  $guildChannelExists[$guildID;rules]
  `
});
```
