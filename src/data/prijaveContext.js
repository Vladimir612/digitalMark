import React, { useState, useContext } from "react";
import axios from "axios";
const PrijaveContext = React.createContext();

export const usePrijave = () => {
  return useContext(PrijaveContext);
};

export const PrijaveProvider = ({ children }) => {
  const [prijave, setPrijave] = useState([]);

  const fetchPrijave = async () => {
    try {
      const res = await axios.get(
        "http://digitalmark6.herokuapp.com/api/prijave",
        { headers: { userId: localStorage.getItem("token") } }
      );

      const compare = (a, b) => {
        if (a.imePrezime < b.imePrezime) {
          return -1;
        }
        if (a.imePrezime > b.imePrezime) {
          return 1;
        }
        return 0;
      };

      res.data.data.sort(compare);

      setPrijave(res.data.data);
      return { msg: "success", res };
    } catch (err) {
      return { msg: "failed", err };
    }
  };

  const vratiUOcenjene = async (prijava) => {
    try {
      await axios.patch(
        "http://digitalmark6.herokuapp.com/api/prijave/hr/uocenjeno",
        {
          prijava_id: prijava._id,
        },
        { headers: { userId: localStorage.getItem("token") } }
      );

      await fetchPrijave();
    } catch (err) {
      console.log(err.msg);
    }
  };

  const smestiUFinalno = async (prijava) => {
    try {
      await axios.patch(
        "http://digitalmark6.herokuapp.com/api/prijave/hr/ufinalno",
        {
          prijava_id: prijava._id,
        },
        { headers: { userId: localStorage.getItem("token") } }
      );

      await fetchPrijave();
    } catch (err) {
      console.log(err.msg);
    }
  };

  const oznaci = async (prijava) => {
    try {
      await axios.patch(
        "http://digitalmark6.herokuapp.com/api/prijave/oznaci",
        { prijava_id: prijava._id },
        {
          headers: { userId: localStorage.getItem("token") },
        }
      );

      await fetchPrijave();
    } catch (err) {
      console.log(err.msg);
    }
  };

  const staviUSmestene = async (prijava) => {
    try {
      await axios.patch(
        "http://digitalmark6.herokuapp.com/api/prijave/log/usmestene",
        {
          prijava_id: prijava._id,
        },
        {
          headers: { userId: localStorage.getItem("token") },
        }
      );

      await fetchPrijave();
    } catch (err) {
      console.log(err.msg);
    }
  };

  const vratiIzSmestenih = async (prijava) => {
    try {
      await axios.patch(
        "http://digitalmark6.herokuapp.com/api/prijave/log/unesmestene",
        {
          prijava_id: prijava._id,
        },
        {
          headers: { userId: localStorage.getItem("token") },
        }
      );

      await fetchPrijave();
    } catch (err) {
      console.log(err.msg);
    }
  };

  const oceni = async (prijava, ocena) => {
    try {
      await axios.patch(
        "https://digitalmark6.herokuapp.com/api/prijave/oceni",
        {
          prijavaId: prijava._id,
          ocenaPanel: ocena,
        },
        {
          headers: { userId: localStorage.getItem("token") },
        }
      );

      await fetchPrijave();
    } catch (err) {
      console.log(err.msg);
    }
  };

  const infoZaLog = async (prijava, panel, tech, speed, radionica) => {
    try {
      await axios.patch(
        "https://digitalmark6.herokuapp.com/api/prijave/infozalog",
        {
          prijava_id: prijava._id,
          radionica: radionica,
          panel: panel,
          techChallenge: tech,
          speedDating: speed,
        },
        {
          headers: { userId: localStorage.getItem("token") },
        }
      );

      await fetchPrijave();
    } catch (err) {
      console.log(err.msg);
    }
  };

  const ostaviNapomenu = async (prijava, napomena) => {
    try {
      await axios.patch(
        "https://digitalmark6.herokuapp.com/api/prijave/napomena",
        {
          prijava_id: prijava._id,
          napomena: napomena,
        },
        {
          headers: { userId: localStorage.getItem("token") },
        }
      );

      await fetchPrijave();
    } catch (err) {
      console.log(err.msg);
    }
  };

  return (
    <PrijaveContext.Provider
      value={{
        fetchPrijave,
        prijave,
        vratiUOcenjene,
        smestiUFinalno,
        oznaci,
        staviUSmestene,
        vratiIzSmestenih,
        oceni,
        infoZaLog,
        ostaviNapomenu,
      }}
    >
      {children}
    </PrijaveContext.Provider>
  );
};
