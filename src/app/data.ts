//primary list menu
const listNav = [
    {
      nameMenu: 'Overview',
      iconMenu: 'fas fa-chart-line',
      pathMenu: '/dashboard'
    },
    {
      nameMenu: 'Tickets',
      iconMenu: 'fas fa-ticket-alt',
      pathMenu: '/tickets'
    },
    {
      nameMenu: 'Ideas',
      iconMenu: 'fas fa-lightbulb',
      pathMenu: '/ideas'
    },
    {
      nameMenu: 'Contacts',
      iconMenu: 'fas fa-address-book',
      pathMenu: '/contacts'
    },
    {
      nameMenu: 'Agents',
      iconMenu: 'fas fa-users',
      pathMenu: '/agents'
    },
    {
      nameMenu: 'Articles',
      iconMenu: 'fas fa-file-alt',
      pathMenu: '/articles'
    }
];

//second list menu
  const listParameter = [
    {
      nameMenu: 'Settings',
      iconMenu: 'fas fa-cog',
      pathMenu: 'settings'
    },
    {
      nameMenu: 'Subscription',
      iconMenu: 'fas fa-credit-card',
      pathMenu: 'subscription'
    }
  ];

  //imaginary tickets data
  const tickets = [
    {
      id: 1,
      details: "Issue with login page",
      customerName: "John Doe",
      date: "2022-05-10",
      priority: "High"
    },
    {
      id: 2,
      details: "Error when submitting form",
      customerName: "Jane Smith",
      date: "2022-05-12",
      priority: "Medium"
    },
    {
      id: 3,
      details: "Slow performance on dashboard",
      customerName: "Michael Johnson",
      date: "2022-05-15",
      priority: "Low"
    },
    {
      id: 4,
      details: "Broken link in footer",
      customerName: "Sarah Williams",
      date: "2022-05-17",
      priority: "High"
    },
    {
      id: 5,
      details: "Missing images on product page",
      customerName: "David Brown",
      date: "2022-05-20",
      priority: "Medium"
    },
    {
      id: 6,
      details: "Incorrect pricing displayed",
      customerName: "Emily Jones",
      date: "2022-05-22",
      priority: "Low"
    },
    {
      id: 7,
      details: "404 error on checkout page",
      customerName: "Robert Taylor",
      date: "2022-05-25",
      priority: "High"
    },
    {
      id: 8,
      details: "Product image not loading",
      customerName: "Lisa Martinez",
      date: "2022-05-27",
      priority: "Medium"
    },
    {
      id: 9,
      details: "Billing address form validation issue",
      customerName: "William Clark",
      date: "2022-05-30",
      priority: "Low"
    },
    {
      id: 10,
      details: "Unable to add items to cart",
      customerName: "Karen Rodriguez",
      date: "2022-06-02",
      priority: "High"
    }
  ];

  export {listNav, listParameter, tickets}