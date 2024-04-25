import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();

const items = [
    <img key="1" src="/vr6.jpg" onDragStart={handleDragStart} role="presentation" className="w-full h-[400px] object-contain" />,
    <img key="3" src="/vr7.jpg" onDragStart={handleDragStart} role="presentation" className="w-full h-[400px] object-contain" loading="lazy" />,
    <img key="5" src="/vr5.jpg" onDragStart={handleDragStart} role="presentation" className="w-full h-[400px] object-contain" loading="lazy" />,

];
const Gallery = () => {
    return (
        <div id="work" className="w-full bg-white dark:bg-bgBlack pt-5 flex flex-col items-center justify-center overflow-hidden ">
            <h1 className="font-extrabold text-4xl my-4 mx-2 bg-gradient-to-r text-transparent bg-clip-text from-bgGradient-start-500 to-bgGradient-end-500 dark:from-bgOrange dark:to-bgRose transition-all duration-300">Our work</h1>
            <AliceCarousel mouseTracking items={items} className="overflow-hidden" />
        </div>


    )
}

export default Gallery
