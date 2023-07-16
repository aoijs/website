---
title: '$isAutoComplete'
description: '$isAutoComplete gibt entweder true oder false zurück, abhängig davon, ob die eingegebene Slash Befehlsoption automatisch abgeschlossen ist oder nicht. (autoCompleteRespond Funktion)'
id: isAutoComplete
---

`$isAutoComplete` wird entweder true oder false zurückgeben, abhängig davon, dass die eingegebene Slash Befehlsoption automatisch abgeschlossen ist oder nicht. (autoCompleteRespond Funktion)

## Verwendung

```php
$isAutoComplete
```

## Beispiel(e)

Dies wird einen Schrägstrich Befehl mit der Funktion "autoComplete" erstellen:

Bitte beachten Sie, dass Sie "**Ereignisse benötigen: ["onMessage", "onInteractionCreate"]**" in Ihrer Hauptdatei (auch bekannt als in den meisten Fällen index.js)

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
}]]`
});
```

Überprüfe, ob autoComplete `true`entspricht, wenn ja, antwortet es mit der angegebenen Antwort (Hinzufügen des obigen Codes):

```javascript
bot.command({
    name: "example",
    prototype: "slash",
    $if: "alt",
    code: `
  $if[$isAutocomplete==true]
  $autoCompleteRespond[First option;You selected the first option, therefore I'm responding with this!;Second option;You selected the first second, therefore I'm responding with this!]
  $else
  $interactionReply[$slashOption[option];;;jeder]
  $endif
  `
});
```

Erstellen Sie die Slash-Befehle mit einer anderen Option:

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
  "required": false,
  "type": 3
}]]`
});
```

Benutze JSON und überprüfe, ob AutoComplete `true`ist, wenn dies der Fall ist, antwortet es mit der angegebenen Antwort (Hinzufügen des Codes oben):

```javascript
bot.command({
    Name: "Beispiel",
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