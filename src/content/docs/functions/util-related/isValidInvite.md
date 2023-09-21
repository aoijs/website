---
title: $isValidInvite
description: $isValidInvite will check if the given invite is valid.
id: isValidInvite
---

`$isValidInvite` will check if the given invite is valid.

## Usage

```php
$isValidInvite[inviteResolver]
```

## Parameters

| Field          | Type   | Description        | Required |
| -------------- | ------ | ------------------ | :------: |
| inviteResolver | string | Guild invite link. |   true   |

## Example(s)

This will return `true` as `https://discord.gg/aoi-js-server-akarui-development-team-773352845738115102` is an valid
invite:

```javascript
client.command({
  name: "isValidInvite",
  code: `
  $isValidInvite[https://discord.gg/aoi-js-server-akarui-development-team-773352845738115102]
  `,
});
```
