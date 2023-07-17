---
title: $newChannel
description: '$newChannel enthält Daten des aktualisierten Kanals, die im Channel-Update verwendet werden, löschen und erstellen Ereignisse oder sonst sind Daten leer.'
id: newChannel
---

`$newChannel` enthält Daten des aktualisierten Kanals, der im Channel-Update verwendet wird, gelöscht und erstellt Ereignisse andernfalls sind alle Daten leer.

## Verwendung

```php
$newChannel[option]
```

## Verwendung

| Feld      | Typ    | Beschreibung        | Erforderlich |
| --------- | ------ | ------------------- |:------------:|
| variieren | string | Option zum Abrufen. |     wahr     |


### Optionen

| Feld                    | Typ        | Beschreibung                                                                        |
| ----------------------- | ---------- | ----------------------------------------------------------------------------------- |
| name                    | string     | Gibt den Namen des Kanals zurück.                                                   |
| id                      | ganze Zahl | Gibt die Kanal-ID zurück.                                                           |
| createdAt               | ganze Zahl | Gibt das Datum zurück, an dem der Kanal erstellt wurde.                             |
| erstellte Zeitstempel   | ganze Zahl | Gibt den Zeitstempel zurück, wenn der Kanal erstellt wurde.                         |
| defaultAutoArchiveDauer | ganze Zahl | Gibt die Standard-Archivdauer zurück.                                               |
| löschbar                | string     | Gibt true / false zurück, wenn Kanal gelöscht werden kann.                          |
| gelöscht                | string     | Gibt true / false zurück, wenn Kanal gelöscht wurde.                                |
| guildID                 | ganze Zahl | Gibt Gilden-ID der aktuellen Gilde zurück.                                          |
| letzte Nachricht Inhalt | string     | Gibt den Inhalt der letzten im Kanal gesendeten Nachricht zurück.                   |
| letzte Nachrichten-ID   | ganze Zahl | Gibt die ID der letzten im Kanal gesendeten Nachricht zurück.                       |
| lastPinAt               | ganze Zahl | Gibt das Datum der letzten angehefteten Nachricht zurück.                           |
| lastPinTimestamp        | ganze Zahl | Gibt den Zeitstempel der letzten angehefteten Nachricht zurück.                     |
| verwaltbar              | string     | Gibt true / false zurück, wenn Kanal verwaltbar ist.                                |
| nsfw                    | string     | Gibt true / false zurück, wenn der Kanal NSFW ist.                                  |
| Elternname              | string     | Gibt Kategoriename zurück.                                                          |
| übergeordnete ID        | ganze Zahl | Gibt Kategorie ID zurück.                                                           |
| position                | ganze Zahl | Gibt die Kanalposition zurück.                                                      |
| slowmode                | ganze Zahl | Gibt den Sendermodus zurück. (falls vorhanden)                                      |
| thema                   | string     | Gibt das Thema des Kanals zurück.                                                   |
| typ                     | string     | Gibt den Kanaltyp zurück.                                                           |
| sehbar                  | string     | Gibt true / false zurück, wenn Kanal sichtbar ist.                                  |
| permsErlaubt            | string     | Gibt erlaubte Berechtigungen für den aktuellen Kanal zurück.                        |
| permsverweigert         | string     | Gibt verweigerte Berechtigungen für den aktuellen Kanal zurück.                     |
| permen                  | string     | Gibt Berechtigungen für den aktuellen Kanal zurück.                                 |
| beitretbar              | string     | Gibt true / false zurück, wenn Kanal verbindbar ist (nur, wenn seine Stimme Kanal). |
| benutzerlimit           | ganze Zahl | Gibt das Benutzerlimit für den aktuellen (Sprach-)Kanal zurück.                     |
| Nachrichtenanzahl       | ganze Zahl | Gibt die Anzahl der Nachrichten zurück, die im aktuellen Kanal gesendet werden.     |

## Beispiel(e)
```js
bot.channelCreateCommand({
    Kanal: "channelid",
    Code: `
    Neuer Kanal wurde erstellt!
- Name: $newChannel[name]
- ID: $newChannel[id]
- <#$newChannel[id]>`
})
```
- Dieser Code wird ausgeführt, wenn __Kanal__ erstellt wird.
---
```js
bot.channelDeleteCommand({
    Kanal: "channelid",
    Code: `
    Kanal wurde gelöscht!
- Name: $oldChannel[name]
- ID: $oldChannel[id]`
})
```
- Dieser Code wird ausgeführt, wenn __Kanal gelöscht wurde__.
---
```js
bot.channelUpdateCommand({
    Kanal: "channelid",
    Code: `
    Kanal wurde aktualisiert!
- Neuer Name: $newChannel[name]
 - Alter Name: $oldChannel[name]`
})
```
- Dieser Code wird ausgeführt, wenn __Kanal aktualisiert wird__.
---