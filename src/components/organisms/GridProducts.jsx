import React from "react"
import CardProduct from "../molecules/CardProduct"

//Array
const objProducts = [
    {
        id              :1,
        title           : "title1",
        image           : "img/img1.jpg",
    },
    {
        id              :2,
        title           : "title2",
        image           : "img/img2.jpg",
        price           : "100",
        cursoLink       : "https://www.google.com"
    },
    {
        id              :3,
        title           : "title3",
        image           : "img/img3.jpg",
        price           : "150",
        cursoLink       : "https://www.google.com"
    },
    {
        id              :4,
        title           : "title4",
        image           : "img/img4.jpg",
    },
    {
        id              :5,
        title           : "title5",
        image           : "img/img3.jpg",
    },
    {
        id              :6,
        title           : "title6",
        image           : "img/img4.jpg",
    },
    {
        id              :7,
        title           : "title7",
        image           : "img/img1.jpg",
    },
    {
        id              :8,
        title           : "title8",
        image           : "img/img2.jpg",
    }
];

const GridProducts = () => (
    <div className="ed-grid s-grid-2 m-grid-3 l-grid-4">
        {
            objProducts.map( c => < CardProduct
                key             = {c.id             }
                id              = {c.id             }
                title           = {c.title          }
                image           = {c.image          }
            />)
        }
    </div>
);

export default GridProducts