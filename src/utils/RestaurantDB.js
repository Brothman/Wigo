//put bits of restaurant name in tag array so we can search it.

var restaurants = [
    {
    "name": 'Addis in Cape',
    'address': "Corner Church & Long Street, 41 Church St, CBD, Cape Town, 8001, South Africa",
    "todaysHours": "12am-10:30pm",
    "recommendedHours": "7pm-10pm",
    "price": "$",
    "website": "https://www.addisincape.co.za",
    "contact": "27214245722",
    "description": "Cultural dining experience with Ethiopian dishes served in a woven basket table and eaten by hand.",
    "tags": ["dinner", "long street", "meal", "drinks", "addis", "cape"],
    "uberTime": "17 min",
    "imageUrl": "http://www.eatout.co.za/wp-content/uploads/2014/02/Addis-in-Cape.jpg"
    },

    {
    "name": 'Gold Restaurant',
    "address": "15 Bennett St, Green Point, Cape Town, 8005, South Africa",
    "todaysHours": "6:30-11pm",
    "recommendedHours": "7-9pm",
    "price": "$",
    "website": "http://www.goldrestaurant.co.za",
    "contact": "270214214653",
    "description": "African 14-course menu in a safari lodge setting with courtyard, live drumming and Mali puppets.",
    "tags":[ "dinner", "meal", "drinks", "music", 'gold'],
    "uberTime": "22 min",
    "imageUrl": "http://feastafrica.com/wp-content/uploads/2016/08/Gold-Menu-Items.png"
  },

    {
    'name': 'Kloof Street House',
    "address": "30 Kloof St, Gardens, Cape Town, 8005, South Africa",
    "todaysHours": "12pm-2am",
    "recommendedHours": "8-10pm",
    "price": "$",
    "website": "http://www.kloofstreethouse.co.za",
    "contact": "27 21 423 4413",
    "description": "Richly furnished dining rooms in Victorian house with bar and leafy gardens, for eclectic cuisine",
    "tags":["dinner", "meal", "drinks", "Kloof Street", 'Kloof', 'House'],
    "uberTime": "13 min",
    "imageUrl": " https://d2v7cp6zd42ged.cloudfront.net/restaurantpictures/kloof_street_house_451812_std.png"
    },

    {
    "name": "Willoughby & Co",
    "address": "6130 & 6132, Victoria Wharf Shopping Centre, Breakwater Blvd, V & A Waterfront, Cape Town, 8001, South Africa",
    "todaysHours": "12-10:30pm",
    "recommendedHours": "2-3pm",
    "price": "$",
    "website": "http://www.waterfront.co.za/Eat/w/willoughby-and-co",
    "contact": "27214186115",
    "description": "Popular shopping-mall restaurant turning out creative sushi preparations & other Japanese dishes.",
    "tags":["meal", "dinner", "lunch", "sushi", "Waterfront", 'Willoughby', 'Co'],
    "uberTime": "23 min",
    "imageUrl": "https://www.simonseeks.com/cache/image/food_drink/172275/single_post/picture1-26496.png"
    },

/*
    'La Boheme': {

    address: "341 Main Rd, Sea Point, Cape Town, 8005, South Africa",
    today’s hours: "12-10pm",
    recommended hours: "8-10pm",
    price: "$",
    website: "http://www.labohemebistro.co.za",
    contact: "27214348797",
    description: "True to bistro style, La Boheme is cosy and welcoming, serving gourmet yet hearty meals at a reasonable price.",
    tags:["dinner", "meal", "drinks"]
    uberTime: "17 min",
    imageUrl: "https://goo.gl/images/7FyXbV"
    },


    'El Burro': {

    address: "81 Main Rd, Cape Town, 8005, South Africa",
    today’s hours: "12-11:30pm",
    recommended hours: "7-10pm",
    price: "$",
    website: "http://elburro.co.za",
    contact: "27 21 433 2364",
    description: "Imaginative Mexican cuisine with big list of craft beer and tequila in designer home-style setting.",
    tags:["dinner", "meal", "Mexican food", "drinks"]
    uberTime: "18 min",
    imageUrl: "https://goo.gl/images/CGJ4Y6"
    },

    'Nobu': {

    address: "0C Dock Rd, V & A Waterfront, Cape Town, 8001, South Africa",
    today’s hours: "6pm-12am",
    recommended hours: "7-10pm",
    price: "$",
    website: "https://www.oneandonlyresorts.com/one-and-only-cape-town-south-africa/cuisine/nobu",
    contact: "27 21 431 5111",
    description: "Nobu gives classical Japanese cuisine a contemporary twist.",
    tags:["dinner", "meal", "Japanese food"]
    uberTime: "22 min",
    imageUrl: "https://goo.gl/images/vyYSG0"

    },


    'Bombay Bicycle Club': {

    address: "158 Kloof Nek Rd, Gardens, Cape Town, 8001, South Africa",
    today’s hours: "4-11pm",
    recommended hours: "8-10pm",
    price: "$",
    website: "http://www.thebombay.co.za",
    contact: "27 21 423 6805",
    description: "Hangout with a far-flung feel for everything from Cajun calamari to roast beef, with drink specials.",
    tags:["dinner", "meal", "drinks"]
    uberTime: "8 min",
    imageUrl: "https://goo.gl/images/Qi9TfO"

    },


    'Posticino': {

    address: "323 Main Rd, Sea Point, Cape Town, 8060, South Africa",
    today’s hours: "12:30-10pm";
    recommended hours: "7-9pm",
    price: "$",
    website: "http://www.posticino.co.za",
    contact: "27 21 439 4014",
    description: "Laid-back, family-friendly Italian restaurant for large pizzas, pasta and meat dinner specials.",
    tags:["dinner", "meal", "Italian food"]
    uberTime: "14 min",
    imageUrl: "https://goo.gl/images/Qi9TfO"

    },


    'Balducci’s': {

    address: "6162, V&A Waterfront, Breakwater Blvd, V & A Waterfront, Cape Town, 8001, South Africa",
    today’s hours: "8am-11pm",
    recommended hours: "8-10pm",
    price: "$",
    website: "https://balduccis.co.za",
    contact: "27 21 421 6002",
    description: "Italian restaurant with pizza, pasta and full menu along with sushi bar and a waterfront panorama.",
    tags:["dinner", "meal", "Italian food", "Waterfront"]
    uberTime: "22 min",
    imageUrl: "https://goo.gl/images/sOSveJ"

    },


    'La Parada': {

    address: "107 Bree St, Cape Town City Centre, Cape Town, 8001, South Africa",
    today’s hours: "12-10pm",
    recommended hours: "7-9pm",
    price: "$",
    website: "http://laparada.co.za",
    contact: "27 21 426 0330",
    description: "Laid-back, open-fronted bar with high-stools and sidewalk tables, for Spanish tapas and cocktails.",
    tags:["dinner", "meal", "drinks", "Bree Street"]
    uberTime: "13 min",
    imageUrl: "https://goo.gl/images/QAXXzq"

    },


    "The Companys Garden": {

    address: "15 Queen Victoria St, Cape Town, 8001, South Africa",
    today’s hours: "7am-6pm",
    recommended hours: "11am-2pm",
    price: "$",
    website: "http://thecompanysgarden.com",
    contact: "27 21 423 2919",
    description: "Serving a selection of light meals, all time teatime favourites as well as a variety of traditional South Africa fare from early in the morning until late in the afternoon.",
    tags:["lunch", "brunch", "meal", "tea"]
    uberTime: "16 min",
    imageUrl: "https://goo.gl/images/xmz8J0"

    },


    'Bocca': {

    address: "The Block, Bree St & Wale Street, Cape Town City Centre, Cape Town, 8000, South Africa",
    today’s hours: "12-10pm",
    recommended hours: "7-9pm",
    price: "$",
    website: "http://bocca.co.za",
    contact: "27 21 422 0188",
    description: "Serves Neopolitan pizza and Italian-inspired food in an informal contemporary space in the centre of Cape Town.",
    tags:["dinner", "meal", "lunch", "Italian food", "Bree Street"]
    uberTime: "18 min",
    imageUrl: "https://goo.gl/images/R7iCxh"

    },

    'Fat Cactus': {

    address: "5 Park Rd, Gardens, Cape Town, 8001, South Africa",
    today’s hours: "11am-12am",
    recommended hours: "7-10pm",
    price: "$",
    website: "http://fatcactus.co.za",
    contact: "27 21 422 5022",
    description: "Tex-Mex menu and burgers in a relaxed, colourful space with a terrace, plus margaritas and tequila.",
    tags:["Mexican food", "dinner", "meal", "drinks", "burgers"]
    uberTime: "13 min",
    imageUrl: "https://goo.gl/images/8Hld4a"

    },

    'Charango': {

    address: "114 Bree St, Cape Town City Centre, Cape Town, 8000, South Africa",
    today’s hours: "12-11pm",
    recommended hours: "8-10pm",
    price: "$",
    website: "http://charango.co.za",
    contact: "27 21 422 0757",
    description: "Puruvian grill & bar",
    tags:["dinner", "meal", "drinks", "Bree Street"]
    uberTime: "14 min",
    imageUrl: "https://goo.gl/images/kGh9UZ"

    },

    'Asoka': {

    address: "68 Kloof St, Gardens, Cape Town, 8001, South Africa",
    today’s hours: "5pm-2am",
    recommended hours: "9-12pm",
    price: "$",
    website: "http://asoka.za.com",
    contact: "27 21 422 0909",
    description: "Victorian townhouse bar with open-roof candlelit courtyard, Asian fusion tapas and cocktails.",
    tags:["bar", "Asian food", "dinner", "drinks", "tapas"]
    uberTime: "11 min",
    imageUrl: "https://goo.gl/images/jaglR6"

    },

    'Dear Me': {

    address: "165 Longmarket St, Cape Town, 8000, South Africa",
    today’s hours: " 7am-3pm (closed Saturday and Sunday)",
    recommended hours: "10-12am",
    price: "$",
    website: "http://dearme.co.za",
    contact: "27 21 422 4920",
    description: "Dear Me is an all-day brasserie and pantry in the heart of the CBD",
    tags:["food", "brunch", "lunch"]
    uberTime: "16 min",
    imageUrl: "https://goo.gl/images/Mr5hvL"

    },

    'The Test Kitchen': {

    address: "The Old Biscuit Mill, 375 Albert Rd, Woodstock, Cape Town, 7915, South Africa",
    today’s hours: "6:30-8:30pm (closed Sunday and Monday)",
    recommended hours: "6:30-8:30",
    price: "$",
    website: "http://www.thetestkitchen.co.za",
    contact: "27 21 447 2337",
    description: "Nouvelle Latin cuisine with a South African touch at inventive restaurant with contemporary decor.",
    tags:["Latin food", "dinner", "meal"]
    uberTime: "23 min",
    imageUrl: "https://goo.gl/images/wYI85O"

    },

    'HQ': {

    address: "100 Shortmarket St, Cape Town City Centre, Cape Town, 8000, South Africa",
    today’s hours: "12pm-12am (closed Sunday)",
    recommended hours: "8-10pm",
    price: "$",
    website: "http://www.hqrestaurant.co.za",
    contact: "27 21 424 6373",
    description: "An iconic Cape Town restaurant situated in the heart of Heritage Square, CBD, that offers guests a host of experiences both culinary and atmospheric.",
    tags:["dinner", "drinks", "Old Biscuit Mill"]
    uberTime: "14 min",
    imageUrl: "https://goo.gl/images/iZ6mda"

    },

    'Codfather': {

    address: "37 Camps Bay Dr, Camps Bay, Cape Town, 8040, South Africa",
    today’s hours: "12-11pm",
    recommended hours: "8-10pm",
    price: "$",
    website: "http://www.codfather.co.za/contact-us/",
    contact: "27 21 438 0782",
    description: "Relaxed contemporary restaurant with terrace for seafood and sushi and views of ocean and mountain.",
    tags:["seafood", "sushi", "dinner", "drinks", "Camps Bay"]
    uberTime: "3 min walk",
    imageUrl: "https://goo.gl/images/kqLpkR"

    },

    'Truth Coffee': {

    address: "36 Buitenkant St, Cape Town City Centre, Cape Town, 8000, South Africa",
    today’s hours: "7am-6pm",
    recommended hours: "11am-1pm",
    price: "$",
    website: "http://truth.coffee",
    contact: "27 21 200 0440",
    description: "Quirky cafe that's a steampunk world of pipes and old metal, with gourmet, home-roasted coffee.",
    tags:["cafe", "coffee", "brunch", "lunch"]
    uberTime: "18 min",
    imageUrl: "https://goo.gl/images/5Q0PTu"

    },

    'Origin Coffee': {

    address: "28 Hudson St, De Waterkant, Cape Town, 8001, South Africa",
    today’s hours: "7am-5pm",
    recommended hours: "12-2pm",
    price: "$",
    website: "https://originroasting.co.za/v3/",
    contact: "27 21 421 1000",
    description: "Laid-back cafe and barista school in artisan producer's historic brick warehouse and courtyard.",
    tags:["cafe", "coffee", "brunch", "lunch"]
    uberTime: "13 min",
    imageUrl: "https://goo.gl/images/NiXwCL"

    },

{
    'name': 'The Pot Luck Club',
    "address": "The Silo, The Old Biscuit Mill, 373-375 Albert Rd, Woodstock, Cape Town, 7915, South Africa",
    "todaysHours": "12:30-2pm, 6-10pm",
    "recommendedHours": "1-2pm, 6-8pm",
    "price": "$",
    "website": "http://thepotluckclub.co.za",
    "contact": "27 21 447 0804",
    "description": "Sophisticated tapas served in a chic, buzzy locale with glass walls & views of Table Mountain.",
    "tags":["tapas", "lunch", "dinner", "Old Biscuit Mill", "tapas"],
    "uberTime": "20 min",
    "imageUrl: "https://goo.gl/images/WD53pa"

    }
    */
]

export default restaurants;
