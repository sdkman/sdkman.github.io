import * as React from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';

type Props = {
  className?: string;
  value: string;
  items: string[];
  position?: 'left' | 'right';
  onChange: (value: string) => void;
};

export default function Select({
  className,
  value,
  items,
  position = 'left',
  onChange,
}: Props) {
  const dropdownRef = React.useRef<HTMLDivElement>(null);
  const [showDropdown, setShowDropdown] = React.useState(false);

  React.useEffect(() => {
    const handleClickOutside = (
      event: MouseEvent | TouchEvent | FocusEvent,
    ) => {
      if (
        !dropdownRef.current ||
        dropdownRef.current.contains(event.target as Node)
      ) {
        return;
      }
      setShowDropdown(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    document.addEventListener('focusin', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('focusin', handleClickOutside);
    };
  }, [dropdownRef]);

  function handleClick() {
    setShowDropdown(!showDropdown);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === 'Enter') {
      event.preventDefault();
      setShowDropdown(!showDropdown);
    }
  }

  return (
    <div
      ref={dropdownRef}
      className={clsx('dropdown', className, {
        'dropdown--right': position === 'right',
        'dropdown--show': showDropdown,
      })}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      <button
        aria-haspopup="true"
        aria-expanded={showDropdown}
        className={clsx('navbar__link', styles.button, styles.buttonBackground)}
      >
        {value}
      </button>

      <ul className="dropdown__menu">
        {items.map((item, idx) => (
          <li key={`${item}-${idx}`}>
            <button
              className={clsx(
                'dropdown__link',
                styles.button,
                item === value
                  ? 'dropdown__link--active'
                  : styles.buttonBackground,
              )}
              onClick={() => onChange(item)}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
