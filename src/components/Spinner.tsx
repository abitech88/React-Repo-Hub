import { x } from '@xstyled/emotion';

import type { SystemProps } from '@xstyled/emotion';

import './Spinner.css'

interface SpinnerProps extends SystemProps {
  active?: boolean;
  variant?: 'large' | 'medium' | 'small';
}

const SpinnerVariants = {
  large: {
    w: 12,
    h: 12,
  },
  medium: {
    w: 8,
    h: 8,
  },
  small: {
    w: 6,
    h: 6,
  },
};

const Spinner: React.FC<SpinnerProps> = ({
  active = true,
  variant = 'medium',
  ...systemProps
}) => {
  const spinnerClass = `spinner-${variant}`
  if (!active) {
    return null;
  }

  return (
    <x.div display='flex' justifyContent='center' alignItems='center'>
      <x.div
        className={spinnerClass}
        aria-label='spinbutton'
        aria-labelledby='spinbutton'
        role='spinbutton'
        {...systemProps}
      />
    </x.div>
  );
};

export default Spinner;
