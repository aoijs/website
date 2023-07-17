---
title: '$tempCooldown'
description: '$tempCooldown wird eine temporäre Abklingzeit für einen Befehl erstellen.'
id: tempCooldown
---

`$tempCooldown` wird eine temporäre Abklingzeit für einen Befehl erstellen.

## Verwendung

```php
$tempCooldown[time;id;errorMessage?]
```

* Du kannst die verbleibende Abklingzeit in der `$tempCooldown` Funktion abrufen, indem du **`%time%`</code>** oder eines der folgenden folgenden verwendest.
    * `%time%`, `%year%`, `%month%`, `%week%`, `%day%`, `%hour%`, `%min%`, `%sec%`, `%ms%`, `%fullTime%`

## Verwendung

| Feld          | Typ    | Beschreibung                                                                 | Erforderlich |
| ------------- | ------ | ---------------------------------------------------------------------------- |:------------:|
| Zeit          | string | Die Dauer der Abklingzeit.                                                   |     wahr     |
| id            | string | Kann Benutzer, Gilde, Nachrichten, Kanal oder jede andere ID sein.           |     wahr     |
| fehlermeldung | string | Fehlermeldung, wenn die verbleibende Zeit für die Abklingzeit vorhanden ist. |     wahr     |

## Beispiel(e)

Dies wird eine temporäre Abklingzeit für einen Befehl setzen, der nur einmal gilt:

```javascript
bot.command({
    Name: 'tempCooldown',
    Code: `
  Hallo
  $tempCooldown[2m;customid;Please wait %time% to execute this command again.]
  `
});
```
