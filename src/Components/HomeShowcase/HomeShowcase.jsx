import React from 'react';
import { MoveUpRight } from 'lucide-react';

function HomeShowcase() {
    return (
        <section className='w-full aspect-[3/5] sm:aspect-[16/14] lg:aspect-[16/7] grid grid-cols-12  sm:grid-rows-8 gap-2'>

            <div className='col-span-12 lg:col-span-6 bg-[url("\showcase01.jpg")] bg-bottom sm:row-span-4 lg:row-span-8 sm:rounded-xl flex flex-col justify-between'>

                <div className='w-full flex-col justify-start'>

                    <div className='flex  bg-white w-fit pr-5 pb-2 rounded-r-xl pl-2 sm:pl-0'>
                        <p className='w-fit px-2 py-1 text-[8px] border border-[#679936] text-[#679936] rounded-xl'>Our Collection</p>
                    </div>

                    <p className='w-fit text-xl font-semibold bg-white pl-2 sm:pl-0 pr-9 rounded-r-xl'>Modern</p>

                    <div className='w-fit bg-white pl-2 sm:pl-0 pb-[2px] pr-12 rounded-r-2xl relative'>
                        <div className='absolute w-2 aspect-square invertedRadius -bottom-2 left-0  z-10'></div>
                        <p className='w-fit text-xl font-semibold '>Furniture</p>
                    </div>


                </div>

                <div className='w-full flex justify-end'>

                    <div className='w-fit p-2 bg-white rounded-tl-xl relative'>

                        <div className='hidden sm:block absolute w-[12px] aspect-square invertedRadiusSecond -top-3 right-0 -rotate-180 z-10'></div>
                        <div className='absolute w-[12px] aspect-square invertedRadiusSecond bottom-0 -left-3 -rotate-180 z-10'></div>

                        <button className='w-14 sm:w-[65px] aspect-square p-2 rounded-2xl bg-black text-white grid place-items-center hover:scale-110 hover:rotate-90 transition-all ease-in duration-200'><MoveUpRight size={30} /></button>
                    </div>

                </div>

            </div>

            <div className='col-span-12 sm:col-span-6 bg-[url("\showcase02.jpg")] bg-bottom bg-no-repeat  sm:row-span-4 sm:rounded-xl  flex flex-col justify-between'>

                <div className='w-full flex flex-col gap-5 items-start p-5'>
                    <p className='w-fit px-3 py-1 text-xs bg-[#679936] text-[#fff] rounded-xl'>New Offer</p>
                    <div>
                        <p className='text-white text-2xl'>Outdoor</p>
                        <p className='text-white text-2xl'>Seating</p>
                    </div>

                </div>

                <div className='w-full flex justify-end'>

                    <div className='w-fit p-2 bg-white rounded-tl-xl relative'>
                        <div className='hidden sm:block absolute w-[12px] aspect-square invertedRadiusSecond -top-3 right-0 -rotate-180 z-10'></div>
                        <div className='absolute w-[12px] aspect-square invertedRadiusSecond bottom-0 -left-3 -rotate-180 z-10'></div>

                        <button className='w-14 aspect-square p-2 rounded-2xl bg-black text-white grid place-items-center hover:scale-110 hover:rotate-90 transition-all ease-in duration-200'><MoveUpRight size={24} /></button>
                    </div>

                </div>

            </div>

            <div className='col-span-12 sm:col-span-6 bg-[url("\showcase03.jpg")] bg-center sm:row-span-4 sm:rounded-xl flex flex-col justify-between'>

                <div className='w-full flex flex-col gap-5 items-start p-5'>

                    <p className='w-fit px-3 py-1 text-xs bg-[#679936] text-[#fff] rounded-xl'>New Offer</p>
                    <div>
                        <p className='text-white text-2xl'>Outdoor</p>
                        <p className='text-white text-2xl'>Seating</p>
                    </div>

                </div>

                <div className='w-full flex justify-end'>

                    <div className='w-fit p-2 bg-white rounded-tl-xl relative'>
                        <div className='hidden sm:block absolute w-[12px] aspect-square invertedRadiusSecond -top-3 right-0 -rotate-180 z-10'></div>
                        <div className='absolute w-[12px] aspect-square invertedRadiusSecond bottom-0 -left-3 -rotate-180 z-10'></div>

                        <button className='w-14 aspect-square p-2 rounded-2xl bg-black text-white grid place-items-center hover:scale-110 hover:rotate-90 transition-all ease-in duration-200'><MoveUpRight size={24} /></button>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default HomeShowcase;