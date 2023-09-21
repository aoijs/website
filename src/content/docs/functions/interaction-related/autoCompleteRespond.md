---
title: $autoCompleteRespond
description: $autoCompleteRespond is used to auto-complete slash options.
id: autoCompleteRespond
---

`$autoCompleteRespond` is used to auto-complete slash options.

## Usage

```php
$autoCompleteRespond[object]
```

```php
$autoCompleteRespond[OptionName;OptionReply;...]
```

## Parameters

| Field       | Type   | Description                                                                                      | Required |
| ----------- | ------ | ------------------------------------------------------------------------------------------------ | :------: |
| OptionName  | string | Name of the auto-complete option that will be displayed to the user.                             |   true   |
| OptionReply | string | The reply that will be sent if the auto-complete option was selected, (not visible to the user). |   true   |

## Example(s)

Create the slash-commands: (please note that you require the `events: ["onMessage", "onInteractionCreate"]` event in
your main file)

```javascript
client.command({
  name: "createSlashCommand",
  code: `
  $createApplicationCommand[global;example;Awesome example interaction command with auto-complete!;true;slash;[{
  "name": "option",
  "description": "test",
  "required": false,
  "type": 3,
  "autocomplete": true
}]
  `,
});
```

Interaction Command:

```javascript
client.command({
  name: "test",
  prototype: "slash",
  code: `
  $if[$isAutocomplete==true]
  $autoCompleteRespond[First option;You selected the first option, therefore I'm responding with this!;Second option;You selected the first second, therefore I'm responding with this!]
  $else
  $interactionReply[$slashOption[option];;;;everyone]
  $endif
  `,
});
```

### Advanced Example

Create the slash-commands: (please note that you require the `events: ["onMessage", "onInteractionCreate"]` event in
your main file)

```javascript
client.command({
  name: "createSlashCommand",
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
}]
  `,
});
```

Interaction Command:

```javascript
client.command({
  name: "test",
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
  `,
});
```
