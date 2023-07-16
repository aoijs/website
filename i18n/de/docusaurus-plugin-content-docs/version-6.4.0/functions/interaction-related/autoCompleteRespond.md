---
title: '$autoCompleteRespond'
description: '$autoCompleteRespond wird verwendet um die Schrägstrich Optionen automatisch zu vervollständigen.'
id: autoCompleteRespond
---

`$autoCompleteRespond` wird verwendet um die Schrägstrich Optionen automatisch zu vervollständigen.

## Verwendung

```php
$autoCompleteRespond[object]
```

```php
$autoCompleteRespond[OptionName;OptionReply;...]
```

## Verwendung

| Feld              | Typ    | Beschreibung                                                                                                               | Erforderlich |
| ----------------- | ------ | -------------------------------------------------------------------------------------------------------------------------- |:------------:|
| Optionsname       | string | Name der Auto-Vervollständigen-Option, die dem Benutzer angezeigt wird.                                                    |     wahr     |
| Optionale Antwort | string | Die Antwort, die gesendet wird, wenn die Option Auto-Vervollständigung ausgewählt wurde (nicht für den Benutzer sichtbar). |     wahr     |

## Beispiel(e)

Erstellen Sie die slash-Befehle: (Bitte beachten Sie, dass Sie die `Ereignisse benötigen: ["onMessage", "onInteractionCreate"]` Ereignis in Ihrer Hauptdatei)

```javascript
bot.command({
    Name: 'createSlashCommand',
    Code: `
  $createApplicationCommand[global; xample;Großartiger Interaktionsbefehl mit automatischer Fertigstellung! wahr;Schräg; {
  "name": "option",
  "description": "test",
  "required": falsch,
  "type": 3,
  "autocomplete": true
}]
  `
});
```

Interaktionsbefehl:

```javascript
bot.command({
    -Name: "test",
    Prototyp: "slash",
    Code: `
  $if[$isAutocomplete==true]
  $autoCompleteRespond[First option;You selected the first option, therefore I'm responding with this!;Second option;You selected the first second, therefore I'm responding with this!]
  $else
  $interactionReply[$slashOption[option];;;jeder]
  $endif
  `
});
```

### Erweitertes Beispiel

Erstellen Sie die slash-Befehle: (Bitte beachten Sie, dass Sie die `Ereignisse benötigen: ["onMessage", "onInteractionCreate"]` Ereignis in Ihrer Hauptdatei)

```javascript
bot.command({
    Name: 'createSlashCommand',
    Code: `
  $createApplicationCommand[global; xample;Großartiger Interaktionsbefehl mit automatischer Fertigstellung! wahr;Schräg; {
  "name": "option",
  "description": "test",
  "required": falsch,
  "type": 3,
  "autocomplete": true
}, {
  "name": "anotheroption",
  "description": "test",
  "required": falsch,
  "type": 3
}]
  `
});
```

Interaktionsbefehl:

```javascript
bot.command({
    Name: "test",
    Prototyp: "slash",
    $if: "alt",
    Code: `
  $if[$isAutocomplete==true]
  $autoCompleteRespond[[{ 
    "name" : "First option",
    "Wert" : "Sie haben die erste Option ausgewählt, deshalb antworte ich darauf!"
  }, {
    "name" : "Zweite Option",
    "value" : "Sie haben die zweite Option ausgewählt, daher antworte ich darauf!"
  }]]
  $else
  $interactionReply[$slashOption[option] - Autovervollständigung #SEMI# $slashOption[anotheroption] - falsche Autovervollständigung;;;;jeder]
  $endif
  `
});
```
