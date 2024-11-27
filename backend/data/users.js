import bcrypt from "bcryptjs";
export const MockUserList = [
  {
    email: "MikeMicheal@gmail.com",
    name: "Mike Micheal",
    password: bcrypt.hashSync("12345", 10),
    phone: " (555) 603-1724",
    image: "/images/user_1.jpg",
  },
  {
    email: "RobertWatson@gmail.com",
    name: "Robert Watson",
    password: bcrypt.hashSync("12345", 10),
    phone: " (555) 603-1724",
    image: "/images/user_2.jpg",
  },
  {
    email: "CameroonWiliamson@gmail.com",
    name: "Cameroon Wiliamson",
    password: bcrypt.hashSync("12345", 10),
    phone: " (555) 603-1724",
    image: "/images/user_3.jpg",
  },
  {
    email: "KristinCooper@gmail.com",

    name: "Kristin Cooper",
    password: bcrypt.hashSync("12345", 10),
    phone: " (555) 603-1724",
    image: "/images/user_4.jpg",
  },
  {
    email: "KelvinNguyen@gmail.com",
    name: "Kelvin Nguyen",
    password: bcrypt.hashSync("12345", 10),
    phone: " (555) 603-1724",
    image: "/images/user_5.jpg",
  },
];
