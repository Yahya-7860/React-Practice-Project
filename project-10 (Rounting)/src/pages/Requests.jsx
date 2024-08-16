import React from 'react'
import RequestCard from '../components/RequestCard'

function Requests() {
    return (
        <div>
            <h2 className='requestHeading'>Pending Requests...</h2>
            <RequestCard name="Salman Khan" image="https://cdn.britannica.com/54/256354-050-C19887AD/bollywood-actor-salman-khan-at-nika-mukesh-ambani-cultural-center-nmacc-mumbai-india.jpg" />

            <RequestCard name="Chirag Rathi" image="https://media.licdn.com/dms/image/D4D03AQGHcHIXjyTFfg/profile-displayphoto-shrink_200_200/0/1672386490254?e=2147483647&v=beta&t=0672LO9rAsquDhJd7mkitPoQBeBCPbS6SdtWzNLp54Y" />

            <RequestCard name="Ranveer Singh" image="https://upload.wikimedia.org/wikipedia/commons/3/32/Ranveer_Singh_in_2023_%281%29_%28cropped%29.jpg" />

        </div>
    )
}

export default Requests