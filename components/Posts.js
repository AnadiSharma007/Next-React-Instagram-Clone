import React from 'react';
import Post from './Post'

const posts = [
    {
    id: "123",
    username: 'anadissharma',
    userImg: 'https://cdn.tatlerasia.com/asiatatler/i/hk/2020/07/23012410-best-travel-instagram-accounts-to-follow_cover_1080x1350.jpg',
    img: 'https://cdn.tatlerasia.com/asiatatler/i/hk/2020/07/23012410-best-travel-instagram-accounts-to-follow_cover_1080x1350.jpg',
    caption: 'This is dope',
},
{
    id: "123",
    username: 'anadissharma',
    userImg: 'https://cdn.tatlerasia.com/asiatatler/i/hk/2020/07/23012410-best-travel-instagram-accounts-to-follow_cover_1080x1350.jpg',
    img: 'https://cdn.tatlerasia.com/asiatatler/i/hk/2020/07/23012410-best-travel-instagram-accounts-to-follow_cover_1080x1350.jpg',
    caption: 'This is dope',
},
{
    id: "123",
    username: 'anadissharma',
    userImg: 'https://cdn.tatlerasia.com/asiatatler/i/hk/2020/07/23012410-best-travel-instagram-accounts-to-follow_cover_1080x1350.jpg',
    img: 'https://cdn.tatlerasia.com/asiatatler/i/hk/2020/07/23012410-best-travel-instagram-accounts-to-follow_cover_1080x1350.jpg',
    caption: 'This is dope',
}
]

function Posts() {
  return (
  <div>
      {posts.map((post) => (
          <Post 
          key={post.id} 
          id={post.id} 
          username={post.username}
          userImg={post.userImg}
          img = {post.img}
          caption = {post.caption}  />
      ))}
  </div>
  );
}

export default Posts;

