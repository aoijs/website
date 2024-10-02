---
title: Choices
description: This guide covers the basics about Interaction Command Choices and their functionality, along with everything else you might need to know.
id: choices
type: guide
tableOfContents: false
sidebar:
    order: 2
---

## Table of Contents

- [Table of Contents](#table-of-contents)
- [What are choices?](#what-are-choices)
- [Getting started](#getting-started)
  - [customID vs Replies](#customid-vs-replies)
    - [customID](#customid)
    - [Replies](#replies)
- [Setting up choices](#setting-up-choices)
  - [customID method](#customid-method)
  - [Replies method](#replies-method)
- [Responding to selected choices](#responding-to-selected-choices)
  - [customID method](#customid-method-1)
  - [Replies method](#replies-method-1)

## What are choices?

Choices are custom options for a `string` type of a slash command option. You know the select menu with custom options? It’s exactly that except it’s a slash command option instead.

To put it simple, they're basically items inside of a slash command option that you can select in case you didn't get it yet.

::::note

This feature is not the same as autocomplete, the difference between both is that, choices are forced custom options with no custom input allowed from the user when autocomplete is the opposite of that and are more of suggestions based on the user’s current input.

With that being said, do not think of choices as autocomplete.

:::danger[Limitations]

-   Choice name allows up to 100 characters
-   Choice's values allows up to 100 characters just like the name
-   You can only create up to 25 choices

:::

::::

## Getting started

When it comes to choices, they can be treated in two ways

-   **customID**
-   **Replies**

### customID vs Replies

There’re differences between using choices as customIDs and Replies. Here’s a brief comparison between both.

#### customID

-   Usually allows you to do anything
-   May require a couple of functions to do certain stuff depending on your needs such as creating bot features with it
-   Can be used to setup long messages and other stuff
-   Short and memorable if you used it well

#### Replies

-   You don’t need to use multiple functions to add replies
-   Pretty much limited as you’re just including a text
-   Not suitable for stuff such as creating features that requires a lot of time to code
-   Will only allow up to 100 characters, therefore, not suitable for long messages

---

## Setting up choices

### customID method

Let's start with the customID way, so here's a little ordinary slash option code:

```js
$createApplicationCommand[$guildID;example;A regular slash command!;true;false;slash;[{
  "name": "exampleoption",
  "description": "options example",
  "required": true,
  "type": 3
}]]
```

Seems normal right? We can then expand it further by adding `"choices":` with it's names and values like this.

```js
$createApplicationCommand[$guildID;example;A regular slash command!;true;false;slash;[{
  "name": "exampleoption",
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
$createApplicationCommand[$guildID;example;A regular slash command!;true;false;slash;[{
  "name": "exampleoption",
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

In this example, we have gave it `value1` which is alright for testing. This is how we create choices with it's values as customIDs!

### Replies method

If for some reason, you prefer choices to be just regular replies then it is as simple as just adding the reply to the choice value itself

```js
$createApplicationCommand[$guildID;example;A regular slash command!;true;false;slash;[{
  "name": "exampleoption",
  "description": "options example",
  "required": true,
  "type": 3,
  "choices" : [{
    "name" : "choice 1",
    "value" : "Hey! You have just selected choice 1!"
  }, {
    "name": "choice 2",
    "value": "Hey! You have just selected choice 2!"
  }]
}]]
```

## Responding to selected choices

### customID method

Let's start with this example code:

```js
$createApplicationCommand[$guildID;example;A regular slash command!;true;false;slash;[{
  "name": "exampleoption",
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

We will then create a simple interaction command to return the choice selected from the slash option

```js
module.exports = {
    name: "example",
    type: "interaction",
    prototype: "slash",
    code: `$interactionReply[$slashOption[exampleoption]]`
};
```

Playing around with the example slash command, you will see that it returns `value1` if choice 1 is selected otherwise `value2` if choice 2 is selected. There’s nothing interesting happening after that.

Taking advantage of the values as custom id can depend on your needs, so in this case, we will be doing that using `$if: “old”` to make each specific choice have it’s own code!

To do this, we will be using `$slashOption` with our slash command option name that has the choices added to it and if old for each specific code for each selected choice by the author!

```js
module.exports = {
    name: "example",
    type: "interaction",
    $if: "old",
    prototype: "slash",
    code: `$if[$slashOption[exampleoption]==value1]
    $interactionReply[{newEmbed:{title:Hello!}{description:You have selected choice 1!}}]
    $elseIf[$slashOption[exampleoption]==value2]
    $interactionReply[{newEmbed:{title:Hello!}{description:You have selected choice 2!}}]
    $endelseif
    $endif`
};
```

Because our slash option is called `exampleoption` then we will use it on `$slashOption` function. You can also see that we gave each choice it’s own code by forcing our slashOption function to check if the choice which has the value itself is selected.

That way, you can use choices as custom id to do anything as you have the freedom in this case!

### Replies method

As with choices as replies, we will use the same code from the very beginning of this guide.

```js
$createApplicationCommand[$guildID;example;A regular slash command!;true;false;slash;[{
  "name": "exampleoption",
  "description": "options example",
  "required": true,
  "type": 3,
  "choices" : [{
    "name" : "choice 1",
    "value" : "Hey! You have just selected choice 1!"
  }, {
    "name": "choice 2",
    "value": "Hey! You have just selected choice 2!"
  }]
}]]
```

Since choices has it’s own reply through the values we specified, there’s nothing you need to do aside from using `$slashOption` on the slash command option that has these choices.

```js
module.exports = {
    name: "example",
    type: "interaction",
    prototype: "slash",
    code: `$interactionReply[$slashOption[exampleoption]]`
};
```

That’s it! It will just return any of the replies you see in the first code and that’s how you setup choices as replies!
