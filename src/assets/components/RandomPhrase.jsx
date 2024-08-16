import { useState } from "react";

export const RandomPhrase = () => {
  const quotes = [
    "La vida es lo que pasa mientras estás ocupado haciendo otros planes. - John Lennon",
    "El propósito de nuestras vidas es ser felices. - Dalai Lama",
    "La vida es realmente simple, pero insistimos en hacerla complicada. - Confucio",
    "Ama la vida que vives. Vive la vida que amas. - Bob Marley",
  ];

  const [phrase, setPhrase] = useState(quotes[0]);

  const handlePhrase = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setPhrase(quotes[randomIndex]);
  };

  return (
    <div className="random-phrase-container">
      <p  className="random-phrase">{phrase}</p>
      <button className="random-phrase-button" onClick={handlePhrase}>Next</button>
    </div>
  );
};
