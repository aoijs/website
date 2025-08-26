---
title: $interactionAttachment
description: $interactionAttachment gets a specific attachment from an interaction.
id: interactionAttachment
---

`$interactionAttachment` gets a specific attachment from an interaction and returns a property of it.

## Usage

```aoi
$interactionAttachment[optionName;optionToReturn?]
```

## Parameters

| Field           | Type                                                                                              | Description                                                                    | Required |
| --------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | :------: |
| optionName      | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Name of the option containing the attachment.                                  | true     |
| optionToReturn? | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The property of the attachment to return (e.g., `url`, `name`). Default: `url` | false    |


## Example(s)

This will return the URL of the attachment from an interaction option named `file`:

```javascript
client.command({
    name: "getAttachment",
    code: `
  $interactionAttachment[file]
  `
});
```

This will return the name of the attachment instead of the URL:

```javascript
client.command({
    name: "getAttachmentName",
    code: `
  $interactionAttachment[file;name]
  `
});
```
