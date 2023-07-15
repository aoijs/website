---
title: '$forEachRole'
description: '$forEachRole will execute awaited commands for every role in a given guild.'
id: forEachRole
---

`$forEachRole` will execute awaited commands for every role in a given guild.

## प्रोयोग

```php
$forEachRole[guildID;time;awaitData;...awaitedCmds;endCmd]
```

## पैरामीटर्स

| फील्ड          | टाइप     | डिस्क्रिप्शन                                             | चाहिए |
| -------------- | -------- | -------------------------------------------------------- |:-----:|
| time           | स्ट्रिंग | How long it takes between each role to execute the next. | true  |
| awaitData      | object   | Awaited Data.                                            | true  |
| ...awaitedCmds | स्ट्रिंग | Awaited Commands to execute.                             | true  |
| endCmd         | स्ट्रिंग | Awaited Command to execute when loop ends.               | true  |