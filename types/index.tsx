export const User = {
  id: 0,
  username: "",
  image: "",
  locatedIn: "",
  reputation: 0,
};

export const Listing = {
  id: 0,
  title: "",
  description: "",
  price: 0,
  location: "",
  images: {
    primary: "",
    secondary: [],
  },
  user: User,
  createdAt: "",
  updatedAt: "",
  deletedAt: "",
  endTime: "",
  grade: "",
  shippingInfo: "",
  bids: 0,
};
