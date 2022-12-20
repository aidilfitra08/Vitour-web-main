import React from 'react'
import { Container } from 'react-bootstrap';
import CardCompt4 from './CardComponent/CardCompt4';

export const Post = ({ posts, loading, search }) => {
 if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <Container className='item-cont'>
        <div className="grid">
            {posts.map(post => (
                <CardCompt4 desc={post.deskripsi_merchandise} header={post.nama_merchandise} />
            ))}
        </div>
    </Container>
    //  <ul className='list-group mb-4'>
    //   {posts.map(post => (
    //     <li key={post.id} className='list-group-item'>
    //       {post.title}
    //     </li>
    //   ))}
    // </ul>
  )
}


//  <div className="grid">
//             posts.filter((value) => {
//               if(search === ""){
//                 return value;
//               } else if (value.nama_merchandise.toLowerCase().includes(search.toLowerCase())) {
//                 return value;
//               }
//             })
//            .map((post) => (
//                 <CardCompt4 desc={post.deskripsi_merchandise} header={post.nama_merchandise} />)
//         </div>