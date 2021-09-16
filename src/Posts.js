  import React from 'react'
  import './Posts.css'
  import { Avatar } from '@material-ui/core';
import MainOptions from './MainOptions';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';
function Posts({name,content,message,pic}) {
     return (
         <div className="posts">
      <div className="posts-head">
          <Avatar/>
          <div className="posts-infomation">
              <h1>{name}</h1>
              <p>{content}</p>
          </div>
          </div>
          <div className="posts-body">
              <p>{message}</p>
          </div>
          <div className="posts-pic">
               {pic} 
          </div>
      <div className="posts-like">
          <MainOptions Icon={ThumbUpIcon } titile="like"  />
          <MainOptions Icon={CommentIcon } titile="Comment"  />
          <MainOptions Icon={ShareIcon  } titile="Share"  />
          <MainOptions Icon={SendIcon  } titile="send"  />
      </div>
      </div>
             
          
     )
 }
  
  export default Posts;
  
 
