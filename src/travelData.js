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
                title: "Laguna Beach Resort",
                desc: "chill day at the beach",
                locations: ['D1-L1', 'D1-L2'],
            },
            {
                title: "Mount Sinai",
                desc: "trek and cave exploration",
                locations: ['D2-L1', 'D2-L2'],
            },
            {
                title: "Kobe Village",
                desc: "local homestay",
                locations: ['D3-L1', 'D3-L2'],
            },
            {
                title: "City Tour",
                desc: "bus tour of old town",
                locations: ['D4-L1', 'D4-L2'],
            },
            {
                title: "Jodd Fairs",
                desc: "souvenir shopping",
                locations: ['D5-L1', 'D5-L2'],
            },
        ],
    },
    {
        id: 'aabbcc002',
        name: 'M\'sia Truly Asia',
        destination: 'Malaysia',
        start_date: '10/05/2024',
        end_date: '13/05/2024',
        collaborators: {
            author: 'userID_yyy',
            editor: ['userID_1', 'userID_2', 'userID_3'],
            viewer: ['userID_4', 'userID_5', 'userID_6'],
        },
        days: [
            {
                title: "Laguna Beach Resort",
                desc: "chill day at the beach",
                locations: ['D1-L1', 'D1-L2'],
            },
            {
                title: "Mount Sinai",
                desc: "trek and cave exploration",
                locations: ['D2-L1', 'D2-L2'],
            },
            {
                title: "Kobe Village",
                desc: "local homestay",
                locations: ['D3-L1', 'D3-L2'],
            },
        ],
    }
]

export default travelData;