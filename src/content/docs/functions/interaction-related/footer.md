---
title: $footer
description: $footer will add a footer to an embed.
id: footer
---

`$footer` will add a footer to an embed.

## Usage

```php
$footer[index?;content;iconURL?]
```

## Parameters

| Field    | Type           | Description                      | Required |
| -------- | -------------- | -------------------------------- | :------: |
| index?   | number         | Embed index.                     |  false   |
| content  | string, number | Content of the footer text.      |   true   |
| iconURL? | string         | Footer Icon (bottom left image). |  false   |

## Example(s)

This will create an embed with a footer and title:

```javascript
client.command({
  name: "embed",
  code: `
  $title[Hello!]
  $footer[Hello again!;$userAvatar]
  `,
});
```
