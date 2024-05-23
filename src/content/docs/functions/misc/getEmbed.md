---
title: $getEmbed
description: $getEmbed will return properties about an given embed.
id: getEmbed
---

`$getEmbed` will return properties about an given embed.

## Usage

```php
$getEmbed[channelID?;messageID?;index?;option?]
```

## Parameters

| Field     | Type                                                                                              | Description                                        | Required |
| --------- | ------------------------------------------------------------------------------------------------- | -------------------------------------------------- | :------: |
| channelID | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | ID of the channel where the message is located in. |   true   |
| messageID | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The ID of the message that has an embed.           |   true   |
| index     | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The index of the embed.                            |   true   |
| option    | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The option to fetch.                               |   true   |

<details>
  <summary>Options</summary>

| Type                              | Description                                              |
| --------------------------------- | -------------------------------------------------------- |
| title                             | Title of the embed.                                      |
| description                       | Description of the embed.                                |
| url                               | The URL in the title.                                    |
| color                             | Color of the embed.                                      |
| timestamp                         | Timestamp located in the footer.                         |
| field(index).name / field1.name   | Field title.                                             |
| field(index).value / field1.value | Field description.                                       |
| thumbnail                         | Thumbnail (image top right).                             |
| image                             | Large image at the bottom.                               |
| video                             | Video/GIF.                                               |
| authorname                        | Author content, above title field.                       |
| authorurl                         | Author Icon Url, above title field besides author field. |
| footertext                        | Footer text.                                             |
| footericon                        | Footer icon, besides footer.                             |
| files                             | Attached files.                                          |
| createdAt                         | Creation date of the embed.                              |
| hexColor                          | Hex color of the embed.                                  |
| length                            | Length of the embed.                                     |

</details>

## Example(s)

This will return the description of an embed:

```javascript
client.command({
    name: "getEmbed",
    code: `
$getEmbed[$channelID;messageID;1;description] 
  ` // make sure to replace messageID with the actual message ID
});
```
