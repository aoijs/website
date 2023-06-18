import React, { useState } from "react";
import InputField from "./InputField";
import styles from "../pages/styles.module.css";
import Link from "@docusaurus/Link";
import clsx from "clsx";

const SubmitForm = () => {
  const [formState, setFormState] = useState({
    title: "",
    discordUID: "",
    description: "",
    code: "",
    tags: [],
    isUIDValid: true,
  });

  const [fieldErrors, setFieldErrors] = useState({
    title: false,
    discordUID: false,
    description: false,
    code: false,
  });

  const { title, description, discordUID, code, tags, isUIDValid } = formState;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const validateDiscordUID = async (uid) => {
    const bannedIDs = ["none"];
    if (bannedIDs.includes(uid)) {
      return false;
    }

    const response = await fetch(
      `https://someapi.frenchwomen.repl.co/uinfo/${uid}`
    );
    const data = await response.json();
    return !data.bot;
  };

  const fetchUserInfo = async (uid) => {
    const response = await fetch(
      `https://someapi.frenchwomen.repl.co/uinfo/${uid}`
    );
    const data = await response.json();

    return {
      avatar: data.avatar,
      username: data.username,
    };
  };

  const handleTagClick = (tag) => {
    const selectedTags = [...tags];
    if (selectedTags.includes(tag)) {
      selectedTags.splice(selectedTags.indexOf(tag), 1);
    } else {
      selectedTags.push(tag);
    }
    setFormState((prevState) => ({ ...prevState, tags: selectedTags }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const errors = {
      title: false,
      discordUID: false,
      description: false,
      code: false,
    };

    if (title.trim() === "") {
      errors.title = true;
    }
    if (discordUID.trim() === "") {
      errors.discordUID = true;
    }
    if (description.trim() === "") {
      errors.description = true;
    }
    if (code.trim() === "") {
      errors.code = true;
    }

    setFieldErrors(errors);

    if (
      errors.description === true ||
      errors.code === true ||
      errors.title === true ||
      errors.discordUID === true
    ) {
      return;
    }

    const isValidUser = await validateDiscordUID(discordUID);

    if (!isValidUser) {
      console.log("Invalid user");
      setFormState((prevState) => ({
        ...prevState,
        isUIDValid: false,
      }));
      return;
    }

    const { avatar, username } = await fetchUserInfo(discordUID);

    const baseFileName = title.toLowerCase().replace(/\s+/g, "-");
    let fileName = `${baseFileName}.md`;
    let fileExists = true;

    while (fileExists) {
      const apiUrl = `https://api.github.com/repos/Faf4a/website/contents/forums/posts/${fileName}`;
      const response = await fetch(apiUrl);

      if (response.status === 200) {
        const randomString = Math.random().toString(36).substring(7);
        fileName = `${baseFileName}-${randomString}.md`;
      } else if (response.status === 404) {
        fileExists = false;
      } else {
        return;
      }
    }

    const fileContent = `---
title: "${title}"
description: "${description}"
authors:
  name: @${username}
  title: Member
  url: https://discord.com/users/${discordUID}
  image_url: ${avatar}
tags: ${JSON.stringify(tags)}
hide_table_of_contents: false
enableComments: true
pagination_prev: null
pagination_next: null
---

${code}`;

    const apiUrl = `https://api.github.com/repos/Faf4a/website/contents/forums/posts/${fileName}`;
    const encodedContent = btoa(fileContent);

    const response = await fetch(apiUrl, {
      method: "PUT",
      headers: {
        Authorization: `Bearer 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`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: `Create new file -- ${username}`,
        content: encodedContent,
      }),
    });

    if (response.ok) {
      setTimeout(async () => {
        await alert("Successfully submitted your wiki for review, check back later!");
        window.location.reload();
      }, 1000);      
    } else {
      return;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <br />
      <br />
      <h3>Title of Wiki</h3>
      <InputField
        name="title"
        id="title"
        value={title}
        onChange={handleChange}
        type="text"
        placeholder="Title"
        required
        error={fieldErrors.title}
      />
      {fieldErrors.title && <p style={{ color: "red" }}>Title is required</p>}
      <br />
      <h3>Description</h3>
      <InputField
        name="description"
        id="description"
        value={description}
        onChange={handleChange}
        type="textarea"
        placeholder="Description"
        required
        error={fieldErrors.description}
      />
      {fieldErrors.description && (
        <p style={{ color: "red" }}>Description is required</p>
      )}
      <br />
      <h3>Discord User ID</h3>
      <InputField
        name="discordUID"
        id="discordUID"
        value={discordUID}
        onChange={handleChange}
        type="number"
        placeholder="Discord UID"
        required
        error={!isUIDValid || fieldErrors.discordUID}
      />
      {!isUIDValid && <p style={{ color: "red" }}>Invalid user</p>}
      {fieldErrors.discordUID && (
        <p style={{ color: "red" }}>Discord UID is required</p>
      )}
      <br />
      <h3>Content of Wiki</h3>
      <InputField
        name="code"
        id="code"
        value={code}
        onChange={handleChange}
        type="textarea"
        placeholder="Code"
        required
        error={fieldErrors.code}
      />
      {fieldErrors.code && <p style={{ color: "red" }}>Content is required</p>}
      <br />
      <div className={styles.tagContainer}>
        {["aoi.music", "aoi.js", "aoi.panel", "aoi.dashboard", "v6", "v7", "Other"].map((tag) => (
          <span
            key={tag}
            className={clsx(styles.tag, {
              [styles.active]: tags.includes(tag),
            })}
            onClick={() => handleTagClick(tag)}
          >
            {tag}
          </span>
        ))}
      </div>
      <div
        className={styles.buttons}
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        <Link
          className={clsx("button button--outline button--secondary")}
          onClick={handleSubmit}
        >
          Submit
        </Link>
      </div>
    </form>
  );
};

export default SubmitForm;