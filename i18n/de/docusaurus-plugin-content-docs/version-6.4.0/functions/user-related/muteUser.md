---
title: '$muteUser'
description: '$muteUser wird einen bestimmten Benutzer in einem Sprachkanal stumm oder lautlos machen.'
id: muteUser
---

`$muteUser` wird einen bestimmten Benutzer in einem Sprachkanal stumm oder entsperren.

## Verwendung

```php
$muteUser[guildID;userID;mute?;reason?]
```

## Verwendung

| Feld    | Typ        | Beschreibung                                                                                                                  | Erforderlich |
| ------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------- |:------------:|
| guildID | ganze Zahl | Die Gilden-ID, wo sich der Benutzer befindet.                                                                                 |     wahr     |
| userID  | ganze Zahl | Die Benutzer-ID des zu stummschaltenden Benutzers.                                                                            |     wahr     |
| stumm?  | boolean    | Benutzer stumm oder lautlos schalten. <br /> 1. **true** (stumm / Standard) <br /> 2. **false** (unstummschalten) |    falsch    |
| warum?  | string     | Begründung, die im Audit-Log der Gilde angezeigt wird.                                                                        |    falsch    |

## Beispiel(e)

Dieser Server stumm sich selbst (muss in einem Sprachkanal sein):

```javascript
bot.command({
    name: 'muteUser',
    code: `
  $muteUser[$guildID;$authorID;true]
  `
});
```