---
title: $interactionAttachment
description: $interactionAttachment returns the URL of the attachment option's value.
id: interactionAttachment
---

`$interactionAttachment` returns the URL of the attachment option's value.

## Usage

```aoi
$interactionAttachment[option]
```

## Parameters

| Field  | Type                                                                                              | Description                        | Required |
| ------ | ------------------------------------------------------------------------------------------------- | ---------------------------------- | :------: |
| option | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The name of the attachment option. |   true   |

## Example(s)

This will return the URL of the attached file in the `attachment` option:

```js
$createApplicationCommand[$guildID;exampleslash;Simple example slash command.;true;true;slash;[{
    "name": "attachment",
    "description": "Example attachment option.",
    "required": true,
    "type": 11
}]]
```

```js
client.interactionCommand({
    name: "exampleslash",
    prototype: "slash",
    code: `$interactionReply[Your attachment: $interactionAttachment[attachment]]`
});
```
