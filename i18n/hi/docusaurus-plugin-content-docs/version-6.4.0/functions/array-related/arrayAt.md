---
title: '$arrayAt'
description: '$arrayAt लौटाए जाने वाले सरणी तत्व की अनुक्रमणिका (स्थिति) का चयन करेगा। यदि दिया गया सूचकांक नहीं मिल पाता है तो कुछ भी नहीं लौटाता।'
id: arrayAt
---

`$arrayAt` will choose the index (position) of the array element to be returned. यदि दिया गया सूचकांक नहीं मिल पाता है तो कुछ भी नहीं लौटाता।

## प्रोयोग

```php
$arrayAt[name;index]
```

## पैरामीटर्स

| फील्ड | टाइप     | डिस्क्रिप्शन                 | चाहिए |
| ----- | -------- | ---------------------------- |:-----:|
| name  | स्ट्रिंग | Name of the array.           | true  |
| index | स्ट्रिंग | The position of the element. | true  |

## ट्रू (हा)

- This will return `Aoi.dashboard`:

```javascript
bot.command({
    name: "array-at",
    code: `
  $arrayAt[Aoi;3]

  $createArray[Aoi;Aoi.music;Aoi.panel;Aoi.dashboard;Aoi]
  `
    // Returns "Aoi.dashboard"
});
```
