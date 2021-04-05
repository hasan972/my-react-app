import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const Image = ()=>(
 <img src='https://m.media-amazon.com/images/I/91QclGg4BjL._AC_UY218_.jpg' alt=''/>
 );
 const Title = ()=>(
  <h4> Dog Man: Mothering Heights: From the Creator of Captain Underpants</h4>
 );
 const Author = () =>(
     <h3>Dav Pilkey</h3>
 );

export default function BookList() {
    return (
        <section className="book">
            <Image />
            <Title />
            <Author />
        </section>
    )
}

