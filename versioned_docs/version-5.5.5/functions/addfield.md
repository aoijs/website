---
title: $addField
description: Adds field to embed message.
id: addfield
---

`$addField` allows you to add a field to in embed message.

### Usage

```php
$addField[index;name;text;inline?]
```

### Fields

| Field | Description | Type | Required |
| :--- | :--- | :--- | :--- |
| index | The embed's index | number | no |
| name | The field's title | string | yes |
| text | The field's description | string | yes |
| inline | For the field be in line or not | boolean | no |

## Notice

If you are updated to latest version of aoi.js, you will not be **required** to use `index` anymore.

If you are using a number in the first field without anything else, you will be forced to use a index.
> Due to aoi.js thinking you're going to use an index as first parameter

## Embed Limits

> * Field Limit: 25 Fields
> * Field Name Limit: 256 Characters
> * Field Text Limit: 1024 Characters

## Examples

### Without inline:

```javascript
bot.command({
  name: "add-field",
  code: `
  $addField[1;Your Username;Hello, I am Neo!]
  `
});
```

### With inline:

```javascript
bot.command({
  name: "add-field",
  code: `
  $addField[1;My Gender;Male.;yes]
  
  $addField[1;My Age;I'm 20 years old.;yes]
  
  $addField[1;My name;My name is Neo.;yes]
  `
});
```

