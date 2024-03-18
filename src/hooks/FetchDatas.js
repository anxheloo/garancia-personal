import React, { useState, useEffect } from "react";
import axios from "axios";

const useFetch = () => {
  const [data, setData] = useState([]);
  const [kategoriFeatured, setKategoriFeatured] = useState([]);
  // const [kategoriJashteTiranes, setKategoriJashteTiranes] = useState([]);
  const [kategoriSygjerimetTona, setKategoriSygjerimetTona] = useState([]);
  const [kategoriEventetSot, setKategoriEventetSot] = useState([]);
  const [kategoriArgetimDheSport, setKategoriArgetimDheSport] = useState([]);
  // const [kategoriArgetim, setKategoriArgetim] = useState([]);
  const [kategoriKinemaDheTeater, setKategoriKinemaDheTeater] = useState([]);
  // const [kategoriFilm, setKategoriFilm] = useState([]);
  // const [kategoriPanair, setKategoriPanair] = useState([]);
  const [kategoriPanairDheEkspozite, setKategoriPanairDheEkspozite] = useState(
    []
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get(
        "https://cms.garanciarinore.al/wp-json/wpem/events"
      );
      setData(response.data);
      setIsLoading(false);

      const currentDate = new Date();

      const featured = response.data.filter((event) => event.featured === "1");
      setKategoriFeatured(featured);

      // const jashteTiranes = response.data.filter(
      //   (event) =>
      //     event.event_categories[0] &&
      //     event.event_categories[0].name === "Jashtë Tiranës"
      // );

      // setKategoriJashteTiranes(jashteTiranes);

      const sygjerimetTona = response.data.filter(
        (event) =>
          event.event_categories[0] &&
          event.event_categories[0].name === "Sugjerimet tona"
      );
      setKategoriSygjerimetTona(sygjerimetTona);

      const eventetSot = response.data.filter((event) => {
        const eventStartDate = new Date(event.meta_data._event_start_date);
        return (
          eventStartDate.getDate() === currentDate.getDate() &&
          eventStartDate.getMonth() === currentDate.getMonth() &&
          eventStartDate.getFullYear() === currentDate.getFullYear()
        );
      });

      setKategoriEventetSot(eventetSot);

      // const argetim = response.data.filter(
      //   (event) =>
      //     event.event_categories[0] &&
      //     event.event_categories[0].name === "Argëtim"
      // );

      // setKategoriArgetim(argetim);

      // const film = response.data.filter(
      //   (event) =>
      //     event.event_categories[0] &&
      //     event.event_categories[0].name === "Kinema"
      // );
      // setKategoriFilm(film);

      const kinemaDheTeater = response.data.filter(
        (event) =>
          event.event_categories[0] &&
          event.event_categories[0].name === "Kinema dhe teater"
      );
      setKategoriKinemaDheTeater(kinemaDheTeater);

      // const panair = response.data.filter(
      //   (event) =>
      //     event.event_categories[0] &&
      //     event.event_categories[0].name === "Panair"
      // );
      // setKategoriPanair(panair);

      const panairDheEkspozite = response.data.filter(
        (event) =>
          event.event_categories[0] &&
          event.event_categories[0].name === "Panair dhe ekspozite"
      );
      setKategoriPanairDheEkspozite(panairDheEkspozite);

      const argetimDheSport = response.data.filter(
        (event) =>
          event.event_categories[0] &&
          event.event_categories[0].name === "Argëtim dhe sport"
      );
      setKategoriArgetimDheSport(argetimDheSport);
    } catch (error) {
      setError(error);
      console.log("Fetch Error:", error); // Log the error for debugging purposes
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return {
    data,
    isLoading,
    error,
    refetch,
    kategoriFeatured,
    // kategoriJashteTiranes,
    kategoriSygjerimetTona,
    kategoriEventetSot,
    // kategoriArgetim,
    // kategoriFilm,
    // kategoriPanair,
    kategoriArgetimDheSport,
    kategoriKinemaDheTeater,
    kategoriPanairDheEkspozite,
  };
};

export default useFetch;
