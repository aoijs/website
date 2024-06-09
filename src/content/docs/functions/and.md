---
title: $and
description: $and will check if all given conditions are true.
id: and
---

`$and` will check if all given conditions are true.

## Usage

```aoi
$and[...conditions]
```

## Parameters

| Field         | Type                                                                                              | Description                       | Required |
| ------------- | ------------------------------------------------------------------------------------------------- | --------------------------------- | :------: |
| ...conditions | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The conditions you want to check. |   true   |

## Example(s)

This will check if the three given conditions are `true`:

1. `$authorId==$authorId` -> `true`
2. `1>=1` -> `true`
3. `$packageVersion==1.0.0` -> `false`

As you can see, one condition is `false`.

```js
client.command({
    name: "and",
    code: `
  $and[$authorId==$authorId;1>=1;$packageVersion==1.0.0]` // returns: false
});
```

Another example but with it returning true would be:

This will check if the three given conditions are `true`:

1. `$authorId==$authorId` -> `true`
2. `1>=1` -> `true`
3. `$packageVersion==6.7.0` -> `true`

As you can see, all conditions are `true`.

```js
client.command({
    name: "and",
    code: `
  $and[$authorId==$authorId;1>=1;$packageVersion==6.7.0]` // returns: true
});
```
