import Button from '../components/Button';
import bulldogImage from '../assets/img/not_found.png';

const NotFoundPage = () => {
  return (
    <div className="flex w-full flex-col gap-0">

      <section className="min-h-screen bg-[#023047] px-4 py-16 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="flex flex-col items-center text-center max-w-lg">
          <img
            src={bulldogImage}
            alt="Angry bulldog mascot"
            className="h-70 w-70 object-contain mb-6"
          />
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#ffd100] mb-2">
            404 Error
          </p>
          <h1 className="text-4xl font-black text-white sm:text-5xl">
            Page Not Found
          </h1>
          <p className="mt-4 text-base leading-7 text-[#a3cef1] max-w-sm">
            Oops! Looks like this page got chewed up. The link you followed might be broken . . .
          </p>
          <div className="mt-8 flex gap-3">
            <Button to="/">Back Home</Button>
            <Button to="/products">View Products</Button>
          </div>
        </div>
      </section>

    </div>
  )
}

export default NotFoundPage