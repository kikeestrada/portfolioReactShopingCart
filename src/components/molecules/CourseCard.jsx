import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom"
import { addToCart, deleteFromCart } from '../../redux/actionsCreators';
import { connect } from "react-redux"

const CourseCard =({id, title, image, price, profesorName, addCourseToCart, cart,deleteCourseFromCart}) =>(
    <article className="card" id={profesorName}>
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <Link to={`/cursos/${id}`}>
                <img src={image} alt={title} />
            </Link>
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="t5 s-mb-2 s-center">{title}</h3>
            <div className="s-main-center">
                {
                    cart.find(a => a === id)
                    ?<button
                        className="button--ghost-alert button--tiny"
                        onClick = {() => deleteCourseFromCart(id)}
                    >
                        Remove Card
                    </button>
                    :<button 
                        className="button--ghost-alert button--tiny"
                        onClick = {() => addCourseToCart(id)}
                    >
                        Add to Car
                    </button>
                }                
            
            </div>
        </div>
    </article>
);

CourseCard.propTypes = {
    title           : PropTypes.string,
    image           : PropTypes.string,
    price           : PropTypes.number,
    profesorName    : PropTypes.string
};

CourseCard.defaultProps = {
    title           : "No titles",
    image           : "https://scott88lee.github.io/FMX/img/avatar.jpg",
    price           : "--",
    profesorName    : "No Profesorr"
};




const mapStateToProps = state => ({
    cart: state.cart
})

const mapDispatchToProps = dispatch => ({
        addCourseToCart(id){
            dispatch(addToCart(id))
        },
        deleteCourseFromCart(id){
            dispatch(deleteFromCart(id))
        }
    })
export default connect(mapStateToProps, mapDispatchToProps)(CourseCard)