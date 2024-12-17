import { Label, Radio, RadioGroup } from 'react-aria-components';

interface OptionProps {
  side: 'start' | 'end';
  value: string;
  children: React.ReactNode;
}

function Option({ side, value, children }: OptionProps) {
  return (
    <Radio
      value={value}
      className={`p-75 flex w-full items-center justify-center border border-gray-300 text-center ${
        side === 'start' ? 'rounded-s' : 'rounded-e'
      } selected:border-accent-800 selected:bg-accent-100 selected:text-accent-900 focus-visible:ring-half ring-offset-0`}
    >
      {children}
    </Radio>
  );
}

export function PlanSwitcher() {
  return (
    <RadioGroup defaultValue="annual" className="m-auto flex flex-col space-y-10 text-center">
      <Label className="mb-200 text-xl font-bold">Plan Switcher</Label>
      <div className="relative m-auto flex w-[400px] justify-evenly">
        <Option aria-label="Own label" side="start" value="annual">
          Annual
          <span className="left-100 px-75 -top-75 absolute rounded bg-gray-500 py-1 text-xs text-white">
            Save 33%
          </span>
        </Option>
        <Option side="end" value="monthly">
          Monthly
        </Option>
      </div>
    </RadioGroup>
  );
}
