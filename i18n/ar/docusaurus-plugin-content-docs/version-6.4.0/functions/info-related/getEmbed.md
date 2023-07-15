---
title: '$getEmbed'
description: '$getEmbed will return properties about an given embed.'
id: getEmbed
---

`$getEmbed` will return properties about an given embed.

## الاستخدام

```php
$getEmbed[channelID?;messageID?;index?;option?]
```

## البارامترات

| Field     | النوع   | الديسكبربشين                                       | مطلوب |
| --------- | ------- | -------------------------------------------------- |:-----:|
| channelID | Integer | ID of the channel where the message is located in. | true  |
| messageID | Integer | The ID of the message that has an embed.           | true  |
| index     | Integer | The index of the embed.                            | true  |
| option    | string  | The option to fetch.                               | true  |

<details>
  <summary><h3> Options </h3></summary>

| النوع                               | الديسكبربشين                     |
| ----------------------------------- | -------------------------------- |
| title                               | Title of the embed.              |
| الديسكبربشين                        | Description of the embed.        |
| URL                                 | The URL in the title.            |
| color                               | Color of the embed.              |
| timestamp                           | Timestamp located in the footer. |
| field<index\>.name / field1.name   | Field title.                     |
| field<index\>.value / field1.value | Field description.               |
| thumbnail                           | Thumbnail (image top right).     |
| image                               | Large image at the bottom.       |
| video                               | Video/GIF.                       |
| author                              | Author, above title field.       |
| footer                              | Footer.                          |
| files                               | Attached files.                  |
| createdAt                           | Creation date of the embed.      |
| hexColor                            | Hex color of the embed.          |
| length                              | Length of the embed.             |

</details>

## مثال

This will return the description of an embed:

```javascript
bot.command({
    name: 'getEmbed',
    code: `
$getEmbed[$channelID;messageID;1;description] 
  ` // make sure to replace messageID with the actual message ID 
});
```
