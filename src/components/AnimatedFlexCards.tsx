import React, { useState, useEffect } from 'react';

interface CardData {
  id: string;
  number: number;
  title: string;
  description: string;
  backgroundImage: string;
}

interface AnimatedFlexCardsProps {
  cards: CardData[];
}

const AnimatedFlexCards: React.FC<AnimatedFlexCardsProps> = ({ cards }) => {
  const [selectedCard, setSelectedCard] = useState(cards[0]?.id || '');
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  return (
    <div className="w-full flex items-center justify-center bg-transparent px-4 py-10">
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center max-w-6xl mx-auto w-full">
        {cards.map((card) => (
          <div 
            key={card.id}
            className={`relative rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] 
              ${selectedCard === card.id 
                ? 'sm:flex-[2] shadow-xl' 
                : 'sm:flex-[0.5]  shadow-lg'}`}
            style={{
              height: isMobile ? '16rem' : '24rem',
              backgroundImage: `url(${card.backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            onClick={() => setSelectedCard(card.id)}
          >
            {/* Black Gradient from Bottom */}
            <div className={`absolute inset-0 bg-gradient-to-t from-black/90 to-transparent 
              transition-opacity duration-300 ${selectedCard === card.id ? 'opacity-100' : 'opacity-70'}`} />
            
            {/* Card content */}
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white z-10">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-gray-900 text-white rounded-full w-10 h-10 flex-shrink-0 flex items-center justify-center">
                  {card.number}
                </div>
                
                <div className={`transition-all duration-500 ease-out overflow-hidden
                  ${selectedCard === card.id || isMobile 
                    ? 'opacity-100 translate-y-0 max-h-40' 
                    : 'opacity-0 translate-y-4 max-h-0'}`}
                >
                  <h4 className="text-lg sm:text-xl font-bold uppercase tracking-wide">
                    {card.title}
                  </h4>
                  <p className="text-sm sm:text-base mt-1 sm:mt-2">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedFlexCards;
