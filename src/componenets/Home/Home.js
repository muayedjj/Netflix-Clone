import './Home.css';
import MovieList from '../MovieList/MovieList'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
url = process.env.REACT_APP_SERVER;

export default function Home() {
    const [data, setData] = useState([]);
    const trending = async () => {
        return await axios.get(`${url}`)
            .then(result => {
                return result.data;
            }).catch((err) => { console.log(err) });
    }
    useEffect(() => {
        void (async () => {
            let data = await trending();
            setData(data)
        })()
    }, []);
    return (
    <>
        <Navbar/>
        <MovieList data={data} />
    </>);
}


// import React, { useEffect,useState } from 'react'
// import MovieList from '../MovieList/MovieList'

// export default function Home() {

//     const [movieData,setMovieData] = useState([])

//     async function getData() {
//         let url = process.env.REACT_APP_SERVER

//         let response = await fetch(`${url}/trending`)
//         let result = await response.json()
//         setMovieData (result)
//     }
//     useEffect(()=> {getData()},[])
//   return 
//         (<MovieList data={movieData} />)
// }