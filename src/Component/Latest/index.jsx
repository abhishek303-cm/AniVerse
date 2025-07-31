import React from 'react';
import './Latest.css';
import img3 from '../../assets/SoloLeveling.jpg';
import img4 from '../../assets/Kaiju.jpeg';
import img5 from '../../assets/SakamotoDays.webp';
import img6 from '../../assets/TheApothecaryDiaries.png';
import img7 from '../../assets/Aot.jpeg';
import img8 from '../../assets/Jjk.jpg';
import img9 from '../../assets/DemonSlayer.jpeg';
import img10 from '../../assets/OnePiece.jpg';
import img11 from '../../assets/Chainsaw.jpeg';
import img12 from '../../assets/Frieren.jpg';
import img13 from '../../assets/BlueLock.png';
import img14 from '../../assets/OshinoKo.jpg';




const AnimeTypes = [ 
  { 
    types: 'Latest Releases',
    list: [
      {
        title: 'Solo Leveling',
        description:
          'Jinwoo, the weakest hunter, gains a game-like system that lets him grow stronger and face deadly dungeons.',
        image: img3,
      },
      {
        title: 'Kaiju No. 8',
        description:
          'Kafka gains the power to transform into a kaiju while secretly fighting monsters threatening Japan.',
        image: img4,
      },
      {
        title: 'Sakamoto Days',
        description:
          'A retired hitman turned shopkeeper must fight to protect his peaceful life from his criminal past.',
        image: img5,
      },
      {
        title: 'The Apothecary Diaries',
        description:
          'Maomao, a smart apothecary, solves palace mysteries with her sharp knowledge of medicine.',
        image: img6,
      },
    ]
  },
  { 
    types: 'Popular',
    list: [
      {
        title: 'Attack on Titan',
        description:
          'Humanity fights for survival against giant humanoid creatures known as Titans.',
        image: img7, 
      },
      {
        title: 'Jujutsu Kaisen',
        description:
          'Yuji Itadori joins a secret organization to destroy powerful curses and save lives.',
        image: img8,
      },
      {
        title: 'Demon Slayer',
        description:
          'Tanjiro becomes a demon slayer to avenge his family and save his sister.',
        image: img9,
      },
      {
        title: 'One Piece',
        description:
          'Luffy and his pirate crew search for the legendary One Piece treasure.',
        image: img10,
      },
    ]
  },
  { 
    types: 'Hot Picks',
    list: [
      {
        title: 'Chainsaw Man',
        description:
          'Denji, a devil hunter with a chainsaw heart, battles demons in a brutal world.',
        image: img11,
      },
      {
        title: 'Frieren: Beyond Journey’s End',
        description:
          'An elf mage reflects on mortality and memories after the hero’s journey ends.',
        image: img12,
      },
      {
        title: 'Blue Lock',
        description:
          'Japan launches a brutal soccer competition to create the world’s best striker.',
        image: img13,
      },
      {
        title: 'Oshi no Ko',
        description:
          'A doctor reincarnates as the son of a pop idol in a dark twist on fame and fate.',
        image: img14,
      },
    ]
  }
];


function Latest() {
  return (
    <>
      {AnimeTypes.map((section, index) => (
        <div key={index} className="latest-section">
          <h2><span>{section.types}</span></h2>

          <div className="latest-grid">
            {section.list.map((anime, i) => (
              <div key={i} className="card">
                <img src={anime.image} alt={anime.title} />
                <div className="card-overlay">
                  <h3>{anime.title}</h3>
                  <p className="description">{anime.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default Latest;





