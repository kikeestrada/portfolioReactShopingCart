import React from "react"
import { connect } from "react-redux"


const CartCounter = ({cartLegth}) => ( 
    <li className="s-card">
                <i className="fas fa-cart-arrow-down"></i>
                <span className="s-card__number">
                {`${cartLegth}`}
                </span>
            </li>
    )

const mapStateToProps = state => (
    {
        cartLegth: state.cart.length 
    }
)

const mapDispatchToProps = () => {}
export default connect(mapStateToProps, mapDispatchToProps)(CartCounter)