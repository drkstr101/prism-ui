import type { RadioGroupProps } from 'react-aria-components';
import { Label, Radio, RadioGroup } from 'react-aria-components';

interface SelectBoxGroupProps extends Omit<RadioGroupProps, 'children'> {
  children?: React.ReactNode;
  label?: string;
}

export function SelectBoxGroup({ label, children, ...props }: SelectBoxGroupProps) {
  return (
    <RadioGroup className="flex flex-col space-y-2 text-center" {...props}>
      <Label className="mb-200 text-xl font-semibold">{label}</Label>
      <div className="flex justify-center">{children}</div>
    </RadioGroup>
  );
}

interface SelectBoxProps {
  name: string;
  icon?: React.ReactNode;
  description?: string;
}

export function SelectBox({ name, icon, description }: SelectBoxProps) {
  return (
    <Radio
      value={name}
      className="p-160 m-160 h-2000 w-2000 focus-visible:ring-half selected:bg-accent-100 selected:border-accent-700 flex justify-center rounded border bg-white focus:outline-none focus-visible:ring-offset-0 dark:bg-black"
    >
      {({ isSelected }) => (
        <div className="gap-150 relative flex h-full w-full flex-col items-center justify-center">
          {isSelected && (
            <div className="-mt-75 -ml-75 absolute left-0 top-0">
              <div className="bg-accent-900 rounded-small h-[14px] w-[14px]">
                <svg
                  className="fill-gray-75 pl-[2px] pt-[2px]"
                  focusable="false"
                  aria-hidden="true"
                  role="img"
                >
                  <path d="M3.788 9A.999.999 0 0 1 3 8.615l-2.288-3a1 1 0 1 1 1.576-1.23l1.5 1.991 3.924-4.991a1 1 0 1 1 1.576 1.23l-4.712 6A.999.999 0 0 1 3.788 9z"></path>
                </svg>
              </div>
            </div>
          )}
          {icon && <div className="text-gray-500">{icon}</div>}
          <div className="font-semibold">{name}</div>
          {description && <div className="text-sm">{description}</div>}
        </div>
      )}
    </Radio>
  );
}
