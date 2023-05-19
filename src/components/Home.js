import React from 'react'
import { Carousel } from 'flowbite-react'

function Home() {
    return (
        <>
            {/* Banner Section */}
            <section className="h-56 sm:h-64 md:h-96 2xl:h-[90vh] bg-black bg-auto">
                <Carousel>
                    <div className="flex h-full items-center justify-center">
                        <img src="https://4kwallpapers.com/images/walls/thumbs_3t/4969.jpg" className='h-[90vh] w-full' alt="" />
                        <div class="h-full w-full absolute flex justify-center  bg-gradient-to-r from-[#000000c0] to-[#000000c0]">
                            <div className='h-full w-full flex flex-col justify-center items-center text-center'>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/1200px-Marvel_Logo.svg.png" className='h-28 ' alt="" />
                                <p className='mt-8 sub-heading text-white text-5xl tracking-normal font-semibold'>All <span className='text-red-600 font-extrabold text-6xl tracking-tighter'>MARVEL</span> Toys And Action Figure <br /> Available Here</p>
                                <button className='px-8 bg-red-600 text-white py-4 mt-8 font-bold rounded-full hover:bg-red-700'>Browse Collection</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex h-full items-center justify-center">
                        <img src="https://images.hdqwalls.com/wallpapers/justice-league-dc-fandome-artwork-cn.jpg" className='h-[90vh] w-full' alt="" />
                        <div class="h-full absolute flex justify-between left-0 right-0  bg-gradient-to-r from-[#000000c0] to-[#000000c0]">
                            <div className='h-full w-full flex flex-col justify-center items-center text-center'>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3d/DC_Comics_logo.svg" className='h-32 ' alt="" />
                                <p className='mt-6 sub-heading text-white text-5xl tracking-normal font-semibold'>All <span className='text-blue-700 font-extrabold text-6xl'>DC</span> Toys And Action Figure <br /> Available Here</p>
                                <button className='px-8 bg-blue-700 text-white py-4 mt-10 font-bold rounded-full hover:bg-blue-600'>Browse Collection</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex h-full items-center justify-center">
                        <img src="https://images.hdqwalls.com/wallpapers/the-boys-season-2-x6.jpg" className='h-[90vh] w-full' alt="" />
                        <div class="h-full absolute flex justify-between left-0 right-0  bg-gradient-to-r from-[#000000c0] to-[#000000c0]">
                            <div className='h-full w-full flex flex-col justify-center items-center text-center'>
                                <img src="https://www.themoviedb.org/t/p/original/15cw5VeFfi7SAF7R2OTTpmNK5B5.png" className='h-32 ' alt="" />
                                <p className='mt-6 sub-heading text-white text-5xl tracking-normal font-semibold'>All <span className='text-red-600 font-extrabold text-6xl tracking-tighter'>THE BOYS</span> Toys And Action Figure <br /> Available Here</p>
                                <button className='px-8 bg-red-600 text-white py-4 mt-10 font-bold rounded-full hover:bg-red-700'>Browse Collection</button>
                            </div>
                        </div>
                    </div>
                </Carousel>
            </section>
            {/* About Us Section */}
            <section className='grid grid-cols-1 lg:grid-cols-2 bg-gray-300 bg-opacity-25'>
                <div className='bg-circle relative flex justify-center'>
                    <img className='absolute max-h-[120%] me-6 -top-8' src="https://scroar.net/wp-content/uploads/2021/10/IMG_2832-700x900.png" alt="" />
                </div>
                <div className='flex justify-center'>
                    <div className='my-16 lg:pe-20 text-right'>
                        <h3 className='text-4xl font-bold tracking-tighter text-blue-600 mb-8'>About Us</h3>
                        <h1 className='text-5xl font-bold font-serif'>Providing Best Quality & <span className='text-blue-500 text-6xl'>Original</span> Action Figures </h1>
                        <p className='w-[85%] inline-block my-8 text-lg text-gray-500'>Get all latest action figures from Marvel or DC superheros to add to your collection, or gift it to your closest person, friends or your kids on Cristsmas.We provide up-to-date products all around the world.</p>
                        <button className='px-8 bg-blue-600 text-white py-4 font-bold rounded-full hover:bg-blue-700'>Contact Us</button>
                    </div>
                </div>
            </section>
            {/* Our Collection Section*/}
            <section className='py-20 bg-blue-500 bg-opacity-20'>
                <div className="text-center">
                    <h3 className='text-4xl font-bold tracking-tighter text-blue-600'>Our Collections</h3>
                    <h1 className='w-[50%] inline-block text-5xl font-bold font-serif my-8'>Check Our Best Action Figures</h1>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12 px-16'>
                    <div className='flex flex-col justify-center space-y-8'>
                        <div className='w-full flex justify-center'>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/1200px-Marvel_Logo.svg.png" className='h-12 w-20' alt="" />
                        </div>
                        <div className='h-32 xl:h-80 2xl:h-96'>
                            <Carousel
                                indicators={false}
                                leftControl=" "
                                rightControl=" "
                                slideInterval={3000}>
                                <img
                                    src="https://cdn.popcultcha.com.au/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/h/a/hasf0121-marvel-hulk-vs-abomination-gamerverse-marvel-legends-6-inch-scale-action-figure-2-pack-popcultcha-01.png"
                                    alt="..." className="h-32 lg:h-80"
                                />
                                <img
                                    src="https://i.pinimg.com/originals/8e/5e/d6/8e5ed6934c7612750d7d130ad8e82cc4.png"
                                    alt="..." className="h-32 lg:h-80"
                                />
                            </Carousel>
                        </div>
                        <div className='h-32 xl:h-80 2xl:h-96'>
                            <Carousel
                                indicators={false}
                                leftControl=" "
                                rightControl=" "
                                slideInterval={4000}>
                                <img
                                    src="https://cdn.shopify.com/s/files/1/0614/9675/4394/products/product-image-1948073786-removebg-preview.png"
                                    alt="..." className="h-32 lg:h-80"
                                />
                                <img
                                    src="https://i0.wp.com/www.actionfigureinsider.com/wpress/wp-content/uploads/2017/02/MARVEL-LEGENDS-SERIES-3.75-INCH-2-PACK-Figure-Assortment-GOTG-in-pkg.png"
                                    alt="..." className="h-32 lg:h-80"
                                />
                            </Carousel>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center space-y-8'>
                        <div className='w-full flex justify-center'>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3d/DC_Comics_logo.svg" className='h-14 w-20' alt="" />
                        </div>
                        <div className='h-32 xl:h-80 2xl:h-96'>
                            <Carousel
                                indicators={false}
                                leftControl=" "
                                rightControl=" "
                                slideInterval={3000}>
                                <img
                                    src="https://cdn.popcultcha.com.au/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/m/c/mcf15424-dc-comics-batman-dark-nights-metal-dc-multiverse-7-inch-action-figure-popcultcha-01.png"
                                    alt="..." className="h-32 lg:h-80"
                                />
                                <img
                                    src="https://www.tapoutcollectables.com.au/wp-content/uploads/2021/03/mcf15086-01.png"
                                    alt="..." className="h-32 lg:h-80"
                                />
                            </Carousel>
                        </div>
                        <div className='h-32 xl:h-80 2xl:h-96'>
                            <Carousel
                                indicators={false}
                                leftControl=" "
                                rightControl=" "
                                slideInterval={4000}>
                                <img
                                    src="https://cdn.shoplightspeed.com/shops/645219/files/47415854/1652x1652x2/mcfarlane-toys-dc-direct-black-adam-comics-superma.jpg"
                                    alt="..." className="h-32 lg:h-80"
                                />
                                <img
                                    src="https://i.ebayimg.com/images/g/bwwAAOSwc89jn3zm/s-l500.png"
                                    alt="..." className="h-32 lg:h-80"
                                />
                            </Carousel>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center space-y-8'>
                        <div className='w-full flex justify-center'>
                            <img src="https://www.themoviedb.org/t/p/original/15cw5VeFfi7SAF7R2OTTpmNK5B5.png" className='h-12 w-20' alt="" />
                        </div>
                        <div className='h-32 xl:h-80 2xl:h-96'>
                            <Carousel
                                indicators={false}
                                leftControl=" "
                                rightControl=" "
                                slideInterval={3000}>
                                <img
                                    src="https://cdn.popcultcha.com.au/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/t/h/the_boys_-_starlight_ultimate_7_scale_action_figure.png"
                                    alt="..." className="h-32 lg:h-80"
                                />
                                <img
                                    src="https://cdn.popcultcha.com.au/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/f/u/fun48194-the-boys-a-train-pop-vinyl-figure-popcultcha-01.png"
                                    alt="..." className="h-32 lg:h-80"
                                />
                            </Carousel>
                        </div>
                        <div className='h-32 xl:h-80 2xl:h-96'>
                            <Carousel
                                indicators={false}
                                leftControl=" "
                                rightControl=" "
                                slideInterval={4000}>
                                <img
                                    src="https://www.lojatsc.com.br/wp-content/uploads/2020/09/Funko-Pop-The-Boys-Homelander-978.png"
                                    alt="..." className="h-32 lg:h-80"
                                />
                                <img
                                    src="https://bunker.com.mk/wp-content/uploads/fun48189-the-boys-queen-maeve-pop.png"
                                    alt="..." className="h-32 lg:h-80"
                                />
                            </Carousel>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home