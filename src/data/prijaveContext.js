import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useAdminInfo } from "./adminInfoContext";
const PrijaveContext = React.createContext();

export const usePrijave = () => {
    return useContext(PrijaveContext);
};

export const PrijaveProvider = ({ children }) => {
    const [prijave, setPrijave] = useState([]);
    const { fetchAdminInfo, adminInfo } = useAdminInfo();

    const fetchPrijave = async () => {
        try {
            const res = await axios.get(
                "http://digitalmark6.herokuapp.com/api/prijave",
                { headers: { userId: localStorage.getItem("token") } }
            );
            console.log(res);
            setPrijave(res.data.data);
            return { msg: "success", res };
        } catch (err) {
            return { msg: "failed", err };
        }
    };

    const vratiUOcenjene = async (adminEmail, prijava) => {
        try {
            const azuriranaPrijava = await axios.patch(
                `http://localhost:5000/prijave/vratiUOcenjene?adminEmail=${adminEmail}`,
                {
                    prijavaId: prijava._id,
                }
            );
            let newPrijave = prijave.filter((pr) => pr._id !== prijava._id);
            newPrijave.push(azuriranaPrijava.data.res);

            setPrijave(newPrijave);
        } catch (err) {
            console.log(err.msg);
        }
    };

    const smestiUFinalno = async (adminEmail, prijava) => {
        try {
            const azuriranaPrijava = await axios.patch(
                `http://localhost:5000/prijave/smestiUFinalno?adminEmail=${adminEmail}`,
                {
                    prijavaId: prijava._id,
                }
            );
            let newPrijave = prijave.filter((pr) => pr._id !== prijava._id);
            newPrijave.push(azuriranaPrijava.data.res);

            setPrijave(newPrijave);
        } catch (err) {
            console.log(err.msg);
        }
    };

    const oznaci = async (adminEmail, prijava) => {
        try {
            const azuriranaPrijava = await axios.patch(
                `http://localhost:5000/prijave/oznaci?adminEmail=${adminEmail}`,
                {
                    prijavaId: prijava._id,
                }
            );
            let newPrijave = prijave.filter((pr) => pr._id !== prijava._id);
            newPrijave.push(azuriranaPrijava.data.res);

            setPrijave(newPrijave);
        } catch (err) {
            console.log(err.msg);
        }
    };

    const staviUSmestene = async (adminEmail, prijava) => {
        try {
            const azuriranaPrijava = await axios.patch(
                `http://localhost:5000/prijave/staviUSmestene?adminEmail=${adminEmail}`,
                {
                    prijavaId: prijava._id,
                }
            );
            let newPrijave = prijave.filter((pr) => pr._id !== prijava._id);
            newPrijave.push(azuriranaPrijava.data.res);

            setPrijave(newPrijave);
        } catch (err) {
            console.log(err.msg);
        }
    };

    const vratiIzSmestenih = async (adminEmail, prijava) => {
        try {
            const azuriranaPrijava = await axios.patch(
                `http://localhost:5000/prijave/vratiIzSmestenih?adminEmail=${adminEmail}`,
                {
                    prijavaId: prijava._id,
                }
            );
            let newPrijave = prijave.filter((pr) => pr._id !== prijava._id);
            newPrijave.push(azuriranaPrijava.data.res);

            setPrijave(newPrijave);
        } catch (err) {
            console.log(err.msg);
        }
    };

    const oceni = async (adminEmail, prijava, skala1, skala2, skala3) => {
        try {
            const azuriranaPrijava = await axios.patch(
                `http://localhost:5000/prijave/oceni?adminEmail=${adminEmail}`,
                {
                    prijavaId: prijava._id,
                    skala1: skala1,
                    skala2: skala2,
                    skala3: skala3,
                }
            );
            let newPrijave = prijave.filter((pr) => pr._id !== prijava._id);
            newPrijave.push(azuriranaPrijava.data.res);

            setPrijave(newPrijave);
        } catch (err) {
            console.log(err.msg);
        }
    };

    const infoZaLog = async (adminEmail, prijava, radionica, panel) => {
        try {
            const azuriranaPrijava = await axios.patch(
                `http://localhost:5000/prijave/infoZaLogistiku?adminEmail=${adminEmail}`,
                {
                    prijavaId: prijava._id,
                    radionica: radionica,
                    panel: panel,
                }
            );
            let newPrijave = prijave.filter((pr) => pr._id !== prijava._id);
            newPrijave.push(azuriranaPrijava.data.res);

            setPrijave(newPrijave);
        } catch (err) {
            console.log(err.msg);
        }
    };

    useEffect(() => {
        fetchPrijave();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <PrijaveContext.Provider
            value={{
                prijave,
                vratiUOcenjene,
                smestiUFinalno,
                oznaci,
                staviUSmestene,
                vratiIzSmestenih,
                oceni,
                infoZaLog,
            }}
        >
            {children}
        </PrijaveContext.Provider>
    );
};
