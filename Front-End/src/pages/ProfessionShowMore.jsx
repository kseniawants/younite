import React, { useState, useEffect } from 'react'
import '../styles/showmore.scss'
import userImge from '../assets/images/sia.png'
import UserModal from '../component/Modal/UserMoadl';
import axios from 'axios';

const ProfessionShowMore = () => {
  const [post, setPost] = useState([]);
  
  axios.defaults.withCredentials = true;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/users/profiles/profession');
        setPost(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const [userModalStates, setUserModalStates] = useState(false);

  const handleUserButtonClick = (event, item) => {
    event.preventDefault();
    setUserModalStates((prevState) => ({
      ...prevState,
      [item.userID]: {
        isOpen: true,
        data: item,
      },
    }));
  };
  
  const handleCloseModal = () => {
    setUserModalStates(false) 
  };

  return (
    <>
    <div className='bg-pageTitle d-flex'>
      <h6>共同職業</h6>
    </div>
    <div className='d-flex mt-3 mb-3' style={{ flexWrap: 'wrap' }}>
      {post.data ? (
        post.data.map((item, index) => (
          <section 
            key={index}
            className='usersImg ms-4 mb-3 mt-2' 
            style={{'--bg-images': `url(${item.avatar || userImge})`}}
            onClick={(event) => handleUserButtonClick(event, item)}
          >
            <div className='mt-auto'>
              <div className='d-flex ms-2'>
                <h5 className='me-2 text-secondary'>{item.name}</h5>
                <span className='mx-2 text-radio'>{item.age}</span>
              </div>
              <div className='text-nowrap'>
                    {item.interests && item.interests.slice(0, 3).map((interest, i) => (
                      <button key={i} type='button' className='btn btn-outline-radio btn-sm mx-1 mb-1 rounded-pill btn-block'>
                        #{interest}
                      </button>
                    ))}
              </div>
            </div>
          </section>
        ))
        ) : (
          <p>loading</p>
        )}
        {Object.keys(userModalStates).map((userID) => (
          userModalStates[userID].isOpen && (
            <UserModal
              key={userID}
              userID={userID}
              closeModal={() => handleCloseModal(userID)}
              data={userModalStates[userID].data}
            />
          )
        ))}
    </div>
    </>
  )
}

export default ProfessionShowMore
