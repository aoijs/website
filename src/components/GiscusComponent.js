import React from 'react';
import Giscus from "@giscus/react";
import { useColorMode } from '@docusaurus/theme-common';

export default function GiscusComponent() {
  const { colorMode } = useColorMode();

  return (
    <Giscus    
      repo="Faf4a/website"
      repoId="R_kgDOJwxdeQ"
      category="General"
      categoryId="DIC_kwDOJwxdec4CXSeZ"
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