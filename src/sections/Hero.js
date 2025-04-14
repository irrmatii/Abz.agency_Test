import React from 'react';
import Buttons from "../components/Buttons";

const Hero = () => {
    return (
        <div className="w-full h-[500px] lg:max-h-[650px] mb-[140px] xl:container flex justify-center relative">
            <img
                src="/assets/pexels-alexandr-podvalny-1227513.webp"
                alt="Background"
                className="absolute top-0 left-0 w-full h-full object-cover object-bottom"
                loading="eager"
                fetchpriority="high"
            />
            <div className="w-full h-full bg-[rgba(0,0,0,0.5)] flex items-center justify-center z-10">
                <div className="max-w-[380px] w-full min-h-[323px] h-auto flex flex-col gap-[21px]">
                    <h1 className="text-center text-white">Test-assignment for front-end developer</h1>
                    <p className='text-center text-white'>What defines a good front-end developer is one that
                        has
                        skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as
                        they'll
                        be building web interfaces with accessibility in mind. They should also be excited to
                        learn, as
                        the world of Front-End Development keeps evolving.</p>
                    <div className="w-full flex justify-center">
                        <Buttons value={"Sign up"}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;