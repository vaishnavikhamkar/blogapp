import React,{useState, useEffect}  from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Axios from "axios";
import './post.css'

var url="https://jsonplaceholder.typicode.com/posts";
var imgurl="https://jsonplaceholder.typicode.com/photos"

function Posts() {
    const [Posts,setPosts]=useState([]);
    const [photo,setPhotos]=useState([]);
    

    fetch(url).then((res)=>{
         return res.json();
    })
    .then((data)=>{
        // console.log(data[0]);
        // console.log(data[0].userId);
    });

    useEffect(()=>
    {
        async function fetchData(){
            const output=await Axios.get(url)
            const result=output.data;
            console.log("result is:",result);
            const imgoutput=await Axios.get(imgurl);
            const imgresult=imgoutput.data;

            //we multiply by 20 as math.random generates any number between 0-1,
            //then 0.56*20~10 so that number will be displlayed.
            setPosts(result);
            setPhotos(imgresult)
        };

        fetchData()

    },[]);

  return (
    <div className='card-container'>
      {/* <Row xs={1} md={2} className="g-4">*/}
      {/* {Array.from({ length: 10 }).map((_, idx) => (  */}
      {/* {post.map(function(i){ */}
      {Posts.map((post)=>(
        <Card style={{ width: '18rem' }}>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          <Card.Title>{post.id}</Card.Title>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.body}</Card.Text>
          <Button variant="primary">Go to the Blog</Button>
        </Card.Body>
      </Card>
      ))}
    
      {/* })} 
     {/* ))} 
    </Row> */}
    </div>
  )
}

export default Posts