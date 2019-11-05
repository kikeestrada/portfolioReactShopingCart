import {useState, useEffect} from "react"
import axios from "axios"

const useCourse = id =>{
    const [stateCourse, setStateCourse] = useState({});
    useEffect(  ()=> {
        axios.get(`http://my-json-server.typicode.com/kikeestrada/json-db/courses/${id}`)
            .then(resp => setStateCourse(resp.data));
    }, []);
    return stateCourse
};

export default useCourse