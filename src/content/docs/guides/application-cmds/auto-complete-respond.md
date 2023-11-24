---
title: Autocomplete
description: This page covers everything about the autocomplete property of Application Commands.
id: interaction-autocomplete
sidebar:
  order: 4
---

There are multiple ways of using `$autoCompleteRespond` you can either use JSON or the simple aoi.js way.

### Usage

```php
$autoCompleteRespond[OptionName;OptionReply;...]
```

```php
$autoCompleteRespond[[{
    "name" : "Option Name One",
    "value" : "Option Reply 1"
  }, {
    "name" : "Option Name Two",
    "value" : "Option Reply 2"
  }]]
```

Create the slash command, this will create a global application command with the name of "example" with an option which uses autoComplete:

```javascript
client.command({
  name: "createApplicationCommand",
  code: `
  $createApplicationCommand[global;example;Awesome example interaction command with auto-complete!;true;slash;[{
    "name": "option", 
    "description": "First option!",
    "required": false,
    "type": 3, 
    "autocomplete": true
}]]`
});
```

Checking if autoComplete equals `true` if so it will respond with the given respond (addition of the code above):

```javascript
client.command({
  name: "example",
  prototype: "slash",
  $if: "old",
  code: `
  $if[$isAutocomplete==true]
  $autoCompleteRespond[First option;You selected the first option, therefore I'm responding with this!;Second option;You selected the first second, therefore I'm responding with this!]
  $else
  $interactionReply[$slashOption[option]]
  $endif
  `
});
```

Create the slash-command, this will create a global application command with the name "example":

```javascript
client.command({
  name: "createApplicationCommand",
  code: `
  $createApplicationCommand[global;example;Awesome example interaction command with auto-complete!;true;slash;[{
    "name": "option",
    "description": "First option with autocomplete.",
    "required": false, 
    "type": 3,
    "autocomplete": true 
  }, {
    "name": "anotheroption",
    "description": "Another option.",
    "required": false,
    "type": 3
}]]`
});
```

Using JSON and checking if autoComplete equals `true` if so it will respond with the given response :

```javascript
module.exports = [
  {
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
  },
];
```
