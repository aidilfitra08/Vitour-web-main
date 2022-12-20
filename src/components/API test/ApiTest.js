import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Recommendation/ItemPage.css";

function ApiTest() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        "https://vitour-backend.herokuapp.com/api/city/merchandises"
      );

      setPost(res.data.data);
    };

    fetchPosts();
  }, []);

  if (post.length > 0) {
    return (
      <div className="grid-item">
        {post.map((item) => {
          console.log(item);
          return <h3>{item.nama_merchandise}</h3>;
        })}
      </div>
    );
  } else {
    return <h2>No Data</h2>;
  }
}

export default ApiTest;
