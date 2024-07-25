import axios from 'axios'
import React from 'react'
import { useSelector } from 'react-redux'

const useAxios = () => {
const token = useSelector(state => state.auth.token);
    const axiosPublic = axios.create({
        // baseURL: "http://localhost:1000",
        baseURL: process.env.REACT_APP_BASE_URL,
        timeout: 10000,
        // headers: {'Content-Type': 'application/json'}
    })
    const axiosToken = axios.create({
        // baseURL: "http://localhost:1000",
        baseURL: process.env.REACT_APP_BASE_URL,
        timeout: 10000,
        headers: {'Authorization': 'Bearer ' +token}
    })


  return {axiosPublic,axiosToken}
}

export default useAxios