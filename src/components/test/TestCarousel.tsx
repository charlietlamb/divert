import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/lib/utils";
import { testData } from "./data/testData";
import Slide from "./Slide";
import { motion } from "framer-motion";

type PropType = {
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const options = props.options || {};
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <motion.div
      className="embla m-0 w-full"
      initial={{ opacity: 0, x: 200 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {testData.map((data, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number min-h-12 text-slate-200">
                <Slide data={data} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={cn(
                "embla__dot mx-2 h-4 w-4 rounded-full border border-slate-200 bg-slate-200",
                index === selectedIndex && " embla__dot--selected",
              )}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default EmblaCarousel;
