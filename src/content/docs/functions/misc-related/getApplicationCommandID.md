---
title: $getApplicationCommandID
description: $getApplicationCommandID will return the ID of a given application command.
id: getApplicationCommandID
---

`$getApplicationCommandID` will return the ID of a given application command.

## Usage

```php
$getApplicationCommandID[name;type?]
```

## Parameters

| Field | Type   | Description                                                                                        | Required |
| ----- | ------ | -------------------------------------------------------------------------------------------------- | :------: |
| name  | string | Name of the application command.                                                                   |   true   |
| type? | string | Application command type. <br /> 1. **global** (default) <br /> 2. **guildID** (specific guild ID) |  false   |

## Example(s)

This will return the ID of an application command called "example", (if any):

```javascript
client.command({
  name: "getApplicationCommandID",
  code: `
  $getApplicationCommandID[example;global]
  `
});
```
