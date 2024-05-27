---
title: $or
description: $or will check if one of the given conditions is true.
id: or
---

`$or` will check if one of the given conditions is true.

## Usage

```aoi
$or[...conditions]
```

## Parameters

| Field         | Type                                                                                              | Description                       | Required |
| ------------- | ------------------------------------------------------------------------------------------------- | --------------------------------- | :------: |
| ...conditions | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The conditions you want to check. |   true   |

## Example(s)

This will check if the two of three given conditions are `true`:

1. `$authorId==$authorId` -> `true`
2. `1>=1` -> `true`
3. `$packageVersion==1.0.0` -> `false`

As you can see, one condition is `false`.

```js
client.command({
    name: "or",
    code: `
  $or[$authorId==$authorId;1>=1;$packageVersion==1.0.0]` // returns: true
});
```

Another example but with it returning false would be:

This will check if the three given conditions are `true`:

1. `$authorId==$channelId` -> `false`
2. `1!=1` -> `false`
3. `$packageVersion==1.0.0` -> `false`

As you can see, all conditions are `false`.

```js
client.command({
    name: "or",
    code: `
  $or[$authorId==$channelId;1!=1;$packageVersion==1.0.0]` // returns: false
});
```
