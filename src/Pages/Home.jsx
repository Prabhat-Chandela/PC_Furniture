import React from 'react';
import { HomeHeroComponent, HomeShowcase } from '../Components';

function Home() {
  return (
    <main className='w-full flex flex-col gap-4'>

      <div className='w-full sm:rounded-lg overflow-hidden'>
        <HomeHeroComponent />
      </div>

      <div className='w-full'>
        <HomeShowcase/>
      </div>

    </main>
  )
}

export default Home;