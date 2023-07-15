---
title: Parser
description: This guide explains how to properly use embed parsers and component parsers. Including basics and examples.
id: parser
---

#### This guide covers everything you need to know about embed parsers, component parsers, including basics and examples.

### Table of Contents

- **[Embed Parser](#embed-parser)**
    - **[Embeds](#embed-parser-functions)**
- **[Components Parser](#components-parser)**
    - **[Button Parser](#button-parser)**
    - **[Select Menu Parser](#select-menu-parser)**
    - **[Interaction Modal Parser](#interaction-modal-parser)**
- **[Examples](#parsers-examples)**
    - **[Embed Parser Examples](#embed-parser-1)**
    - **[Component Parser Examples](#components-parser-1)**
    - **[Interaction Modal Parser Example](#interaction-modal-parser-1)**

---

## Embed Parser

Embed Parser are quite easy to use once you know how, this section will be covering the basics about embed parsers. You
require `{newEmbed:{...}}` every time you want to use embed parsers.

### Embed Parser Functions

```php
{title:text}
{description:text}
{color:...}
{footer:text:icon?}
{image:URL}
{thumbnail:URL}
{author:name:icon?}
{authorURL:URL}
{field:title:value:inline? (true / false)}
{timestamp:ms?}
``` 

---

## Components Parser

For every component parser is one thing always the same, `{actionRow:{...}}`. We use that to declare the arguments
inside of it as components.

### Button Parser

Usage:

```php
{button:label:style:customID:disabled? (true / false):emoji?}
```

<details open>
  <summary><h3> Button Types </h3></summary>

| Name      | Value | Color                     |                                                                     |
| --------- | ----- | ------------------------- | ------------------------------------------------------------------- |
| Primary   | 1     | blurple                   | `{button:Example Button!:primary:customID:false}`                   |
| Secondary | 2     | grey                      | `{button:Example Button!:secondary:customID:false}`                 |
| Success   | 3     | green                     | `{button:Example Button!:success:customID:false}`                   |
| Danger    | 4     | red                       | `{button:Example Button!:danger:customID:false}`                    |
| Link      | 5     | grey, navigates to a URL  | `{button:Example Button!:link:https\\:discord.gg:false}`            |
| Emoji     | 0     | primary button with emoji | `{button:Example Button!:primary:customID:false:emojiName,emojiID}` |

</details>

### Select Menu Parser

Select Menu Parser Usage:

```php
{selectMenu:customID:placeholder:minValue:maxValue:default(true / false):...options}

{selectMenuOptions:optionName:customID:optionDescription:default? (true / false):emoji?}
```

### Interaction Modal Parser

Interaction Modal Parser Usage:

```php
{textInput:label:style:customID:required? (true / false):placeholder?:minLength?:maxLength?:defaultValue?}
```

## Parsers Examples

Below are simple examples of each parser and how to use them.

### Embed Parser

**Embed with title, footer, image and field.**

```php
{newEmbed:{title:Another Awesome Example !}{image:https\\://cdn.discordapp.com/icons/773352845738115102/f6b0d1a62a83397976ea441c5377e6ad.png?size=128}{field:This is a field title!:And a field description which is not inline!:false}{footer:Example #2}}
```

![preview](https://raw.githubusercontent.com/aoijs/website/main/assets/images/others/embed-image-footer.png)

---

### Components Parser

#### Button Parser

**Two buttons each one in a different row.**

```php
{actionRow:{button:Button:secondary:button1}}{actionRow:{button:Button:primary:button2}}
```

![preview](https://raw.githubusercontent.com/aoijs/website/main/assets/images/others/embed-buttons.png)

**Three buttons, one with emoji.**

```php
{actionRow:{button:Button:primary:button1:false}{button:Button:primary:button2:false}{button:Button:danger:button3:false:👋}}
```

![preview](https://raw.githubusercontent.com/aoijs/website/main/assets/images/others/embed-buttons-3.png)

#### Select Menu Parser

**Single-Select Menu with two options**

```php
{actionRow:{selectMenu:customID:Placeholder:1:1:false:{selectMenuOptions:Option1:1:OptionDescription1:false:👋}{selectMenuOptions:Option2:2:OptionDescription2:false}}}
```

**Multi-Select Menu with three options and and a maximum of 2 selectable options**

```php
{actionRow:{selectMenu:customID:Placeholder:1:2:false:{selectMenuOptions:Option1:1:OptionDescription1:false:👋}{selectMenuOptions:Option2:2:OptionDescription2:false}{selectMenuOptions:Option3:3:OptionDescription3:false}}}
```

#### Interaction Modal Parser

**Modal with two fields one being normal sized and the other being bigger.**

```php
{actionRow:{textInput:ExampleTitle1:1:customID1:true}}{actionRow:{textInput:ExampleTitle2:2:customID2:false}}
```