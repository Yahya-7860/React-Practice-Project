import React from 'react'
import '../CSS files/Profile.css'
function Profile() {
    return (
        <div className="profile-container">
            <h1>Your Profile</h1>
            <div className="profile-card">
                <div className="profile-photo">
                    <img src="https://media.licdn.com/dms/image/v2/D4D03AQFcvSRmSmR9fw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1700820197449?e=2147483647&v=beta&t=zrGd8R3g0VLZqzj5BQ26BYng5qEymCFFQj8Rx6Py-Sk" alt="Profile" />
                </div>
                <div className="profile-info">
                    <h2><label className='text_bold'>Name:</label> Yahya Ansari</h2>
                    <p><label className='text_bold'>Email:</label> yahya.infowind@gmail.com</p>
                    <p><label className='text_bold'>DOB: </label>17 february 2002</p>
                    <p><label className='text_bold'>Bio:</label>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iste molestias ratione sint iure cupiditate minima et laboriosam eos rerum est, cumque perferendis? Tenetur quisquam quos ipsam, doloribus autem nesciunt esse eligendi optio! Earum suscipit cupiditate esse ipsa nesciunt. Quibusdam maiores dolorum nostrum! Cupiditate dolores magni nesciunt sint iusto rerum.</p>
                </div>
            </div>
        </div>
    )
}

export default Profile