---
title: Escape de Caracteres
description: Esta página explica el escape de caracteres y proporciona una tabla de secuencias de escape comúnmente utilizadas.
id: characterescaping
og_image: https://raw.githubusercontent.com/aoijs/website/main/src/images/og/11.png
---

<!-- omit from toc -->
## Tabla de Contenidos

- [¿Qué es el escape de caracteres?](#qué-es-el-escape-de-caracteres)
- [Cuándo usar el escape de caracteres](#cuándo-usar-el-escape-de-caracteres)
- [Secuencias de escape comúnmente utilizadas](#secuencias-de-escape-comúnmente-utilizadas)
- [Ejemplos](#ejemplos)

## ¿Qué es el escape de caracteres?

El escape de caracteres es una técnica utilizada para representar caracteres que tienen un significado especial en un contexto particular. Por ejemplo, en lenguajes de programación, el carácter de barra invertida (`\`) se utiliza para escapar caracteres especiales, como saltos de línea y comillas.

El escape de caracteres también se puede utilizar en lenguajes de marcado, como HTML y XML, para representar caracteres que no forman parte del conjunto de caracteres estándar. Por ejemplo, el carácter `&` puede usarse para representar el símbolo de ampersand (`&`).

## Cuándo usar el escape de caracteres

El escape de caracteres se utiliza típicamente en las siguientes situaciones:

- Al usar el analizador de incrustación (embed parser)
- Al querer utilizar caracteres específicos dentro de funciones que normalmente no se permitirían

## Secuencias de escape comúnmente utilizadas

La siguiente tabla muestra algunas secuencias de escape comúnmente utilizadas:

| CARACTER      | ESCAPADO          | ALTERNATIVA |
| ------------- | ----------------- | ----------- |
| `[`           | `#RIGHT#`         | `\[`        |
| `]`           | `#LEFT#`          | `\]`        |
| `;`           | `#SEMI#`          | `\;`        |
| `:`           | `#COLON#`         | `\:`        |
| `$`           | `#CHAR#`          | `\$`        |
| `<`           | `#RIGHT_CLICK#`   | `\<`        |
| `>`           | `#LEFT_CLICK#`    | `\>`        |
| `=`           | `#EQUAL#`         | `\=`        |
| `{`           | `#RIGHT_BRACKET#` | `\{`        |
| `}`           | `#LEFT_BRACKET#`  | `\}`        |
| `,`           | `#COMMA#`         |             |
| `&&`          | `#AND#`           | `\&\& `     |
| `\|\|`        | `#OR#`            | `\\\`       |
| `NUEVA LÍNEA` |                   | `\n`        |

## Ejemplos

Aquí tienes algunos ejemplos de escape de caracteres:

- La secuencia de escape `#RIGHT#` se utiliza para representar el carácter `[`.
- La secuencia de escape `\n` se utiliza para representar un carácter de nueva línea.