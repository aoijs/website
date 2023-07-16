---
title: '$getClientInvite'
description: '$getClientInvite wird die Einladung Ihres Bots mit den angegebenen Berechtigungen zurückgeben.'
id: getClientInvite
---

`$getClientInvite` wird die Einladung Ihres Bots mit den angegebenen Berechtigungen zurückgeben.

## Verwendung

```php
$getClientInvite[...perms?]
```

## Parameter

| Feld   | Typ    | Beschreibung                                                | Erforderlich |
| ------ | ------ | ----------------------------------------------------------- |:------------:|
| perms? | string | Berechtigungen, die Sie in die Einladung aufnehmen möchten. |    falsch    |

<details>
  <summary><h3> Discord API Berechtigungen </h3></summary>

| Berechtigung            |                                                                                |
| ----------------------- | ------------------------------------------------------------------------------ |
| createinvite            | Berechtigung Gildeneinladungen zu erstellen                                    |
| kickmitglieder          | Berechtigung Gildenmitglieder zu kicken                                        |
| banmitglieder           | Berechtigung Gildenmitglieder zu verbieten                                     |
| administator            | Administratorberechtigungen                                                    |
| verwalteter Kanal       | Berechtigung Gildenkanäle zu verwalten                                         |
| manager-Server          | Berechtigungen zum Ändern der Servereinstellungen                              |
| addreaktionen           | Berechtigungen zum Hinzufügen von Reaktionen                                   |
| viewauditlog            | Berechtigung, das Audit-Log der Gilde anzusehen                                |
| priorityspeaker         | Vorrangiger Sprecher                                                           |
| streamen                | Berechtigung zum Streamen in Sprachkanälen                                     |
| anzeiger                | Berechtigung um einen bestimmten Kanal zu sehen                                |
| sende Nachrichten       | Berechtigung zum Senden von Nachrichten in einem bestimmten Kanal              |
| sendttsmessages         | Berechtigung zum Senden von Text-zu-Sprache Nachrichten                        |
| verwaltete Nachrichten  | Berechtigung zum Verwalten von Nachrichten                                     |
| embedlinks              | Berechtigung zum Einbinden von Links                                           |
| Anhänge                 | Berechtigung zum Anhängen von Dateien                                          |
| nachrichtenverlauf      | Berechtigung den Nachrichtenverlauf innerhalb eines bestimmten Kanals zu lesen |
| alle erwähnen           | Berechtigung `@everyone`/`@here` und alle Rollen zu erwähnen                   |
| externalemojis          | Berechtigung zur Verwendung externer Emojis                                    |
| viewguildinsights       | Berechtigung zum Anzeigen von Gildeneinsichten                                 |
| verbinden               | Berechtigung zum Verbinden mit Sprachkanälen und Stufen                        |
| mutem<unk>              | Erlaubnis, Mitglieder in Sprachkanälen zu stummen                              |
| deafenmembers           | Berechtigung für taube Mitglieder in Sprachkanälen                             |
| verschiebst             | Berechtigung zum Verschieben von Mitgliedern zwischen Sprachkanälen            |
| usevad                  | Berechtigung zur Sprachaktivitätserkennung                                     |
| changenickname          | Berechtigung um deinen eigenen Nickname zu ändern                              |
| managenicknamen         | Berechtigung um andere Mitglieder Nicknamen zu verwalten                       |
| manageroles             | Berechtigung zum Verwalten von Rollen                                          |
| managwebhooks           | Berechtigung zum Verwalten von Webhooks                                        |
| managemojisandstickers  | Berechtigung zum Verwalten von Emojis und Aufklebern                           |
| useappcmds              | Berechtigung zur Verwendung von App-Befehlen                                   |
| anfraesttospeak         | Berechtigung um Wortmeldungen in Stufen zu verwenden                           |
| verwaltete Events       | Berechtigung zum Verwalten von Events                                          |
| managthreads            | Berechtigung zum Verwalten von Themen                                          |
| erstelle Publicthreads  | Berechtigung zum Verwenden öffentlicher Threads                                |
| createprivatethreads    | Berechtigung private Threads zu verwenden                                      |
| erstelle Publicthreads  | Berechtigung zum Erstellen öffentlicher Threads                                |
| createprivatethreads    | Berechtigung zum Erstellen privater Threads                                    |
| externe Aufkleber       | Berechtigung zum Verwenden von extrernalen Aufklebern                          |
| sendmessageinthreads    | Berechtigung zum Senden von Nachrichten in Threads                             |
| startembeddedactivities | Berechtigung zum Starten von Aktivitäten innerhalb von Sprachkanälen           |
| moderierte Mitglieder   | Timeout und Timeouts von Gildenmitgliedern entfernen                           |

</details>

## Beispiel(e)

Dies wird die Einladung Ihres Bots mit Administratorrechten zurückgeben:

```javascript
bot.command({
    name: 'getClientInvite',
    code: `
  Lade mich hier ein: $getClientInvite[administrator]
  `
});
```