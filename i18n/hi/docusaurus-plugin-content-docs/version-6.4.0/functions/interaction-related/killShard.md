---
title: '$killShard'
description: '$killShard will kill a given shard.'
id: killShard
---

`$killShard` will kill a given shard. (चाहिए शार्डिंग)

## प्रोयोग

```php
$killShard[shardID]
```

## पैरामीटर्स

| फील्ड   | टाइप   | डिस्क्रिप्शन  | चाहिए |
| ------- | ------ | ------------- |:-----:|
| shardID | number | The shard ID. | true  |

## ट्रू (हा)

This will kill the current shard ( requires **sharding** ):

```javascript
bot.command({
    name: 'killShard',
    code: `
  $killShard[$shardID]
  `
});
```
