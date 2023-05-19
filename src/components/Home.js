import React from 'react'
import { Carousel } from 'flowbite-react'

function Home() {
    return (
        <>
            {/* Banner Section */}
            <div className="h-56 sm:h-64 md:h-96 2xl:h-[90vh] bg-black bg-auto">
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
            </div>
        </>
    )
}

export default Home