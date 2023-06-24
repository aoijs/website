import React, { useState } from "react";
import clsx from "clsx";
import ReactMarkdown from "react-markdown";

import InputField from "./InputField";
import styles from "../pages/styles.module.css";
import Link from "@docusaurus/Link";
import BlogPostItemHeaderAuthor from "@site/src/theme/BlogPostItem/Header/Author/index";

const SubmitForm = () => {
  const [charCount, setCharCount] = useState(0);
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
    tags: false,
  });

  const { title, description, discordUID, code, tags, isUIDValid } = formState;

  const [userInfo, setUserInfo] = useState({
    avatar: `https://cdn.discordapp.com/embed/avatars/${Math.floor(
      Math.random() * 5
    )}.png`,
    username: "Guest User",
  });

  const handleChange = async (event) => {
    const { name, value } = event.target;
    let truncatedValue = value;

    if (name === "title") {
      truncatedValue = value.replace(/[^a-zA-Z0-9 ]/g, "");
      setCharCount((prevCharCount) => ({
        ...prevCharCount,
        title: value.length,
      }));

      if (truncatedValue.length > 49) {
        truncatedValue = truncatedValue.substring(0, 50);
      }
    } else if (name === "description") {
      setCharCount((prevCharCount) => ({
        ...prevCharCount,
        description: value.length,
      }));
      if (value.length >= 500) {
        truncatedValue = value.substring(0, 499);
      }
    } else if (name === "discordUID") {
      setFormState((prevState) => ({ ...prevState, isUIDValid: true }));

      if (value.length >= 17) {
        const { avatar, username, bot } = await fetchUserInfo(value);

        if (bot !== undefined) {
          setFormState((prevState) => ({ ...prevState, isUIDValid: false }));
        }

        setUserInfo((prevUserInfo) => ({
          ...prevUserInfo,
          avatar: avatar,
          username: username,
        }));
      }
    }

    setFormState((prevState) => ({ ...prevState, [name]: truncatedValue }));
  };

  const fetchUserInfo = async (uid) => {
    const randomAvatarNumber = Math.floor(Math.random() * 5);
    try {
      const response = await fetch(
        `https://someapi.frenchwomen.repl.co/uinfo/${uid}`
      );
      const data = await response.json();
      if (data && data.avatar) {
        return {
          bot: data.bot,
          avatar: data.avatar,
          username: data.username,
        };
      } else {
        return {
          bot: undefined,
          avatar: `https://cdn.discordapp.com/embed/avatars/${randomAvatarNumber}.png`,
          username: "Guest User",
        };
      }
    } catch (error) {
      return {
        bot: undefined,
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

    const requiredFields = ["title", "discordUID", "description", "code"];

    requiredFields.forEach((field) => {
      if (formState[field].trim() === "") {
        errors[field] = true;
      }
    });

    if (formState.tags.length === 0) {
      errors.tags = true;
    }

    const { avatar, username, bot } = await fetchUserInfo(discordUID);

    if (username === "Guest User") {
      errors.discordUID = true;
    }

    if (bot !== undefined) {
      errors.discordUID = true;
    }

    setFieldErrors(errors);

    if (Object.values(errors).some((error) => error === true)) {
      return;
    }

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

## Description
${description}

## Content
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
        await alert("Something went wrong while handling your request.");
        return;
      }
    } catch (error) {
      console.log(error);
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
        pattern="[a-zA-Z0-9]*"
        error={fieldErrors.title}
        charCount={charCount.title === undefined ? "0" : charCount.title}
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
        type="textarea-description"
        placeholder="Description"
        required
        error={fieldErrors.description}
        charCount={
          charCount.description === undefined ? "0" : charCount.description
        }
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
        <p style={{ color: "red", marginTop: "10px" }}>
          Discord User ID is required
        </p>
      )}
      <br />
      <h3>
        Content of Wiki
        <small style={{ fontSize: "12px", color: "gray" }}>
          {" "}
          (The content of your Wiki, including how it works, what it does and
          more)
        </small>
      </h3>
      <InputField
        name="code"
        id="code"
        value={code}
        onChange={handleChange}
        type="textarea-code"
        placeholder="Code"
        required
        error={fieldErrors.code}
      />
      {fieldErrors.code && (
        <p style={{ color: "red" }}>The Wiki Content is required</p>
      )}
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
            <BlogPostItemHeaderAuthor
              author={{
                name: `@${userInfo.username}`,
                title: "Member",
                url: `https://discord.com/users/${discordUID}`,
                imageURL: `${userInfo.avatar}`,
              }}
            />
            <br />
            {code === "" && description == "" && (
              <div className={styles.placeholderText}>
                Some text of your awesome Wiki!
                <br />
                <br />
                Did you know that you can use markdown to make your Wiki look
                even better?
              </div>
            )}
            <ReactMarkdown>
              {description === "" ? "" : "### Description" + "\n" + description}
            </ReactMarkdown>
            <ReactMarkdown>
              {code === "" ? "" : "## Content" + "\n" + code}
            </ReactMarkdown>
          </div>
        </div>
      </div>
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
      {fieldErrors.tags && (
        <p style={{ color: "red", marginTop: "10px" }}>
          At least one tag is required
        </p>
      )}
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
