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
