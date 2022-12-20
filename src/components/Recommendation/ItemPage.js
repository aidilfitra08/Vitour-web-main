// import React, { useState, useEffect } from "react";
// import { Dots } from "loading-animations-react";
// import axios from "axios";
// import "./ItemPage.css";
// import { Container } from "react-bootstrap";
// // import { Post } from "./../Post";
// // import Pagination from "./../Pagination";
// import CardCompt4 from "./../Component/CardComponent/CardCompt4";
// import { Footer } from "../LandingPageCompt/Footer/Footer";
// // import { CardModal } from "../CardComponent/CardModal";

// export const ItemPage = () => {
//   const [posts, setPosts] = useState([]);
//   const [city, setCities] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [postsPerPage] = useState(8);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       setLoading(true);
//       const res = await axios.get(
//         "https://vitour-backend.herokuapp.com/api/city/merchandises"
//       );
//       setPosts(res.data.data);
//       setLoading(false);
//     };

//     const fetchPostsCities = async () => {
//       setLoading(true);
//       const res = await axios.get(
//         "https://vitour-backend.herokuapp.com/api/cities"
//       );
//       setCities(res.data.data);
//       setLoading(false);
//     };

//     fetchPostsCities();
//     fetchPosts();
//   }, []);

//   // Get current posts
//   const indexOfLastPost = currentPage * postsPerPage;
//   const indexOfFirstPost = indexOfLastPost - postsPerPage;
//   // const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
//   const [search, setSearch] = useState("");
//   const [filterCity, setFilterCity] = useState("");

//   // Change page
//   // const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <>
//       <Container className="item-container">
//         <h1 className="title-page">Merch Store and Crafter Recommendation</h1>
//         <div className="filterAdv">
//           <input
//             type="text"
//             className="inputFilter2"
//             placeholder="Search..."
//             onChange={(e) => setSearch(e.target.value)}
//           />
//           {/* <div className="grid">
//             <select
//               className="dropdown-select"
//               onChange={(e) => setFilterCity(e.target.value)}
//             >
//               <option value="">City</option>
//               {city.map((kota) => {
//                 return (
//                   <option key={kota.city_id} value={kota.city_id}>
//                     {kota.nama_kota}
//                   </option>
//                 );
//               })}
//             </select>
//             <select className="dropdown-select">
//               <option>Category</option>
//               <option value="Culinary">Culinary</option>
//               <option value="Merchandise">Merchandise</option>
//               <option value="Fine Art">Fine Art</option>
//               <option value="Fashion">Fashion</option>
//             </select>
//             <select className="dropdown-select">
//               <option>Laguange</option>
//               <option value="English">English</option>
//               <option value="Other">Other</option>
//             </select>
//           </div>
//           <div className="button-wrapper-get-all">
//             <button type="button" className="card-btn">
//               Search
//             </button>
//           </div> */}
//         </div>
//         <div className="item-container">
//           {loading ? (
//             <Dots className="spin-loading" color1="#003bfd" color2="#fff" />
//           ) : (
//             <div className="grid-item">
//               {posts
//                 .filter((value) => {
//                   if (search === " " || filterCity === " ") {
//                     return value;
//                   } else if (
//                     value.nama_merchandise
//                       .toLowerCase()
//                       .includes(search.toLowerCase())
//                   ) {
//                     return value;
//                   }
//                 })
//                 .map((item) => {
//                   var gambar;
//                   item.images.map((link) => {
//                     gambar = link.images_link;
//                     return null;
//                   });
//                   return (
//                     <CardCompt4
//                       desc={item.deskripsi_merchandise}
//                       header={item.nama_merchandise}
//                       loc={item.alamat_toko}
//                       image={gambar}
//                     />
//                   );
//                 })}
//             </div>
//           )}
//         </div>
//       </Container>
//       <Footer />
//     </>
//   );
// };

// //  <Post posts={currentPosts} loading={loading} />
// // <Pagination
// //     postsPerPage={postsPerPage}
// //     totalPosts={posts.length}
// //     paginate={paginate}
// // />
