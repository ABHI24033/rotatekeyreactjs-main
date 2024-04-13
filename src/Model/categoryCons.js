import {
  Education,
  educationSubCategory,
  Electronics,
  FurnitureSubCategory,
  Pets,
  Mobiles,
  Jobs,
  Services,
  Health,
  Travels,
  Photography,
  Salon,
  Bikes,
  Cars,
} from "../component/env";
import table from "../component/images/table.jpg";
import furcat from "../component/images/furcat.jpg";
import salon from "../component/images/salon.jpg";
import makeup from "../component/images/makeup.jpg";
import thread from "../component/images/thread.jpg";
import doctor from "../component/images/doctor.jpg";
import food from "../component/images/food.jpg";
import yoga from "../component/images/yoga.jpg";
import pics from "../component/images/pics.jpg";
import pic1 from "../component/images/pic1.jpg";
import train from "../component/images/train.jpg";
import plain from "../component/images/plain.jpg";
import ele1 from "../component/images/ele1.png";
import elec2 from "../component/images/elec2.png";
import elec3 from "../component/images/elec3.png";
import job11 from "../component/images/job11.png";
import job22 from "../component/images/job22.png";
import job from "../component/images/job.jpg";
import skoda from "../component/images/skoda.png";
import skoda1 from "../component/images/skoda1.png";
import skoda2 from "../component/images/skoda2.png";
import honda from "../component/images/honda.jpg";
import schoollarge from "../component/images/schoollarge.jpg";
import schoolgirl from "../component/images/schoolgirl.jpg";
import schoolgroup from "../component/images/schoolgroup.jpg";
import dog1 from "../component/images/dog1.jpg";
import dog2 from "../component/images/dog2.jpg";
import dog3 from "../component/images/dog3.jpg";
import furnitureImages from "../component/images/furnitureImages.jpg";
import ktmbike from "../component/images/ktm-bike.jpg";
//import BikeMulti from "../component/images/BikeMulti.jpg";
import royalEnfield from "../component/images/royalEnfield.jpg";
export const categoryModel = {
  Furniture: {
    category: "Furniture",
    SlideImage: {
      slideImageOne: furcat,
      slideImageTwo: furnitureImages,
      slideImageThird: table,
    },
    Search: { setsubCategoryValue: FurnitureSubCategory },
    // "subCategory":['Household Furnitures','Office Furnitures','Kids Furniture','HomeDecor']
    subCategory: [
      "Furniture For Home & Office",
      "Home Decor - Furnishings",
      "Household",
      "Kitchenware",
      "Painting",
    ],
  },
  Education: {
    category: "Education",
    SlideImage: {
      slideImageOne: schoollarge,
      slideImageTwo: schoolgirl,
      slideImageThird: schoolgroup,
    },
    Search: { setsubCategoryValue: Education },
    subCategory: ["School", "College", "Online"],
  },
  Pets: {
    category: "Pets",
    SlideImage: {
      slideImageOne: dog1,
      slideImageTwo: dog2,
      slideImageThird: dog3,
    },
    Search: { setsubCategoryValue: Pets },
    // "subCategory":["Animal","Food","Cage"]
    subCategory: [
      "Pet Food",
      "Pet Shop",
      "Pet Clinics",
      "Pet Training & Grooming",
      "Pet Care-Accessories",
    ],
  },
  Mobiles: {
    category: "Mobiles",
    SlideImage: {
      slideImageOne:
        "https://images.unsplash.com/photo-1581993192008-63e896f4f744?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1337&q=80",
      slideImageTwo:
        "https://images.unsplash.com/photo-1599016012665-13b74bb3b528?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODF8fG1vYmlsZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      slideImageThird:
        "https://images.unsplash.com/photo-1517777298614-cb6eefb19fad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAwfHxtb2JpbGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    Search: { setsubCategoryValue: Mobiles },
    // "subCategory":["RealMe","iPhone","OPPO","Xaomi","POCO","SAMSUNG"]
    subCategory: ["Mobile Phones", "Accessories", "Tablets"],
  },
  Electronics: {
    category: "Electronics",
    SlideImage: {
      slideImageOne: ele1,
      slideImageTwo: elec2,
      slideImageThird: elec3,
    },
    Search: { setsubCategoryValue: Electronics },
    // "subCategory":['Dsktop/Computers','Household Appliances','Cameras','Gaming','Audio & Video',]
    subCategory: [
      "Refrigerators-Fridge",
      "Music Systems - Home Theatre",
      "TV",
      "Gas Stove",
      "Video Games - Consoles",
      "Cameras ",
      "Camera Accessories",
      "Microwave Ovens​",
      "Induction Cook Tops​",
      "Mixer - Grinder - Juicer",
      "Water Purifiers",
      "Laptops Or (Desktops / Computers)",
      "Monitor Or Printers Or Scanners",
      "Washing Machines",
      "Water Heaters - Geysers",
      "Air Coolers​",
      "Air Conditioners / AC",
    ],
  },
  // Jobs: {
  //   category: "Jobs",
  //   SlideImage: {
  //     slideImageOne: job11,
  //     slideImageTwo: job22,
  //     slideImageThird: job,
  //   },
  //   Search: { setsubCategoryValue: Jobs },
  //   // "subCategory":["Private","Government","Semi-Government"]
  //   subCategory: ["Full Time", "Part Time", "Internships", "Work From Home"],
  // },
  Services: {
    category: "Services",
    SlideImage: {
      slideImageOne:
        "https://images.unsplash.com/photo-1658325387889-1bf64dc24d45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGFja2VyJTIwYW5kJTIwbW92ZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      slideImageTwo:
        "https://images.unsplash.com/photo-1603114595741-e60bf9486e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGlhbmNlJTIwcmVwYWlyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      slideImageThird:
        "https://images.unsplash.com/photo-1581578949510-fa7315c4c350?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBlc3QlMjBjb250cm9sfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    Search: { setsubCategoryValue: Services },
    subCategory: [
      "Home Repair",
      "Appliance Repair",
      "Packers and Movers",
      "Pest Control",
      "Home Cleaning",
      "Computer Repair",
      "Mobile & Tablet Repair",
    ],
  },
  Health: {
    category: "Health",
    SlideImage: {
      slideImageOne: yoga,
      slideImageTwo: food,
      slideImageThird: doctor,
    },
    Search: { setsubCategoryValue: Health },
    subCategory: ["Private", "Government", "Semi-Government"],
  },
  Travels: {
    category: "Travels",
    SlideImage: {
      slideImageOne: plain,
      slideImageTwo: train,
      slideImageThird: plain,
    },
    Search: { setsubCategoryValue: Travels },
    subCategory: ["Private", "Government", "Semi-Government"],
  },
  Photography: {
    category: "Photography",
    SlideImage: {
      slideImageOne: pics,
      slideImageTwo: pic1,
      slideImageThird: pics,
    },
    Search: { setsubCategoryValue: Photography },
    subCategory: ["Camera", "MobilePhotography"],
  },
  Salon: {
    category: "Salon",
    SlideImage: {
      slideImageOne: thread,
      slideImageTwo: makeup,
      slideImageThird: salon,
    },
    Search: { setsubCategoryValue: Salon },
    subCategory: ["Parlour"],
  },

  Cars: {
    category: "Cars",
    SlideImage: {
      slideImageOne: skoda,
      slideImageTwo: skoda1,
      slideImageThird: skoda2,
    },
    Search: { setsubCategoryValue: Cars },
    subCategory: ["Cars", "Spare Parts - Accessories"],
  },

  Bikes: {
    category: "Bikes",
    SlideImage: {
      slideImageOne: ktmbike,
      slideImageTwo: honda,
      slideImageThird: royalEnfield,
    },
    Search: { setsubCategoryValue: Bikes },
    subCategory: ["Bikes", "Spare Parts - Accessories"],
  },
};
