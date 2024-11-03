import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import  "./file.css";
import { useState } from 'react';




    
 const NewsItem =(props)=>{
   let {title,description,imageUrl,newsUrl,date,source} = props;

const [t,sett]=useState("c");

const m=()=>{
  sett("b")
}
const n=()=>{
  sett("c")
}

    return (
      <div className='item my-3'>
   <Card className='item flex   'onMouseEnter={m} onMouseLeave={n}>
  

   <Badge bg="dark" className='bad'>{source}</Badge>

  
      <Card.Img variant="top" src={imageUrl}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
         {description}
        </Card.Text>
        <Card.Text>
         {date}
        </Card.Text>
        <Button  className={t} variant="primary" href={newsUrl}  target='_blank'>Read more</Button>
      </Card.Body>
    </Card>

      </div>
    )
  }


export default NewsItem
