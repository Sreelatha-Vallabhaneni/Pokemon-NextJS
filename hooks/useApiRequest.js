import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { pokemonSliceSelector, setData } from '../slices/pokemonSlice';

export const useApiRequest = url => {
    //const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    
  
    useEffect(() => {
      const fetchData = () => {
        axios
          .get(url)
          .then(response => {
            setIsLoaded(true);
            dispatch(setData(response.data.results))
            console.log(dispatch(setData(response.data.results)));
            //setData(response.data.results);
          })
          .catch(error => {
            setError(error);
          });
      };
      fetchData();
    }, [url]);
  
   

    return { error, isLoaded, data };
  };


  