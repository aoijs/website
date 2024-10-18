import React, { useState, useEffect } from "react";
import type { ChangeEventHandler } from "react";
import { Box, Input, Text } from "@chakra-ui/react";

interface BaseInputProps {
  title: string;
  description?: string;
  placeholder: string;
  setter(val?: string): void;
  validationRegex?: RegExp;
}

function BaseInput({
  title,
  description,
  placeholder,
  setter,
}: BaseInputProps) {
  const [value, setValue] = useState("");
  useEffect(() => {
    if (value) {
      setter(value);
    } else {
      setter(undefined);
    }
  }, [value]);
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) =>
    setValue(event.target.value);
  return (
    <Box pb="4">
      <Text fontSize="xl" mb="2px">
        {title}:
      </Text>
      {description && (
        <Text
          style={{ whiteSpace: "pre-wrap", color: "gray" }}
          fontSize="sm"
          mb="8px"
        >
          {description}
        </Text>
      )}
      <Input
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        size="md"
      />
    </Box>
  );
}

export default BaseInput;
