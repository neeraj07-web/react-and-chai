import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {

    // iska alternate niche githubInfoloader mei hai 

    // const [data, setData] = useState(null); // ✅ useState at top level

    // useEffect(() => {
    //     fetch('https://api.github.com/users/neeraj07-web')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             setData(data);
    //         });
    // }, []);

    const data=useLoaderData()

    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            Github Followers: {data ? data.followers : "Loading..."}
            <img src ={data.avatar_url} alt="Git picture" width={300}/>
        </div>
    );
}

export default Github;

export const githubInfoLoader =async () =>{
    const response = await fetch('https://api.github.com/users/neeraj07-web')
    return response.json()
}