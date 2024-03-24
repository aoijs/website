---
title: Interaction Commands - Choices
description: This guide covers the basics about Interaction Command Choices and their functionality, along with everything else you might need to know.
id: choices
type: guide
author: "dodogames"
author_url: "https://raw.githubusercontent.com/aoijs/website/main/src/images/contributors/dodogames.png"
tableOfContents: false
sidebar:
    order: 2
---

# What are choices?
Choices are custom options for a `string` type of a slash command option. You know the select menu with custom options? It’s exactly that except it’s a slash command option instead.

To put it simple, they're basically items inside of a slash command option that you can select in case you didn't get it yet.

# Notes
This feature is not the same as autocomplete, the difference between both is that, choices are forced custom options with no custom input allowed from the user when autocomplete is the opposite of that and are more of suggestions based on the user’s current input.

With that being said, do not think of choices as autocomplete.

# Limits
* Choice name allows up to 100 characters
* Choice's values allows up to 100 characters just like the name
* You can only create up to 25 choices

# Getting started
When it comes to choices, they can be treated in two ways

* **customID**
* **replies**

## customID vs replies

There’re differences between using choices as customIDs and replies. Here’s a brief comparison between both.

### customID
* Usually allows you to do anything
* May require a couple of functions to do certain stuff depending on your needs such as creating bot features with it
* Can be used to setup long messages and other stuff
* Short and memorable if you used it well

### replies

* You don’t need to use multiple functions to set replies
* Pretty much limited as you’re just including a text
* Not suitable for stuff such as creating features that requires a lot of time to code
* Will only allow up to 100 characters, therefore, not suitable for long messages


# Setting up choices

### customID method
Let's start with the customID way, so here's a little ordinary slash option code:
```js
$createApplicationCommand[$guildID;slash;A regular slash command!;true;false;slash;[{
  "name": "option",
  "description": "options example",
  "required": true,
  "type": 3
}]]
```
Seems normal right? We can then expand it further by adding `"choices":` with it's names and values like this.
```js
$createApplicationCommand[$guildID;slash;A regular slash command!;true;false;slash;[{
  "name": "option",
  "description": "options example",
  "required": true,
  "type": 3,
"choices" : [{
"name" : "choice 1",
"value" : "value1"
}]
}]]
```
As with slash command options, you can add more choices by separating each JSON with a comma!
```js
$createApplicationCommand[$guildID;slash;A regular slash command!;true;false;slash;[{
  "name": "option",
  "description": "options example",
  "required": true,
  "type": 3,
  "choices" : [{
    "name" : "choice 1",
    "value" : "value1"
  }, {
    "name": "choice 2",
    "value": "value2"
  }]
}]]
```

`"name":` will be the name of the choice displayed in the slash command option itself.
`"value":` is what the choice will return when it's selected. Note that they're not slash command options at all but more of items inside of a slash option.

As we're talking about how to use choices as custom ids then we will need to give it a short perfect name that you usually do in interactions such as buttons.

In this example, i have gave it `value1` which is alright for testing. This is how we create choices with it's values as customIDs!

### replies method
If for some reason, you prefer choices to be just regular replies then it is as simple as just adding the reply to the choice value itself

```js
$createApplicationCommand[$guildID;slash;A regular slash command!;true;false;slash;[{
  "name": "option",
  "description": "options example",
  "required": true,
  "type": 3,
  "choices" : [{
    "name" : "choice 1",
    "value" : "Hey! You have just selected choice 1"
  }, {
    "name": "choice 2",
    "value": "Hey! You have just selected choice 2"
  }]
}]]
```

# Creating a command to respond to selected choices

### customID method

I will start with this example code:
```js
$createApplicationCommand[$guildID;slash;A regular slash command!;true;false;slash;[{
  "name": "option",
  "description": "options example",
  "required": true,
  "type": 3,
  "choices" : [{
    "name" : "choice 1",
    "value" : "value1"
  }, {
    "name": "choice 2",
    "value": "value2"
  }]
}]]
```
Let’s start with a simple code to return the choice selected from the slash option 
```js
module.exports = {
    name: "slash",
    type: "interaction",
    prototype: "slash",
    code: `$interactionReply[$slashOption[option]]`
}
```
Playing around with the example slash command, you will see that it returns `value1` if choice 1 is selected otherwise `value2` if choice 2 is selected. There’s nothing interesting happening after that.

Taking advantage of the values as custom id can depend on your needs, so in my case, I will be doing that using `$if: “old”` to make each specific choice have it’s own code!

To do this, we will be using `$slashOption` with our slash command option name that has the choices added to it and if old for each specific code for each selected choice by the author!
```js
module.exports = {
    name: "slash",
    type: "interaction",
    $if: "old",
    prototype: "slash",
    code: `$if[$slashOption[option]==value1]
    $interactionReply[{newEmbed:{title:Hello!}{description:You have selected choice 1!}}]
    $elseIf[$slashOption[option]==value2]
    $interactionReply[{newEmbed:{title:Hello!}{description:You have selected choice 2}}]
    $endelseif
    $endif`
}
```
Because our slash option is called `option` then we will use it on `$slashOption` function. You can also see that we gave each choice it’s own code by forcing our slashOption function to check if the choice which has the value itself is selected.

That way, you can use choices as custom id to do anything as you have the freedom in this case!

### replies method
As with my guide for choices as replies. I will present you with the same code from the very beginning of this guide.
```js
$createApplicationCommand[$guildID;slash;A regular slash command!;true;false;slash;[{
  "name": "option",
  "description": "options example",
  "required": true,
  "type": 3,
  "choices" : [{
    "name" : "choice 1",
    "value" : "Hey! You have just selected choice 1"
  }, {
    "name": "choice 2",
    "value": "Hey! You have just selected choice 2"
  }]
}]]
```
Since choices has it’s own reply through the values we specified, there’s nothing you need to do aside from using `$slashOption` on the slash command option that has those choices.
```js
module.exports = {
    name: "slash",
    type: "interaction",
    prototype: "slash",
    code: `$interactionReply[$slashOption[option]]`
}
```

That’s it, it will just return any of the replies you see in the first code and that’s how you setup choices as replies!

