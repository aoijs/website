---
title: $editChannel
description: '$editChannel wird einen Kanal bearbeiten.'
id: editChannel
---

`$editChannel` wird einen Kanal bearbeiten.

## Verwendung

```php
$editChannel[channelID;name?;type?;position?;topic?;nsfw?;bitrate?;userlimit?;parent?;lockPermissions?;permissionOverwrites?;rateLimitPerUser?;defaultAutoArchiveDuration?;rtcRegion?;reason?]
```

## Verwendung

| Feld                               | Typ        | Beschreibung                                                       | Erforderlich |
| ---------------------------------- | ---------- | ------------------------------------------------------------------ |:------------:|
| channelID                          | ganze Zahl | Die ID des Kanals, der benachrichtigt wird.                        |     wahr     |
| name?                              | string     | Der neue Kanalname.                                                |    falsch    |
| typ?                               | string     | Der neue Kanaltyp. (unten aufgeführt)                              |    falsch    |
| positionieren?                     | string     | Die neue Kanalposition.                                            |    falsch    |
| thema?                             | string     | Das neue Thema des Kanals.                                         |    falsch    |
| nsfw?                              | boolean    | Falls es den Kanal als NSFW markieren soll oder nicht.             |    falsch    |
| bitrate?                           | ganze Zahl | Sprachkanal-Bitrate.                                               |    falsch    |
| benutzerlimit?                     | anzahl     | Benutzerlimit für Sprachkanal.                                     |    falsch    |
| übergeordnet?                      | ganze Zahl | Das neue Elternteil des Kanals. (Kategorie-ID)                     |    falsch    |
| sperre Berechtigungen?             | string     | Die neuen Kanäle sperren Berechtigungen.                           |    falsch    |
| permissionOverwrites?              | string     | Die neue Kanal-Berechtigung überschreibt.                          |    falsch    |
| rateLimitPerUser?                  | anzahl     | Der Kanalslowmode des bearbeiteten Kanals.                         |    falsch    |
| defaultAutoArchiveDauer speichern? | anzahl     | Thread/Forum Archivdauer. (in ms)                                  |    falsch    |
| rtcRegion?                         | string     | RTC-Region des Sprachkanals.                                       |    falsch    |
| warum?                             | string     | Begründung, die in den Audit-Protokollen der Gilde angezeigt wird. |    falsch    |

**Hinweis: Sie können `$default` verwenden, um die aktuelle Eigenschaft zu behalten.**

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

Hinweis: Alle Kanaltypen sind **Groß-/Kleinschreibung**.

</details>

## Beispiel(e)

Dies ändert den aktuellen Kanalnamen in "i-love-aoijs":

```javascript
bot.command({
    name: 'editChannel',
    code: `
  $editChannel[$channelID;i-love-aoi-js]
  `
});
```