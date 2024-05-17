import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


const MySlider = (props) => {
    const [activeSlide, setactiveSlide] = useState(props.activeSlide);

    const next = () =>
        activeSlide < props.data.length - 1 && setactiveSlide(activeSlide + 1);

    const prev = () => activeSlide > 0 && setactiveSlide(activeSlide - 1);

    const getStyles = (index) => {
        if (activeSlide === index)
            return {
                opacity: 1,
                transform: "translateX(0px) translateZ(0px) rotateY(0deg)",
                zIndex: 10
            };
        else if (activeSlide - 1 === index)
            return {
                opacity: 0.6,
                transform: "translateX(-240px) translateZ(-400px) rotateY(35deg)",
                zIndex: 9
            };
        else if (activeSlide + 1 === index)
            return {
                opacity: 0.6,
                transform: "translateX(240px) translateZ(-400px) rotateY(-35deg)",
                zIndex: 9
            };
        else if (activeSlide - 2 === index)
            return {
                opacity: 0.3,
                transform: "translateX(-480px) translateZ(-500px) rotateY(35deg)",
                zIndex: 8
            };
        else if (activeSlide + 2 === index)
            return {
                opacity: 0.3,
                transform: "translateX(480px) translateZ(-500px) rotateY(-35deg)",
                zIndex: 8
            };
        else if (index < activeSlide - 2)
            return {
                opacity: 0,
                transform: "translateX(-480px) translateZ(-500px) rotateY(35deg)",
                zIndex: 7
            };
        else if (index > activeSlide + 2)
            return {
                opacity: 0,
                transform: "translateX(480px) translateZ(-500px) rotateY(-35deg)",
                zIndex: 7
            };
    };

    return (
        <>
            {/* carousel */}
            <div className="slideC xl:w-[80.5rem] lg:w-[66rem]">
                {props.data.map((item, i) => (
                    <React.Fragment key={item.id}>
                        <div
                            className="slide xl:w-[80.5rem] lg:w-[66rem]"
                            style={{
                                background: item.bgColor,
                                boxShadow: `0 5px 20px ${item.bgColor}30`,
                                ...getStyles(i)
                            }}
                        >
                            <SliderContent {...item} index={Math.abs(activeSlide - i)} />
                        </div>
                        <div
                            className="reflection xl:w-[80.5rem] lg:w-[66rem]"
                            style={{
                                background: `linear-gradient(to bottom, ${'#eeeeee'}40, transparent)`,
                                ...getStyles(i)
                            }}
                        />
                    </React.Fragment>
                ))}
            </div>
            {/* carousel */}

            <div className="fixed bottom-[20px] flex gap-[40px]">
                <div
                    className="arrow-btn"
                    onClick={prev}
                    size="2x"
                >
                    <FaArrowLeft />
                </div>
                <div
                    className="arrow-btn"
                    onClick={next}
                    size="2x"
                >
                    <FaArrowRight />
                </div>
            </div>
        </>
    );
};

const SliderContent = ({ Component, index }) => {
    return (
        <div className="sliderContent animation-element appear"
            style={{ animationDelay: `${200 * index}ms` }}

        >
            <section className="z-10 w-full h-full lg:w-[115rem] xl:w-[126.8rem] lg:h-[62.5rem] flex justify-center p-10 sm:p-24 lg:p-0">
                <div className="xl:w-[80.5rem] lg:w-[66rem] w-full h-full lg:py-6">
                    <div className="p-[30px] relative bg-white text-[#919191] h-full  rounded-[10px] shadow-lg">
                        {Component()}
                    </div>
                </div>
            </section>
        </div>
    );
};
export default MySlider;
