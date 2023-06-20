import React, { useState } from "react";
import clsx from "clsx";
import ReactMarkdown from "react-markdown";

import InputField from "./InputField";
import styles from "../pages/styles.module.css";
import Link from "@docusaurus/Link";

const SubmitForm = () => {
  const [lastRequestTime, setLastRequestTime] = useState(0);

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
    let truncatedValue = value;

    if (name === "title") {
      if (value.length > 100) {
        truncatedValue = value.substring(0, 100);
      }
    } else if (name === "description") {
      if (value.length > 75) {
        truncatedValue = value.substring(0, 75);
      }
    }

    setFormState((prevState) => ({ ...prevState, [name]: truncatedValue }));
  };

  const validateDiscordUID = async (uid) => {
    const bannedIDs = ["none"];
    if (bannedIDs.includes(uid)) {
      return false;
    }

    try {
      const response = await fetch(
        `https://someapi.frenchwomen.repl.co/uinfo/${uid}`
      );
      const data = await response.json();
      return !data.bot;
    } catch (error) {
      return false;
    }
  };

  const fetchUserInfo = async (uid) => {
    const randomAvatarNumber = Math.floor(Math.random() * 5);
    try {
      const response = await fetch(
        `https://someapi.frenchwomen.repl.co/uinfo/${uid}`
      );
      const data = await response.json();
      console.log(data.avatar)
      if (data && data.avatar) {
        return {
          avatar: data.avatar,
          username: data.username,
        };
      } else {
        return {
          avatar: `https://cdn.discordapp.com/embed/avatars/${randomAvatarNumber}.png`,
          username: "Guest User",
        };
      }
    } catch (error) {
      return {
        avatar: `https://cdn.discordapp.com/embed/avatars/${randomAvatarNumber}.png`,
        username: "Guest User",
      };
    }
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

    const currentTime = Date.now();
    const elapsedTime = currentTime - lastRequestTime;

    if (elapsedTime < 15000) {
      alert("Don't spam the submit button!");
      return;
    }

    setLastRequestTime(currentTime);

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
      setFormState((prevState) => ({
        ...prevState,
        isUIDValid: false,
      }));
      return;
    }

    const { avatar, username } = await fetchUserInfo(discordUID);

    const baseFileName = title.toLowerCase().replace(/\s+/g, "-");
    const randomString = Math.random().toString(36).substring(7);
    const fileName = `${baseFileName}-${randomString}.md`;

    const fileContent = `---
title: "${title}"
description: "${description}"
authors:
  name: "@${username}"
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

    try {
      const response = await fetch(
        atob("aHR0cHM6Ly9zb21lYXBpLmZyZW5jaHdvbWVuLnJlcGwuY28vZ2l0aHVi"),
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            commitMessage: `Create new file -- ${username}`,
            content: fileContent,
            fileName: fileName,
          }),
        }
      );

      if (response.ok) {
        await alert(
          "Successfully submitted your wiki for review, check back later!"
        );
        window.location.reload();
      } else {
        return;
      }
    } catch (error) {
      console.error("Failed to submit the file:", error);
      return;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <br />
      <br />
      <h3>
        Title of Wiki
        <small style={{ fontSize: "12px", color: "gray" }}>
          {" "}
          (A short and fitting title for your Wiki)
        </small>
      </h3>
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
      <h3>
        Description
        <small style={{ fontSize: "12px", color: "gray" }}>
          {" "}
          (A short description about the purpose of your Wiki)
        </small>
      </h3>
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
      <h3>
        Discord User ID
        <small style={{ fontSize: "12px", color: "gray" }}>
          {" "}
          (Your Discord User ID, so you get the full credit of YOUR work)
        </small>
      </h3>
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
      <h3>
        Content of Wiki
        <small style={{ fontSize: "12px", color: "gray" }}>
          {" "}
          (The content of your Wiki)
        </small>
      </h3>
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
      <h5 style={{ marginBottom: "0.5rem" }}>
        <span style={{ verticalAlign: "middle" }}>
          Preview
          <small
            style={{ fontSize: "8px", color: "gray", verticalAlign: "middle" }}
          >
            {" "}
            (How your Wiki will look on the website)
          </small>
        </span>
      </h5>
      <div
        style={{
          width: "100%",
          borderRadius: "4px",
          fontSize: "14px",
          color: "var(--aoijs-color)",
          background: "var(--aoijs-color)",
          position: "auto",
          fontFamily: "var(--ifm-font-family-base)",
        }}
      >
        <div
          style={{
            border: "1px solid #A9A9A9",
            borderRadius: "4px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              background: "transparent",
              borderRadius: "4px",
              padding: "12px",
            }}
          >
            <ReactMarkdown>{code}</ReactMarkdown>
          </div>
        </div>
      </div>
      {fieldErrors.code && <p style={{ color: "red" }}>Content is required</p>}
      <br />
      <h3>
        Tags
        <small style={{ fontSize: "12px", color: "gray" }}>
          {" "}
          (Select Tags that fit your Wiki)
        </small>
      </h3>
      <div className={styles.tagContainer}>
        {[
          "aoi.music",
          "aoi.js",
          "aoi.panel",
          "aoi.dashboard",
          "v6",
          "v7",
          "Other",
        ].map((tag) => (
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
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "15px",
        }}
      >
        <Link
          className={clsx("button button--outline button--secondary")}
          onClick={handleSubmit}
          style={{ width: "100%" }}
        >
          Submit
        </Link>
      </div>
    </form>
  );
};

export default SubmitForm;
