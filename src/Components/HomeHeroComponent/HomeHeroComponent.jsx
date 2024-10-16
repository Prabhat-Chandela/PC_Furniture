import React from 'react';

function HomeHeroComponent() {
  return (
    <section className='w-full aspect-[3/5] sm:aspect-[16/13] lg:aspect-[16/11] bg-[url("\HeroImage.jpg")] bg-center lg:bg-bottom bg-cover bg-no-repeat flex flex-col justify-between'>

      <div className='w-full p-5 sm:px-10 flex flex-col gap-7'>

        <div className='pt-20 sm:pt-24 lg:pt-32'>

          <h1 className='text-[7vw] sm:text-[4vw] font-semibold'>
            Furnish your dream
          </h1>
          <h1 className='text-[7vw] sm:text-[4vw] font-semibold'>
            with our products!
          </h1>

        </div>

        <div className='w-[65%] sm:w-[40%] xl:w-[36%]'>

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

      <div className='w-full flex justify-end'>
        <div className='w-full sm:w-[80%] p-2 lg:p-3 bg-[#F6F6F6] sm:rounded-tl-lg relative'>

          <div className='hidden sm:block absolute w-2 aspect-square invertedRadius -top-2 right-0 -rotate-180 z-10'></div>
          <div className='hidden sm:block absolute w-2 aspect-square invertedRadius bottom-0 -left-2 -rotate-180 z-10'></div>
        
          <div className='w-full bg-[#679936] py-4 px-3 sm:p-5 lg:p-9 rounded-lg flex items-center justify-between'>

            <div className='flex'>

              <div className='text-white flex flex-col lg:flex-row items-center gap-5  lg:gap-7 text-[10px] leading-3 sm:text-xs font-extralight'> <span className='font-bold text-xl lg:text-2xl'>975+</span>

                <div>
                  <p>Furtinture and</p>
                  <p>Home Equipments</p>
                </div>

              </div>

            </div>

            <div className='flex'>

              <div className='text-white flex flex-col lg:flex-row items-center gap-5  lg:gap-7 text-[10px] leading-3 sm:text-xs font-extralight'> <span className='font-bold text-xl lg:text-2xl'>320+</span>

                <div>
                  <p>Fresh interior</p>
                  <p>design Theme</p>
                </div>

              </div>

            </div>

            <div className='flex'>

              <div className='text-white flex flex-col lg:flex-row items-center gap-5  lg:gap-7 text-[10px] leading-3 sm:text-xs font-extralight'> <span className='font-bold text-xl lg:text-2xl'>462+</span>

                <div>
                  <p>Happy Clients</p>
                  <p>and More</p>
                </div>

              </div>

            </div>


          </div>
        </div>
      </div>

    </section>
  )
}

export default HomeHeroComponent;