import { Button, Code, Flex, Spacer, useClipboard } from "@chakra-ui/react";
import Highlight, { defaultProps } from "prism-react-renderer";
import { CopyIcon } from "@chakra-ui/icons";

interface CodeBlockProps {
    code: string;
}

function CodeBlock({ code }: CodeBlockProps) {
    const { onCopy, hasCopied } = useClipboard(code);
    return (
        <Code display="block" whiteSpace="pre" flexGrow={1} p="4" my="4">
            <Highlight {...defaultProps} code={code} language="javascript">
                {({ className, tokens, getLineProps, getTokenProps }) => (
                    <pre className={className} style={{ overflow: "auto", marginBottom: "5px" }}>
                        {tokens.map((line, i) => (
                            <div key={i} {...getLineProps({ line })}>
                                {line.map((token, key) => (
                                    <span {...getTokenProps({ token })} key={key} />
                                ))}
                            </div>
                        ))}
                    </pre>
                )}
            </Highlight>
            <Flex>
                <Spacer />
                <Button style={{ marginBottom: "5px" }} leftIcon={<CopyIcon />} onClick={onCopy}>
                    {hasCopied ? "Copied" : "Copy"}
                </Button>
            </Flex>
        </Code>
    );
}

export default CodeBlock;
