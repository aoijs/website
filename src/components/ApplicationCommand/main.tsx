import { useState, useEffect } from "react";
import { Flex, Spacer, Checkbox } from "@chakra-ui/react";
import { useCommandStore, useOptionElementStore } from "./state";
import AddOption from "./options/addOption";
import {
  ChakraProvider,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon, WarningIcon } from "@chakra-ui/icons";
import CodeBlock from "./helpers/CodeBlock";
import BaseInput from "./options/BaseInput";
import PermissionSelect from "./options/PermissionSelect";

function ApplicationCommand() {
  const optionElements = useOptionElementStore((state) => state.elements);
  const commandStore = useCommandStore();
  const getCleanedCommandJSON = useCommandStore(
    (state) => state.getCleanedCommandJSON
  );
  const [output, setOutput] = useState(getCleanedCommandJSON());

  useEffect(() => {
    setOutput(getCleanedCommandJSON());
  }, [commandStore]);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("global");
  const [defaultPermissions, setDefaultPermissions] = useState(false);
  const [permissions, setPermissions] = useState([]);
  const [allowDirectMessageExecution, setAllowDirectMessageExecution] = useState(false);
  const [applicationCommandType, setApplicationCommandType] = useState("");
  const [integrationType, setIntegrationType] = useState({
    guild: false,
    user: false,
  });

  const [context, setContext] = useState({
    guild: false,
    botdm: false,
    dm: false,
  });

  const join = (...args: string[]) => {
    return args.filter(Boolean).join(";");
  };

  return (
    <ChakraProvider resetCSS={false}>
      <div>
        <BaseInput
          title="Name"
          description="The name of the command. No special characters allowed!"
          placeholder="Command Name"
          setter={(val: string) => setName(val?.trim())}
        />
        <BaseInput
          title="Description"
          description="The description of the command, you can use special characters here."
          placeholder="Command Description"
          setter={(val: string) => setDescription(val?.trim())}
        />
        <BaseInput
          title="Type"
          description="Where your command will be created, 'global' for global commands or a guild ID for guild commands."
          placeholder="Guild ID or 'global'"
          setter={(val: string) => setType(val?.trim())}
        />
        <div
          style={{
            marginTop: "2rem",
            marginBottom: "2rem",
            borderBottom: "thin solid var(--sl-color-hairline-light)",
          }}
        />
        <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <div style={{ marginTop: "2rem" }}>
            <h2 style={{ marginBottom: "15px" }}>Integration Types</h2>
            <Checkbox
              size="lg"
              colorScheme="blue"
              onChange={(e) =>
                setIntegrationType({
                  ...integrationType,
                  user: e.target.checked ? true : false,
                })
              }
            >
              User Installable{" "}
              <p
                style={{
                  fontSize: "0.7rem",
                  whiteSpace: "pre-wrap",
                  color: "gray",
                }}
              >
                Allows users to install the application command & use it
                anywhere
              </p>
            </Checkbox>
            <br /> <br />
            <Checkbox
              size="lg"
              colorScheme="blue"
              onChange={(e) =>
                setIntegrationType({
                  ...integrationType,
                  guild: e.target.checked ? true : false,
                })
              }
            >
              Guild Installable{" "}
              <p
                style={{
                  fontSize: "0.7rem",
                  whiteSpace: "pre-wrap",
                  color: "gray",
                }}
              >
                Allows users to use the application command within the guild
              </p>
            </Checkbox>
          </div>
          <div style={{ marginTop: "2rem" }}>
            <h2 style={{ marginBottom: "15px" }}>Allowed Contexts</h2>
            <Checkbox
              size="lg"
              colorScheme="blue"
              onChange={(e) =>
                setContext({
                  ...context,
                  dm: e.target.checked ? true : false,
                })
              }
            >
              Allow Direct Message Execution{" "}
              <p
                style={{
                  fontSize: "0.7rem",
                  whiteSpace: "pre-wrap",
                  color: "gray",
                }}
              >
                Allows execution within Direct Messages
              </p>
            </Checkbox>
            <br />
            <br />
            <Checkbox
              size="lg"
              colorScheme="blue"
              onChange={(e) =>
                setContext({
                  ...context,
                  guild: e.target.checked ? true : false,
                })
              }
            >
              Allow Guild Execution{" "}
              <p
                style={{
                  fontSize: "0.7rem",
                  whiteSpace: "pre-wrap",
                  color: "gray",
                }}
              >
                Allows execution within Guilds
              </p>
            </Checkbox>
            <br />
            <br />
            <Checkbox
              size="lg"
              colorScheme="blue"
              onChange={(e) =>
                setContext({
                  ...context,
                  botdm: e.target.checked ? true : false,
                })
              }
            >
              Allow Bot DM Execution{" "}
              <p
                style={{
                  fontSize: "0.7rem",
                  whiteSpace: "pre-wrap",
                  color: "gray",
                }}
              >
                Allows execution within the Bot's Direct Messages
              </p>
            </Checkbox>
          </div>
        </div>
        <div
          style={{
            marginTop: "2rem",
            marginBottom: "2rem",
            borderBottom: "thin solid var(--sl-color-hairline-light)",
          }}
        />
        <div style={{ marginTop: "2rem" }}>
          <div style={{ marginBottom: "2rem" }}>
            <Checkbox
              size="lg"
              colorScheme="blue"
              onChange={(e) =>
                setDefaultPermissions(e.target.checked ? true : false)
              }
            >
              Use Discord Permissions{" "}
              <p
                style={{
                  fontSize: "0.7rem",
                  whiteSpace: "pre-wrap",
                  color: "gray",
                }}
              >
                Restricts command to certain permissions.
              </p>
            </Checkbox>
            {defaultPermissions && (
              <div style={{ marginTop: "1rem" }}>
                <PermissionSelect onChange={(e) => setPermissions(e.map((x) => x.value))} />
              </div>
            )}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Menu>
                {({ isOpen }) => (
                  <>
                    <MenuButton
                      as={Button}
                      rightIcon={
                        isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />
                      }
                    >
                      {applicationCommandType.charAt(0).toUpperCase() +
                        applicationCommandType.slice(1) || "Type"}
                    </MenuButton>
                    <MenuList>
                      <MenuItem
                        onClick={(e) =>
                          setApplicationCommandType(
                            e.target.innerText.toLowerCase()
                          )
                        }
                      >
                        Message
                      </MenuItem>
                      <MenuItem
                        onClick={(e) =>
                          setApplicationCommandType(
                            e.target.innerText.toLowerCase()
                          )
                        }
                      >
                        User
                      </MenuItem>
                      <MenuItem
                        onClick={(e) =>
                          setApplicationCommandType(
                            e.target.innerText.toLowerCase()
                          )
                        }
                      >
                        Slash
                      </MenuItem>
                    </MenuList>
                  </>
                )}
              </Menu>
              <div style={{ marginLeft: "1.5rem" }}>
                <p style={{ marginBottom: "1rem" }}>Application Command Type</p>
                <p
                  style={{
                    fontSize: "0.7rem",
                    whiteSpace: "pre-wrap",
                    color: "gray",
                    marginTop: "-1.1rem",
                  }}
                >
                  Don't know what these are? Check{" "}
                  <a href="/guides/application/commands/">our guide</a>!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          marginTop: "2rem",
          marginBottom: "2rem",
          borderBottom: "thin solid var(--sl-color-hairline-light)",
        }}
      />
      {(!applicationCommandType || !name || !description) && (
        <div
          style={{
            padding: "10px",
            borderRadius: "4px",
            backgroundColor: "var(--chakra-colors-red-500)",
            position: "relative",
            color: "var(--chakra-colors-red-100)",
          }}
        >
          <Flex direction="column" w="full" h="full">
            <h3>You're missing fields!</h3>
            <p>Make sure you've filled out all the fields above.</p>
            <div
              style={{
                marginTop: "10px",
                marginBottom: "10px",
                borderBottom: "thin solid var(--chakra-colors-red-300)",
              }}
            />
            <p>
              Don't know what you're doing? Check{" "}
              <a href="/guides/application/commands/">our guide</a>!
            </p>
          </Flex>
          <WarningIcon
            style={{
              position: "absolute",
              top: "10px",
              color: "var(--chakra-colors-red-100)",
              right: "10px",
              width: "30px",
              height: "30px",
            }}
          />
        </div>
      )}
      <div style={{ marginTop: "2rem" }}>
        <Flex direction="column" w="full" h="full">
          {applicationCommandType === "slash" && <AddOption />}
          <Spacer />
          {optionElements}
          <Spacer />
          <CodeBlock
            code={`$createApplicationCommand[${type ?? "global"};${
              name?.toLowerCase().replaceAll(" ", "_") ?? "application_command"
            };${description ?? "Imagine an application command"};${join(
              defaultPermissions ? permissions?.join(",") ?? "false" : "false",
              allowDirectMessageExecution.toString(),
              Object.keys(integrationType)
                .filter((key) => integrationType[key] === true)
                .join(",") || "all",
              Object.keys(context)
                .filter((key) => context[key] === true)
                .join(",") || "all",
              applicationCommandType,
              output
            )}]`}
          />
        </Flex>
      </div>
    </ChakraProvider>
  );
}

export default ApplicationCommand;
