---
title: '$advanceCooldown'
description: '$advanceCooldown wird eine Abklingzeit für eine bestimmte ID setzen.'
id: advanceCooldown
---

`$advanceCooldown` wird eine Abklingzeit für eine bestimmte ID setzen.

## Verwendung

```php
$advanceCooldown[time;id;errorMessage]
```

* Du kannst die verbleibende Abklingzeit in der `$cooldown` Funktion abrufen, indem du **`%time%`</code>** oder eines der folgenden folgenden verwendest.
    * `%time%`, `%year%`, `%month%`, `%week%`, `%day%`, `%hour%`, `%min%`, `%sec%`, `%ms%`, `%fullTime%`

## Verwendung

| Feld          | Typ        | Beschreibung                                                              | Erforderlich |
| ------------- | ---------- | ------------------------------------------------------------------------- |:------------:|
| Zeit          | string     | Zu trennender Text.                                                       |     wahr     |
| id            | ganze Zahl | Zu trennender Text.                                                       |     wahr     |
| fehlermeldung | string     | Fehlermeldung, die angezeigt werden soll, wenn die Abklingzeit verbleibt. |     wahr     |

## Beispiel(e)

Dies wird eine Abklingzeit für die Gilde festlegen, in der du den Befehl ausführst und die verbleibende Abklingzeit zurückgeben:

```javascript
bot.command({
    name: 'advanceCooldown',
    code: `
  $advanceCooldown[2m;$guildID;]
  `
});
```