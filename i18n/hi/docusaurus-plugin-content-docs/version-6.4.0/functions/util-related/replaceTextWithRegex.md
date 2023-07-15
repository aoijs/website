---
title: '$replaceTextWithRegex'
description: '$replaceTextWithRegex will replace specific regex in a text. This works similar as $replaceText.'
id: replaceTextWithRegex
---

`$replaceTextWithRegex` will replace specific segments of text.

## प्रोयोग

```php
$replaceTextWithRegex[text;reg;flags;newText]
```

## पैरामीटर्स

| फील्ड   | टाइप     | डिस्क्रिप्शन                      |    चाहिए     |
| ------- | -------- | --------------------------------- |:------------:|
| text    | स्ट्रिंग | Text you want to modify.          |     true     |
| reg     | स्ट्रिंग | The regex that will be replaced.  |     true     |
| flags   | स्ट्रिंग | [Flags](#flags).                  |     true     |
| newText | स्ट्रिंग | The text that will replace `reg`. | असत्य (नहीं) |

<details open>
  <summary><h2> Flags </h2></summary>

| Flags |                                        |
|:-----:| -------------------------------------- |
|   g   | Replace all matches (case-sensitive)   |
|   m   | Multiline matching                     |
|   i   | Replace all matches (case-insensitive) |

</details>

## ट्रू (हा)

This will replace `more` with `less`:

```javascript
bot.command({
    name: 'replaceTextWithRegex',
    code: `
  $replaceTextWithRegex[This function is more complicated than it looks.;more;g;less]
  `
});  
```

### Advanced Example

This will replace `less` with `more`:

```javascript
bot.command({
    name: 'replaceTextWithRegex',
    code: `
  $replaceTextWithRegex[This function is more complicated than it looks.;lESs;i;more]
  `
});  
```