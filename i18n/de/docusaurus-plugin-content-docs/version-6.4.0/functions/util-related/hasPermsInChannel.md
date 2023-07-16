---
title: '$hasPermsInChannel'
description: '$hasPermsInChannel wird prüfen, ob der Benutzer eine der erforderlichen Berechtigungen im angegebenen Kanal hat.'
id: hasPermsInChannel
---

`$hasPermsInChannel` wird überprüfen, ob der Benutzer eine der erforderlichen Berechtigungen im angegebenen Kanal hat.

## Verwendung

```php
$hasPermsInChannel[channelID;userOrRoleID;...perms]
```

## Verwendung

| Feld         | Typ        | Beschreibung                                               | Erforderlich |
| ------------ | ---------- | ---------------------------------------------------------- | ------------ |
| kanalD       | ganze Zahl | ID des Kanals, in dem der Client die Berechtigungen prüft. | wahr         |
| userOrRoleID | ganze Zahl | ID des Benutzers oder der Rolle.                           | wahr         |
| ...Perms     | string     | Berechtigungen.                                            | wahr         |

<details>
  <summary> <h3> Discord API Berechtigungen </h3></summary>

| Berechtigung             |                                                                                |
| ------------------------ | ------------------------------------------------------------------------------ |
| createinvite             | Berechtigung Gildeneinladungen zu erstellen                                    |
| kickmitglieder           | Berechtigung Gildenmitglieder zu kicken                                        |
| banmitglieder            | Berechtigung Gildenmitglieder zu verbieten                                     |
| administator             | Administratorberechtigungen                                                    |
| verwaltete Kanäle        | Berechtigung Gildenkanäle zu verwalten                                         |
| managguild               | Berechtigungen zum Ändern der Servereinstellungen                              |
| addreaktionen            | Berechtigungen zum Hinzufügen von Reaktionen                                   |
| viewauditlog             | Berechtigung, das Audit-Log der Gilde anzusehen                                |
| priorityspeaker          | Vorrangiger Sprecher                                                           |
| streamen                 | Berechtigung zum Streamen in Sprachkanälen                                     |
| anzeiger                 | Berechtigung um einen bestimmten Kanal zu sehen                                |
| sende Nachrichten        | Berechtigung zum Senden von Nachrichten in einem bestimmten Kanal              |
| sendttsmessages          | Berechtigung zum Senden von Text-zu-Sprache Nachrichten                        |
| verwaltete Nachrichten   | Berechtigung zum Verwalten von Nachrichten                                     |
| embedlinks               | Berechtigung zum Einbinden von Links                                           |
| Anhänge                  | Berechtigung zum Anhängen von Dateien                                          |
| nachrichtenverlauf       | Berechtigung den Nachrichtenverlauf innerhalb eines bestimmten Kanals zu lesen |
| alle erwähnen            | Berechtigung `@everyone` und alle Rollen zu erwähnen                           |
| useexternalemojis        | Berechtigung zur Verwendung externer Emojis                                    |
| viewguildinsights        | Berechtigung zum Anzeigen von Gildeneinsichten                                 |
| verbinden                | Berechtigung zum Verbinden mit Sprachkanälen und Stufen                        |
| mutem<unk>               | Erlaubnis, Mitglieder in Sprachkanälen zu stummen                              |
| deafenmembers            | Berechtigung für taube Mitglieder in Sprachkanälen                             |
| verschiebst              | Berechtigung zum Verschieben von Mitgliedern zwischen Sprachkanälen            |
| usevad                   | Berechtigung zur Sprachaktivitätserkennung                                     |
| changenickname           | Berechtigung um deinen eigenen Nickname zu ändern                              |
| managenicknamen          | Berechtigung um andere Mitglieder Nicknamen zu verwalten                       |
| manageroles              | Berechtigung zum Verwalten von Rollen                                          |
| managwebhooks            | Berechtigung zum Verwalten von Webhooks                                        |
| managemojisandstickers   | Berechtigung zum Verwalten von Emojis und Aufklebern                           |
| anwendungsbefehle        | Berechtigung zur Verwendung von App-Befehlen                                   |
| anfraesttospeak          | Berechtigung um Wortmeldungen in Stufen zu verwenden                           |
| verwaltete Events        | Berechtigung zum Verwalten von Events                                          |
| managthreads             | Berechtigung zum Verwalten von Themen                                          |
| usepublicthreads         | Berechtigung zum Verwenden öffentlicher Threads                                |
| useprivatethreads        | Berechtigung private Threads zu verwenden                                      |
| erstelle Publicthreads   | Berechtigung zum Erstellen öffentlicher Threads                                |
| createprivatethreads     | Berechtigung zum Erstellen privater Threads                                    |
| useexternalstickers      | Berechtigung zum Verwenden von extrernalen Aufklebern                          |
| sendmessagesinthreads    | Berechtigung zum Senden von Nachrichten in Threads                             |
| benutzembeddedactivities | Berechtigung zum Starten von Aktivitäten innerhalb von Sprachkanälen           |
| moderierte Mitglieder    | Timeout und Timeouts von Gildenmitgliedern entfernen                           |

</details>

## Beispiel(e)

Dies gibt `true` zurück, wenn der Autor `Nachrichten` Berechtigungen sendet und `false` zurückgibt, wenn er diese nicht besitzt:

```javascript
bot.command({
    name: 'hasPermsInChannel',
    code: `
  $hasPermsInChannel[$channelID;$authorID;sendmessages]
  `
});
```
