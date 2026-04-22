import { Outlet } from 'react-router-dom';
import authbackground from '../assets/img/auth.png'; 

const AuthLayout = () => {
  return (
    <section
  className="h-screen text-zinc-900"
  style={{
    backgroundImage: `url(${authbackground})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'left center',
  }}
>
  <div className="flex h-full w-full items-center justify-end px-6 py-6 sm:px-10 lg:px-20">
      <Outlet />
  </div>
</section>
  );
};

export default AuthLayout;