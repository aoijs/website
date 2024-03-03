---
title: Parser
description: This guide explains how to properly use embed parsers and component parsers. Including basics and examples.
id: parser
og_image: https://raw.githubusercontent.com/aoijs/website/main/images/og/17.png
---

<!-- omit from toc -->
### Table of Contents

- [ExtraOptions/Options Parser Functions](#extraoptionsoptions-parser-functions)
- [Embed Parser](#embed-parser)
  - [Embed Parser Functions](#embed-parser-functions)
- [Components Parser](#components-parser)
  - [Button Parser](#button-parser)
    - [Button Types](#button-types)
  - [Select Menu Parser](#select-menu-parser)
  - [Interaction Modal Parser](#interaction-modal-parser)
- [Parsers Examples](#parsers-examples)
  - [Embed Parser](#embed-parser-1)
  - [Components Parser](#components-parser-1)
    - [Button Parser](#button-parser-1)
    - [Select Menu Parser](#select-menu-parser-1)
    - [Interaction Modal Parser](#interaction-modal-parser-1)

---

## ExtraOptions/Options Parser Functions

```php
{execute:awaitedCommand} // executes an awaited command
{reply:messageId:reply?} // replies to a given message
{interaction} // declares reply as an interaction
{ephemeral} // declares interaction as ephemeral
{reactions:...reactions} // adds reactions to a message
{attachment:attachmentName:attachment} // sends file, image as attachment
{file:fileName:content} // creates a text file with the given content
{deleteCommand} // deletes the command which was used to execute the command
{deleteIn:time} // deletes the given reply within the provided time
{suppress} // suppress the output
```

These parser can only be used within specific functions, for example:
`$sendMessage`, `$channelSendMessage` or similar. This includes functions like `$onlyIf`.

---

## Embed Parser

Embed Parser are handy to use once you know how, this section will be covering the basics about embed parsers.

:::tip

You require `{newEmbed:{...}}` every time you want to use embed parsers.

:::

### Embed Parser Functions

```php
{title:text} // Adds title to the embed.
{url:URL} // Adds clickable link to the title.
{description:text} // Adds description to the embed.
{color:...} // Adds color to the side of the embed.
{footer:text:icon?} // Adds footer to the embed with either small image on the left of the footer or none.
{image:URL} // Adds big image at the bottom of the embed.
{thumbnail:URL} // Adds a small image in the right-upper-corner.
{author:name:icon?} // Adds text above the title with either a small icon on the left or none.
{authorURL:URL} // Adds clickable link to the author.
{field:title:value:inline? (true / false)} // Adds fields to the embed, which is either inline or not.
{timestamp:ms?} // Adds a timestamp to the embed.
```

---

## Components Parser

:::tip

For every component parser is one thing always the same, `{actionRow:{...}}`. We use that to declare the arguments inside of it as components.

:::

### Button Parser

Usage:

```bash
{button:label:style:customID:disabled? (true / false):emoji?}
```

#### Button Types

|   Name    | Value |                     Color |                                                                                        |
| :-------: | :---: | ------------------------: | -------------------------------------------------------------------------------------- |
|  Primary  |   1   |                   blurple | `{button:Example Button!:primary:customID:false}`                                      |
| Secondary |   2   |                      grey | `{button:Example Button!:secondary:customID:false}`                                    |
|  Success  |   3   |                     green | `{button:Example Button!:success:customID:false}`                                      |
|  Danger   |   4   |                       red | `{button:Example Button!:danger:customID:false}`                                       |
|   Link    |   5   |  grey, navigates to a URL | `{button:Example Button!:link:https\\:discord.gg:false}`                               |
|   Emoji   |   -   | primary button with emoji | `{button:Example Button!:primary:customID:false:emojiName or emojiID or emoji String}` |

### Select Menu Parser

Select Menu Parser Usage:

```php
{selectMenu:customID:placeholder:minValue:maxValue:default(true / false):...options}

{stringInput:optionName:customID:optionDescription:default? (true / false):emoji?}

// for every option you want to add to the select menu, you can use the following:
{roleInput}

{channelInput}

{mentionableInput}

{userInput}
```

### Interaction Modal Parser

Interaction Modal Parser Usage:

```bash
{textInput:label:style:customID:required? (true / false):placeholder?:minLength?:maxLength?:defaultValue?}
```

## Parsers Examples

Below are simple examples of each parser and how to use them.

### Embed Parser

**Embed with title, footer, image and field.**

```bash
{newEmbed:{title:Another Awesome Example !}{image:https://cdn.discordapp.com/icons/773352845738115102/f6b0d1a62a83397976ea441c5377e6ad.png?size=128}{field:This is a field title!:And a field description which is not inline!:false}{footer:Example #2}}
```

---

### Components Parser

#### Button Parser

**Two buttons each one in a different row.**

```bash
{actionRow:{button:Button:secondary:button1}}{actionRow:{button:Button:primary:button2}}
```

**Three buttons, one with emoji.**

```bash
{actionRow:{button:Button:primary:button1:false}{button:Button:primary:button2:false}{button:Button:danger:button3:false:👋}}
```

#### Select Menu Parser

**Single-Select Menu with two options**

```bash
{actionRow:{selectMenu:customID:Placeholder:1:1:false:{stringInput:Option1:1:OptionDescription1:false:👋}{stringInput:Option2:2:OptionDescription2:false}}}
```

**Multi-Select Menu with three options and a maximum of 2 selectable options**

```bash
{actionRow:{selectMenu:customID:Placeholder:1:2:false:{stringInput:Option1:1:OptionDescription1:false:👋}{stringInput:Option2:2:OptionDescription2:false}{stringInput:Option3:3:OptionDescription3:false}}}
```

**User-Select Menu**

:::tip

This applies to every other type!

:::

```bash
{actionRow:{selectMenu:customID:Placeholder:1:1:false:{userInput}}}
```

#### Interaction Modal Parser

**Modal with two fields one being normal sized and the other being bigger.**

```bash
{actionRow:{textInput:ExampleTitle1:1:customID1:true}}{actionRow:{textInput:ExampleTitle2:2:customID2:false}}
```
