import React from 'react'
import '../CSS files/RequestCard.css'

function RequestCard({name,image}) {
    return (
        <div className='card_container'>
            <div className="card">
                <div >
                    <img src={image} alt="Profile" className="profile-photo"/>
                </div>
                <div className="profile-info">
                    <h3>{name}</h3>
                </div>
                <div className="card-buttons">
                    <button className="reject-button">Reject</button>
                    <button className="accept-button">Accept</button>
                </div>
            </div>
        </div>
    )
}

export default RequestCard