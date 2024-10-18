import { Button, Code, Flex, Spacer, useClipboard } from "@chakra-ui/react";
import Highlight, { defaultProps } from "prism-react-renderer";
import { CopyIcon, CheckIcon } from "@chakra-ui/icons";

interface CodeBlockProps {
    code: string;
}

function CodeBlock({ code }: CodeBlockProps) {
    const { onCopy, hasCopied } = useClipboard(code);

    return (
        <Code style={{ backgroundColor: "var(--sl-color-bg-sidebar)", borderRadius: "4px", border: "1px solid var(--sl-color-hairline)" }} display="block" whiteSpace="pre-wrap" wordBreak="break-all" flexGrow={1} p="4" my="4">
            <Highlight {...defaultProps} code={code} language="javascript">
                {({ className, tokens, getLineProps, getTokenProps }) => (
                    <pre className={className} style={{ whiteSpace: "pre-wrap", wordBreak: "break-all", marginBottom: "5px" }}>
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
                <Button style={{ marginBottom: "5px" }} leftIcon={hasCopied ? <CheckIcon /> : <CopyIcon />} onClick={onCopy}>
                    {hasCopied ? "Copied" : "Copy"}
                </Button>
            </Flex>
        </Code>
    );
}

export default CodeBlock;
