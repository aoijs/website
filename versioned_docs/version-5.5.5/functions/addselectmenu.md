---
title: $addSelectMenu
description: Adds a select menu component to message.
id: addselectmenu
---

This function that adds a selection menu to client's message.

## Usage

```php
$addSelectMenu[index;customID;placeholder;minimum value;maximum value;disable;label:description:value:default?:emoji?;...]
```

## Parameters

| Field | Description | Type | Required |
| :--- | :--- | :--- | :--- |
| index | The menu to show up on the given embed | number | yes |
| placeholder | Text that will show as default label on select menu. | number | yes |
| minimum value | Minimal options to choose from | number | yes |
| maximum value | Maximum options to choose from | number | yes |
| disable | Disabling the selection menu | boolean | yes |

## Select Menu Options

| Option | Description | Required |
| :--- | :--- | :--- |
| label | The title of select menu option | yes | 
| description | The description of select menu option | no | 
| value | Select menu option's value | yes | 
| default? | To show the select menu option as placeholder | no | 
| emoji? | Adding emoji to select menu option | no | 

## Notice

Interaction commands needs this event on main file (or handler):

```javascript
events: ["onMessage", "onInteractionCreate"]
```

## Example

```javascript
bot.command({
  name: "add-select-menu",
  code:`
  Select an option.
  
  $addSelectMenu[1;helpCustomID;This placeholder won't show up cause we have selected default field as yes;1;1;no;A Option:Description of A option:helpValue0:no:👋;B Option::helpValue1:yes]
  `
});

bot.interactionCommand({
  name: "helpCustomID",
  prototype: "selectMenu", 
  code: `
  $interactionUpdate[A option's response.;;{actionRow:{selectMenu:helpCustomID:Menu has been disabled:1:1:yes:{selectMenuOptions:This won't show up:helpValue0:Either this.:false}{selectMenuOptions:This won't show up either.:helpValue1:cause menu disabled.:false}}}]

  $onlyIf[$interactionData[values[0]]==0;]
  `
});

bot.interactionCommand({
  name: "helpCustomID",
  prototype: "selectMenu", 
  code: `
  $interactionUpdate[B option's response.;;{actionRow:{selectMenu:helpCustomID:Menu has been disabled:1:1:yes:{selectMenuOptions:This won't show up:helpValue0:Either this.:false}{selectMenuOptions:This won't show up either.:helpValue1:cause menu disabled.:false}}}]

  $onlyIf[$interactionData[values[0]]==1;]
  `
});
```

