import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import Highlight from '@site/src/components/Highlight';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import GiscusComponent from '@site/src/components/GiscusComponent';
import { Tooltip } from 'react-tooltip'
import SubmitForm from '@site/src/components/Forms';
import InputField from '@site/src/components/InputField'

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map the "<Highlight>" tag to our Highlight component
  // `Highlight` will receive all props that were passed to `<Highlight>` in MDX
  Highlight,
  GiscusComponent,
  InputField,
  SubmitForm,
  Tabs,
  Tooltip,
  TabItem
};