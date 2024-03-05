---
title: $getApplicationCommandOptions
description: $getApplicationCommandOptions will return application options of a given application command.
id: getApplicationCommandOptions
---

`$getApplicationCommandOptions` will return the ID of a given application command.

## Usage

```php
$getApplicationCommandOptions[name;type?]
```

## Parameters

| Field | Type                                                                                              | Description                                                                                        | Required |
| ----- | ------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | :------: |
| name  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Name of the application command.                                                                   |   true   |
| type? | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Application command type. <br /> 1. **global** (default) <br /> 2. **guildID** (specific guild ID) |  false   |
