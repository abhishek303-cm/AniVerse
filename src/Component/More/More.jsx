// import React from 'react'

// function More() {
//   return (
//      <div className="min-h-screen bg-zinc-900 text-white flex flex-col items-center justify-center p-6">
//       <h2 className="text-lg md:text-xl mb-6">How are you feeling right now?</h2>

//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-3xl">
//         {moods.map((mood, index) => (
//           <button
//             key={index}
//             className="border border-red-500 rounded-md px-4 py-2 text-sm md:text-base hover:bg-red-600 transition"
//           >
//             <span className="mr-2">{mood.emoji}</span>
//             {mood.label.toUpperCase()}
//           </button>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default More;



// import React from 'react';

// const moods = [
//   { emoji: '😄', label: 'Cheerful' },
//   { emoji: '🥲', label: 'Nostalgic' },
//   { emoji: '😹', label: 'Humorous' },
//   { emoji: '🏆', label: 'Competative' },
//   { emoji: '🤡', label: 'Chill' },
//   { emoji: '💘', label: 'Romantic' },
//   { emoji: '🌀', label: 'Weird' },
//   { emoji: '😈', label: 'Horny' },
//   { emoji: '🔥', label: 'Enthusiastic' },
//   { emoji: '🧠', label: 'Imaginative' },
//   { emoji: '🟪', label: 'Rebellious' },
//   { emoji: '😢', label: 'Emotional' },
//   { emoji: '🦸', label: 'Heroic' },
//   { emoji: '🛡️', label: 'Unafraid' },
//   { emoji: '🌟', label: 'Inspirational' },
//   { emoji: '🍔', label: 'Hungry' },
//   { emoji: '😞', label: 'Hopeless' },
//   { emoji: '😬', label: 'FOMO' },
// ];

// function More() {
//   return (
//     <div className="min-h-screen bg-zinc-900 text-white flex flex-col items-center justify-center p-6">
//       <h2 className="text-lg md:text-xl mb-6">How are you feeling right now?</h2>

//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-3xl">
//         {moods.map((mood, index) => (
//           <button
//             key={index}
//             className="border border-red-500 rounded-md px-4 py-2 text-sm md:text-base hover:bg-red-600 transition"
//           >
//             <span className="mr-2">{mood.emoji}</span>
//             {mood.label.toUpperCase()}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default More;





import React from 'react';
import './More.css';

const moods = [
  { emoji: '😄', label: 'Cheerful' },
  { emoji: '🥲', label: 'Nostalgic' },
  { emoji: '😹', label: 'Humorous' },
  { emoji: '🏆', label: 'Competative' },
  { emoji: '🤡', label: 'Chill' },
  { emoji: '💘', label: 'Romantic' },
  { emoji: '🌀', label: 'Weird' },
  { emoji: '😈', label: 'Horny' },
  { emoji: '🔥', label: 'Enthusiastic' },
  { emoji: '🧠', label: 'Imaginative' },
  { emoji: '🟪', label: 'Rebellious' },
  { emoji: '😢', label: 'Emotional' },
  { emoji: '🦸', label: 'Heroic' },
  { emoji: '🛡️', label: 'Unafraid' },
  { emoji: '🌟', label: 'Inspirational' },
  { emoji: '🍔', label: 'Hungry' },
  { emoji: '😞', label: 'Hopeless' },
  { emoji: '😬', label: 'FOMO' },
];

function More() {
  return (
    <div className="more-container">
      <h2 className="more-heading">How are you feeling right now?</h2>

      <div className="mood-grid">
        {moods.map((mood, index) => (
          <button key={index} className="mood-button">
            <span style={{ marginRight: '0.5rem' }}>{mood.emoji}</span>
            {mood.label.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
}

export default More;
