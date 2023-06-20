import React from 'react';
import Giscus from "@giscus/react";
import { useColorMode } from '@docusaurus/theme-common';

export default function GiscusComponent() {
  const { colorMode } = useColorMode();

  return (
    <Giscus    
      repo="aoijs/website"
      repoId="MDEwOlJlcG9zaXRvcnkzNjM3OTEyMzY="
      category="General"
      categoryId="DIC_kwDOFa8DhM4CXVEw"
      mapping="pathname"                      
      term="aoi.js comment section"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="1"
      inputPosition="top"
      theme={colorMode}
      lang="en"
      crossorigin="anonymous"
      async
    />
  );
}