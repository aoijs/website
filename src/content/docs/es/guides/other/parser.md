---
title: Analizador
description: Esta guía explica cómo usar correctamente los analizadores de mensajes incrustados y componentes. Incluyendo conceptos básicos y ejemplos.
id: analizador
og_image: https://raw.githubusercontent.com/aoijs/website/main/src/images/og/17.png
---

:::caution[Rediseño]

Esta página será rediseñada en el futuro.

:::

<!-- omit from toc -->
### Tabla de Contenidos

- [Analizador de Incrustados](#analizador-de-incrustados)
  - [Funciones del Analizador de Incrustados](#funciones-del-analizador-de-incrustados)
- [Analizador de Componentes](#analizador-de-componentes)
  - [Analizador de Botones](#analizador-de-botones)
    - [Tipos de Botones](#tipos-de-botones)
  - [Analizador de Menús de Selección](#analizador-de-menús-de-selección)
  - [Analizador de Modal de Interacción](#analizador-de-modal-de-interacción)
- [Ejemplos de Analizadores](#ejemplos-de-analizadores)
  - [Analizador de Incrustados](#analizador-de-incrustados-1)
  - [Analizador de Componentes](#analizador-de-componentes-1)
    - [Analizador de Botones](#analizador-de-botones-1)
    - [Analizador de Menús de Selección](#analizador-de-menús-de-selección-1)
    - [Analizador de Modal de Interacción](#analizador-de-modal-de-interacción-1)

---

## Analizador de Incrustados

Los analizadores de incrustados son útiles una vez que sabes cómo usarlos, esta sección cubrirá lo básico sobre los analizadores de incrustados.

:::tip
Necesitas `{newEmbed:{...}}` cada vez que desees utilizar analizadores de incrustados.
:::

### Funciones del Analizador de Incrustados

```php
{title:text} // Agrega un título al incrustado.
{url:URL} // Agrega un enlace clickeable al título.
{description:text} // Agrega una descripción al incrustado.
{color:...} // Agrega color al lado del incrustado.
{footer:text:icono?} // Agrega un pie de página al incrustado con una pequeña imagen a la izquierda del pie de página o ninguna.
{image:URL} // Agrega una imagen grande en la parte inferior del incrustado.
{thumbnail:URL} // Agrega una pequeña imagen en la esquina superior derecha.
{author:nombre:icono?} // Agrega texto sobre el título con un pequeño ícono a la izquierda o ninguno.
{authorURL:URL} // Agrega un enlace clickeable al autor.
{field:título:valor:en línea? (true / false)} // Agrega campos al incrustado, que pueden estar en línea o no.
{timestamp:ms?} // Agrega una marca de tiempo al incrustado.
```

---

## Analizador de Componentes

:::tip
Para cada analizador de componentes siempre es algo siempre es lo mismo, `{actionRow:{...}}`. Lo usamos para declarar los argumentos dentro de él como componentes.
:::

### Analizador de Botones

Uso:

```bash
{button:etiqueta:estilo:customID:desactivado? (true / false):emoji?}
```

#### Tipos de Botones

|   Nombre    | Valor |                     Color |                                                                     |
| :-------: | :---: | ------------------------: | ------------------------------------------------------------------- |
|  Primario  |   1   |                   azul | `{button:Ejemplo de Botón!:primario:customID:false}`                   |
| Secundario |   2   |                      gris | `{button:Ejemplo de Botón!:secundario:customID:false}`                 |
|  Éxito  |   3   |                     verde | `{button:Ejemplo de Botón!:éxito:customID:false}`                   |
|  Peligro   |   4   |                       rojo | `{button:Ejemplo de Botón!:peligro:customID:false}`                    |
|   Enlace    |   5   |  gris, navega a una URL | `{button:Ejemplo de Botón!:enlace:https\\:discord.gg:false}`            |
|   Emoji   |   -   | botón primario con emoji | `{button:Ejemplo de Botón!:primario:customID:false:emojiNombre,emojiID}` |

### Analizador de Menús de Selección

Uso del Analizador de Menús de Selección:

```bash
{selectMenu:customID:Marcador de posición:valorMínimo:valorMáximo:predeterminado(true / false):...opciones}

{selectMenuOptions:nombreOpción:customID:descripciónOpción:predeterminado? (true / false):emoji?}
```

### Analizador de Modal de Interacción

Uso del Analizador de Modal de Interacción:

```bash
{textInput:título:estilo:customID:obligatorio? (true / false):Marcador de posición?:longitudMínima?:longitudMáxima?:valorPredeterminado?}
```

## Ejemplos de Analizadores

A continuación se presentan ejemplos simples de cada analizador y cómo usarlos.

### Analizador de Incrustados

**Incrustado con título, pie de página, imagen y campo.**

```bash
{newEmbed:{title:¡Otro Ejemplo Asombroso!}{image:https://cdn.discordapp.com/icons/773352845738115102/f6b0d1a62a83397976ea441c5377e6ad.png?size=128}{field:Este es un título de campo!:Y una descripción de campo que no está en línea!:false}{footer:Ejemplo #2}}
```

---

### Analizador de Componentes

#### Analizador de Botones

**Dos botones, cada uno en una fila diferente.**

```bash
{actionRow:{button:Botón:secundario:boton1}}{actionRow:{button:Botón:primario:boton2}}
```

**Tres botones, uno con emoji.**

```bash
{actionRow:{button:Botón:primario:boton1:false}{button:Botón:primario:boton2:false}{button:Botón:peligro:boton3:false:👋}}
```

#### Analizador de Menús de Selección

**Menú de selección simple con dos opciones**

```bash
{actionRow:{selectMenu:customID:Marcador de posición:1:1:false:{selectMenuOptions:Opción1:1:DescripciónOpción1:false:👋}{selectMenuOptions:Opción

2:2:DescripciónOpción2:false}}}
```

**Menú de selección múltiple con tres opciones y un máximo de 2 opciones seleccionables**

```bash
{actionRow:{selectMenu:customID:Marcador de posición:1:2:false:{selectMenuOptions:Opción1:1:DescripciónOpción1:false:👋}{selectMenuOptions:Opción2:2:DescripciónOpción2:false}{selectMenuOptions:Opción3:3:DescripciónOpción3:false}}}
```

#### Analizador de Modal de Interacción

**Modal con dos campos, uno de tamaño normal y el otro más grande.**

```bash
{actionRow:{textInput:EjemploTítulo1:1:customID1:true}}{actionRow:{textInput:EjemploTítulo2:2:customID2:false}}
```