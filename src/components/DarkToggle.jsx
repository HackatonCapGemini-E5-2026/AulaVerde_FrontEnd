import { useTheme } from '../ThemeContext';

const DarkToggle = () => {
  const { dark, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className={`
        relative w-12 h-6 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#1eb2a6] focus:ring-offset-2
        ${dark ? 'bg-[#1eb2a6]' : 'bg-gray-200'}
      `}
    >
      <span
        className={`
          absolute top-0.5 left-0.5 w-5 h-5 rounded-full shadow-md flex items-center justify-center text-[10px] transition-transform duration-300
          ${dark ? 'translate-x-6 bg-slate-900 text-white' : 'translate-x-0 bg-white text-amber-500'}
        `}
      >
        {dark ? '\u263D' : '\u2600'}
      </span>
    </button>
  );
};

export default DarkToggle;
