---
title: $getEmbed
description: '$getEmbed gibt Eigenschaften über eine angegebene Einbettung zurück.'
id: getEmbed
---

`$getEmbed` gibt Eigenschaften über eine angegebene Einbettung zurück.

## Verwendung

```php
$getEmbed[channelID?;messageID?;index?;option?]
```

## Verwendung

| Feld          | Typ        | Beschreibung                                       | Erforderlich |
| ------------- | ---------- | -------------------------------------------------- |:------------:|
| channelID     | ganze Zahl | ID des Kanals, in dem sich die Nachricht befindet. |     wahr     |
| nachrichtenID | ganze Zahl | Die ID der Nachricht, die eine Einbettung hat.     |     wahr     |
| index         | ganze Zahl | Der Index der Einbettung.                          |     wahr     |
| variieren     | string     | Die Option zum Abrufen.                            |     wahr     |

<details>
  <summary><h3> Optionen </h3></summary>

| Typ                                | Beschreibung                     |
| ---------------------------------- | -------------------------------- |
| titel                              | Titel der Einbettung.            |
| beschreibung                       | Beschreibung der Einbettung.     |
| URL                                | Die URL im Titel.                |
| farben                             | Farbe der Einbettung.            |
| zeitstempel                        | Zeitstempel in der Fußzeile.     |
| Feld<index\>.name / field1.name   | Feldtitel.                       |
| Feld<index\>.value / field1.value | Feldbeschreibung.                |
| thumbnail                          | Miniaturbild (Bild oben rechts). |
| bild                               | Großes Bild am unteren Bild.     |
| video                              | Video/GIF.                       |
| autor                              | Autor, oberhalb des Titelfeldes. |
| fuße                               | Fußzeile.                        |
| Dateien                            | Angehängte Dateien.              |
| createdAt                          | Erstellungsdatum der Einbettung. |
| hexFarbe                           | Hex Farbe des Einbetts.          |
| lang                               | Länge des Einbetts.              |

</details>

## Beispiel(e)

Dies gibt die Beschreibung einer Einfügung zurück:

```javascript
bot.command({
    -Name: 'getEmbed',
    Code: `
$getEmbed[$channelID;messageID;1;description] 
  ` // Stellen Sie sicher, dass die MessageID durch die eigentliche Nachricht ID 
});
```
