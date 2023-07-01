---
title: Introduction of Akarui Extensions
description: Each official extension explained.
slug: /
---

## Table of Contents:
- **[@akarui/aoi.music](#akaruiaoimusic)**
  - **[Overview](#overview)**
  - **[Features](#features)**
    - **[Music Playback](#music-playback)**
    - **[Song Information](#song-information)**
    - **[User Interaction](#user-interaction)**
    - **[Event Handling](#event-handling)**
- **[@akarui/aoi.parser](#akaruiaoiparser)**
  - **[Overview](#overview-1)**
  - **[Features](#features-1)**
    - **[Embed Parser](#embed-parser)**
    - **[Component Parser](#component-parser)**
    - **[File Parser](#file-parser)**
    - **[Options Parser](#options-parser)**
- **[@akarui/aoi.db](#akaruiaoidb)**
  - **[Overview](#overview-2)**
  - **[Features](#features-2)**
    - **[KeyValue](#keyvalue)**
    - **[WideColumn](#widecolumn)**
    - **[Remote](#remote)**
- **[@akarui/aoi.panel](#akaruiaoipanel)**
  - **[Overview](#overview-3)**
  - **[Features](#features-3)**
    - **[Real-time Monitoring](#real-time-monitoring)**
    - **[Command Management](#command-management)**
    - **[Server Configuration](#server-configuration)**
    - **[Error Tracking](#error-tracking)**

---

## @akarui/aoi.music

Package URL: [npm](https://www.npmjs.com/package/@akarui/aoi.music)

Documentation: [aoi.music](../aoi.music/1introduction.md)

### Overview
**@akarui/aoi.music** is an extension package designed for Discord bots. It provides a convenient and powerful solution to incorporate music functionality into your bot, allowing you to create a rich audio experience in your Discord server.

### Features

#### Music Playback
- Play music from various sources such as YouTube, SoundCloud, and direct URLs.
- Control music playback with commands like play, pause, resume, and skip.
- Adjust the volume level and manage other audio settings.

#### Song Information
- Retrieve detailed information about the currently playing song, including title, artist, duration, and thumbnail.

#### User Interaction
- Allow users to request and search for songs within your Discord server.

#### Event Handling
- Utilize event handlers to perform custom actions based on music-related events, such as track ended or queue started.

---

## @akarui/aoi.parser

Package URL: [npm](https://www.npmjs.com/package/@akarui/aoi.parser)

Documentation: [aoi.parser](https://aoi-parser.vercel.app/)

### Overview
**@akarui/aoi.parser** is a custom message parser designed for the **aoi.js** message system. It provides powerful functionality to parse and manipulate message content, allowing you to create dynamic and interactive responses in your Discord bots.

### Features

#### Embed Parser
- Create and customize embed messages with titles, descriptions, URLs, timestamps, colors, footers, images, thumbnails, authors, and fields.

#### Component Parser
- Parse and handle interactive components such as buttons, dropdowns, and select menus in your messages.

#### File Parser
- Convert text into attachable files and attach files from URLs to your messages.

#### Options Parser
- Configure options for your messages, including text-to-speech (TTS), allowed mentions, replies, ephemeral messages, and fetching interaction responses.

The **@akarui/aoi.parser** package enhances the capabilities of **aoi.js** by providing convenient parsing functions and expanding the possibilities of message manipulation in Discord bots.

---

## @akarui/aoi.db

Package URL: [npm](https://www.npmjs.com/package/aoi.db)

Documentation: [aoi.db](https://akaruidevelopment.github.io/aoi.db/)

### Overview
**aoi.db** is a collection of various database types designed to handle different data requirements. It provides a flexible and efficient solution for managing data in your Discord bots or other projects.

### Features

#### KeyValue
- A simple database that stores key-value pairs.
- Suitable for general-purpose data storage and retrieval.

#### WideColumn
- A database that stores data in a column format.
- Ideal for organizing and accessing separate columns related to a primary column.

#### Remote
- A database that stores data on a remote server.
- Allows for separating database-intensive operations from your main project or process.

---

## @akarui/aoi.panel

![aoi.panel](https://raw.githubusercontent.com/aoijs/website/main/assets/images/aoipanel-banner.png)

Package URL: [npm](https://www.npmjs.com/package/@akarui/aoi.panel)

Documentation: [aoi.panel](../aoi.panel/1introduction.md)

### Overview
**@akarui/aoi.panel** is an extension package specifically designed for developers working on Discord bots. It provides a comprehensive developer dashboard that offers a user-friendly interface to manage, monitor, and configure your bot's activities.

### Features

#### Real-time Monitoring
- Monitor your bot's activities and performance in real-time.
- View information such as server count, user count, and command usage statistics.

#### Command Management
- Create and manage your bot's commands through the dashboard.

#### Server Configuration
- Customize your bot's behavior and settings for individual servers.
- Set up welcome messages, moderation rules, and automatic role assignments.

#### Error Tracking
- Track and analyze errors and exceptions occurring within your bot.
- Receive notifications and insights to help you identify and resolve issues.