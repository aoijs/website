---
title: $addButton
description: $addButton will add a button to the bot's message.
id: addButton
---

`$addButton` will add a button to the bot's message.

## Usage

```php
$addButton[index;label;style;customID;disabled?;emoji?]
```

## Parameters

| Field     | Type    | Description                                                | Required |
| --------- | ------- | ---------------------------------------------------------- | :------: |
| index     | number  | in which row the button appears                            |   true   |
| label     | string  | the text that will be displayed on the button              |   true   |
| style     | string  | the button **[style][dp]**                                 |   true   |
| customID  | string  | button custom ID                                           |   true   |
| disabled? | boolean | disabled? <br /> 1. **true** <br /> 2. **false** (default) |  false   |
| emoji?    | string  | emoji                                                      |  false   |

<details open>
  <summary><h3> Button Types </h3></summary>

| Name      | Value | Color                    |                                                               |
| --------- | ----- | ------------------------ | ------------------------------------------------------------- |
| Primary   | 1     | blurple                  | `$addButton[1;Example Button!;primary;customID;false]`        |
| Secondary | 2     | grey                     | `$addButton[1;Example Button!;secondary;customID;false]`      |
| Success   | 3     | green                    | `$addButton[1;Example Button!;success;customID;false]`        |
| Danger    | 4     | red                      | `$addButton[1;Example Button!;danger;customID;false]`         |
| Link      | 5     | grey, navigates to a URL | `$addButton[1;Example Button!;link;https://discord.gg;false]` |

</details>

## Example(s)

This adds a primary and link button to the bot's message:

```javascript
bot.command({
    name: 'addButton',
    code: `
    Hello!
    $addButton[1;Example Button!;primary;exampleButton;false;💔]
    $addButton[1;Example Button!;link;https://discord.gg;false]
  `
});
```

[dp]: https://discord.com/developers/docs/interactions/message-components#button-object-button-styles
