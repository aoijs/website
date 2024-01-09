---
title: Character Escaping
description: This page explains character escaping and provides a table of commonly used escape sequences.
id: characterescaping
---

<!-- omit from toc -->
## Table of Contents

- [What is character escaping?](#what-is-character-escaping)
- [When to use character escaping](#when-to-use-character-escaping)
- [Commonly used escape sequences](#commonly-used-escape-sequences)
- [Examples](#examples)

## What is character escaping?

Character escaping is a technique used to represent characters that have special meaning in a particular context. For example, in programming languages, the backslash (`\`) character is used to escape special characters, such as newlines and quotation marks.

Character escaping can also be used in markup languages, such as HTML and XML, to represent characters that are not part of the standard character set. For example, the `&` character can be used to represent the ampersand (`&`) symbol.

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
| `\|\|`     | `#OR#`            | `\\\`       |
| `NEW LINE` |                   | `\n`        |

## Examples

Here are some examples of character escaping:

- Tthe `#RIGHT#` escape sequence is used to represent the `[` character.
- The `\n` escape sequence is used to represent a newline character.
