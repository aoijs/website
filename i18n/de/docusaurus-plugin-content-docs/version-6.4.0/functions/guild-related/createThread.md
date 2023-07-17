---
title: '$createThread'
description: '$createThread wird einen neuen Thread erstellen.'
id: createThread
---

`$createThread` wird einen neuen Thread erstellen.

## Verwendung

```php
$createThread[channelID;name;archive;type;startMessage;returnId?]
```

## Verwendung

| Feld           | Typ        | Beschreibung                                                                      | Erforderlich |
| -------------- | ---------- | --------------------------------------------------------------------------------- |:------------:|
| channelID      | ganze Zahl | Die Kanal-ID, in der der Thread erstellt werden soll.                             |     wahr     |
| name           | string     | Der Name des neu erstellten Threads.                                              |     wahr     |
| erreichen      | string     | Nach wieviel Zeit der Thread erreicht wird (ms).                                  |     wahr     |
| typ            | string     | Thread-Typ <br /> 1. **öffentliches** (Standard) <br /> 2. **Privat** |     wahr     |
| startNachricht | string     | Die Nachrichten-ID, auf die sich der Thread beziehen soll.                        |     wahr     |
| zurückgeben?   | string     | Falls die Funktion die Thread-ID nach der Erstellung zurückgeben soll.            |    falsch    |

* **60 —** Mit dieser Option bleibt der Thread für **1 Stunde** aktiv.
* **1440 —** Mit dieser Option bleibt der Thread für **1 Tag** aktiv.
* **4320 —** Mit dieser Option bleibt der Thread für **3 Tage** aktiv.
* **10080 —** Mit dieser Option bleibt der Thread für **1 Woche** aktiv.
* **MAX —** Mit dieser Option bleibt der Thread für die höchstmögliche Zeit aktiv.

## Beispiel(e)

Dies wird einen Thread im aktuellen Kanal erstellen:

```javascript
bot.command({
    name: 'createThread',
    code: `
  $createThread[$channelID;Example!;60;public;$messageID;false]
  `
});
```
