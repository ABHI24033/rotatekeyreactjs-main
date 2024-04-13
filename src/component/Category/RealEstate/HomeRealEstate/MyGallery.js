import React from "react";
import ReactDOM from "react-dom";
import Gallery from "react-grid-gallery";
import './MyGallery.css';

const IMAGES = [
 
  {
    src: "https://www.ecorealestate.com.au/wp-content/uploads/2022/03/5b97ab84-d198-4aab-83ac-53650b8ba153-Biggenden.jpg",
    thumbnail:
      "https://www.ecorealestate.com.au/wp-content/uploads/2022/03/5b97ab84-d198-4aab-83ac-53650b8ba153-Biggenden.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [
      { value: "Ocean", title: "Ocean" },
      { value: "People", title: "People" }
    ],
    caption: "Boats (Jeshu John - designerspics.com)"
  },

  {
    src: "https://images.adsttc.com/media/images/5c49/0f33/284d/d13e/b300/00a4/newsletter/-_Featuded_Image.jpg?1548291884",
    thumbnail:
      "https://images.adsttc.com/media/images/5c49/0f33/284d/d13e/b300/00a4/newsletter/-_Featuded_Image.jpg?1548291884",
    thumbnailWidth: 720,
    thumbnailHeight: 212
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXKakuju2juAfcjXwGCi1pFbX_vkH7xNvOWP8pZtAwfcRvQnnPM9MGrClNBv7tI6k__rw&usqp=CAU",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXKakuju2juAfcjXwGCi1pFbX_vkH7xNvOWP8pZtAwfcRvQnnPM9MGrClNBv7tI6k__rw&usqp=CAU",
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    caption: "After Rain (Jeshu John - designerspics.com)"
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgVtX0pKoDyavjXHM-YBwHBLXSD9tYl-gL7Q&usqp=CAU",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgVtX0pKoDyavjXHM-YBwHBLXSD9tYl-gL7Q&usqp=CAU",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [
      { value: "Ocean", title: "Ocean" },
      { value: "People", title: "People" }
    ],
    caption: "Boats (Jeshu John - designerspics.com)"
  },

  {
    src: "https://cdn.pixabay.com/photo/2017/07/08/02/16/house-2483336__340.jpg",
    thumbnail:
      "https://cdn.pixabay.com/photo/2017/07/08/02/16/house-2483336__340.jpg",
    thumbnailWidth: 420,
    thumbnailHeight: 212
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyZb3aG65RP2oInlV-0QqTPQjn5d4gK_Lv9A&usqp=CAU",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyZb3aG65RP2oInlV-0QqTPQjn5d4gK_Lv9A&usqp=CAU",
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    caption: "After Rain (Jeshu John - designerspics.com)"
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3DfER5-NYpnXfsKk5y7Lgxgrs3Ruw6Ib-hQ&usqp=CAU",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3DfER5-NYpnXfsKk5y7Lgxgrs3Ruw6Ib-hQ&usqp=CAU",
    thumbnailWidth: 220,
    thumbnailHeight: 212,
    tags: [
      { value: "Ocean", title: "Ocean" },
      { value: "People", title: "People" }
    ],
    caption: "Boats (Jeshu John - designerspics.com)"
  },

  ];

const MyGallery = () => {
  return (
    <>
    <div className="row">
<h5 className="text-center fs-18">Featured Gallery</h5>
<div className="col-lg-1"></div>

    <div className="col-lg-10 col-sm-12 mx-1">
      <Gallery
      images={IMAGES}
      enableLightbox={true}
      // maxRows={3}
      backdropClosesModal
      // currentImage={3}
      // isOpen={ true}
    />
    </div>
    </div>
    </>
  )
}

export default MyGallery