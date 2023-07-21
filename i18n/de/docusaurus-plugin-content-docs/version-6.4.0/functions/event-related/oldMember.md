---
title: $oldMember
description: '$oldMember enthält Daten für das Mitglied, bevor es aktualisiert wurde, dies ist aus Discord Cache und könnte leer sein, je nachdem, ob es gecached wird, Verwenden Sie also eine partielle Option, bevor Sie versuchen, auf eine Immobilie zuzugreifen. (MemberUpdate-Ereignis)'
id: oldMember
---

`$oldMember` enthält Daten für das Mitglied, bevor es aktualisiert wurde, dies ist aus Discord Cache und ist möglicherweise leer, abhängig von , ob es zwischengespeichert wird. Verwenden Sie daher eine partielle Option, bevor Sie versuchen, auf eine Eigenschaft zuzugreifen. (MemberUpdate-Ereignis)

## Verwendung

```php
$oldMember[option]
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