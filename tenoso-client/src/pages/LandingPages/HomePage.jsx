import Button from '../../components/Button';
import banner from '../../assets/img/nu_bulldogex_banner.jpg';
import essentials from '../../assets/img/nu_essentials.png';
import supplies from '../../assets/img/nu_supplies.png';
import apparel from '../../assets/img/nu_apparel.png';

const HomePage = () => {
    return (
        <div className="flex w-full flex-col gap-4">
            <section className="relative min-h-[35rem] overflow-hidden bg-[zinc-900] px-4 py-10 sm:px-6 lg:px-8">
                <img
                    src={banner}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-zinc-900/45" />

                <div className="relative z-10 flex min-h-[22rem] items-start justify-end text-right sm:min-h-[24rem]">
                    <div className="max-w-xl">
                        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-200">
                            Campus Marketplace
                        </p>
                        <h1 className="text-3xl font-bold leading-tight text-zinc-50 sm:text-4xl">
                            Welcome to BulldogEx Shop
                        </h1>
                        <p className="mt-4 text-sm leading-7 text-zinc-100 sm:text-base">
                            Explore campus uniforms, student essentials, and school merch in one
                            quick storefront.
                        </p>
                        <div className="mt-6 flex flex-wrap justify-end gap-3">
                            <Button to="/products" variant="third">
                                Shop Now
                            </Button>
                            <Button to="/about" variant="fourth">
                                About Store
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
                <div className="mb-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#023047]">
                        Store <span className="text-[#fca311]">Overview</span>
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-[#023047]">Campus essentials, just a few clicks away</h2>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="rounded-3xl border-3 border-[#ffd100] bg-zinc-50 p-5">
                        <p className="text-2xl font-bold text-zinc-900">08</p>
                        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#000814]">
                            Products
                        </p>
                    </div>
                    <div className="rounded-3xl border-3 border-[#ffd100] bg-zinc-50 p-5">
                        <p className="text-2xl font-bold text-zinc-900">06</p>
                        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                            Categories
                        </p>
                    </div>
                    <div className="rounded-3xl border-3 border-[#ffd100] bg-zinc-50 p-5">
                        <p className="text-2xl font-bold text-zinc-900">24</p>
                        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                            Orders
                        </p>
                    </div>
                    <div className="rounded-3xl border-3 border-[#ffd100] bg-zinc-50 p-5">
                        <p className="text-2xl font-bold text-zinc-900">03</p>
                        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                            Pickup Slots
                        </p>
                    </div>
                </div>
            </section>

            <section className="rounded-3xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
                <div className="max-w-10xl mx-auto w-full bg-[#cfdbd5] rounded-3xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
                <div className="mb-6 text-center">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#023047]">
                        Shop <span className="text-[#fca311]">Selections</span>
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-[#000814]">What you can choose from.</h2>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                    <article className="rounded-3xl border border-zinc-200 bg-[#ffffff] p-7 flex flex-col shadow-md">
                        <div className="border border-zinc-100 overflow-hidden rounded-2xl">
                            <img src={essentials} alt="" className="h-full w-full object-contain rounded-[1.25rem]" />
                        </div>
                        <h3 className="mt-4 text-lg font-semibold text-zinc-900">Daily Essentials</h3>
                        <p className="mt-3 text-sm leading-6 text-zinc-600 flex-1">
                            Bags, tumblers, lanyards, and items used every school day.
                        </p>
                        <Button to="/products" className="mt-4 w-fit" variant="primary">View Products</Button>
                    </article>

                    <article className="rounded-3xl border border-zinc-200 bg-[#ffffff] p-7 flex flex-col shadow-md">
                        <div className="border border-zinc-100 overflow-hidden rounded-2xl">
                            <img src={supplies} alt="" className="h-full w-full object-contain rounded-[1.25rem]" />
                        </div>
                        <h3 className="mt-4 text-lg font-semibold text-zinc-900">Study Supplies</h3>
                        <p className="mt-3 text-sm leading-6 text-zinc-600 flex-1">
                            Notes, desk tools, and study kits for class and review weeks.
                        </p>
                        <Button to="/products" className="mt-4 w-fit" variant="primary">Shop Supplies</Button>
                    </article>

                    <article className="rounded-3xl border border-zinc-200 bg-[#ffffff] p-7 flex flex-col shadow-md">
                        <div className="border border-zinc-100 overflow-hidden rounded-2xl">
                            <img src={apparel} alt="" className="h-full w-full object-contain rounded-[1.25rem]" />
                        </div>
                        <h3 className="mt-4 text-lg font-semibold text-zinc-900">Campus Apparel</h3>
                        <p className="mt-3 text-sm leading-6 text-zinc-600 flex-1">
                            Comfortable pieces for class days, commute days, and weekends.
                        </p>
                        <Button to="/products" className="mt-4 w-fit" variant="primary">
                            View Apparel
                        </Button>
                    </article>
                </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
