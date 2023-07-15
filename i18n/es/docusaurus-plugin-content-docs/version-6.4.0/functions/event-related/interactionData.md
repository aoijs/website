---
title: '$interactionData'
description: '$interactionData devolverá argumentos dados de una interacción.'
id: interactionData
---

`$interactionData` devolverá argumentos dados de una interacción.

## Uso

```php
$interactionData[datos]
```

## Parámetros

| Campo | Tipo   | Descripción        | Requerido |
| ----- | ------ | ------------------ |:---------:|
| datos | cadena | Datos a recuperar. | verdadero |

## Ejemplo(s)

```php
$interactionData[customId]
// devuelve el ID personalizado de la interacción.
```

```php
$interactionData[author.id]
// devuelve el ID personalizado de la interacción.
```

```php
$interactionData[message.id]
// devuelve el ID personalizado de la interacción.
```

Estos son solo algunos ejemplos, hay mucho más.