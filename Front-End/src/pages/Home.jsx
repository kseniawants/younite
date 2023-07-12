import React, { useState, useEffect } from 'react';
import '../styles/component/bdGradient.scss';
import '../styles/home.scss';
import PeoplePhoto from '../component/User/PeoplePhoto';
import UserCard from '../component/User/UserCard';
import { Link } from 'react-router-dom';
import axios from 'axios';
import UserModal from '../component/Modal/UserMoadl';
import userImge from '../assets/images/sia.png'

function Home() {
  const [post1, setPost1] = useState([]);
  const [post2, setPost2] = useState([]);
  // const [isUserModalVisible, setUserModalVisible] = useState(false);
  
  axios.defaults.withCredentials = true;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await axios.get('/users/mutualInterests');
        const response2 = await axios.get('/users/profiles/profession');
        setPost1(response1.data);
        setPost2(response2.data);
        console.log(response1.data);
        console.log(response2.data);
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
      <section className='container mt-4'>
        <section className='bg-pageMain row d-flex'>
          <div className='bg-pageTitle d-flex'>
            <h6>你可能喜歡</h6>
          </div>
          <div className='bg-pagePhoto d-flex mt-3 mb-3'>
            <PeoplePhoto />
            <PeoplePhoto />
            <PeoplePhoto />
            <PeoplePhoto />
            <PeoplePhoto />
            <PeoplePhoto />
            <PeoplePhoto />
          </div>
          <div className='bg-pageMore d-flex'>
            <Link to='/show/like'>顯示更多...</Link>
          </div>
        </section>
        <section className='row justify-content-between mt-3'>
          <div className='bg-pageMain col me-3'>
            <h6>共同興趣</h6>
            <>
            {post1.data ? (
              post1.data.slice(0, 2).map((item, index) => (
                <div key={index} className='user-card px-2 py-2 row' onClick={(event) => handleUserButtonClick(event, item)}>
                  <div className='col d-flex align-items-center'>
                    <img src={item.profileAvatar || userImge} alt='Your Picture' className='mb-1 user-card-image' />
                    <h6 className='ms-3'>{item.name}</h6>
                    <h6 className='ms-2 text-radio'>{item.age}</h6>
                  </div>
                  <div className='row mt-1 text-nowrap'>
                    {item.interests && item.interests.slice(0, 3).map((interest, i) => (
                      <button key={i} type='button' className='btn btn-outline-primary btn-sm col-3 m-1 rounded-pill btn-block'>
                        #{interest}
                      </button>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <>
                <UserCard />
                <UserCard />
              </>
              )}
            </>
            <div className='bg-pageMore d-flex mt-3'>
              <Link to='/show/interest'>顯示更多...</Link>
            </div>
          </div>
          <div className='bg-pageMain col'>
            <Link to="/store">
              <i className='fa-solid fa-user-lock' style={{color:'#82898D'}}></i>
            </Link>
            <h6>誰喜歡你</h6>
            <div className='user-lock'>
              <UserCard />
            </div>
          </div>
          <div className='bg-pageMain col ms-3'>
            <h6>共同職業</h6>
            <>
            {post2.data ? (
              post2.data.slice(0, 2).map((item, index) => (
                <div key={index} className='user-card px-2 py-2 row' onClick={(event) => handleUserButtonClick(event, item)}>
                  <div className='col d-flex align-items-center'>
                    <img src={item.avatar || userImge} alt='Your Picture' className='mb-1 user-card-image' />
                    <h6 className='ms-3'>{item.name}</h6>
                    <h6 className='ms-2 text-radio'>{item.age}</h6>
                  </div>
                  <div className='row mt-1 text-nowrap'>
                    {item.interests && item.interests.slice(0, 3).map((interest, i) => (
                      <button key={i} type='button' className='btn btn-outline-primary btn-sm col-3 m-1 rounded-pill btn-block'>
                        #{interest}
                      </button>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <>
                <UserCard />
                <UserCard />
              </>
            )}
            </>
            <div className='bg-pageMore d-flex mt-3'>
            <Link to='/show/profession'>顯示更多...</Link>
            </div>
          </div>
        </section>
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
      </section>
    </>
  );
}

export default Home;
