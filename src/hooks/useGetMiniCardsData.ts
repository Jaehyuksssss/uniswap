import { useEffect, useState } from 'react';
import axios from 'axios';

export function useGetMiniCardsData() {
  const [miniCardsData, setMiniCardsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/data/minicard.json');
        setMiniCardsData(response.data.minicard);
      } catch (error) {
        console.error('Error fetching cards data:', error);
      }
    };

    fetchData();
  }, []);

  return miniCardsData;
}
