import React from 'react'
import { useState } from 'react'
import AddFriendModal from './AddFriendModal';

function Friends() {

    const [friends,setFriends] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddFriend = (email) => {
    if (!email) return;

    const newFriend = {
      id: Date.now(),
      email: email,
    };

    setFriends([...friends, newFriend]);
    setIsModalOpen(false);
  };


  return (
    <>
      <div className='container bg-color:black'>
        <ul className="list bg-base-100 rounded-box shadow-md">

          <li class="flex flex-row items-center justify-between p-2 hover:bg-base-300 rounded-lg group">
              <div class="flex items-center space-x-3">
            
                  <div class="bg-white text-neutral-content rounded-full w-8">
                    <span className="ml-2">👤</span>
                  
                </div>
                <span class="font-medium">Friends</span>
              </div>

              <button class="btn btn-xs btn-primary btn-circle" aria-label="Add Friend" onClick={() => setIsModalOpen(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                </svg>
              </button>
          
          </li>   
          {friends.map((friend)=>(
              <li className="list-row">
            <div><img className="size-10 rounded-box" src="../public/images/image.png"/></div>
            <div>
              <div>ID(name) : {friend.id}</div>
              <div className="text-xs uppercase font-semibold opacity-60">{friend.email}</div>
            </div>
            <p className="list-col-wrap text-xs">
              "Remaining Reason" became an instant hit, praised for its haunting sound and emotional depth. A viral performance brought it widespread recognition, making it one of Dio Lupa’s most iconic tracks.
            </p>
            <button className="btn btn-square btn-ghost">
              <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
            </button>
            <button className="btn btn-square btn-ghost">
              <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
            </button>
          </li>
          ))}
        </ul>
        {isModalOpen && (
        <AddFriendModal
          onAdd={handleAddFriend}
          onCancel={() => setIsModalOpen(false)}
        />
      )}
      </div>
    </>
  )
}

export default Friends