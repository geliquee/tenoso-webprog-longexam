import { NavLink } from 'react-router-dom';
import logo from '../assets/img/nubdexchange_logo.png';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Products', to: '/products' },
];

const navLinkClassName = ({ isActive }) =>
  [
    'rounded-full border-2 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition',
    isActive
      ? 'border-transparent bg-[#f5cb5c] text-zinc-50'
      : 'border-transparent text-[#fffcf2] hover:border-[#6096ba] hover:bg-zinc-50 hover:text-zinc-900',
  ].join(' ');

const NavBar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-transparent bg-[#023047]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-3">
          <img src={logo} alt="BulldogEx" className="h-9 w-9 rounded-full border-2 border-zinc-900 bg-zinc-50 object-contain" />
          <div className="space-y-0.5">
            <p className="text-xl font-bold text-[#fefae0]">BulldogEx Shop</p>
          </div>
        </NavLink>

        <nav className="hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'} className={navLinkClassName}>
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="auth/signin"
            className="ml-2 rounded-full border-3 border-[#6096ba] bg-zinc-50 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#023047] transition hover:bg-[#6096ba] hover:text-zinc-50"
          >
            Login
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;