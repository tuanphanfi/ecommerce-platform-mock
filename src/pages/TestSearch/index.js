import React, { useState, useEffect } from 'react';
import Navbar from '../../features/navbar/Navbar'
import axios from 'axios';
import TestSearch from './TestSearch.module.css'

const Index = () => {
    const [myDB, setMyDB] = useState()
    const [data, setData] = useState()
    const [searchTerm, setSearchTerm] = useState('')

    const url = 'https://62405d822aeb48a9af733b3e.mockapi.io/topics'
    const method = 'GET'

    // asynchrnous
    async function RunAxios(method, url) {
        const result = await axios({
            method: method,
            url,
            data,
        });
        console.log("result", result.data)
        setData(result.data)
        console.log("data", data)
        return result;

    }

    useEffect(() => {
        RunAxios(method, url)
    }, [])

    return (
        <div className="">
            <Navbar />
            {typeof data}

            <h1 className={TestSearch.text}>Data Map</h1>
            <div className={+ ''}>
                {
                    data ? (
                        <>

                            {/* <h1>DATA HERE</h1> */}
                            {/* <h1>Type of Data {typeof data}</h1> */}
                            <div className={TestSearch.aWordWrapper}>
                                <input
                                    className="" type="text" placeholder="Search..."
                                    onChange={e => { setSearchTerm(e.target.value) }}
                                />

                                <hr className={''} />
                                {data.filter((val) => {
                                    console.log("val", val.topicName.toLowerCase().includes('a'))

                                    if (searchTerm == "") {

                                        return val
                                    } else if (val.topicName.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                                        return val
                                    }
                                }).map((val, index) => {
                                    return (
                                        <div className={TestSearch.aWord} key={index}>
                                            <h1 className="bg-warning m-2">{index + 1} . {val.topicName}</h1>
                                        </div>
                                    )
                                })}
                            </div>

                        </>
                    )
                        :
                        (
                            <>
                                <h1>No data yet</h1>
                            </>)

                }
            </div>
        </div >
    );
};

export default Index;