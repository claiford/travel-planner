const travelData = [
    {
        id: 'aabbcc001',
        name: 'Lion City Adventure',
        destination: 'Singapore',
        start_date: '1/12/2023',
        end_date: '3/12/2023',
        collaborators: {
            author: 'userID_xxx',
            editor: ['userID_1', 'userID_2', 'userID_3'],
            viewer: ['userID_4', 'userID_5', 'userID_6'],
        },
        days: [
            {
                "day_title": "Day 1: Exploring the City",
                "day_desc": "Discover the vibrant cityscape of Singapore and its iconic landmarks.",
                "day_locs": [
                    {
                        "loc_name": "Marina Bay Sands",
                        "loc_desc": "Visit the iconic Marina Bay Sands integrated resort and enjoy breathtaking views of the city from the SkyPark.",
                        "loc_lat": "1.2836",
                        "loc_lon": "103.8585"
                    },
                    {
                        "loc_name": "Gardens by the Bay",
                        "loc_desc": "Explore the stunning Gardens by the Bay, home to the futuristic Supertree Grove and beautiful Flower Dome.",
                        "loc_lat": "1.2815",
                        "loc_lon": "103.8636"
                    },
                    {
                        "loc_name": "Merlion Park",
                        "loc_desc": "Pose for a photo with the iconic Merlion statue, a half-lion, half-fish symbol of Singapore.",
                        "loc_lat": "1.2868",
                        "loc_lon": "103.8545"
                    },
                    {
                        "loc_name": "Chinatown",
                        "loc_desc": "Wander through the bustling streets of Chinatown, filled with shops, temples, and delicious food.",
                        "loc_lat": "1.2834",
                        "loc_lon": "103.8431"
                    }
                ]
            },
            {
                "day_title": "Day 2: Sentosa Island Adventure",
                "day_desc": "Spend a day of fun and excitement at Sentosa Island's attractions.",
                "day_locs": [
                    {
                        "loc_name": "Universal Studios Singapore",
                        "loc_desc": "Experience thrilling rides and shows at Universal Studios Singapore.",
                        "loc_lat": "1.2543",
                        "loc_lon": "103.8233"
                    },
                    {
                        "loc_name": "S.E.A. Aquarium",
                        "loc_desc": "Discover the wonders of the ocean at the S.E.A. Aquarium, one of the world's largest aquariums.",
                        "loc_lat": "1.2537",
                        "loc_lon": "103.8203"
                    },
                    {
                        "loc_name": "Adventure Cove Waterpark",
                        "loc_desc": "Enjoy water slides and aquatic adventures at Adventure Cove Waterpark.",
                        "loc_lat": "1.2562",
                        "loc_lon": "103.8198"
                    },
                    {
                        "loc_name": "Wings of Time",
                        "loc_desc": "Witness a mesmerizing light and sound show at Wings of Time in the evening.",
                        "loc_lat": "1.2521",
                        "loc_lon": "103.8198"
                    }
                ]
            },
            {
                "day_title": "Day 3: Cultural Immersion",
                "day_desc": "Immerse yourself in Singapore's diverse culture and history.",
                "day_locs": [
                    {
                        "loc_name": "National Museum of Singapore",
                        "loc_desc": "Explore the history and culture of Singapore at the National Museum.",
                        "loc_lat": "1.2966",
                        "loc_lon": "103.8485"
                    },
                    {
                        "loc_name": "Little India",
                        "loc_desc": "Experience the vibrant colors, flavors, and sounds of Little India.",
                        "loc_lat": "1.3069",
                        "loc_lon": "103.8518"
                    },
                    {
                        "loc_name": "Arab Street",
                        "loc_desc": "Stroll through Arab Street, known for its beautiful mosque and eclectic shops.",
                        "loc_lat": "1.3015",
                        "loc_lon": "103.8566"
                    },
                    {
                        "loc_name": "Singapore River",
                        "loc_desc": "Take a relaxing boat cruise along the Singapore River and admire the city skyline.",
                        "loc_lat": "1.2906",
                        "loc_lon": "103.8518"
                    },
                    {
                        "loc_name": "Clarke Quay",
                        "loc_desc": "End the day at Clarke Quay, a bustling riverside hub with a variety of restaurants and bars.",
                        "loc_lat": "1.2913",
                        "loc_lon": "103.8469"
                    }
                ]
            }
        ]
    },
    {
        id: 'aabbcc002',
        name: 'Barca Vaca',
        destination: 'Barcelona',
        start_date: '13/5/2024',
        end_date: '16/5/2024',
        collaborators: {
            author: 'userID_yyy',
            editor: ['userID_1', 'userID_2', 'userID_3'],
            viewer: ['userID_4', 'userID_5', 'userID_6'],
        },
        "days": [
            {
                "day_title": "Day 1: Arrival and Gothic Quarter",
                "day_desc": "Explore the historic heart of Barcelona, known for its medieval architecture and charming streets.",
                "day_locs": [
                    {
                        "loc_name": "Barcelona El Prat Airport",
                        "loc_desc": "Arrive at Barcelona's international airport.",
                        "loc_lat": "41.2975",
                        "loc_lon": "2.0833"
                    },
                    {
                        "loc_name": "La Rambla",
                        "loc_desc": "Take a leisurely walk down the famous boulevard, La Rambla, bustling with shops, cafes, and street performers.",
                        "loc_lat": "41.3797",
                        "loc_lon": "2.1701"
                    },
                    {
                        "loc_name": "Plaça de Catalunya",
                        "loc_desc": "Visit the central square of Barcelona, a popular meeting point and the starting point of many city tours.",
                        "loc_lat": "41.3867",
                        "loc_lon": "2.1692"
                    },
                    {
                        "loc_name": "Barri Gòtic (Gothic Quarter)",
                        "loc_desc": "Explore the narrow, winding streets of the Gothic Quarter, home to historic buildings and the Barcelona Cathedral.",
                        "loc_lat": "41.3833",
                        "loc_lon": "2.1764"
                    },
                    {
                        "loc_name": "Plaça Reial",
                        "loc_desc": "Relax at the lively square, Plaça Reial, known for its beautiful architecture and vibrant atmosphere.",
                        "loc_lat": "41.3784",
                        "loc_lon": "2.1752"
                    }
                ]
            },
            {
                "day_title": "Day 2: Gaudí's Masterpieces",
                "day_desc": "Discover the unique architectural wonders designed by Antoni Gaudí.",
                "day_locs": [
                    {
                        "loc_name": "Sagrada Família",
                        "loc_desc": "Visit the magnificent basilica, Sagrada Família, an iconic symbol of Barcelona's architecture.",
                        "loc_lat": "41.4036",
                        "loc_lon": "2.1744"
                    },
                    {
                        "loc_name": "Park Güell",
                        "loc_desc": "Explore the whimsical Park Güell, featuring colorful mosaics and Gaudí's architectural marvels.",
                        "loc_lat": "41.4145",
                        "loc_lon": "2.1527"
                    },
                    {
                        "loc_name": "Casa Batlló",
                        "loc_desc": "Admire the stunning facade of Casa Batlló, one of Gaudí's residential masterpieces.",
                        "loc_lat": "41.3916",
                        "loc_lon": "2.1649"
                    },
                    {
                        "loc_name": "Casa Milà (La Pedrera)",
                        "loc_desc": "Visit Casa Milà, also known as La Pedrera, a unique apartment building designed by Gaudí.",
                        "loc_lat": "41.3954",
                        "loc_lon": "2.1611"
                    }
                ]
            },
            {
                "day_title": "Day 3: Montjuïc Hill and Beach",
                "day_desc": "Spend a day exploring Montjuïc Hill's cultural sites and relaxing at the beach.",
                "day_locs": [
                    {
                        "loc_name": "Montjuïc Castle",
                        "loc_desc": "Hike up to Montjuïc Castle for panoramic views of Barcelona and its harbor.",
                        "loc_lat": "41.3626",
                        "loc_lon": "2.1657"
                    },
                    {
                        "loc_name": "Magic Fountain of Montjuïc",
                        "loc_desc": "Enjoy the stunning water and light show at the Magic Fountain in the evening.",
                        "loc_lat": "41.3717",
                        "loc_lon": "2.1515"
                    },
                    {
                        "loc_name": "Barceloneta Beach",
                        "loc_desc": "Relax on the sandy shores of Barceloneta Beach and take a dip in the Mediterranean Sea.",
                        "loc_lat": "41.3802",
                        "loc_lon": "2.1896"
                    },
                    {
                        "loc_name": "W Barcelona",
                        "loc_desc": "Head to W Barcelona hotel for a drink at their rooftop bar with panoramic views of the beach and city.",
                        "loc_lat": "41.3684",
                        "loc_lon": "2.1902"
                    }
                ]
            },
            {
                "day_title": "Day 4: Picasso and Montserrat",
                "day_desc": "Visit the Picasso Museum and take a day trip to the stunning Montserrat mountain.",
                "day_locs": [
                    {
                        "loc_name": "Picasso Museum",
                        "loc_desc": "Explore the extensive collection of artworks by the renowned artist, Pablo Picasso.",
                        "loc_lat": "41.3854",
                        "loc_lon": "2.1809"
                    },
                    {
                        "loc_name": "Montserrat",
                        "loc_desc": "Take a day trip to the breathtaking Montserrat mountain, known for its unique rock formations and monastery.",
                        "loc_lat": "41.5956",
                        "loc_lon": "1.8354"
                    },
                    {
                        "loc_name": "Santa Maria de Montserrat Abbey",
                        "loc_desc": "Visit the Benedictine abbey nestled in the mountains and see the Black Madonna.",
                        "loc_lat": "41.5915",
                        "loc_lon": "1.8292"
                    }
                ]
            }
        ]
    }
]

export default travelData;