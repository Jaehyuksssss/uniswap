import { useEffect, useState } from 'react';
import axios from 'axios';
import { tokensParams } from '../utils/interface';

export function useGetTokensData() {
  const [tokensData, setTokensData] = useState<tokensParams[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/data/tokens.json');
        setTokensData(response.data.tokens);
      } catch (error) {
        console.error('Error fetching cards data:', error);
      }
    };

    fetchData();
  }, []);

  return tokensData;
}
