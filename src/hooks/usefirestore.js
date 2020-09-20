import React, { useState, useEffect } from "react";
import { db } from "../firebase/config";

const useFirestore = (collections) => {
  const [docs, setdocs] = useState([]);

  useEffect(() => {
    const unsub = db.collection(collections).onSnapshot((snap) => {
      let docu = [];
      snap.forEach((doc) => {
        docu.push({ ...doc.data(), id: doc.id });
      });
      setdocs(docu);
    });
    return () => unsub();
  }, [collections]);

  return { docs };
};

export default useFirestore;
