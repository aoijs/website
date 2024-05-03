import { useState, useEffect } from "react";
import { Flex, Spacer, VStack, Checkbox, Heading } from "@chakra-ui/react";
import { useCommandStore, useOptionElementStore } from "./state";
import AddOption from "./options/addOption";
import { ChakraProvider, Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import CodeBlock from "./helpers/CodeBlock";
import BaseInput from "./options/BaseInput";

function ApplicationCommand() {
    const optionElements = useOptionElementStore((state) => state.elements);
    const commandStore = useCommandStore();
    const getCleanedCommandJSON = useCommandStore((state) => state.getCleanedCommandJSON);
    const [output, setOutput] = useState(getCleanedCommandJSON());

    useEffect(() => {
        setOutput(getCleanedCommandJSON());
    }, [commandStore]);

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [type, setType] = useState("global");
    const [defaultPermissions, setDefaultPermissions] = useState(false);
    const [allowDirectMessageExecution, setAllowDirectMessageExecution] = useState(false);
    const [applicationCommandType, setApplicationCommandType] = useState("");

    const join = (...args: string[]) => {
        return args.filter(Boolean).join(";");
    };

    return (
        <ChakraProvider resetCSS={false}>
            <div>
                <BaseInput title="Name" placeholder="Command Name" setter={(val: string) => setName(val)} />
                <BaseInput title="Description" placeholder="Command Description" setter={(val: string) => setDescription(val)} />
                <BaseInput title="Type" placeholder="Guild ID or 'global'" setter={(val: string) => setType(val)} />
                <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
                    <div>
                        <Checkbox size="lg" colorScheme="blue" onChange={(e) => setDefaultPermissions(e.target.checked ? true : false)}>
                            Default Permissions <p style={{ fontSize: "0.7rem" }}>If the command should follow the default permissions.</p>
                        </Checkbox>
                    </div>
                    <div style={{ marginTop: "2rem" }}>
                        <Checkbox size="lg" colorScheme="blue" onChange={(e) => setAllowDirectMessageExecution(e.target.checked ? true : false)}>
                            Allow Direct Message Execution <p style={{ fontSize: "0.7rem" }}>Prevents execution within Direct Messages</p>
                        </Checkbox>
                    </div>
                </div>
                <div style={{ marginTop: "2rem" }}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <Menu>
                                {({ isOpen }) => (
                                    <>
                                        <MenuButton as={Button} rightIcon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}>
                                            {applicationCommandType.charAt(0).toUpperCase() + applicationCommandType.slice(1) || "Type"}
                                        </MenuButton>
                                        <MenuList>
                                            <MenuItem onClick={(e) => setApplicationCommandType(e.target.innerText.toLowerCase())}>Message</MenuItem>
                                            <MenuItem onClick={(e) => setApplicationCommandType(e.target.innerText.toLowerCase())}>User</MenuItem>
                                            <MenuItem onClick={(e) => setApplicationCommandType(e.target.innerText.toLowerCase())}>Slash</MenuItem>
                                        </MenuList>
                                    </>
                                )}
                            </Menu>
                            <div style={{ marginLeft: "1.5rem" }}>
                                <p style={{ marginBottom: "1rem" }}>Application Command Type</p>
                                <p style={{ fontSize: "0.7rem", marginTop: "-1.1rem" }}>
                                    Don't know what these are? Check <a href="/guides/application/commands/">our guide</a>!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ marginTop: "2rem" }}>
                <Flex direction="column" w="full" h="full">
                    {applicationCommandType === "slash" && <AddOption />}
                    <Spacer />
                    {optionElements}
                    <Spacer />
                    <CodeBlock
                        code={`$createApplicationCommand[${type ?? "global"};${
                            name
                                ?.toLowerCase()
                                .replaceAll(" ", "_")
                                .replaceAll(/[^a-zA-Z0-9_]/g, "") ?? "application_command"
                        };${description ?? "Imagine an application command"};${join(defaultPermissions.toString(), allowDirectMessageExecution.toString(), applicationCommandType, output)}]`}
                    />
                </Flex>
            </div>
        </ChakraProvider>
    );
}

export default ApplicationCommand;
