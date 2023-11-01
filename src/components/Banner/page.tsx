import Image from 'next/image';

import { Badge } from 'flowbite-react';
import { BiSolidHot } from 'react-icons/bi';
import { IBanner } from './types';

const Banner = ({ isImageRotate = false, title, subtitle, btnText, offerContent, imgSrc1, imgSrc2 }: IBanner) => {
    
    return (
        <div className={`h-[70vh] md:h-[60vh] sm:h-[65vh] bg-white lg:bg-zinc-50 flex flex-col-reverse gap-1 md:gap-0 sm:gap-5 md:flex-col-reverse sm:flex-row lg:flex-row items-start md:justify-center md:items-start lg:justify-around lg:items-center sm:px-5 text-black`}>
            <div>
                <h1 className='mt-3'>{title}</h1>
                <h3>{subtitle}</h3>
                <Badge color='red' icon={BiSolidHot} className="w-fit mt-3">{offerContent}</Badge>
                <button className="shopBtn mt-5 sm:mt-10">{btnText}</button>
            </div>
            <div className={`flex gap-0 sm:gap-2 transform sm:${isImageRotate ? '-rotate-6' : 'rotate-6'}`}>
                <div className={`h-[400px] w-[100vw] sm:w-[250px] relative border border-dotted border-green-900 transform-0 sm:transform sm:${isImageRotate ? 'translate-y-5' : '-translate-y-5'}`}>
                    <Image src={imgSrc1} layout="fill" objectFit="cover" alt='helo' className="p-1" />
                </div>
                <div className={`h-[400px] w-[250px] relative border border-dotted border-green-900 transform-0 sm:transform ${isImageRotate ? '-translate-y-5' : 'translate-y-5'} hidden sm:block`}>
                    <Image src={imgSrc2} layout="fill" objectFit="cover" alt='helo' className="p-1" />
                </div>
            </div>
        </div>
    )
}

export default Banner