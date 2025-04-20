import { DualRangeSlider } from '../core/slider';

export default function SalaryRangeSelector({
  value,
  onValueChange,
  ...props
}) {
  return (
    <div className='w-3/5 mx-auto space-y-20'>
      <DualRangeSlider
        value={value}
        onValueChange={onValueChange}
        {...props}
      />
    </div>
  );
}
