---
title: '$fileSize'
description: '$fileSize will return the size of a given file.'
id: fileSize
---

`$fileSize` will return the size of a given file.

## प्रोयोग

```php
$fileSize[path;unit?]
```

## पैरामीटर्स

| फील्ड | टाइप     | डिस्क्रिप्शन                                                                                                                                                                                                                                                                                                             |    चाहिए     |
| ----- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |:------------:|
| path  | स्ट्रिंग | File path.                                                                                                                                                                                                                                                                                                               |     true     |
| unit? | स्ट्रिंग | In which unit the size will be returned in. <br /> 1. **B** (byte / default) <br /> 2. **KB** (kiloByte) <br />  3. **MB** (megaByte) <br /> 4. **GB** (gigaByte) <br /> 5. **b** (bit) <br /> 6. **kb** (kiloBit) <br /> 7. **mb** (megaBit) <br /> 8. **GB** (gigaBit) | असत्य (नहीं) |

## ट्रू (हा)

This will return the size of your `index.js` in `GB`:

```javascript
bot.command({
    name: "fileSize",
    code: `
  $fileSize[./index.js;GB]
  `
});
```