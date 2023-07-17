---
title: '$getMessage'
description: '$getMessage gibt Eigenschaften über eine bestimmte Nachricht zurück.'
id: getMessage
---

`$getMessage` gibt Eigenschaften über eine bestimmte Nachricht zurück.

## Verwendung

```php
$getMessage[channelID;messageID;option?]
```

## Verwendung

| Feld          | Typ        | Beschreibung                                       | Erforderlich |
| ------------- | ---------- | -------------------------------------------------- |:------------:|
| channelID     | ganze Zahl | ID des Kanals, in dem sich die Nachricht befindet. |     wahr     |
| nachrichtenID | ganze Zahl | Die ID der Nachricht.                              |     wahr     |
| option?       | string     | Welche Option abgerufen werden soll.               |    falsch    |

<details open>
  <summary><h3> Optionen </h3></summary>

| Typ          | Beschreibung           |
| ------------ | ---------------------- |
| inhalt       | Inhalt der Nachricht.  |
| userID       | Autoren-Benutzer-ID.   |
| usertag      | Autor Diskriminierung. |
| benutzername | Autor Benutzername.    |

</details>

## Beispiel(e)

Dies gibt den Inhalt Ihrer gesendeten Nachricht zurück:

```javascript
bot.command({
    name: 'getMessage',
    code: `
$getMessage[$channelID;$messageID;content]
  `
});
```