// import {
//   EditOutlined,
//   EllipsisOutlined,
//   SettingOutlined,
// } from "@ant-design/icons";
// import { Card, Row, Col } from "antd";
// import axios from "axios";
// import React, { useState, useEffect } from "react";
// import "antd/dist/antd.less";
// const { Meta } = Card;

// const Ant = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [error, setError] = useState(null);

//   const getBlogs = async () => {
//     const response = await axios("https://hola9.live/api/blogsapi/");
//     setBlogs(response.data);
//     console.log(response.data, "dddddddddddddddddddddddddddddddddd");
//   };
//   useEffect(() => {
//     getBlogs();
//   }, []);
//   return (
//     <Row>
//       {blogs.map((blog) => {
//         return (
//           <div key={blog.id}>
//             <Col xs={24} xl={8}>
//             <a href={`/blogs-listing/${blog.id}/`}>
//               <Card
//                 style={{
//                   width: 290,
//                   margin: "5px",
//                 }}
//                 cover={<img alt="example" src={blog.image} />}
//                 actions={[
//                   <SettingOutlined title={blog.title} />,
//                   <EditOutlined key="edit" />,
//                   <EllipsisOutlined key="ellipsis" />,
//                 ]}
//               >
//                 <Meta title={blog.title} description={blog.description} />
//               </Card>
//               </a>
//             </Col>
//           </div>
//         );
//       })}
//     </Row>
//   );
// };

// export default Ant;
