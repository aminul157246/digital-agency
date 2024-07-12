import Image from 'next/image';
import aboutImg from '../../../public/about.jpeg';
const AboutPage = () => {
    return (
        <div className='px-12  space-y-6'>
      <div >
        <Image
          src={aboutImg}
          alt=""
          width={900}
          height={600}
          
        />
      </div>
      <div >
        <div >
          <h1 className='text-2xl font-bold'>Who Are We?</h1>
          <p >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
            beatae, a suscipit eos. Animi quibusdam cum omnis officiis
            <br />
            <br />
            voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
            esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
            officiis voluptatum quo ea eveniet?
          </p>
        </div>
        <div >
          <h1 className='mt-6 text-2xl font-bold'>What We Do?</h1>
          <p >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
            Creative Illustrations
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>
          <button url="/contact" text="Contact"> </button>
        </div>
      </div>
    </div>
    );
};

export default AboutPage;