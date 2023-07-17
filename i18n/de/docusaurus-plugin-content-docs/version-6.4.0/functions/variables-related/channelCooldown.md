---
title: '$channelCooldown'
description: '$channelCooldown setzt nach Ausführung des Befehls eine Abklingzeit an einen bestimmten Kanal.'
id: channelCooldown
---

`$channelCooldown` wird eine kanalbasierte Abklingzeit setzen.

## Verwendung

```php
$channelCooldown[time;errorMessage]
```

* Du kannst die verbleibende Abklingzeit in der `$channelCooldown` Funktion abrufen, indem du **`%time%`</code>** oder eines der folgenden folgenden verwendest.
    * `%time%`, `%year%`, `%month%`, `%week%`, `%day%`, `%hour%`, `%min%`, `%sec%`, `%ms%`, `%fullTime%`

## Verwendung

| Feld          | Typ    | Beschreibung                                           | Erforderlich |
| ------------- | ------ | ------------------------------------------------------ |:------------:|
| Zeit          | string | Timer der Abklingzeit                                  |     wahr     |
| fehlermeldung | string | Fehlermeldung, wenn die Cooldown-Timer noch aktiv ist. |    falsch    |

## Beispiel(e)

Dies setzt eine Abklingzeit für einen Befehl im Kanal, in dem der Befehl ausgeführt wurde, und gibt die verbleibende Abklingzeit zurück:

```javascript
bot.command({
    Name: 'channelCooldown',
    Code: `
  Hallo
  $channelCooldown[2m;Please wait %time% to execute this command again.]
  `
});
```
