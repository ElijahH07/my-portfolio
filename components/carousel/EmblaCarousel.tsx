import React, { useCallback, useEffect, useState } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import Image from "next/image";

import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'

type PropType = {
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoScroll({ playOnInit: false })
  ])
  const [isPlaying, setIsPlaying] = useState(false)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const onButtonAutoplayClick = useCallback(
    (callback: () => void) => {
      const autoScroll = emblaApi?.plugins()?.autoScroll
      if (!autoScroll) return

      const resetOrStop =
        autoScroll.options.stopOnInteraction === false
          ? autoScroll.reset
          : autoScroll.stop

      resetOrStop()
      callback()
    },
    [emblaApi]
  )

  const toggleAutoplay = useCallback(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll
    if (!autoScroll) return

    const playOrStop = autoScroll.isPlaying()
      ? autoScroll.stop
      : autoScroll.play
    playOrStop()
  }, [emblaApi])

  useEffect(() => {
    toggleAutoplay();

    const autoScroll = emblaApi?.plugins()?.autoScroll
    if (!autoScroll) return

    setIsPlaying(autoScroll.isPlaying())
    emblaApi
      .on('autoScroll:play', () => setIsPlaying(true))
      .on('autoScroll:stop', () => setIsPlaying(false))
      .on('reInit', () => setIsPlaying(autoScroll.isPlaying()))
  }, [emblaApi])

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div onMouseDown={toggleAutoplay} className="embla__container">
            <div className="embla__slide">
              <div className="embla__slide__number">
                <Image
                  src = "/logos/C_Logo.png"
                  alt = "C++"
                  width= {100}
                  height= {100}>
                </Image>
              </div>
            </div>
            <div className="embla__slide">
              <div className="embla__slide__number">
                <Image
                  src = "/logos/React_Logo.png"
                  alt = "C++"
                  width= {100}
                  height= {100}>
                </Image>
              </div>
            </div>
            <div className="embla__slide">
              <div className="embla__slide__number">
                <Image
                  src = "/logos/Matlab_Logo.png"
                  alt = "C++"
                  width= {100}
                  height= {100}>
                </Image>
              </div>
            </div>
            <div className="embla__slide">
              <div className="embla__slide__number">
                <Image
                  src = "/logos/Python_Logo.png"
                  alt = "C++"
                  width= {100}
                  height= {100}>
                </Image>
              </div>
            </div>
            <div className="embla__slide">
              <div className="embla__slide__number">
                <Image
                  src = "/logos/NET_Core_Logo.png"
                  alt = "C++"
                  width= {100}
                  height= {100}>
                </Image>
              </div>
            </div>
            <div className="embla__slide">
              <div className="embla__slide__number">
                <span className="font-switzer-reg text-white">...</span>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
