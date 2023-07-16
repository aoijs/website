---
title: '$globalCooldown'
description: '$globalCooldown wird eine global basierte Abklingzeit für einen Befehl setzen.'
id: globalCooldown
---

`$globalCooldown` wird eine global basierte Abklingzeit für einen Befehl setzen.

## Verwendung

```php
$globalCooldown[time;errorMessage]
```

* Du kannst die verbleibende Abklingzeit in der `$globalCooldown` Funktion abrufen, indem du **`%time%`</code>** oder eines der folgenden folgenden verwendest.
    * `%time%`, `%year%`, `%month%`, `%week%`, `%day%`, `%hour%`, `%min%`, `%sec%`, `%ms%`, `%fullTime%`

## Verwendung

| Feld          | Typ    | Beschreibung                                                                       | Erforderlich |
| ------------- | ------ | ---------------------------------------------------------------------------------- |:------------:|
| Zeit          | string | Die Dauer der Abklingzeit.                                                         |     wahr     |
| fehlermeldung | string | Fehlermeldung angegeben, wenn die verbleibende Zeit der Abklingzeit vorhanden ist. |     wahr     |

## Beispiel(e)

Dies wird `Hallo` zurückgeben und verhindern, dass jemand den Befehl für weitere fünf Minuten erneut ausführt:

```javascript
bot.command({
    Name: 'globalCooldown',
    Code: `
  Hallo
  $globalCooldown[5m;Please wait %time% to execute this command again.]
  `
});
```
