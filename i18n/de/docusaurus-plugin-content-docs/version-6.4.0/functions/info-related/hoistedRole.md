---
title: $hoistedRole
description: '$hoistedRole gibt die höchstmögliche Rolle eines Benutzers zurück.'
id: hoistedRole
---

`$hoistedRole` gibt die höchstmögliche Rolle eines Benutzers zurück.

## Verwendung

```php
$hoistedRole[userID?;guildID?;option?]
```

## Verwendung

| Feld     | Typ        | Beschreibung                                                                                                                          | Erforderlich |
| -------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------- |:------------:|
| userID?  | ganze Zahl | Die ID des Benutzers.                                                                                                                 |    falsch    |
| guildID? | ganze Zahl | die ID der Gilde.                                                                                                                     |    falsch    |
| option?  | string     | Die Option, wie die Rolle <br /> 1 zurückgegeben wird. **Name** <br /> 2. **id**  (default) <br /> 3. **Erwähnung** |    falsch    |

## Beispiel(e)

Dies gibt den Namen deiner höchsten gehobenen Rolle zurück:

```javascript
bot.command({
    name: 'hoistedRole',
    code: `
  $hoistedRole[$authorID;$guildID;name]
  `
});
```
