---
title: '$hasAnyPerm'
description: '$hasAnyPerm wird prüfen, ob der Benutzer eine der erforderlichen Berechtigungen hat.'
id: hasAnyPerm
---

`$hasAnyPerm` wird überprüfen, ob der Benutzer eine der erforderlichen Berechtigungen hat.

## Verwendung

```php
$hasAnyPerm[guildID;userID;...perms]
```

## Verwendung

| Feld     | Typ        | Beschreibung                                              | Erforderlich |
| -------- | ---------- | --------------------------------------------------------- |:------------:|
| guildID  | ganze Zahl | ID der Gilde, in der der Client die Berechtigungen prüft. |     wahr     |
| userID   | ganze Zahl | ID des Benutzers.                                         |    falsch    |
| ...Perms | string     | Berechtigungen.                                           |     wahr     |

<details>
  <summary> <h3> Discord API Berechtigungen </h3></summary>

| Berechtigung            |                                                                                |
| ----------------------- | ------------------------------------------------------------------------------ |
| createinvite            | Berechtigung Gildeneinladungen zu erstellen                                    |
| kicken                  | Berechtigung Gildenmitglieder zu kicken                                        |
| bannen                  | Berechtigung Gildenmitglieder zu verbieten                                     |
| administator            | Administratorberechtigungen                                                    |
| verwalteter Kanal       | Berechtigung Gildenkanäle zu verwalten                                         |
| managguild              | Berechtigungen zum Ändern der Servereinstellungen                              |
| addreaktionen           | Berechtigungen zum Hinzufügen von Reaktionen                                   |
| viewauditlog            | Berechtigung, das Audit-Log der Gilde anzusehen                                |
| priorityspeaker         | Vorrangiger Sprecher                                                           |
| streamen                | Berechtigung zum Streamen in Sprachkanälen                                     |
| anzeiger                | Berechtigung um einen bestimmten Kanal zu sehen                                |
| sende Nachrichten       | Berechtigung zum Senden von Nachrichten in einem bestimmten Kanal              |
| sendt                   | Berechtigung zum Senden von Text-zu-Sprache Nachrichten                        |
| verwaltete Nachrichten  | Berechtigung zum Verwalten von Nachrichten                                     |
| embedlinks              | Berechtigung zum Einbinden von Links                                           |
| Anhänge                 | Berechtigung zum Anhängen von Dateien                                          |
| nachrichtenverlauf      | Berechtigung den Nachrichtenverlauf innerhalb eines bestimmten Kanals zu lesen |
| alle erwähnen           | Berechtigung `@everyone` und alle Rollen zu erwähnen                           |
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
| usepublicthreads        | Berechtigung zum Verwenden öffentlicher Threads                                |
| useprivatethreads       | Berechtigung private Threads zu verwenden                                      |
| erstelle Publicthreads  | Berechtigung zum Erstellen öffentlicher Threads                                |
| createprivatethreads    | Berechtigung zum Erstellen privater Threads                                    |
| externe Aufkleber       | Berechtigung zum Verwenden von extrernalen Aufklebern                          |
| sendmessageinthreads    | Berechtigung zum Senden von Nachrichten in Threads                             |
| startembeddedactivities | Berechtigung zum Starten von Aktivitäten innerhalb von Sprachkanälen           |
| moderierte Mitglieder   | Timeout und Timeouts von Gildenmitgliedern entfernen                           |

</details>

## Beispiel(e)

Dies wird `true` zurückgeben, wenn der Autor `Nachrichten` oder `verwaltet, die Berechtigungen von` verwerfen und `false` zurückgeben, wenn er keine besitzt:

```javascript
bot.command({
    name: 'hasAnyPerm',
    code: `
  $hasAnyPerm[$guildID;$authorID;kick;managemessages]
  `
});
```

