const travelData = [
    {
        id: 'aabbcc001',
        name: 'Lion City Adventure',
        destination: 'Singapore',
        start_date: '1/12/2023',
        end_date: '6/12/2023',
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
    }
]

export default travelData;

// plan an itinerary to {destination} for {num} days. For each day, provide a title and description of the day's activities, then list out the locations with their corresponding name, description, latitude and longitude values.
// Structure the results in the following format: inside a days array, each day is represented as an object with "day_title", "day_desc", and "day_locs" properties. The "day_locs" property contains an array of objects, each representing a location visited on that day, with the "loc_name", "loc_desc", "loc_lat", and "loc_lon" values.