import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
})

const useAxiosSecure = () => {
    const {signOutUser} = useContext(AuthContext);
    const navigate = useNavigate()

useEffect(() => {
    axiosInstance.interceptors.response.use(response => {
        return response
    }, error => {
        console.log('error caught in interceptors', error);

        if(error.status === 401 || error.status === 403){
            console.log('need to log out user');
            signOutUser()
            .then(() => {
                console.log('looged out user');
                    Swal.fire({
                            icon: "error",
                            title: "Unauthorized Access",
                            text: "You are logged out Cause your access is unauthorized",
                            
                            confirmButtonText: 'Close',
                         
                            showCancelButton: false,
                            customClass: {
                              confirmButton: 'custom-confirm-button',
                            
                              popup: 'custom-popup', 
                              title: 'custom-title', 
                              icon: 'custom-icon' ,
                              
                            },
                            buttonsStyling: true
                          });
                navigate('/login')
            })
            .catch(error => {
                console.log(error);
            })
        }
        return Promise.reject(error)
    })
},[])

  return axiosInstance;
};

export default useAxiosSecure;