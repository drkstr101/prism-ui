import { ActionButton, useProvider } from '@adobe/react-spectrum';
import { type ColorScheme } from '@react-types/provider';
import Light from '@spectrum-icons/workflow/Light';
import Moon from '@spectrum-icons/workflow/Moon';
import { Dispatch } from 'react';

export interface ThemeSwitcherProps {
  setColorScheme: Dispatch<React.SetStateAction<ColorScheme | undefined>>;
}

export default function ThemeSwitcher({ setColorScheme }: ThemeSwitcherProps) {
  const { colorScheme } = useProvider();
  const label = colorScheme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme';
  const otherScheme = colorScheme === 'light' ? 'dark' : 'light';

  return (
    <div className="m-50 absolute right-0">
      <ActionButton aria-label={label} onPress={() => setColorScheme(otherScheme)}>
        {colorScheme === 'dark' ? <Light /> : <Moon />}
      </ActionButton>
    </div>
  );
}
