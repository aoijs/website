---
title: $textInputValue
description: $textInputValue returns data of a context menu option.
id: textInputValue
---

`$textInputValue` returns data of a context menu option.

## Usage

```aoi
$textInputValue[option]
```

## Parameters

| Field  | Type                                                                                              | Description                               | Required |
| ------ | ------------------------------------------------------------------------------------------------- | ----------------------------------------- | :------: |
| option | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Option <br /> 1. **name (of the option)** |   true   |

## Example(s)

This will create a button and modal which will send the entered data to the same channel and give an ephemeral response
to the user who submitted the form:

Please note that you require "**events: ["onMessage", "onInteractionCreate"]**" in your main file (also known as, in most cases, index.js)

```js
client.command({
    name: "interactionModal",
    code: `
$addButton[1;Press Me!;primary;exampleID;false]
Pretty Example!`
}); // Create a button which will trigger the modal.

module.exports = [
    {
        name: "exampleID",
        type: "interaction",
        prototype: "button", // Using "prototype" as this interaction belongs to a button.
        code: `
$interactionModal[Example!;customID;
  {actionRow:
    {textInput:What's your name?:1:nameInput:true:Your pretty name!:2:200}
  }
  {actionRow:
    {textInput:What's your age?:1:ageInput:true:You young soul!:1:3}
  }
  {actionRow:
    {textInput:What's your gender?:2:genderInput:true:Anything will work!:1:10}
  }
]`
    }
]; /* The modal itself, we use {textInput} to accept user input.

The correct usage of {textInput} would be:

{textInput:title:type (1 : small text field, 2 : big text field):customID:required ( true, false ):placeholder:minVal:maxVal}

*/

module.exports = [
    {
        name: "customID",
        type: "interaction",
        prototype: "modal", // Using "prototype" as this interaction belongs to a modal.
        code: `
$interactionReply[Thanks for submitting this form!;everyone;true]

$title[$username submitted a form!;$userAvatar]
$addField[Their name is..;$textInputValue[nameInput]]
$addField[Their age is..;$textInputValue[ageInput]]
$addField[Their gender is..;$textInputValue[genderInput]]`
    }
]; /* Will return the values entered earlier from the modal. Using $textInputValue to retrieve those.

Alternatively you could use $channelSendMessage[channelID;content] to send the data to another channel.
$channelSendMessage[$channelID;{newEmbed:{title:$username submitted a form!:$userAvatar}{field:Their name is..:$textInputValue[nameInput]}{field:Their age is..:$textInputValue[ageInput]}{field:Their gender is..:$textInputValue[genderInput]}}]
*/
```
