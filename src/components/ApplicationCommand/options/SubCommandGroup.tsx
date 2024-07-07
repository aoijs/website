import { Box, CloseButton, Flex, HStack, Spacer, Text, useColorModeValue, VStack } from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
import { ApplicationCommandOptionType, useOptionElementStore, useCommandStore } from "../state";
import type { ApplicationCommandOption } from "../state";
import Icons from "../icons";
import BaseInput from "./BaseInput";

interface SubCommandProps {
    type: keyof typeof ApplicationCommandOptionType;
    _key: string;
    inGroup?: boolean;
    setters?: {
        addOption: (option: ApplicationCommandOption) => void;
        removeElement: (key: string) => void;
        removeOption: (key?: string) => void;
        updateOption: (option: ApplicationCommandOption) => void;
    };
}

function SubCommandGroup({ type, _key, inGroup, setters }: SubCommandProps) {
    const Icon = Icons.SubCommand;
    const removeElement = useOptionElementStore((state) => state.removeElement);
    const addOption = useCommandStore((state) => state.addOption);
    const removeOption = useCommandStore((state) => state.removeOption);
    const updateOption = useCommandStore((state) => state.updateOption);
    const removeOptionElement = () => {
        if (inGroup) {
            setters?.removeOption(_key);
            setters?.removeElement(_key);
        } else {
            removeOption(_key);
            removeElement(_key);
        }
    };

    const [option, setOption] = useState<ApplicationCommandOption>({
        key: _key,
        type: ApplicationCommandOptionType.SubCommandGroup,
        name: "",
        description: "",
        options: []
    });

    useEffect(() => {
        inGroup ? setters?.addOption(option) : addOption(option);
    }, []);

    useEffect(() => {
        inGroup ? setters?.updateOption(option) : updateOption(option);
    }, [option]);

    const updateLocalOption = (opt: Partial<ApplicationCommandOption>) => {
        setOption({
            ...option,
            ...opt
        });
    };

    return (
        <>
            <Box boxShadow={useColorModeValue("lg", "dark-lg")} p="6" my="4" rounded="md">
                <VStack spacing={2}>
                    <HStack spacing="2" w="full">
                        <Icon boxSize={6} mt="1" />
                        <Text>{type}</Text>
                        <Spacer />
                        <CloseButton size="md" onClick={removeOptionElement} />
                    </HStack>
                    <Flex direction="column" w="full">
                        <BaseInput title="Name" placeholder="Option Name" setter={(name) => updateLocalOption({ name: name?.toLowerCase() })} />
                        <BaseInput title="Description" placeholder="Option Description" setter={(description) => updateLocalOption({ description })} />
                    </Flex>
                </VStack>
            </Box>
        </>
    );
}

export default SubCommandGroup;
