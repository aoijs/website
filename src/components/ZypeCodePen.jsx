import React from 'react';
import { MDXEmbedProvider, CodePen } from 'mdx-embed';

const ZypeCodePen = (props) => <MDXEmbedProvider>
    <CodePen {...props} />
</MDXEmbedProvider>

export default ZypeCodePen;