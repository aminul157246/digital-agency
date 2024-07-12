import Image from 'next/image';
import hero from '../../public/hero.png'

const HomePage = () => {
  
  return (
    <div className='flex h-screen px-12 items-center'>
       <div className='flex-1'>
       <h1 className="text-6xl font-bold">
          Better design for your digital products.
        </h1>
        <p className="pt-4">
          Turning your Idea into Reality. We bring together the teams from <br /> the
          global tech industry.
        </p>
          <button className='px-4 py-2 rounded mt-4 bg-green-600 text-white'>See Work</button>
       </div>
       <div className='flex-1'>
        <Image className='transform translate-y-10' src={hero} alt="hero.png" width={600} height={600} />
       </div>
    </div>
  );
};

export default HomePage;