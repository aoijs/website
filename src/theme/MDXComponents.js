import React from "react";
import MDXComponents from "@theme-original/MDXComponents";
import Highlight from "@site/src/components/Highlight";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import Cookies from "@site/src/components/CookieComponent.js";
import GiscusComponent from "@site/src/components/GiscusComponent";
import { Tooltip } from "react-tooltip";
import SubmitForm from "@site/src/components/Forms";
import InputField from "@site/src/components/InputField";
import Slash from "@site/src/components/SlashPreview";
import Showcase from "@site/src/components/Showcase";

export default {
  ...MDXComponents,
  Highlight,
  GiscusComponent,
  InputField,
  SubmitForm,
  Cookies,
  Tabs,
  Slash,
  Tooltip,
  TabItem,
  Showcase
};
