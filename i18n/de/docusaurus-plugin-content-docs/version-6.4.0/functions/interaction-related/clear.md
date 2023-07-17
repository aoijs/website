---
title: $clear
description: '$clear wird die Anzahl der angegebenen Nachrichten in einem Kanal löschen.'
id: clear
---

`$clear` wird die Anzahl der angegebenen Nachrichten in einem Kanal löschen.

## Verwendung

```php
$clear[amount;filter?;returnCount?;channelID?]
```

## Verwendung

| Feld          | Typ        | Beschreibung                                                                                                                                            | Erforderlich |
| ------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |:------------:|
| beträge       | anzahl     | Anzahl der zu löschenden Nachrichten.                                                                                                                   |     wahr     |
| filtern?      | string     | Filter der zu löschenden Nachrichten. <br /> 1. **Alle** (Standard) <br /> 2. **unPins** <br /> 3. **bot** <br /> 4. **UserID** |    falsch    |
| zurückzählen? | boolean    | Gibt die Anzahl gelöschter Nachrichten zurück. <br /> 1. **false** (Standard) <br /> 2. **wahr**                                            |    falsch    |
| channelID?    | ganze Zahl | In welchem Kanal sollen die Berechtigungen gelöscht werden.                                                                                             |    falsch    |

## Beispiel(e)

Dies löscht die letzten 50 Nachrichten, die nicht angepinnt sind:

```javascript
bot.command({
    name: 'clear',
    code: `
  $clear[50;unPins;false;$channelID]
  `
});
```
