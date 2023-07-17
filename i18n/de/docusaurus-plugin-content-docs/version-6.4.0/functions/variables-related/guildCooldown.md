---
title: '$guildCooldown'
description: '$guildCooldown wird eine Abklingzeit für die Gilde festlegen, nachdem sie benutzt wurde.'
id: guildCooldown
---

`$guildCooldown` wird eine Gilden-basierte Abklingzeit setzen.

## Verwendung

```php
$guildCooldown[time;errorMessage]
```

* Du kannst die verbleibende Abklingzeit in der `$guildCooldown` Funktion abrufen, indem du **`%time%`</code>** oder eines der folgenden folgenden verwendest.
    * `%time%`, `%year%`, `%month%`, `%week%`, `%day%`, `%hour%`, `%min%`, `%sec%`, `%ms%`, `%fullTime%`

## Verwendung

| Feld          | Typ    | Beschreibung                                                                 | Erforderlich |
| ------------- | ------ | ---------------------------------------------------------------------------- |:------------:|
| Zeit          | anzahl | Die Dauer der Abklingzeit.                                                   |     wahr     |
| fehlermeldung | string | Fehlermeldung, wenn die verbleibende Zeit für die Abklingzeit vorhanden ist. |     wahr     |

## Beispiel(e)

Dies wird eine Abklingzeit für einen Befehl setzen, der nur für die Gilde gilt und die verbleibende Abklingzeit zurückgibt:

```javascript
bot.command({
    Name: 'guildCooldown',
    Code: `
  Hallo
  $guildCooldown[2m;Please wait %time% to execute this command again.]
  `
});
```
