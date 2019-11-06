import React from "react"
import CourseCard from "../molecules/CourseCard"
import withLoader from "../HOC/withLoader"

const CourseGrid = ({courses}) =>(
    <div className="ed-grid m-grid-2 l-grid-3 lg-grid-4">
        {
            courses.map(c => (
                <CourseCard
                    key             = {c.id             }
                    id              = {c.id             }
                    title           = {c.title          }
                    image           = {c.image          }
                    price           = {c.price          }
                    profesorName    = {c.profesorName   }

                />
            ))
        }
    </div>
);

export default withLoader("courses") (CourseGrid)