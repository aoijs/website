---
title: Character Escaping
description: This page explains character escaping and provides a table of commonly used escape sequences.
id: character-escaping
og_image: https://raw.githubusercontent.com/aoijs/website/main/src/images/og/11.png
---

<!-- omit from toc -->
## Table of Contents

- [What is character escaping?](#what-is-character-escaping)
- [When to use character escaping](#when-to-use-character-escaping)
- [Commonly used escape sequences](#commonly-used-escape-sequences)
- [Examples](#examples)

## What is character escaping?

Character escaping is a technique used to represent characters that have special meaning in a particular context. For example, in programming languages, the backslash (`\`) character is used to escape special characters, such as newlines and quotation marks.

## When to use character escaping

Character escaping is typically used in the following situations:

- When using the embed parser
- When wanting to use specific characters within functions that would be normally not allowed

## Commonly used escape sequences

The following table shows some commonly used escape sequences:

| CHARACTER  | ESCAPED           | ALTERNATIVE |
| ---------- | ----------------- | ----------- |
| `[`        | `#RIGHT#`         | `\[`        |
| `]`        | `#LEFT#`          | `\]`        |
| `;`        | `#SEMI#`          | `\;`        |
| `:`        | `#COLON#`         | `\:`        |
| `$`        | `#CHAR#`          | `\$`        |
| `<`        | `#RIGHT_CLICK#`   | `\<`        |
| `>`        | `#LEFT_CLICK#`    | `\>`        |
| `=`        | `#EQUAL#`         | `\=`        |
| `{`        | `#RIGHT_BRACKET#` | `\{`        |
| `}`        | `#LEFT_BRACKET#`  | `\}`        |
| `,`        | `#COMMA#`         |             |
| `&&`       | `#AND#`           | `\&\& `     |
| `\|\|`     | `#OR#`            | `\\\\`      |
| `NEW LINE` |                   | `\n`        |

## Examples

Here are some examples of character escaping:

- Tthe `#RIGHT#` escape sequence is used to represent the `[` character.
- The `\n` escape sequence is used to represent a newline character.
