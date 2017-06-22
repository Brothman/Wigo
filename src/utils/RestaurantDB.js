//put bits of restaurant name in tag array so we can search it.

var restaurants = [
  {
  "name": 'Cooked',
  "address": "A7-8, V&A Waterfront - Watershed, 17 Dock Rd, Victoria 7 Alfred Waterfront, Cape Town, 8001, South Africa",
  "todaysHours": "10am-6pm",
  "recommendedHours": "11am-1pm",
  "price": "60R off the 10th meal with a voucher for iX students",
  "website": "http://www.waterfront.co.za/Eat/c/cooked",
  "contact": "27 21 408 7600",
  "description": "COOKED is the ´go to´ place for honest, home-COOKED foods experiencing the tastes from the Middle East, The Mediterranean and with a contemporary twist of Africa.",
  "tags": ["Food", "Lunch", "Waterfront", "Discount"],
  "uberTime": "18 min",
  "imageUrl": "http://www.eatout.co.za/wp-content/uploads/2015/01/avatar.jpg",
  "discount": "60R off the 10th meal with a voucher for iX students!"
  },

  {
  "name": 'Ferryman\'s Tavern',
  "address": "Locomotive Shed, Dock Road, V & A Waterfront, Cape Town, 8001",
  "todaysHours": "11am-2am",
  "recommendedHours": "9pm-12am",
  "price": "$",
  "website": "ferrymans.co.za/",
  "contact": "27 21 419 7748”",
  "description": "One of Cape Town's old-school tavern's with live music, cigars, and pub food!",
  "tags": ["Food", "Casual", "Local", "Nightlife", "Pub", "Dinner", "Drinks", "Discount"],
  "uberTime": "18 min",
  "imageUrl": "http://www.theferrymantownhouse.ie/sitefiles/image/gallery/1_20131011173214.jpg",
  "discount": "10% off all food, 20% of all drinks!"
  },

  {
  "name": 'Mondiall',
  "address": "Alfred Mall, V & A Waterfront, Cape Town, 8001",
  "todaysHours": "10am-2am",
  "recommendedHours": "7pm-9pm",
  "price": "$",
  "website": "http://www.mondiall.co.za/",
  "contact": "021 418 3003",
  "description": "Mondiall is open seven days a week; offering breakfast, brunch, lunch, tapas, cocktails and dinner in a modern Brasserie style setting.",
  "tags": ["Food", "Casual", "Local", "Nightlife", "Pub", "Dinner", "Drinks", "Discount"],
  "uberTime": "18 min",
  "imageUrl": "http://www.grand-dining.co.za/getattachment/d9cedc08-5c10-400b-8ee3-6f2f4d9a0c4d/0-centre.aspx?maxSideSize=683&width=423&height=423",
  "discount": "35% off main meal!"
  },

  {
  "name": 'La Belle Bistro & Bakery',
  "address": "201, The Promenade, Victoria Rd, Camps Bay, Cape Town, 8005, South Africa",
  "todaysHours": "8AM–10PM",
  "recommendedHours": "6-8pm",
  "price": "$",
  "website": "http://www.labellecampsbay.co.za",
  "contact": "27 21 437 1278",
  "description": "There’s so much more to these rustic and charming venues than a regular café, with every detail of this unique restaurant meticulously chosen. It also doubles up as a foodies dream with a menu to tease and entice. La Belle should be your any time, any day favourite spot.",
  "tags": ["Food", "Lunch", "Brunch", "Camps Bay", "Cafe", "Discount"],
  "uberTime": "2 min",
  "imageUrl": "http://www.labellecampsbay.co.za/images/home/laBelle-Bistro-Bakery-Camps-Bay-Beach-Front.jpg",
  "discount": "10% but only with a student ID. Camps Bay location only."
  },

  {
  "name": 'UMI',
  "address": "201, The Promenade, Victoria Rd, Camps Bay, Cape Town, 8040, South Africa",
  "todaysHours": "12–11PM",
  "recommendedHours": "7-9pm",
  "price": "$",
  "website": "http://www.umirestaurant.co.za",
  "contact": "27 21 437 1802",
  "description": "For lovers of fabulous Japanese fare, a vibey buzz and edgy yet elegant décor, look no further.",
  "tags": ["Food", "Japanese Food", "Camps Bay", "Lunch", "Dinner", "Discount"],
  "uberTime": "2 min",
  "imageUrl": "http://www.umirestaurant.co.za/images/gallery/JOM_3161-Edit.jpg",
  "discount": "10% but only with a student ID. Camps Bay location only."
  },

  {
  "name": "Fork",
  "address": "84 Long St, Cape Town City Centre, Cape Town, 8000, South Africa",
  "today's hours": "12-11pm",
  "recommendedHours": "6-10pm",
  "price": "$",
  "website": "http://www.fork-restaurants.co.za",
  "contact": "27 21 424 6334",
  "description": "Spanish pinchos with a South African twist",
  "tags": ["Food", "dinner", "long street", "meal", "drinks"],
  "uberTime": "25 min",
  "imageUrl": "https://static1.squarespace.com/static/557551b5e4b0573e634d14dd/t/55755d2fe4b0c6a58c77a4bd/1495630286815/?format=1500w",
  "discount": "0"
  },

  {
  "name": "Addis in Cape",
  "address": "Corner Church & Long Street, 41 Church St, CBD, Cape Town, 8001, South Africa",
  "todaysHours": "12-10:30pm",
  "recommendedHours": "7-10pm",
  "price": "$",
  "website": "https://www.addisincape.co.za",
  "contact": "27214245722",
  "description": "Cultural dining experience with Ethiopian dishes served in a woven basket table and eaten by hand.",
  "tags": ["Food", "dinner", "long street", "meal", "drinks"],
  "uberTime": "17 min",
  "imageUrl": "http://www.eatout.co.za/wp-content/uploads/2014/02/Addis-in-Cape.jpg",
  "discount": "0"
  },

  {
  "name": "Gold Restaurant",
  "address": "15 Bennett St, Green Point, Cape Town, 8005, South Africa",
  "todaysHours": "6:30-11pm",
  "recommendedHours": "7-9pm",
  "price": "$",
  "website": "http://www.goldrestaurant.co.za",
  "contact": "270214214653",
  "description": "African 14-course menu in a safari lodge setting with courtyard, live drumming and Mali puppets.",
  "tags": ["Food", "dinner", "meal", "drinks", "music"],
  "uberTime": "22 min",
  "imageUrl": "http://feastafrica.com/wp-content/uploads/2016/08/Gold-Menu-Items.png",
  "discount": "0"
  },

  {
  "name": "Kloof Street House",
  "address": "30 Kloof St, Gardens, Cape Town, 8005, South Africa",
  "todaysHours": "12pm-2am",
  "recommendedHours": "8-10pm",
  "price": "$",
  "website": "http://www.kloofstreethouse.co.za",
  "contact": "27 21 423 4413",
  "description": "Richly furnished dining rooms in Victorian house with bar and leafy gardens, for eclectic cuisine.",
  "tags": ["Food", "dinner", "kloof street", "meal", "drinks"],
  "uberTime": "13 min",
  "imageUrl": "https://d2v7cp6zd42ged.cloudfront.net/restaurantpictures/kloof_street_house_451812_std.png",
  "discount": "0"
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
  "tags": ["Food", "dinner", "lunch", "meal", "sushi", "waterfront"],
  "uberTime": "23 min",
  "imageUrl": "https://www.simonseeks.com/cache/image/food_drink/172275/single_post/picture1-26496.png",
  "discount": "0"
  },


  {
  "name": "La Boheme",
  "address": "341 Main Rd, Sea Point, Cape Town, 8005, South Africa",
  "todaysHours": "12-10pm",
  "recommendedHours": "8-10pm",
  "price": "$",
  "website": "http://www.labohemebistro.co.za",
  "contact": "27214348797",
  "description": "True to bistro style, La Boheme is cosy and welcoming, serving gourmet yet hearty meals at a reasonable price.",
  "tags": ["Food", "dinner", "meal", "drinks"],
  "uberTime": "17 min",
  "imageUrl": "https://3.bp.blogspot.com/-qCPDJNIOxnk/T5ki0pYpYmI/AAAAAAAACuw/P0gqhtFhc3I/s1600/Screen+shot+2012-04-26+at+11.56.22+AM.png",
  "discount": "0"
  },

  {
  "name": "El Burro",
  "address": "81 Main Rd, Cape Town, 8005, South Africa",
  "todaysHours": "12-11:30pm",
  "recommendedHours": "7-10pm",
  "price": "$",
  "website": "http://elburro.co.za",
  "contact": "27 21 433 2364",
  "description": "Imaginative Mexican cuisine with big list of craft beer and tequila in designer home-style setting.",
  "tags": ["Food", "dinner", "mexican food", "meal", "drinks"],
  "uberTime": "18 min",
  "imageUrl": "https://68.media.tumblr.com/371831499326ece70f40e9d193d9ea93/tumblr_inline_on98m5N03t1skjkjk_500.png",
  "discount": "0"
  },

  {
  "name": "Nobu",
  "address": "0C Dock Rd, V & A Waterfront, Cape Town, 8001, South Africa",
  "todaysHours": "6pm-12am",
  "recommendedHours": "7-10pm",
  "price": "$",
  "website": "https://www.oneandonlyresorts.com/one-and-only-cape-town-south-africa/cuisine/nobu",
  "contact": "27 21 431 5111",
  "description": "Nobu gives classical Japanese cuisine a contemporary twist.",
  "tags": ["Food", "dinner", "japanese food", "meal", "drinks"],
  "uberTime": "22 min",
  "imageUrl": "https://aratuntun.files.wordpress.com/2010/05/picture-4.png",
  "discount": "0"
  },


  {
  "name": "Bombay Bicycle Club",
  "address": "158 Kloof Nek Rd, Gardens, Cape Town, 8001, South Africa",
  "todaysHours": "4-11pm",
  "recommendedHours": "8-10pm",
  "price": "$",
  "website": "http://www.thebombay.co.za",
  "contact": "27 21 423 6805",
  "description": "Hangout with a far-flung feel for everything from Cajun calamari to roast beef, with drink specials.",
  "tags": ["Food", "dinner", "meal", "drinks"],
  "uberTime": "8 min",
  "imageUrl": "http://www.thebombay.co.za/images/gallery/bombay-bicycle-en-03.jpg",
  "discount": "0"
  },


  {
  "name": "Posticino",
  "address": "323 Main Rd, Sea Point, Cape Town, 8060, South Africa",
  "todaysHours": "12:30-10pm",
  "recommendedHours": "7-9pm",
  "price": "$",
  "website": "http://www.posticino.co.za",
  "contact": "27 21 439 4014",
  "description": "Laid-back, family-friendly Italian restaurant for large pizzas, pasta and meat dinner specials.",
  "tags": ["Food", "dinner", "meal", "Italian food"],
  "uberTime": "14 min",
  "imageUrl": "https://www.dining-out.co.za/ftp/pictures/PosticinoSeapointPic1.jpg",
  "discount": "0"
  },


  {
  "name": "Balducci’s",
  "address": "6162, V&A Waterfront, Breakwater Blvd, V & A Waterfront, Cape Town, 8001, South Africa",
  "todaysHours": "8am-11pm",
  "recommendedHours": "8-10pm",
  "price": "$",
  "website": "https://balduccis.co.za",
  "contact": "27 21 421 6002",
  "description": "Italian restaurant with pizza, pasta and full menu along with sushi bar and a waterfront panorama.",
  "tags": ["Food", "dinner", "meal", "Italian food", "Waterfront"],
  "uberTime": "22 min",
  "imageUrl": "http://news.dining-out.co.za/wp-content/uploads/2013/07/Balduccis-indoors.jpg",
  "discount": "0"
  },


  {
  "name": "La Parada",
  "address": "107 Bree St, Cape Town City Centre, Cape Town, 8001, South Africa",
  "todaysHours": "12-10pm",
  "recommendedHours": "7-9pm",
  "price": "$",
  "website": "http://laparada.co.za",
  "contact": "27 21 426 0330",
  "description": "Laid-back, open-fronted bar with high-stools and sidewalk tables, for Spanish tapas and cocktails.",
  "tags": ["Food", "dinner", "bree street", "meal", "drinks"],
  "uberTime": "13 min",
  "imageUrl": "http://www.friendlymadrid.com/es/wp-content/uploads/2015/09/Friendly-Madrid-La-Parada.png",
  "discount": "0"
  },

  {
  "name": "Bocca",
  "address": "The Block, Bree St & Wale Street, Cape Town City Centre, Cape Town, 8000, South Africa",
  "todaysHours": "12-10pm",
  "recommendedHours": "7-9pm",
  "price": "$",
  "website": "http://bocca.co.za",
  "contact": "27 21 422 0188",
  "description": "Serves Neopolitan pizza and Italian-inspired food in an informal contemporary space in the centre of Cape Town.",
  "tags": ["Food", "dinner", "bree street", "italian food", "lunch"],
  "uberTime": "18 min",
  "imageUrl": "https://images.google.com/url?sa=i&rct=j&q=&esrc=s&source=imgres&cd=&ved=0ahUKEwjm4tHqv9LUAhWMchQKHQSxABsQjBwIBA&url=http%3A%2F%2Friaanwest.com%2Fwp-content%2Fuploads%2F2014%2F11%2F2014-11-07_0027.jpg&psig=AFQjCNGlf7cRGDWP5SUkmBsIBAcBlhdQSw&ust=1498256846822139",
  "discount": "0"
  },

  {
  "name": "Fat Cactus",
  "address": "5 Park Rd, Gardens, Cape Town, 8001, South Africa",
  "todaysHours": "11am-12am",
  "recommendedHours": "7-10pm",
  "price": "$",
  "website": "http://fatcactus.co.za",
  "contact": "27 21 422 5022",
  "description": "Tex-Mex menu and burgers in a relaxed, colourful space with a terrace, plus margaritas and tequila.",
  "tags": ["Food", "Mexican food", "dinner", "meal", "drinks", "burgers"],
  "uberTime": "13 min",
  "imageUrl": "http://venue123.com/wp-content/uploads/2016/06/12004_d225d93552ad7ecba7652f574dac511e.jpg",
  "discount": "0"
  },

  {
  "name": "Charango",
  "address": "114 Bree St, Cape Town City Centre, Cape Town, 8000, South Africa",
  "todaysHours": "12-11pm",
  "recommendedHours": "8-10pm",
  "price": "$",
  "website": "http://charango.co.za",
  "contact": "27 21 422 0757",
  "description": "Puruvian grill & bar",
  "tags": ["Food", "dinner", "meal", "drinks", "Bree Street"],
  "uberTime": "14 min",
  "imageUrl": "http://www.eatout.co.za/wp-content/uploads/2015/08/charango4.jpg",
  "discount": "0"
  },

  {
  "name": "Asoka",
  "address": "68 Kloof St, Gardens, Cape Town, 8001, South Africa",
  "todaysHours": "5pm-2am",
  "recommendedHours": "9-12pm",
  "price": "$",
  "website": "http://asoka.za.com",
  "contact": "27 21 422 0909",
  "description": "Victorian townhouse bar with open-roof candlelit courtyard, Asian fusion tapas and cocktails.",
  "tags": ["Food", "bar", "Asian food", "dinner", "drinks", "tapas"],
  "uberTime": "11 min",
  "imageUrl": "http://asoka.za.com/wp-content/uploads/2015/10/facebook.jpg",
  "discount": "0"
  },

  {
  "name": "Dear Me",
  "address": "165 Longmarket St, Cape Town, 8000, South Africa",
  "todaysHours": "7am-3pm (closed Saturday and Sunday)",
  "recommendedHours": "10-12am",
  "price": "$",
  "website": "http://dearme.co.za",
  "contact": "27 21 422 4920",
  "description": "Dear Me is an all-day brasserie and pantry in the heart of the CBD",
  "tags": ["Food", "food", "brunch", "lunch"],
  "uberTime": "16 min",
  "imageUrl": "http://dearme.co.za/sites/dearme.co.za/files/imagecache/gallery_display_600h/gallery/1/14.jpg",
  "discount": "0"
  },

  {
  "name": "The Test Kitchen",
  "address": "The Old Biscuit Mill, 375 Albert Rd, Woodstock, Cape Town, 7915, South Africa",
  "todaysHours": "6:30-8:30pm (closed Sunday and Monday)",
  "recommendedHours": "6:30-8:30pm",
  "price": "$",
  "website": "http://www.thetestkitchen.co.za",
  "contact": "27 21 447 2337",
  "description": "Nouvelle Latin cuisine with a South African touch at inventive restaurant with contemporary decor.",
  "tags": ["Food", "Latin food", "dinner", "meal"],
  "uberTime": "23 min",
  "imageUrl": "http://www.thetestkitchen.co.za/wp-content/uploads/2013/04/slider955-4.jpg",
  "discount": "0"
  },

  {
  "name": "HQ",
  "address": "100 Shortmarket St, Cape Town City Centre, Cape Town, 8000, South Africa",
  "todaysHours": "12pm-12am (closed Sunday)",
  "recommendedHours": "8-10pm",
  "price": "$",
  "website": "http://www.hqrestaurant.co.za",
  "contact": "27 21 424 6373",
  "description": "An iconic Cape Town restaurant situated in the heart of Heritage Square, CBD, that offers guests a host of experiences both culinary and atmospheric.",
  "tags": ["Food", "dinner", "Old Biscuit Mill", "drinks"],
  "uberTime": "14 min",
  "imageUrl": "http://www.capetownmagazine.com/media_lib/preview/1db852fddb80599697bf91a7a1fddbc9.preview.jpg",
  "discount": "0"
  },

  {
  "name": "Codfather",
  "address": "37 Camps Bay Dr, Camps Bay, Cape Town, 8040, South Africa",
  "todaysHours": "12-11pm",
  "recommendedHours": "8-10pm",
  "price": "$",
  "website": "http://www.codfather.co.za/contact-us/",
  "contact": "27 21 438 0782",
  "description": "Relaxed contemporary restaurant with terrace for seafood and sushi and views of ocean and mountain.",
  "tags": ["Food", "seafood", "sushi", "dinner", "drinks", "Camps Bay", "Discount"],
  "uberTime": "3 min walk",
  "imageUrl": "http://www.devilspeakbrewing.co.za/wp-content/uploads/2015/02/Codfather-1600x1200.jpg",
  "discount": "30% off for iX students! Bring wristband"
  },

  {
  "name": "Truth Coffee",
  "address": "36 Buitenkant St, Cape Town City Centre, Cape Town, 8000, South Africa",
  "todaysHours": "7am-6pm",
  "recommendedHours": "11am-1pm",
  "price": "$",
  "website": "http://truth.coffee",
  "contact": "27 21 200 0440",
  "description": "Quirky cafe that\'s a steampunk world of pipes and old metal, with gourmet, home-roasted coffee.",
  "tags": ["Food", "cafe", "coffee", "brunch", "lunch"],
  "uberTime": "18 min",
  "imageUrl": "http://www.hotjoint.co.uk/wp-content/uploads/2017/02/Truth-cafe-Cape-Town-SA.png",
  "discount": "0"
  },

  {
  "name": "Origin Coffee",
  "address": "28 Hudson St, De Waterkant, Cape Town, 8001, South Africa",
  "todaysHours": "7am-5pm",
  "recommendedHours": "12-2pm",
  "price": "$",
  "website": "https://originroasting.co.za/v3/",
  "contact": "27 21 421 1000",
  "description": "Laid-back cafe and barista school in artisan producer\'s historic brick warehouse and courtyard.",
  "tags": ["Food", "cafe", "coffee", "brunch", "lunch"],
  "uberTime": "13 min",
  "imageUrl": "http://www.getaway.co.za/wp-content/uploads/2014/04/bootlegger-coffee-company-ct.png",
  "discount": "0"
  },

  {
  "name": "The Pot Luck Club",
  "address": "The Silo, The Old Biscuit Mill, 373-375 Albert Rd, Woodstock, Cape Town, 7915, South Africa",
  "todaysHours": "12:30-2pm, 6-10pm",
  "recommendedHours": "1-2pm, 6-8pm",
  "price": "$",
  "website": "http://thepotluckclub.co.za",
  "contact": "27 21 447 0804",
  "description": "Sophisticated tapas served in a chic, buzzy locale with glass walls & views of Table Mountain.",
  "tags": ["Food", "tapas", "lunch", "dinner", "Old Biscuit Mill", "tapas"],
  "uberTime": "20 min",
  "imageUrl": "http://thepotluckclub.co.za/wp-content/uploads/2013/11/homeslider1-960x400.jpg",
  "discount": "0"
},
{
  "name": 'Your Search is Invalid',
  'discount': "0",
  'address': "Better Luck Next Time",
  "todaysHours": "Open All Day",
  "recommendHours": "Whenever You'd Like",
  "price": "$$$$$",
  "website": "http://eelslap.com/",
  "contact": "0123456789",
  "description": "The Place Where Searches Go To Die",
  "tags": [],
  "uberTime": "Infinity",
  "imageUrl": "http://media02.hongkiat.com/funny-creative-error-404/37-error-404-page.jpg"
}
]

export default restaurants;
