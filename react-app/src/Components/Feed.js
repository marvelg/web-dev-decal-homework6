import React from 'react';
import Post from "./Post";
import NewPost from "./NewPost";
import axios from 'axios';
import { useState, useEffect } from "react";

const Feed = () => {
  
  const [data, setData] = useState([]);
  
  async function get_data () {
    let got_data = (await axios.get('http://localhost:3002/posts')).data
    
    setData(got_data)
  }

  useEffect( () => {
    get_data()
  }, [data]);

  return (
    <div style={{ maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto'}}>
      {
        data.map((d) =>
          {
          
          return <Post title={d.title} body={d.body} keyid={d.id}/>
          }
          
        )
      }
      
      <NewPost/>
    </div>
  )

}


export default Feed;
