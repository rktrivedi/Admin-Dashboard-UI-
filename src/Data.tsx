export const menu = [
  {
    id: 1,
    title: "main",
    listItems: [
      {
        id: 1,
        title: "HomePage",
        url: "/",
        icon: "home.svg",
      },

      {
        id: 2,
        title: "Profile",
        url: "/Users/1",
        icon: "user.svg",
      },
    ],
  },
  {
    id: 2,
    title: "lists",
    listItems: [
      {
        id: 1,
        title: "Users",
        url: "/Users",
        icon: "user.svg",
      },

      {
        id: 2,
        title: "Products",
        url: "/Products",
        icon: "product.svg",
      },
      {
        id: 3,
        title: "Orders",
        url: "/Orders",
        icon: "order.svg",
      },
      {
        id: 4,
        title: "Posts",
        url: "/posts",
        icon: "post2.svg",
      },
    ],
  },
  {
    id: 3,
    title: "general",
    listItems: [
      {
        id: 1,
        title: "Elements",
        url: "/",
        icon: "element.svg",
      },

      {
        id: 2,
        title: "Notes",
        url: "/",
        icon: "note.svg",
      },
      {
        id: 3,
        title: "Forms",
        url: "/",
        icon: "form.svg",
      },
      {
        id: 4,
        title: "Calendar",
        url: "/",
        icon: "calendar.svg",
      },
    ],
  },
  {
    id: 4,
    title: "Maintenance",
    listItems: [
      {
        id: 1,
        title: "Settings",
        url: "/",
        icon: "setting.svg",
      },

      {
        id: 2,
        title: "Backups",
        url: "/",
        icon: "backup.svg",
      },
    ],
  },
  {
    id: 5,
    title: "analytics",
    listItems: [
      {
        id: 1,
        title: "Charts",
        url: "/",
        icon: "chart.svg",
      },

      {
        id: 2,
        title: "Logs",
        url: "/",
        icon: "log.svg",
      },
    ],
  },
];

export const topDealUsers = [
  {
    id: 1,
    img: "https://files.prokerala.com/news/photos/imgs/1024/stills-from-telugu-film-hero-ram-347730.jpg",
    username: "Rahul Kumar",
    email: "rahul.kumar@example.com",
    amount: 50000,
  },
  {
    id: 2,
    img: "https://files.prokerala.com/news/photos/imgs/1024/stills-from-telugu-film-hero-ram-347730.jpg",
    username: "Priya Sharma",
    email: "priya.sharma@example.com",
    amount: 75000,
  },
  {
    id: 3,
    img: "https://files.prokerala.com/news/photos/imgs/1024/stills-from-telugu-film-hero-ram-347730.jpg",
    username: "Amit Patel",
    email: "amit.patel@example.com",
    amount: 60000,
  },
  {
    id: 4,
    img: "https://files.prokerala.com/news/photos/imgs/1024/stills-from-telugu-film-hero-ram-347730.jpg",
    username: "Neha Gupta",
    email: "neha.gupta@example.com",
    amount: 45000,
  },
  {
    id: 5,
    img: "https://files.prokerala.com/news/photos/imgs/1024/stills-from-telugu-film-hero-ram-347730.jpg",
    username: "Deepak Singh",
    email: "deepak.singh@example.com",
    amount: 80000,
  },
  {
    id: 6,
    img: "https://files.prokerala.com/news/photos/imgs/1024/stills-from-telugu-film-hero-ram-347730.jpg",
    username: "Ananya Reddy",
    email: "ananya.reddy@example.com",
    amount: 70000,
  },
  {
    id: 7,
    img: "https://files.prokerala.com/news/photos/imgs/1024/stills-from-telugu-film-hero-ram-347730.jpg",
    username: "Sandeep Verma",
    email: "sandeep.verma@example.com",
    amount: 55000,
  },
];

export default topDealUsers;

export const chartBoxUser = {
  color: "#8884d8",
  icon: "/userIcon.svg",
  title: "Total Users",
  datakey: "users",
  number: "11.238",
  percentage: 45,
  chartData: [
    { name: "Sun", users: 400 },
    { name: "Mon", users: 600 },
    { name: "Tue", users: 500 },
    { name: "Wed", users: 700 },
    { name: "Thu", users: 400 },
    { name: "Fri", users: 500 },
    { name: "Sat", users: 450 },
  ],
};

export const chartBoxTopProduct = {
  color: "#ffc658",
  icon: "/productIcon.svg",
  title: "Top Product",
  datakey: "products",
  number: "238",
  percentage: 75,
  chartData: [
    { name: "Sun", products: 8 },
    { name: "Mon", products: 12 },
    { name: "Tue", products: 10 },
    { name: "Wed", products: 15 },
    { name: "Thu", products: 7 },
    { name: "Fri", products: 9 },
    { name: "Sat", products: 11 },
  ],
};

export const chartBoxConversion = {
  color: "#ff7f0e",
  icon: "/conversionIcon.svg",
  title: "Conversion Ratio",
  datakey: "conversionRatio",
  number: "2.5%",
  percentage: 20,
  chartData: [
    { name: "Sun", conversionRatio: 3 },
    { name: "Mon", conversionRatio: 2 },
    { name: "Tue", conversionRatio: 2.5 },
    { name: "Wed", conversionRatio: 3.2 },
    { name: "Thu", conversionRatio: 2.8 },
    { name: "Fri", conversionRatio: 2.6 },
    { name: "Sat", conversionRatio: 2.3 },
  ],
};

export const chartBoxRevenue = {
  color: "#d62728",
  icon: "/revenueIcon.svg",
  title: "Total Revenue",
  datakey: "revenue",
  number: "$120K",
  percentage: 90,
  chartData: [
    { name: "Sun", revenue: 18000 },
    { name: "Mon", revenue: 25000 },
    { name: "Tue", revenue: 20000 },
    { name: "Wed", revenue: 30000 },
    { name: "Thu", revenue: 15000 },
    { name: "Fri", revenue: 22000 },
    { name: "Sat", revenue: 19000 },
  ],
};

export const barChartBoxRevenue = {
  color: "#8884d8",
  title: "Profit Earned",
  datakey: "profit",
  chartData: [
    {
      name: "Sun",
      profit: 4000,
    },
    {
      name: "Mon",
      profit: 4000,
    },
    {
      name: "Tue",
      profit: 8000,
    },
    {
      name: "Wed",
      profit: 6000,
    },
    {
      name: "Thu",
      profit: 7000,
    },
    {
      name: "Fri",
      profit: 9000,
    },
    {
      name: "Sat",
      profit: 10000,
    },
  ],
};

export const barChartBoxWalkins = {
  color: "#4CAF50",
  title: "Walk-ins",
  datakey: "walkins",
  chartData: [
    { name: "Sun", walkins: 200 },
    { name: "Mon", walkins: 150 },
    { name: "Tue", walkins: 180 },
    { name: "Wed", walkins: 250 },
    { name: "Thu", walkins: 220 },
    { name: "Fri", walkins: 200 },
    { name: "Sat", walkins: 180 },
  ],
};

export const rows = [
  {
    id: 1,
    img: "https://dummyimage.com/100x100/000/fff",
    lastname: "Kumar",
    firstname: "Amit",
    email: "amit.kumar@example.com",
    phone: "+91 9876543210",
    createdAt: "2023-01-15",
    verified: true,
  },
  {
    id: 2,
    img: "https://dummyimage.com/100x100/000/fff",
    lastname: "Sharma",
    firstname: "Neha",
    email: "neha.sharma@example.com",
    phone: "+91 8765432109",
    createdAt: "2023-02-20",
    verified: false,
  },
  {
    id: 3,
    img: "https://dummyimage.com/100x100/000/fff",
    lastname: "Patel",
    firstname: "Raj",
    email: "raj.patel@example.com",
    phone: "+91 7654321098",
    createdAt: "2023-03-25",
    verified: true,
  },
  {
    id: 4,
    img: "https://dummyimage.com/100x100/000/fff",
    lastname: "Singh",
    firstname: "Priya",
    email: "priya.singh@example.com",
    phone: "+91 6543210987",
    createdAt: "2023-04-10",
    verified: false,
  },
  {
    id: 5,
    img: "https://dummyimage.com/100x100/000/fff",
    lastname: "Mishra",
    firstname: "Vikram",
    email: "vikram.mishra@example.com",
    phone: "+91 5432109876",
    createdAt: "2023-05-15",
    verified: true,
  },
  {
    id: 6,
    img: "https://dummyimage.com/100x100/000/fff",
    lastname: "Reddy",
    firstname: "Ananya",
    email: "ananya.reddy@example.com",
    phone: "+91 4321098765",
    createdAt: "2023-06-20",
    verified: false,
  },
  {
    id: 7,
    img: "https://dummyimage.com/100x100/000/fff",
    lastname: "Gupta",
    firstname: "Rahul",
    email: "rahul.gupta@example.com",
    phone: "+91 3210987654",
    createdAt: "2023-07-25",
    verified: true,
  },
  {
    id: 8,
    img: "https://dummyimage.com/100x100/000/fff",
    lastname: "Yadav",
    firstname: "Sneha",
    email: "sneha.yadav@example.com",
    phone: "+91 2109876543",
    createdAt: "2023-08-30",
    verified: false,
  },
  {
    id: 9,
    img: "https://dummyimage.com/100x100/000/fff",
    lastname: "Malhotra",
    firstname: "Vivek",
    email: "vivek.malhotra@example.com",
    phone: "+91 1098765432",
    createdAt: "2023-09-05",
    verified: true,
  },
  {
    id: 10,
    img: "https://dummyimage.com/100x100/000/fff",
    lastname: "Das",
    firstname: "Ritika",
    email: "ritika.das@example.com",
    phone: "+91 9876543210",
    createdAt: "2023-10-10",
    verified: false,
  },
  {
    id: 11,
    img: "https://dummyimage.com/100x100/000/fff",
    lastname: "Jain",
    firstname: "Aniket",
    email: "aniket.jain@example.com",
    phone: "+91 8765432109",
    createdAt: "2023-11-15",
    verified: true,
  },
  {
    id: 12,
    img: "https://dummyimage.com/100x100/000/fff",
    lastname: "Nair",
    firstname: "Deepa",
    email: "deepa.nair@example.com",
    phone: "+91 7654321098",
    createdAt: "2023-12-20",
    verified: false,
  },
  {
    id: 13,
    img: "https://dummyimage.com/100x100/000/fff",
    lastname: "Rajput",
    firstname: "Sarika",
    email: "sarika.rajput@example.com",
    phone: "+91 6543210987",
    createdAt: "2024-01-25",
    verified: true,
  },
  {
    id: 14,
    img: "https://dummyimage.com/100x100/000/fff",
    lastname: "Verma",
    firstname: "Alok",
    email: "alok.verma@example.com",
    phone: "+91 5432109876",
    createdAt: "2024-02-29",
    verified: false,
  },
  {
    id: 15,
    img: "https://dummyimage.com/100x100/000/fff",
    lastname: "Chopra",
    firstname: "Sakshi",
    email: "sakshi.chopra@example.com",
    phone: "+91 4321098765",
    createdAt: "2024-03-05",
    verified: true,
  },
];

export const instituteRows = [
  {
    id: 1,
    img: "https://dummyimage.com/100x100/3498db/ffffff&text=Book+1",
    productName: "Course 101",
    category: "Mathematics",
    price: 99.99,
    description: "Introduction to basic mathematical concepts and principles.",
    inStock: true,
  },
  {
    id: 2,
    img: "https://dummyimage.com/100x100/e74c3c/ffffff&text=Book+2",
    productName: "English Literature 201",
    category: "Literature",
    price: 79.99,
    description: "Exploring classic and modern works of English literature.",
    inStock: false,
  },
  {
    id: 3,
    img: "https://dummyimage.com/100x100/2ecc71/ffffff&text=Book+3",
    productName: "History 301",
    category: "History",
    price: 129.99,
    description:
      "Understanding historical events and their impact on the world.",
    inStock: true,
  },
  {
    id: 4,
    img: "https://dummyimage.com/100x100/e67e22/ffffff&text=Book+4",
    productName: "Chemistry Lab Kit",
    category: "Science",
    price: 49.99,
    description: "A kit for hands-on experiments in chemistry.",
    inStock: false,
  },
  {
    id: 5,
    img: "https://dummyimage.com/100x100/9b59b6/ffffff&text=Book+5",
    productName: "Computer Science 401",
    category: "Computer Science",
    price: 149.99,
    description: "Advanced topics in computer science and programming.",
    inStock: true,
  },
  {
    id: 6,
    img: "https://dummyimage.com/100x100/34495e/ffffff&text=Book+6",
    productName: "Art and Design Workshop",
    category: "Art",
    price: 69.99,
    description:
      "Hands-on workshop exploring various art and design techniques.",
    inStock: true,
  },
  {
    id: 7,
    img: "https://dummyimage.com/100x100/1abc9c/ffffff&text=Book+7",
    productName: "Physical Education 501",
    category: "Physical Education",
    price: 39.99,
    description: "Engaging in physical activities for a healthy lifestyle.",
    inStock: false,
  },
  {
    id: 8,
    img: "https://dummyimage.com/100x100/f39c12/ffffff&text=Book+8",
    productName: "Music Theory 601",
    category: "Music",
    price: 89.99,
    description:
      "Studying the theoretical aspects of music composition and notation.",
    inStock: true,
  },
  {
    id: 9,
    img: "https://dummyimage.com/100x100/2c3e50/ffffff&text=Book+9",
    productName: "Environmental Science 701",
    category: "Environmental Science",
    price: 119.99,
    description: "Exploring the impact of human activities on the environment.",
    inStock: false,
  },
  {
    id: 10,
    img: "https://dummyimage.com/100x100/3498db/ffffff&text=Book+10",
    productName: "Foreign Language Course",
    category: "Language",
    price: 59.99,
    description: "Learning a new language for effective communication.",
    inStock: true,
  },
  {
    id: 11,
    img: "https://dummyimage.com/100x100/e74c3c/ffffff&text=Book+11",
    productName: "Physics Fundamentals 801",
    category: "Physics",
    price: 179.99,
    description: "Understanding fundamental principles of physics.",
    inStock: true,
  },
  {
    id: 12,
    img: "https://dummyimage.com/100x100/2ecc71/ffffff&text=Book+12",
    productName: "Philosophy 901",
    category: "Philosophy",
    price: 29.99,
    description: "Exploring philosophical concepts and critical thinking.",
    inStock: false,
  },
  {
    id: 13,
    img: "https://dummyimage.com/100x100/e67e22/ffffff&text=Book+13",
    productName: "Robotics Club Kit",
    category: "Technology",
    price: 199.99,
    description:
      "A kit for building and programming robots in the robotics club.",
    inStock: true,
  },
  {
    id: 14,
    img: "https://dummyimage.com/100x100/9b59b6/ffffff&text=Book+14",
    productName: "Psychology 1001",
    category: "Psychology",
    price: 49.99,
    description: "Understanding the human mind and behavior.",
    inStock: false,
  },
  {
    id: 15,
    img: "https://dummyimage.com/100x100/1abc9c/ffffff&text=Book+15",
    productName: "Social Studies 1101",
    category: "Social Studies",
    price: 69.99,
    description:
      "Exploring various aspects of social studies and cultural diversity.",
    inStock: true,
  },
];

export const singleProduct = {
  id: 1,
  title: "Social Studies 1101",
  img: "https://dummyimage.com/100x100/1abc9c/ffffff&text=Book+15",
  info: {
    productId: "Studies 1101",
    color: "White",
    price: 69.99,
    category: "Social Studies",
    instock: "Available",
  },
  chart: {
    datakeys: [
      { name: "visits", color: "#82ca9d" },
      { name: "orders", color: "#8884d8" },
    ],
    data: [
      {
        name: "Sun",
        visits: 4000,
        orders: 2400,
        amount: 2400,
      },
      {
        name: "Mon",
        visits: 6000,
        orders: 2400,
        amount: 2400,
      },
      {
        name: "Tue",
        visits: 1000,
        orders: 2400,
        amount: 2400,
      },
      {
        name: "Wed",
        visits: 2000,
        orders: 2800,
        amount: 2400,
      },
      {
        name: "Thu",
        visits: 6000,
        orders: 3400,
        amount: 2400,
      },
      {
        name: "Fri",
        visits: 2000,
        orders: 1400,
        amount: 2400,
      },
      {
        name: "Sat",
        visits: 500,
        orders: 400,
        amount: 2400,
      },
    ],
  },

  activities: [
    {
      text: "Rahul purchased Social Studies Books",
      time: "3 days ago",
    },
    {
      text: "Neha enrolled in English Literature 201",
      time: "5 days ago",
    },
    {
      text: "Amit attended History 301 lecture",
      time: "1 week ago",
    },
    {
      text: "Priya ordered Chemistry Lab Kit",
      time: "2 weeks ago",
    },
    {
      text: "Vikram completed Computer Science 401 assignment",
      time: "3 weeks ago",
    },
    {
      text: "Ananya participated in Art and Design Workshop",
      time: "1 month ago",
    },
    {
      text: "Rahul joined Physical Education 501 class",
      time: "1 month ago",
    },
    {
      text: "Sneha practiced Music Theory 601 lessons",
      time: "2 months ago",
    },
    {
      text: "Vivek explored Environmental Science 701 topics",
      time: "2 months ago",
    },
    {
      text: "Ritika started the Foreign Language Course",
      time: "3 months ago",
    },
  ],
};

export const singleUser = {
  id: 1,
  title: "Rahul Mehta",
  img: "https://dummyimage.com/100x100/1abc9c/ffffff&text=Rahul",
  info: {
    username: "rahul_mehta",
    fullname: "Rahul Mehta",
    email: "rahul.mehta@example.com",
    phone: "+91 9876543210",
    status: "Active",
  },
  chart: {
    datakeys: [
      { name: "visits", color: "#82ca9d" },
      { name: "clicks", color: "#8884d8" },
    ],
    data: [
      {
        name: "Sun",
        visits: 4000,
        orders: 2400,
        amount: 2400,
      },
      {
        name: "Mon",
        visits: 6000,
        orders: 2400,
        amount: 2400,
      },
      {
        name: "Tue",
        visits: 1000,
        orders: 2400,
        amount: 2400,
      },
      {
        name: "Wed",
        visits: 2000,
        orders: 2800,
        amount: 2400,
      },
      {
        name: "Thu",
        visits: 6000,
        orders: 3400,
        amount: 2400,
      },
      {
        name: "Fri",
        visits: 2000,
        orders: 1400,
        amount: 2400,
      },
      {
        name: "Sat",
        visits: 500,
        orders: 400,
        amount: 2400,
      },
    ],
  },
  activities: [
    {
      text: "Rahul purchased Social Studies Books",
      time: "3 days ago",
    },
    {
      text: "Rahul enrolled in English Literature 201",
      time: "5 days ago",
    },
    {
      text: "Rahul attended History 301 lecture",
      time: "1 week ago",
    },
    {
      text: "Rahul ordered Chemistry Lab Kit",
      time: "2 weeks ago",
    },
    {
      text: "Rahul completed Computer Science 401 assignment",
      time: "3 weeks ago",
    },
    {
      text: "Rahul participated in Art and Design Workshop",
      time: "1 month ago",
    },
    {
      text: "Rahul joined Physical Education 501 class",
      time: "1 month ago",
    },
    {
      text: "Rahul practiced Music Theory 601 lessons",
      time: "2 months ago",
    },
    {
      text: "Rahul explored Environmental Science 701 topics",
      time: "2 months ago",
    },
    {
      text: "Rahul started the Foreign Language Course",
      time: "3 months ago",
    },
  ],
};
