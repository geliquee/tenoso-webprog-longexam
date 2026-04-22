import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

const Footer = () => {
  const socials = [
    { icon: 'mdi:facebook', href: 'https://www.facebook.com/NationalUniversityPhilippines', label: 'Facebook' },
    { icon: 'mdi:instagram', href: 'https://www.instagram.com/nationaluph', label: 'Instagram' },
    { icon: 'mdi:twitter', href: 'https://x.com/NationalUPhil', label: 'Twitter' },
  ];
  
  return (
    <div className="border-t-2 border-transparent bg-[#023047] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-lg font-bold text-zinc-50">BulldogEx Shop</p>
            <p className="mt-1 text-sm text-zinc-300">Campus essentials, simple ordering.</p>
            <div className="mt-3 flex items-center gap-4">
              {socials.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  className="text-zinc-100 transition-colors hover:text-[#fca311]"
                >
                  <Icon icon={icon} width={35} height={35} />
                </a>
              ))}
            </div>
          </div>

          <div className="flex gap-12 text-sm">
            <div className="flex flex-col gap-2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-400">Shop</p>
              <a href="#" className="text-zinc-300 hover:text-zinc-50 transition-colors">Daily Essentials</a>
              <a href="#" className="text-zinc-300 hover:text-zinc-50 transition-colors">Study Supplies</a>
              <a href="#" className="text-zinc-300 hover:text-zinc-50 transition-colors">Campus Apparel</a>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-400">Order</p>
              <a href="#" className="text-zinc-300 hover:text-zinc-50 transition-colors">Cart</a>
              <a href="#" className="text-zinc-300 hover:text-zinc-50 transition-colors">Pickup Info</a>
              <a href="#" className="text-zinc-300 hover:text-zinc-50 transition-colors">Contact Us</a>
            </div>
          </div>
        </div>

        <div className="my-6 border-t border-zinc-500" />

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-zinc-400">© 2025 BulldogEx Shop · National University · All rights reserved.</p>
          <div className="flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-400">
            <Link to="/" className="hover:text-zinc-200 transition-colors">Home</Link>
            <span>|</span>
            <Link to="/about" className="hover:text-zinc-200 transition-colors">About</Link>
            <span>|</span>
            <Link to="/products" className="hover:text-zinc-200 transition-colors">Products</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer