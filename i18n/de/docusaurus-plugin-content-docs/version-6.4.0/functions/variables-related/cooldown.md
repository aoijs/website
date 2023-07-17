---
title: $cooldown
description: '$cooldown wird nach der Verwendung eine Abklingzeit für den Autor des Befehls setzen.'
id: cooldown
---

`$cooldown` wird eine benutzerbasierte Abklingzeit setzen.

## Verwendung

```php
$cooldown[Zeit;Fehlermeldung
]
```

* Du kannst die verbleibende Abklingzeit in der `$cooldown` Funktion abrufen, indem du **`%time%`</code>** oder eines der folgenden folgenden verwendest.
    * `%time%`, `%year%`, `%month%`, `%week%`, `%day%`, `%hour%`, `%min%`, `%sec%`, `%ms%`, `%fullTime%`

## Verwendung

| Feld          | Typ    | Beschreibung                                                                 | Erforderlich |
| ------------- | ------ | ---------------------------------------------------------------------------- |:------------:|
| Zeit          | string | Die Dauer der Abklingzeit.                                                   |     wahr     |
| fehlermeldung | string | Fehlermeldung, wenn die verbleibende Zeit für die Abklingzeit vorhanden ist. |     wahr     |

## Beispiel(e)

Dies setzt eine Abklingzeit für einen Befehl, der nur für den Benutzer gilt und die verbleibende Abklingzeit zurückgibt:

```javascript
bot.command({
    Name: 'cooldown',
    Code: `
  Hallo
  $cooldown[2m;Please wait %time% to execute this command again.]
  `
});
```
