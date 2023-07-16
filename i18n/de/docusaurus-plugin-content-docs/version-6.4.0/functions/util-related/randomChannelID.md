---
title: '$randomChannelID'
description: '$randomChannelID gibt eine zufällige Kanal-ID aller Gilden oder einer bestimmten Gilde zurück.'
id: randomChannelID
---

`$randomChannelID` wird eine zufällige Kanal-ID aller Gilden oder einer bestimmten Gilde zurückgeben.

## Verwendung

```php
$randomChannelID[guildID/global?;type?]
```

## Verwendung

| Feld            | Typ        | Beschreibung                  | Erforderlich |
| --------------- | ---------- | ----------------------------- |:------------:|
| guildID/global? | ganze Zahl | Gilden-ID oder globale Suche. |    falsch    |
| typ?            | string     | Kanaltyp.                     |    falsch    |

<details open>
  <summary><h3> Kanaltypen </h3></summary>

| Kanaltyp            |                    |
| ------------------- | ------------------ |
| Text-Kanal          | Text               |
| Sprachkanal         | Stimme             |
| Kategorie           | Kategorie          |
| Stufenkanal         | Teil               |
| Private Thread      | PrivateThread      |
| Öffentlicher Thread | PublicThread       |
| Forum               | Forum              |
| Ankündigungs-Thread | AnkündigungsThread |
| Ankündigungskanal   | Mitteilung         |
| Zuhause             | Gildenverzeichnis  |
| NSFW-Kanal          | NSFW               |
| Direkte Nachricht   | TM                 |
| Alle Kanaltypen     | alle               |

</details>

## Beispiel(e)

Dies gibt eine zufällige Kanal-ID deiner Gilde zurück:

```javascript
bot.command({
    name: 'randomChannelID',
    code: `
  <#$randomChannelID[$guildID;all]>
  `
});
```
