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

| Field     | Type                                                                                                | Description                                                                                                              | Required |
| --------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | :------: |
| index     | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   | In which (action)row the button appears.                                                                                 |   true   |
| label     | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | The text that will be displayed on the button as label.                                                                  |   true   |
| style     | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | The button **[style](https://discord.com/developers/docs/interactions/message-components#button-object-button-styles)**. |   true   |
| customID  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | The component custom ID used to identify the button.                                                                     |   true   |
| disabled? | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | Make the button unusable/disabled? <br /> 1. **true** <br /> 2. **false** (default)                                      |  false   |
| emoji?    | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | The emoji displayed in the button.                                                                                       |  false   |

<details open>
    <summary><h3>Button Types</h3></summary>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
          <th>Color</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Primary</td>
          <td>1</td>
          <td>blurple</td>
          <td><code>$addButton[1;Example Button!;primary;customID;false]</code></td>
        </tr>
        <tr>
          <td>Secondary</td>
          <td>2</td>
          <td>grey</td>
          <td><code>$addButton[1;Example Button!;secondary;customID;false]</code></td>
        </tr>
        <tr>
          <td>Success</td>
          <td>3</td>
          <td>green</td>
          <td><code>$addButton[1;Example Button!;success;customID;false]</code></td>
        </tr>
        <tr>
          <td>Danger</td>
          <td>4</td>
          <td>red</td>
          <td><code>$addButton[1;Example Button!;danger;customID;false]</code></td>
        </tr>
        <tr>
          <td>Link</td>
          <td>5</td>
          <td>grey, navigates to a URL</td>
          <td><code>$addButton[1;Example Button!;link;https://discord.gg;false]</code></td>
        </tr>
        <tr>
          <td>Custom Emoji</td>
          <td>any</td>
          <td>any</td>
          <td><code>$addButton[1;Example Button!;link;customID;false;emojiName/emojiId/emojiString]</code></td>
        </tr>
        <tr>
          <td>Unicode Emoji</td>
          <td>any</td>
          <td>any</td>
          <td><code>$addButton[1;Example Button!;link;customID;false;😀]</code></td>
        </tr>
      </tbody>
    </table>
</details>

## Example(s)

This adds a primary and link button to the bot's message:

```javascript
client.command({
    name: "addButton",
    code: `
    Hello!
    $addButton[1;Example Button!;primary;exampleButton;false;💔]
    $addButton[1;Example Button!;link;https://discord.gg;false]
  `
});
```

```javascript
module.exports = [
    {
        name: "exampleButton",
        type: "interaction",
        prototype: "button",
        code: `
    $interactionReply[Awesome Button Interaction!]
  `
    }
];
```
