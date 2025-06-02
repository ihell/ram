import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const HeroSection = () => {
  return (
   <section className="h-screen bg-gradient-to-b
   from-violet-900 to-black flex xl:flex-row
   flex-col-reverse items-center justify-between
   lg:px-24 px-10 relative overflow-hidden">

    {/* left section */}
    <div className='z-40 xl:mb-0 mb-[20%]'>
        <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                type: 'spring',
                stiffness: 40,
                damping: 25,
                delay: 1.3,
                duration: 1.5
            }}
            className="text-5xl md:text-7xl
            lg:text-8xl font-bold z-10 mb-6">
            Building Fast <br /> Reliable
            Results
        </motion.h1>

        <motion.p
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                type: 'spring',
                stiffness: 40,
                damping: 25,
                delay: 1.8,
                duration: 1.5
            }}
            className='text-xl md:text-1xl
            lg:text-2xl text-purple-200 max-w-2xl'>
                 Lorem ipsum dolor sit amet,
                 consectetur adipiscing elit.
                 Nunc eu consectetur nisi.
                 Fusce id molestie lacus.
                 Nam interdum erat in risus blandit,
                 eu pretium mauris porttitor.
                 Aenean non ultrices nunc.
                 Mauris viverra pulvinar est non pharetra.
                 Pellentesque id vulputate odio.
                 Nunc condimentum felis sed ex finibus laoreet.
                 Duis maximus, enim in molestie maximus,
                 neque erat sagittis purus, ac elementum ante urna nec tortor.
                 Morbi eget nisi quis ante venenatis molestie ut eget nulla.
                 Aenean eget nisl volutpat, feugiat metus at, vulputate massa. 
        </motion.p>
    </div>

    {/* right section */}
    <Spline className='absolute xl:right-
    [-28%] right-0 top-[20%] lg:top-0' scene="https://prod.spline.design/Nj7pyJ0fVqbDsq3S/scene.splinecode" />

   </section>
  )
}

export default HeroSection