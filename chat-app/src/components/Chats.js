import React from 'react'

const Chats = () => {
    return (
        <div className='chats'>
            <div className="userChat">
                <img src="https://images.pexels.com/photos/13570394/pexels-photo-13570394.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                <div className="userChatInfo">
                    <span>Jane</span>
                    <p>Hello</p>
                </div>
            </div>
            <div className="userChat">
                <img src="https://images.pexels.com/photos/6389849/pexels-photo-6389849.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                <div className="userChatInfo">
                    <span>Jane</span>
                    <p>Hello</p>
                </div>
            </div> 
            <div className="userChat">
                    <img src="https://images.pexels.com/photos/13570394/pexels-photo-13570394.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                        <div className="userChatInfo">
                        <span>Jane</span>
                        <p>Hello</p>
                </div>
            </div> 
        </div>
    )
}

export default Chats