import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon
} from '@heroicons/react/outline';

import {HeartIcon as HeartIconFilled} from '@heroicons/react/solid';

import React from 'react';

function Post({id, username, useImg, img, caption}) {
  return (
        <div className='bg-white my-7 border rounded-sm'>
            {/* Header */}  
            <div className='flex items-center p-5'>
              <img className='rounded-full h-12 w-12 object-contain 
              border mr-3' src={img} alt="" />
              <p className='flex-1 font-bold'>{username}</p>
              <DotsHorizontalIcon className='h-5 cursor-pointer'/>
            </div>


            {/* Img*/}
            <img src={img} className='object-cover w-full
            ' alt="" />

            {/* Buttons */}
            <div className='flex justify-between px-4 pt-4'>
              <div className='flex space-x-4'>
              <HeartIcon className='btn'/>
              <ChatIcon className='btn'/>
              <PaperAirplaneIcon className='btn'/>

              </div>
              <BookmarkIcon className='btn' />
            </div>

            {/* caption */}
             <p className='p-5 truncate'>
               <span className='font-bold mr-1'>{username}</span>
               {caption}
             </p>

            {/* commments */}


            {/* input box */}

            <form className='flex items-center p-4' action="">
              <EmojiHappyIcon className='h-7 cursor-pointer' />
              <input type="text" placeholder='Add a comment...'
              className='border-none flex-1 focus:ring-0 
              outline-none' />
              <button className='font-semibold text-blue-400'>Post</button>
            </form>

        </div>);
}

export default Post;
