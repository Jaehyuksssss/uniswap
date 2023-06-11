import { useEffect, useState } from 'react';
import axios from 'axios';

export function useGetCardsData() {
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/data/cards.json');
        setCardsData(response.data.card);
      } catch (error) {
        console.error('Error fetching cards data:', error);
      }
    };

    fetchData();
  }, []);

  return cardsData;
}
