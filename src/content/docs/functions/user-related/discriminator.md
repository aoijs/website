---
title: $discriminator
description: $discriminator will return a user's discriminator.
id: discriminator
---

`$discriminator` will return a user's discriminator.

## Usage

```php
$discriminator[userId?]
```

## Parameters

| Field   | Type                                                                                                | Description                                                      | Required |
| ------- | --------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- | -------- |
| userId? | [integer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Integer) | The ID of the user you want the discriminator to be returned of. | false    |

## Example(s)

This will return your Discord User Discriminator, for example `User#0000` (the four digits):

```javascript
client.command({
  name: "discriminator",
  code: `
  $discriminator[$authorID] // your discriminator
  $discriminator[$clientID] // the bot's discriminator
  `,
});
```
