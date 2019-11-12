import React from "react"
import { connect } from "react-redux"


const CartCounter = ({cartLegth}) => (
    <span className="s-card s-cross-center s-main-end">
        <i className="fas fa-cart-arrow-down"></i>
        <span className="s-card__number"> {`${cartLegth}`} </span>
    </span>
)

const mapStateToProps = state => (
    {
        cartLegth: state.cart.length
    }
)

export default connect(mapStateToProps)(CartCounter)