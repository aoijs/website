---
title: '$allChannelsCount'
description: '$allChannelsCount gibt die Anzahl aller zwischengespeicherten Kanäle eines bestimmten Typs zurück.'
id: allChannelsCount
---

`$allChannelsCount` gibt die Anzahl aller Cache-Kanäle eines bestimmten Typs zurück.

## Verwendung

```php
$allChannelsCount[type?]
```

## Verwendung

| Feld | Typ    | Beschreibung                                              | Erforderlich |
| ---- | ------ | --------------------------------------------------------- | ------------ |
| typ? | string | Geben Sie den Betrag zurück, den Sie zurückgeben möchten. | falsch       |

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

Dies gibt die Anzahl der Sprachkanäle in deiner Gilde zurück:

```javascript
bot.command({
    name: 'allChannelsCount',
    code: `
  $allChannelsCount[Voice]
  `
});
```
