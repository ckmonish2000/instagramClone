import React, { useState, useEffect } from "react";
import useFirestore from "../hooks/usefirestore";

export default function ImgGrid() {
  const { docs } = useFirestore("images");
  console.log(docs);
  return (
    <div>
      {docs &&
        docs.map((val) => {
          return (
            <img
              src={val.url}
              width="200"
              height="200"
              style={{ margin: "10px" }}
            ></img>
          );
        })}
    </div>
  );
}
