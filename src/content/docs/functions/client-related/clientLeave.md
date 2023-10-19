---
title: $clientLeave
description: $clientLeave will make your bot leave a specific server.
id: clientLeave
---

`$clientLeave` will make your bot leave a specific server.

## Usage

```php
$clientLeave[guildID?]
```

## Parameters

| Field    | Type                                                                                                | Description                                     | Required |
| -------- | --------------------------------------------------------------------------------------------------- | ----------------------------------------------- | :------: |
| guildID? | [integer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Integer) | The ID of the guild which your bot shall leave. |  false   |

## Example(s)

This will make your bot leave the current guild:

```javascript
client.command({
  name: "clientLeave",
  code: `
  $clientLeave[$guildID]
  $wait[2s]
  $sendMessage[Bye, I'm leaving!]
  `,
});
```
