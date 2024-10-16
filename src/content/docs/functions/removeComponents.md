---
title: $removeComponents
description: $removeComponents removes a component from a specific message.
id: removeComponents
---

`$removeComponents` removes a component from a specific message.

## Usage

```aoi
$removeComponents[channelID;messageID;...customIDs]
```

## Parameters

| Field      | Type                                                                                              | Description                                                                                                            | Required |
| ---------- | ------------------------------------------------------------------------------------------------- | -----------------------------------------------------------------------------------------------------------------------| :------: |
| channelID  | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Channel ID of the command that has been executed.                                                                      |   true   |
| messageID  | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The ID of the message that will remove the component(s).                                                               |   true   |
| customIDs  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The custom id of component that will be removed.                                                                   |   true   |                       

## Example(s)

This will send a message with a button that will be removed after 5 seconds.
```js
client.command({
    name: "removeComponents",
    code: `
$removeComponents[$channelID;$get[msgID];customID]
$wait[5s]
$let[msgID;$sendMessage[This button will be removed in 5 seconds.
{actionRow:{button:Button:primary:customID:false}};true]]`
});
```  
