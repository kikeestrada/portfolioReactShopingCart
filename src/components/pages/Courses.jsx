import React, {Component} from "react"
import axios from "axios"
import CourseGrid from "../organisms/CourseGrid";

//Array y aqui le agregamos un id a cada uno
// ahora consumiremos nuestro api de github

class Courses extends Component{
    constructor(props){
        super(props);
        this.state = {
            courses: []
        }
    }
    componentDidMount(){
        axios.get('http://my-json-server.typicode.com/kikeestrada/json-db/courses')
        // .then(resp => console.log(resp.data))
            .then(resp =>{
                this.setState({
                    courses: resp.data
                })
            })
    }
    render(){


        const {courses} = this.state
        return <CourseGrid courses={courses}/>
    }
}

export default Courses