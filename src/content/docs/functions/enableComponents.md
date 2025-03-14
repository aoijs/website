---
title: $enableComponents
description: $enableComponents enables all components for a specific message.
id: enableComponents
---

`$enableComponents` enables all components for a specific message.

## Usage

```aoi  
$enableComponents[channelID;messageID;type?]
```

## Parameters

| Field      | Type                                                                                              | Description                                                                                                            | Required |
| ---------- | ------------------------------------------------------------------------------------------------- | -----------------------------------------------------------------------------------------------------------------------| :------: |
| channelID  | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Channel ID of the command that has been executed.                                                                      |   true   |
| messageID  | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The ID of the message whose components will be enabled.                                                                |   true   |
| type?      | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The type of component that will be enabled. <br /> 1. **all** (default) <br /> 2. **button** <br /> 3. **selectmenu**  |   false  |

## Example(s)

This will send a message with a button that will be enabled after 5 seconds.  

```js
client.command({
    name: "enableComponents",
    code: `
$enableComponents[$channelID;$get[msgID];button]
$wait[5s]
$let[msgID;$sendMessage[This button will be enabled in 5 seconds.
{actionRow:{button:Button:primary:customID:false}};true]]`
});
```
This will enable all the components of the message. You can either leave the type option empty or specify `all`.
```js
client.command({
    name: "enableComponents",
    code: `
$enableComponents[$channelID;$get[msgID]]
$wait[5s]
$let[msgID;$sendMessage[These components will be enabled in 5 seconds. 
{actionRow:{button:Button:primary:customID:false}} 
{actionRow:{selectMenu:MenuCustomID:Placeholder:1:1:false:{stringInput:Option:1:Option Description:false}}};true]]
`
});
```
