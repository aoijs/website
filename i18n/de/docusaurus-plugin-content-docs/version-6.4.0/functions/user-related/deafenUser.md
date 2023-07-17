---
title: '$deafenUser'
description: '$deafenUser wird einen Benutzer taub machen.'
id: deafenUser
---

`$deafenUser` wird einen Benutzer taub machen.

## Verwendung

```php
$deafenUser[userID;deafen?]
```

## Verwendung

| Feld    | Typ        | Beschreibung                                                                                                | Erforderlich |
| ------- | ---------- | ----------------------------------------------------------------------------------------------------------- |:------------:|
| userID  | ganze Zahl | Der Benutzer, der taub oder ungeboren.                                                                      |     wahr     |
| deafen? | boolean    | Deafen oder Deafen den angegebenen Benutzer. <br /> 1. **true** (Standard) <br /> 2. **Falsch** |    falsch    |

## Beispiel(e)

Das wird sich selbst taub machen:

```javascript
bot.command({
    name: 'taub',
    code: `
  $deafen[$authorID;true]
  `
});
```
