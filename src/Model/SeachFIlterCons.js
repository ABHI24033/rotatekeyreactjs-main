import { location2 } from "../component/env";

export const filterInsertData = {
  Price: {
    minPrice: [],
    maxPrice: [],
  },
  Location: {
    //   "city":[{"value":"lucknow"},{"value":"Bengaluru"},{value:"Mumbai"}],
    City: location2.map((value) => value),
  },
};

export const filterInsertJobData = {
  Price: {
    minSalary: [],
    maxSalary: [],
  },
  Location: {
    City: location2.map((value) => value),
  },
};
