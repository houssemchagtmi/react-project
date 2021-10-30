import React from 'react'
import PropTypes from "prop-types";
const ProfileComponent = ({ fullName, bio, profession, children }) => {

    return (
        <div>
            <h1>FullName: {fullName}</h1>
            {children}
            <h3> {bio} </h3>
            <h3> {profession} </h3>
        </div>
    )
}
ProfileComponent.defaultProps={
    fullName:"Votre Nom",
    bio:"Bio: Votre Bio " ,
    profession:"Votre Profession",
    children: 'votre image',
}
ProfileComponent.propTypes={fullName:PropTypes.string, bio:PropTypes.string, profession:PropTypes.string, children:PropTypes.string};
export default ProfileComponent

