---
title: '$isEveryoneMentioned'
description: '$isEveryoneMentioned will check if everyone or here is mentioned.'
id: isEveryoneMentioned
---

`$isEveryoneMentioned` will check if everyone or here is mentioned.

## प्रोयोग

```php
$isEveryoneMentioned
```

## उदाहरण

This will check if you mentioned `@here` or `@everyone`:

```javascript
bot.command({
    name: 'isEveryoneMentioned',
    code: `
  You did not mention @ everyone!
  $onlyIf[$isEveryoneMentioned==false;You tried to mention @ everyone!]
  `
});
```
