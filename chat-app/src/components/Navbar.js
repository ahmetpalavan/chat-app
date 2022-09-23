import React from 'react'

const Navbar = () => {
    return (
        <div className='navbar'>
            <span className="logo">My App Chat</span>
            <div className="user">
                <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGGXdQf0EumZA/profile-displayphoto-shrink_200_200/0/1661527855203?e=1668643200&v=beta&t=UZaL14bd1l0u-OqmH_IYOVATK7Gmbm_vpfpPPPRuJiU" alt="" />
                <span >Ahmet</span>
                <button className=''>Logout</button>
            </div>
        </div>
    )
}

export default Navbar