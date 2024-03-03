---
title: $getAttachments
description: $getAttachments will return the properties of an attachment.
id: getAttachments
---

`$getAttachments` will return the properties of an attachment.

## Usage

```php
$getAttachments[channelID;messageID;index?;option?]
```

## Parameters

| Field     | Type                                                                                              | Description                                     | Required |
| --------- | ------------------------------------------------------------------------------------------------- | ----------------------------------------------- | :------: |
| channelID | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The channel of where the message is present in. |   true   |
| messageID | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The message ID.                                 |   true   |
| index?    | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Attachment index.                               |  false   |
| option?   | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The option to retrieve.                         |  false   |

### Options

| Options     | Type                                                                                                | Description                                                                         |
|-------------|-----------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------|
| contentType | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | Returns the media type of the attachment                                            |
| description | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | Returns the description (alt text) of the attachment.                               |
| ephemeral   | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | Returns true / false if whether the attachment is ephemeral.                        |
| height      | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   | Returns the height of the attachment (if it's an image or video).                    |
| id          | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   | Returns the attachment's ID.                                                        |
| name        | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | Returns the name of the attachment.                                                 |
| proxyURL    | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | Returns the Proxy URL of the attachment.                                            |
| size        | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   | Returns the size of the attachment in bytes.                                        |
| spoiler     | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | Returns true / false if whether or not the attachment has been marked as a spoiler. |
| url         | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | Returns the URL of the attachment.                                                  |
| width       | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   | Returns the width of the attachment (if it's an image or video).                     |

### Example(s)

This will return the name of the first attachment from the message that executed the command:

```javascript
client.command({
  name: "getAttachments",
  code: `
  $getAttachments[$channelID;$messageID;1;name]
  `
});
```
