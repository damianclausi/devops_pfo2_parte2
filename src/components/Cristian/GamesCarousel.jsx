import React, { useState, useEffect } from 'react';
import './GamesCarousel.css';
import eldenRingPhoto from '../../assets/elden-ring-photo.jpg';
import skyrimPhoto from '../../assets/skyrim.jpg';
import stalkerPhoto from '../../assets/stalker-photo.jpg';

const gamesData = [
  {
    title: 'Elden Ring',
    image: eldenRingPhoto,
    description: 'Uno de los juegos más completos que jugué en mi vida, historia, mundo abierto, arte, dificultad épicamente logradas.'
  },
  {
    title: 'Elder Scroll 5: Skyrim',
    image: skyrimPhoto,
    description: 'Fué el juego que me hizo descubrir el mundo abierto, cientos de horas gastadas en side-quests.'
  },
  {
    title: 'Stalker: Call of Pripyat',
    image: stalkerPhoto,
    description: 'Juego adictivo en el que tenes que sobrevivir en zona hostil llena de radiación, anomalías, mutantes y soldados.'
  }
];

const GamesCarousel = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % gamesData.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex - 1 + gamesData.length) % gamesData.length);
  };

  useEffect(() => {
    const slidesContainer = document.querySelector('[data-slides]');
    if (slidesContainer) {
      const slideWidth = slidesContainer.offsetWidth;
      slidesContainer.style.transform = `translateX(-${currentSlideIndex * slideWidth}px)`;
    }
  }, [currentSlideIndex]);

  return (
    <section id="juegos">
      <h2>Mis Juegos Favoritos</h2>
      <div className="carousel-container">
        <button className="carousel-button prev" onClick={goToPrevSlide}>&#8656;</button>
        <div className="carousel" data-carousel>
          <ul data-slides style={{ display: 'flex', transition: 'transform 0.5s ease-in-out' }}>
            {gamesData.map((game, index) => (
              <li className="juego" key={index} style={{ minWidth: '100%' }}>
                <h3>{game.title}</h3>
                <img src={game.image} alt={`Poster ${game.title}`} />
                <p>{game.description}</p>
              </li>
            ))}
          </ul>
        </div>
        <button className="carousel-button next" onClick={goToNextSlide}>&#8658;</button>
      </div>
    </section>
  );
};

export default GamesCarousel;