import React, { useEffect, useRef, useState } from 'react'
import styles from './EclipsesSlider.module.css'
import TotalEclipse from '../Eclipses/Total/Total'
import AnnularEclipse from '../Eclipses/Annular/Annular'
import PartialEclipse from '../Eclipses/Partial/Partial'

function EclipsesSlider() {
  const listRef = useRef();
  const eclipsesRef = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState({});

  const types = [
    {
        id: 1,
        title: 'Total Solar Eclipse',
        description: 'A total solar eclipse happens when the Moon passes between the Sun and Earth, completely blocking the face of the Sun. People located in the center of the Moon’s shadow when it hits Earth will experience a total eclipse. The sky will darken, as if it were dawn or dusk. Weather permitting, people in the path of a total solar eclipse can see the Sun’s corona, the outer atmosphere, which is otherwise usually obscured by the bright face of the Sun. A total solar eclipse is the only type of solar eclipse where viewers can momentarily remove their eclipse glasses (which are not the same as regular sunglasses) for the brief period of time when the Moon is completely blocking the Sun. The next total solar eclipse in the U.S. will be on April 8, 2024.',
        essentialData: ['They occur, on average, every 18 months. From the same location on Earth, you could see one approximately every 300 to 400 years.',`The area where the umbra touches the Earth is called the path of totality. It's only 100 miles wide and 10,000 miles long. You must be within this path to see the eclipse.`, `The period of time during which the Sun is completely obscured by the Moon is called totality. It can last from a few seconds to more than seven minutes. During this phase, you can safely remove your eclipse glasses and look at the Sun's corona since it's only as bright as the full Moon.`],
        element: <TotalEclipse selected={currentIndex === 0} />
    },
    {
        id: 2,
        title: 'Annular Solar Eclipse',
        description: 'An annular solar eclipse happens when the Moon passes between the Sun and Earth, but when it is at or near its farthest point from Earth. Because the Moon is farther away from Earth, it appears smaller than the Sun and does not completely cover the Sun. As a result, the Moon appears as a dark disk on top of a larger, bright disk, creating what looks like a ring around the Moon. The next annular eclipse in the U.S. will be on Oct. 14, 2023.',
        essentialData: ['The peak of an annular eclipse is called annularity, and the area on Earth where it can be seen is referred to as the annular path.', 'The annular path is small, with only a width of 93 miles.', 'An annular eclipse occurs every one to two years.', 'Annularity can last from a few seconds to over 12 minutes.'],
        element: <AnnularEclipse selected={currentIndex === 1} />
    },
    {
        id: 3,
        title: 'Partial Solar Eclipse',
        description: 'A partial solar eclipse happens when the Moon passes between the Sun and Earth but the Sun, Moon, and Earth are not perfectly lined up. Only a part of the Sun will appear to be covered, giving it a crescent shape. During a total or annular solar eclipse, people outside the area covered by the Moon’s inner shadow see a partial solar eclipse.',
        essentialData: ['Partial solar eclipses occur, on average, twice a year.', 'All solar eclipses start and end with a partial eclipse phase.', 'You should always use eye protection during any partial phase of a solar eclipse.'],
        element: <PartialEclipse selected={currentIndex === 2} />
    }
  ]

  const scrollToImage = (direction) => {
    if (direction === 'prev') {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? types.length - 1 : prevIndex - 1));
    } else {
      setCurrentIndex((prevIndex) => (prevIndex === types.length - 1 ? 0 : prevIndex + 1));
    }
  }

  useEffect(() => {
    const curr = eclipsesRef.current[currentIndex]
    if (curr) curr.scrollIntoView();
    setSelected(types[currentIndex])
  }, [currentIndex]);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.sliderContainer}>
        <div className={styles.leftArrow} onClick={() => scrollToImage('prev')}>&#10092;</div>
        <div className={styles.rightArrow} onClick={() => scrollToImage('next')}>&#10093;</div>
        <div className={styles.eclipseContainer}>
          <ul className={styles.ulContainer} ref={listRef}>
            {
              types.map((item, index) => {
                return (
                <li
                className={`${styles.liContainer} ${index === currentIndex ? styles.active : ''}`}
                  key={item.id}
                  ref={(ref) => {eclipsesRef.current[index] = ref}}
                >
                  {item.element}
                </li>)
              })
            }
          </ul>
        </div>
      </div>
      <h1 className={`${styles.titleH1}`}>{selected.title}</h1>
      <div className={styles.infoContainer}>
        <div className={styles.whatIs}>
          <span className={`${styles.title}`}>What is?</span>
          {selected.description}
        </div>
        <div className={styles.essentialDataContainer}>
          <span className={`${styles.title}`}>Essential Data:</span>
          <ul className={styles.essentialData}>
            {selected.essentialData && selected.essentialData.map((data, index) => (
              <li key={index}>
                {data}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default EclipsesSlider
