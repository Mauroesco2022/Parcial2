
import React, { useEffect, useState } from "react";
import axios from 'axios';


const AppParcial2 = () => {
	
const [parcial, setParcial] = useState({});

	const fetchParcial = async () => {
		const res = await axios.get('https://jsonplaceholder.typicode.com/photos/');
		const { data } = res;
		setParcial(data);
		console.log(data);
	};

	 useEffect(() => {	
		fetchParcial();
	 });
    
	 return (
        <div>
          {parcial.map((parcial, index) => (
            <div key={index}>
              <i>{parcial.title}</i>
              <img src={parcial.url} alt="imagen de parcial" />            
            </div>
          ))}
        </div>
      );
		  }
	export default AppParcial2;
