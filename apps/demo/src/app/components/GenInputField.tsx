import { useState } from 'react';
import { Button, Group, Input, TextField } from 'react-aria-components';

export function GenInputField() {
  const [value, setValue] = useState('');
  const [isTextFieldFocused, setIsTextFieldFocused] = useState(false);
  return (
    <Group
      className={`h-800 m-auto flex w-[80%] rounded-full border bg-white align-middle shadow-md dark:bg-black ${
        isTextFieldFocused ? 'ring' : ''
      }`}
    >
      <TextField
        onFocus={() => setIsTextFieldFocused(true)}
        onBlur={() => setIsTextFieldFocused(false)}
        value={value}
        onChange={setValue}
        aria-label="Prompt"
        className="p-150 h-full flex-grow"
      >
        <Input className="p-50 h-full w-full text-xl font-bold text-black focus:outline-none dark:bg-black dark:text-white" />
      </TextField>
      <Button
        isDisabled={value === ''}
        className="mx-200 bg-accent-800 p-150 my-auto self-end rounded-full font-bold text-white focus:outline-none focus-visible:ring disabled:bg-gray-300 disabled:text-gray-500"
      >
        Generate
      </Button>
    </Group>
  );
}
