import React from 'react';

function HomeComponent() {
  return (
    <section className='w-full aspect-[3/4] sm:aspect-[16/11] bg-[url("\HeroImage.jpg")] bg-center lg:bg-bottom bg-cover bg-no-repeat'>

      <div className='w-full p-5 sm:px-10 flex flex-col gap-7'>

        <div className='pt-14 sm:pt-24 lg:pt-32'>

          <h1 className='text-[7vw] sm:text-[4vw] font-semibold'>
            Furnish your dream
          </h1>
          <h1 className='text-[7vw] sm:text-[4vw] font-semibold'>
            with our products!
          </h1>

        </div>

        <div className='hidden sm:block w-[40%] xl:w-[36%]'>

          <p className='text-xs lg:text-sm font-light'>Unleash your creativity with our versatile furniture collection, where comfort meets quality.</p>

        </div>

        <div className='flex gap-5'>

          <button className='bg-[#679936] hover:bg-[#081508] text-[#F6F6F6] px-5 py-1 lg:px-10 lg:py-2 rounded-3xl transition-all ease-in-out duration-200'>
            Buy Now
          </button>

          <button className='bg-transparent hover:bg-[#679936] text-[#679936] hover:text-[#F6F6F6] border border-[#679936] px-5 py-1 lg:px-10 lg:py-2 rounded-3xl transition-all ease-in-out duration-200'>
            Explore
          </button>

        </div>

      </div>

      <div>

      </div>

    </section>
  )
}

export default HomeComponent;