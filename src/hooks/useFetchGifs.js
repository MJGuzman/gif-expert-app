import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGif";

export const useFetchGifs = (category) => {
  const [state, setstate] = useState({ data: [], loading: true });

  useEffect(() => {
    getGifs(category).then((images) => {
      setTimeout(() => {
        setstate({
          data: images,
          loading: false,
        });
      }, 3000);
    });
  }, [category]);

  return state;
};
