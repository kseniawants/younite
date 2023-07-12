import React, { useState, useEffect } from 'react'
import '../styles/showmore.scss'
import axios from 'axios';

const InterestsShowMore = () => {
  const [post, setPost] = useState([]);
  
  axios.defaults.withCredentials = true;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/users/mutualInterests');
        setPost(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
    <div className='bg-pageTitle d-flex'>
      <h6>共同興趣</h6>
    </div>
    <div className='d-flex mt-3 mb-3' style={{ flexWrap: 'wrap' }}>
      {post.data ? (
        post.data.map((item, index) => (
          <section 
            key={index}
            className='usersImg ms-4 mb-3 mt-2' 
            style={{'--bg-images': `url(${item.profileAvatar})`}}
          >
          </section>
        ))
        ) : (
          <p>loading</p>
        )}
    </div>
    </>
  )
}

export default InterestsShowMore
