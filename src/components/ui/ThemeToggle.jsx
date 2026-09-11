import { FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext';

function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      onClick={toggleTheme}
      className={`relative inline-flex h-8 w-14 shrink-0 items-center rounded-full
        bg-secondary-200 dark:bg-secondary-700
        transition-colors duration-300 ease-in-out
        focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
        dark:focus:ring-offset-secondary-900 ${className}`}
    >
      <span
        className={`inline-flex h-6 w-6 transform items-center justify-center rounded-full bg-white shadow-md
          transition-transform duration-300 ease-in-out
          ${isDark ? 'translate-x-7' : 'translate-x-1'}`}
      >
        {isDark ? (
          <FiMoon className="h-3.5 w-3.5 text-primary-600" />
        ) : (
          <FiSun className="h-3.5 w-3.5 text-primary-600" />
        )}
      </span>
    </button>
  );
}

export default ThemeToggle;
