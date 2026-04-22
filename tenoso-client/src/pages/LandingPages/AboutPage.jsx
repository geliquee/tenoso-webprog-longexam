import Button from '../../components/Button';
import logo from '../../assets/img/nubdexchange_logo.png';
import category1 from '../../assets/img/category1.png';
import category2 from '../../assets/img/category2.png';
import category3 from '../../assets/img/category3.png';
import category4 from '../../assets/img/category4.png';
import about from '../../assets/img/aboutheader.jpg';

const AboutPage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <section className="rounded-3xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="max-w-10xl mx-auto w-full bg-[#cfdbd5] rounded-3xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-[1.25rem] bg-zinc-200">
              <img 
                  src={about} 
                  alt="BulldogEx" 
                  className="h-full w-full object-cover"
              />
          </div>

          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#023047]">
              About <span className="text-[#fca311]">Store</span>
            </p>
            <h1 className="max-w-xl text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
              A campus shop focused on useful products and simple ordering.
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
              BulldogEx Shop is your go-to source for campus essentials, study supplies, 
              and NU gear — built exclusively for National University students and staff.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/" variant="primary1">
                Back Home
              </Button>
              <Button to="/products">Open Products</Button>
            </div>
          </div>
          </div>
        </div>
      </section>

      <section className="bg-[#023047] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#ffd100]">
            AT A GLANCE
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-[#fdf0d5]">Everything you need, in one place.</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border-2 border-zinc-900 bg-[#f1faee] p-5">
            <p className="text-2xl font-bold text-zinc-900">08</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Items
            </p>
          </div>
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">06</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Categories
            </p>
          </div>
          <div className="rounded-3xl border-2 border-zinc-900 bg-[#f1faee] p-5">
            <p className="text-2xl font-bold text-zinc-900">03</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Pickup Slots
            </p>
          </div>
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">24</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Orders
            </p>
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6 text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#023047]">
              How it <span className="text-[#fca311]">Works</span>
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-[#023047]">Shopping made simple for every Bulldog</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 justify-items-center max-w-7xl mx-auto">
          <div className="rounded-3xl border-3 border-[#ffd100] bg-zinc-50 p-5">
            <h3 className="text-lg font-semibold text-zinc-900">Browse Products</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Explore a curated selection of campus essentials organized by category — from school supplies to NU merchandise.
            </p>
          </div>
          
          <div className="rounded-3xl border-3 border-[#023047] bg-zinc-50 p-5">
            <h3 className="text-lg font-semibold text-zinc-900">Add to Cart</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Pick what you need, review your order, and check out in just a few taps.
            </p>
          </div>

          <div className="rounded-3xl border-3 border-[#ffd100] bg-zinc-50 p-5">
            <h3 className="text-lg font-semibold text-zinc-900">Pickup Ready</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Store information stays direct for students who need quick order updates.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#e9ecef] px-4 py-6 sm:px-6 sm:py-8 lg:px-8 flex justify-center items-center flex-col">
          <h1 className="text-3xl font-bold uppercase tracking-[0.20em] text-[#023047] text-center">
            Shop Now!
          </h1>
          <p className="mt-2 text-sm text-zinc-600 text-center">
            Discover the latest Bulldog and National University gear.
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-4">
            <div className="flex flex-col border border-zinc-200 items-center rounded-[1.25rem] bg-white p-5 shadow-md">
                <div className="flex aspect-square w-full items-center justify-center rounded-[1.25rem] bg-zinc-200">
                    <img src={category1} alt="Category1" className="w-full h-95 object-cover rounded-[1.25rem]" />
                </div>
                <p className="mt-3 text-sm font-bold uppercase tracking-[0.15em] text-[#023047]">Apparel</p>
            </div>
            <div className="flex flex-col border border-zinc-200 items-center rounded-[1.25rem] bg-white p-5 shadow-md">
                <div className="flex aspect-square w-full items-center justify-center rounded-[1.25rem] bg-zinc-200">
                    <img src={category2} alt="Category2" className="w-full h-95 object-cover rounded-[1.25rem]" />
                </div>
                <p className="mt-3 text-sm font-bold uppercase tracking-[0.15em] text-[#023047]">School Supplies</p>
            </div>
            <div className="flex flex-col border border-zinc-200 items-center rounded-[1.25rem] bg-white p-5 shadow-md">
                <div className="flex aspect-square w-full items-center justify-center rounded-[1.25rem] bg-zinc-200">
                    <img src={category3} alt="Category3" className="w-full h-95 object-cover rounded-[1.25rem]" />
                </div>
                <p className="mt-3 text-sm font-bold uppercase tracking-[0.15em] text-[#023047]">Accesories</p>
            </div>
            <div className="flex flex-col border border-zinc-200 items-center rounded-[1.25rem] bg-white p-5 shadow-md">
                <div className="flex aspect-square w-full items-center justify-center rounded-[1.25rem] bg-zinc-200">
                    <img src={category4} alt="Category4" className="w-full h-95 object-cover rounded-[1.25rem]" />
                </div>
                <p className="mt-3 text-sm font-bold uppercase tracking-[0.15em] text-[#023047]">More Merch</p>
            </div>
          </div>
          <Button to="/products" className="mt-5">View Products</Button>
      </section>
    </div>
  );
};

export default AboutPage;
