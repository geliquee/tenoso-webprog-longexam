import { Link } from 'react-router-dom';

const variantClasses = {
  primary: 'bg-[#023047] text-zinc-50 hover:text-[#023047] hover:bg-[#f5cb5c]',
  primary1: 'bg-[#023047] text-zinc-50 hover:text-[#023047] hover:bg-zinc-50 border-2 hover:border-[#023047]',
  secondary: 'bg-[#f5cb5c] text-zinc-900 hover:bg-[#a3cef1]',
  third: 'bg-[#a3cef1] text-zinc-900 hover:bg-zinc-50',
  fourth: 'bg-[#f5cb5c] text-zinc-900 hover:bg-zinc-50' 
};

const Button = ({
  children,
  to,
  type = 'button',
  variant = 'secondary',
  className = '',
}) => {
  const classes = [
    'inline-flex items-center justify-center rounded-full border-2 border-transparent px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] transition',
    variantClasses[variant] ?? variantClasses.secondary,
    className,
  ]
    .join(' ')
    .trim();

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
};

export default Button;
