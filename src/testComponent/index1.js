import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//For Using Function 

// const Image = ()=>(
//  <img src='https://m.media-amazon.com/images/I/91QclGg4BjL._AC_UY218_.jpg' alt=''/>
//  );
//  const Title = ()=>(
//   <h4> Dog Man: Mothering Heights: From the Creator of Captain Underpants</h4>
//  );
//  const Author = () =>(
//      <h3>Dav Pilkey</h3>
//  );

//  const img = 'https://m.media-amazon.com/images/I/91QclGg4BjL._AC_UY218_.jpg';
//  const title = 'Dog Man: Mothering Heights: From the Creator of Captain Underpants';
//  const author ='Dav Pilkey';

 const FirstBook = {
    img:'https://m.media-amazon.com/images/I/91QclGg4BjL._AC_UY218_.jpg' ,
    title:'Dog Man: Mothering Heights: From the Creator of Captain Underpants',
    author:'Dav Pilkey',
 };

//  const SecondBook ={
//     img:'https://m.media-amazon.com/images/I/71QuWEIWHlL._AC_UY218_.jpg',
//     title:'Dog Man: Mothering Heights: From the Creator of Captain Underpants',
//     author:'Dav Pilkey',
//} 
 function BookList() {
    return (
        <section>
            <Book 
                img={FirstBook.img}
                title={FirstBook.title}
                author={FirstBook.author}
            />
        </section>
    )
}


const Book = (props)=> {
    const {img,title,author} = props;
    return (
        <section className="book">
            <img src={img} alt='painai'/>
            <h1>{title}</h1>
            <h4>{author}</h4>
        </section>
        
    );
};
ReactDOM.render(<BookList />, document.getElementById('root'));

