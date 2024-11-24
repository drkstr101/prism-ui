import { Label, Radio, RadioGroup, RadioGroupProps } from 'react-aria-components';

interface SentimentRatingGroupProps extends Omit<RadioGroupProps, 'children'> {
  ratings?: string[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
}

export function SentimentRatingGroup({
  ratings = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  ...other
}: SentimentRatingGroupProps) {
  return (
    <RadioGroup
      orientation="horizontal"
      className="m-auto flex flex-col space-y-10 text-center"
      {...other}
    >
      <Label className="mb-200 text-xl font-semibold">Sentiment Rating</Label>
      <div className="flex justify-between">
        <span>Least Likely</span>
        <span>Most Likely</span>
      </div>
      <div className="flex justify-evenly">
        {ratings.map((rating) => (
          <SentimentRating key={rating} rating={rating} />
        ))}
      </div>
    </RadioGroup>
  );
}

export function SentimentRating({ rating }: { rating: string }) {
  return (
    <Radio
      value={rating}
      className="p-160 m-75 h-200 w-200 selected:bg-accent-800 dark:selected:bg-accent-800 selected:border-accent-800 selected:text-white pressed:bg-gray-200 dark:pressed:bg-gray-200 flex items-center justify-center rounded-full border bg-white hover:border-gray-300 focus:outline-none focus-visible:ring disabled:bg-gray-200 disabled:text-gray-400 dark:bg-black"
    >
      {rating}
    </Radio>
  );
}
