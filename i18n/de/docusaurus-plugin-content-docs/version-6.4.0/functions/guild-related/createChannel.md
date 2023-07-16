---
title: '$createChannel'
description: '$createChannel wird einen Kanal eines bestimmten Typs erstellen.'
id: createChannel
---

`$createChannel` erstellt einen Kanal eines bestimmten Typs.

## Verwendung

```php
$createChannel[guildID;name;type;returnID;parentID]
```

## Verwendung

| Feld             | Typ        | Beschreibung                                                                                                      | Erforderlich |
| ---------------- | ---------- | ----------------------------------------------------------------------------------------------------------------- |:------------:|
| guildID          | ganze Zahl | ID der Gilde, in der der Kanal erstellt wird.                                                                     |     wahr     |
| name             | string     | Der Kanalname des neu erstellten Kanals.                                                                          |     wahr     |
| typ              | string     | Der Kanaltyp. (unten aufgeführt)                                                                                  |     wahr     |
| return ID        | boolean    | Gibt die Kanal-ID des neu erstellten Kanals zurück. <br /> 1. **true** <br /> 2. **false** (Standard) |     wahr     |
| übergeordnete ID | ganze Zahl | Die Kategorie-ID.                                                                                                 |    falsch    |

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

</details>

## Beispiel(e)

Erstelle einen neuen Textkanal namens "aoijs":

```javascript
bot.command({
    name: 'createChannel',
    code: `
    $createChannel[$guildID;aoijs;Text;false]
  `
});
```
