import { useState, useEffect } from 'react';

export default function MovieList(props) {
    return (
        <>
            {props.data.length && props.data.map((data, id) => (
                <div key={id}><Movie data={data}/></div>))}
            {!props.data.length && <div><p>None</p></div>}
        </>
    )
}