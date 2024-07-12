import Link from "next/link";
import illustration from '../../../public/illustrate.png';
import websites from '../../../public/website.png';
import apps from '../../../public/apps.png';


import Image from 'next/image';
const Portfolio = () => {
  return (
    <div className='m-12 px-12'>
      <h1 className='text-2xl font-semibold'>Choose a gallery</h1>
      <div className='flex justify-center items-center gap-12'>
        <Link href="/portfolio/illustrations" className=''>
          <Image src={illustration} alt="" width={280} height={300}></Image>
          <p className='text-xl font-bold text-white pl-12 -mt-12'>Illustrations</p>
        </Link>
        <Link href="/portfolio/websites" className=''>
        <Image src={websites} alt="" width={500} height={500}></Image>

          <p className='text-xl font-bold text-white pl-12 -mt-12'>Websites</p>
        </Link>
        <Link href="/portfolio/applications" className=''>
        <Image src={apps} alt="" width={500} height={500}></Image>

          <p className='text-xl font-bold text-white pl-12 -mt-12'>Application</p>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;