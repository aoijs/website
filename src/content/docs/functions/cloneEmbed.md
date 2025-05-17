---
title: $cloneEmbed
description: $cloneEmbed will clone an embed.
id: cloneEmbed
---

`$cloneEmbed` will clone an embed.

## Usage

```aoi  
$cloneEmbed[index;messageID;channelID?;returnJSON?]
```

## Parameters

| Field       | Type                                                                                                | Description                                                                                   | Required |
|-------------|-----------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|:--------:|
| index       | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | The index of the embed to clone. <br /> 1. **all** <br /> 2. **number**                       |  true    |
| messageID   | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   | The ID of the message containing the embed to be cloned.                                      |  true    |
| channelID?  | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   | The ID of the channel where the message is located. Defaults to the current channel.          |  false   |
| returnJSON? | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | Whether to return the embed(s) as raw JSON instead of attaching them.                         |  false   |

## Example(s)

This will clone the previous embed and edit the title after 15 seconds:

```javascript  
client.command({  
    name: "cloneEmbed",  
    code: `  
  $title[Bye!]  
  $cloneEmbed[all;$get[messageID];$channelID]  
  
  $wait[15s]  
  $let[messageID;$sendMessage[{newEmbed: {title:Hello!} {description:I'll edit this message in 15 seconds.}};true]]  
  `  
}); 
``` 

This will return the cloned embed as raw JSON instead of displaying it:

```javascript  
client.command({  
    name: "cloneEmbed",  
    code: `  
  $cloneEmbed[all;$get[messageID];$channelID;true]  
  $let[messageID;$sendMessage[{newEmbed: {title:Data Collected} {description:Storing raw embed JSON.}};true]]  
  `  
});  
```