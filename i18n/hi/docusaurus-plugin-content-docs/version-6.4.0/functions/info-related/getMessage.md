---
title: '$getMessage'
description: '$getMessage will return properties about a given message.'
id: getMessage
---

`$getMessage` will return properties about a given message.

## प्रोयोग

```php
$getMessage[channelID;messageID;option?]
```

## पैरामीटर्स

| फील्ड     | टाइप     | डिस्क्रिप्शन                                       |    चाहिए     |
| --------- | -------- | -------------------------------------------------- |:------------:|
| channelID | integer  | ID of the channel where the message is located in. |     true     |
| messageID | integer  | The ID of the message.                             |     true     |
| option?   | स्ट्रिंग | Which option to fetch.                             | असत्य (नहीं) |

<details open>
  <summary><h3> Options </h3></summary>

| टाइप     | डिस्क्रिप्शन            |
| -------- | ----------------------- |
| content  | Content of the message. |
| userID   | Author User ID.         |
| usertag  | Author Discriminator.   |
| username | Author Username.        |

</details>

## ट्रू (हा)

This will return the content of your sent message:

```javascript
bot.command({
    name: 'getMessage',
    code: `
$getMessage[$channelID;$messageID;content]
  `
});
```