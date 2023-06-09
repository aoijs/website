---
title: $getMessage
description: $getMessage will return properties about a given message.
id: getMessage
---

`$getMessage` will return properties about a given message.

## Usage

```php
$getMessage[channelID;messageID;option?]
```

## Parameters

| Field     | Type    | Description                                        | Required |
| --------- | ------- | -------------------------------------------------- | :------: |
| channelID | integer | ID of the channel where the message is located in. |   true   |
| messageID | integer | The ID of the message.                             |   true   |
| option?   | string  | Which option to fetch.                             |  false   |

<details open>
  <summary><h3> Options </h3></summary>

| Type     | Description             |
| -------- | ----------------------- |
| content  | Content of the message. |
| userID   | Author User ID.         |
| usertag  | Author Discriminator.   |
| username | Author Username.        |

</details>

## Example(s)

This will return the content of your sent message:

```javascript
bot.command({
    name: 'getMessage',
    code: `
$getMessage[$channelID;$messageID;content]
  `
});
```