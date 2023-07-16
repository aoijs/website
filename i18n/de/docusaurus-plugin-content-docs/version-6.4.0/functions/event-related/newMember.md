---
title: $newMember
description: '$newMember enthält Daten für das Mitglied nach dem Update, könnte eine gute Idee sein, um die Teiloption vor dem Zugriff auf eine Immobilie zu überprüfen. (MemberUpdate-Ereignis)'
id: newMember
---

`$newMember` speichert Daten für das Mitglied nach dem Update, könnte eine gute Idee sein, die Teiloption vor dem Zugriff auf zu überprüfen. (MemberUpdate-Ereignis)

## Verwendung

```php
$newMember[option]
```

## Verwendung

| Feld      | Typ    | Beschreibung        | Erforderlich |
| --------- | ------ | ------------------- |:------------:|
| variieren | string | Option zum Abrufen. |     wahr     |

### Optionen

| Feld           | Typ        | Beschreibung                                   |
| -------------- | ---------- | ---------------------------------------------- |
| id             | ganze Zahl | Gibt Benutzer-ID zurück.                       |
| name           | string     | Gibt den Namen des Benutzers zurück.           |
| rollen         | string     | Gibt Benutzerrollen zurück.                    |
| berechtigungen | string     | Gibt Benutzerberechtigungen zurück.            |
| nick           | string     | Gibt den Benutzernamen zurück.                 |
| HighestRoleID  | ganze Zahl | Gibt den Benutzer der höheren Rolle ID zurück. |

## Beispiel(e)
- **Hinweis: Sie benötigen `Gildenmitglieder` Absicht**

```js
bot.memberUpdateCommand({
    channel: "channelid",
    code: `
    $username[$newMember[id]] hat ihren Nicknamen aktualisiert!
- Neuer Nickname: $newMember[nick]
 - Alter Nickname: $oldMember[nick]

   $username[$newMember[id]] hat ihren Namen aktualisiert!
- Neuer Name: $newMember[name]
 - Alter Name: $oldMember[name]`
})
```
- Dieser Code wird ausgeführt, wenn __Mitglied ihren Nicknamen oder den Discord Benutzernamen__ aktualisiert

---