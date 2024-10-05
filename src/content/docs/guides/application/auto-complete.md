---
title: Autocomplete
description: This page covers everything about the autocomplete property of Application Commands.
type: guide
id: auto-complete
sidebar:
    order: 5
---

There are multiple ways of using `$autoCompleteRespond`. You can either use JSON or the simple aoi.js way.

## Usage

The `$autoCompleteRespond` can be used in two ways:

1. **Simple Way**: Here's how you can use it in a simple way:

```aoi
$autoCompleteRespond[OptionName;OptionReply;...]
```

2. **JSON Way**: If you prefer JSON, you can use it like this:

```aoi
$autoCompleteRespond[[{
    "name" : "Option Name One",
    "value" : "Option Reply 1"
  }, {
    "name" : "Option Name Two",
    "value" : "Option Reply 2"
  }]]
```

## Creating a Slash Command with Autocomplete

Here's how you can create a global application command named "example" with an option that uses autocomplete:

```javascript
client.command({
    name: "createApplicationCommand",
    code: `
  $createApplicationCommand[global;example;Awesome example interaction command with auto-complete!;true;true;slash;[{
    "name": "option", 
    "description": "First option!",
    "required": false,
    "type": 3, 
    "autocomplete": true
}]]`
});
```

## Responding Based on Autocomplete Selection

If autoComplete equals `true`, it will respond with the given response:

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

## Creating a Slash Command with Multiple Options

Here's how you can create a global application command named "example" with multiple options:

```javascript
client.command({
    name: "createApplicationCommand",
    code: `
  $createApplicationCommand[global;example;Awesome example interaction command with auto-complete!;true;true;slash;[{
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

## Responding with JSON Based on Autocomplete Selection

If autoComplete equals `true`, it will respond with the given JSON response:

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
  $interactionReply[You selected: $slashOption[option]!]
  $endif
  `
    }
];
```
