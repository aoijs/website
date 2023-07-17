---
title: $channelCount
description: '$channelCount gibt die Anzahl der Kanäle eines bestimmten Typs zurück.'
id: channelCount
---

`$channelCount` gibt die Anzahl der Kanäle eines bestimmten Typs zurück.

## Verwendung

```php
$channelCount[guildID?;type?]
```

## Verwendung

| Feld     | Typ        | Beschreibung                                                 | Erforderlich |
| -------- | ---------- | ------------------------------------------------------------ |:------------:|
| guildID? | ganze Zahl | ID der Gilde, von der die Kanäle gezählt werden.             |    falsch    |
| typ?     | string     | Geben Sie den Betrag der Rücksendung ein, unten aufgelistet. |    falsch    |

<details>
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

Dies gibt die Anzahl der Sprachkanäle in deiner Gilde zurück:

```javascript
bot.command({
    name: 'channelCount',
    code: `
  $channelCount[$guildID;Voice]
  `
});
```
