---
title: '$isAutoComplete'
description: '$isAutoComplete will return either true or false depending on the entered slash command option being auto completed or not. (autoCompleteRespond function)'
id: isAutoComplete
---

`$isAutoComplete` will return either true or false depending on the entered slash command option being auto completed or not. (autoCompleteRespond function)

## Modo de uso

```php
$isAutoComplete
```

## Ejemplo(s)

This will create a slash command with the "autoComplete" feature:

Tenga en cuenta que requiere "**events: ["onMessage", "onInteractionCreate"]**" en su archivo principal (también conocido como, en la mayoría de los casos, index.js)

```javascript
bot.command({
    name: 'createSlashCommand',
    code: `
  $createApplicationCommand[global;example;Awesome example interaction command with auto-complete!;true;slash;[{
  "name": "option", 
  "description": "test",
  "required": false,
  "type": 3, 
  "autocomplete": true
}]]`
});
```

Checking if autoComplete equals `true`, if so it will respond with the given respond (addition of the code above):

```javascript
bot.command({
    name: "example",
    prototype: "slash",
    $if: "old",
    code: `
  $if[$isAutocomplete==true]
  $autoCompleteRespond[First option;You selected the first option, therefore I'm responding with this!;Second option;You selected the first second, therefore I'm responding with this!]
  $else
  $interactionReply[$slashOption[option];;;;everyone]
  $endif
  `
});
```

Create the slash-commands with another option:

```javascript
bot.command({
    name: 'createSlashCommand',
    code: `
  $createApplicationCommand[global;example;Awesome example interaction command with auto-complete!;true;slash;[{
  "name": "option",
  "description": "test",
  "required": false, 
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

Using JSON and checking if autoComplete equals `true`, if so it will respond with the given respond (addition of the code above):

```javascript
bot.command({
    name: "example",
    prototype: "slash",
    $if: "old",
    code: `
  $if[$isAutocomplete==true]
  $autoCompleteRespond[[{ 
    "name" : "First Option",
    "value" : "You selected the first option, therefore I\'m responding with this!"
  }, {
    "name" : "Second Option",
    "value" : "You selected the second option, therefore I\'m responding with this!"
  }]]
  $else
  $interactionReply[$slashOption[option] - autocomplete #SEMI# $slashOption[anotheroption] - false autocomplete;;;;everyone]
  $endif
  `
});
```