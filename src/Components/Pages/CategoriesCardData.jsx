
// sample card data used to create cards in categories cards, same can be changed with the data from api

const cardData = [
    {
        id : 1,
        cardText : "Photographers",
        active : false,
        toLink : "/categories/photographers",
        vendorCardData : [
            {
                image : "https://images.ctfassets.net/u0haasspfa6q/Li6RWnbla5FphpJMf7ysa/300e244d31222131a4293d4c6b767781/hisu-lee-FTW8ADj5igs-unsplash",
                vendorTitle : "Creative Photography",
                vendorLocation : "Himachal",
                price: "50,000",
                isVerified : false,
                addtionalInformation: "Photo + Video",
                noOfReviews : "90",
                vendorRating : "5.0",
                vendorCardProfile : "#"
            },
            {
                image : "https://images.ctfassets.net/u0haasspfa6q/Li6RWnbla5FphpJMf7ysa/300e244d31222131a4293d4c6b767781/hisu-lee-FTW8ADj5igs-unsplash",
                vendorTitle : "Creative Photography",
                vendorLocation : "Himachal",
                price: "50,000",
                isVerified : true,
                addtionalInformation: "Photo + Video",
                noOfReviews : "40",
                vendorRating : "4.7",
                vendorCardProfile : "#"
            },
            {
                image : "https://images.ctfassets.net/u0haasspfa6q/Li6RWnbla5FphpJMf7ysa/300e244d31222131a4293d4c6b767781/hisu-lee-FTW8ADj5igs-unsplash",
                vendorTitle : "Creative Photography",
                vendorLocation : "Himachal",
                price: "50,000",
                isVerified : false,
                addtionalInformation: "Photo + Video",
                noOfReviews : "40",
                vendorRating : "4.2",
                vendorCardProfile : "#"
            },
            {
                image : "https://images.ctfassets.net/u0haasspfa6q/Li6RWnbla5FphpJMf7ysa/300e244d31222131a4293d4c6b767781/hisu-lee-FTW8ADj5igs-unsplash",
                vendorTitle : "Creative Photography",
                vendorLocation : "Himachal",
                price: "50,000",
                isVerified : true,
                addtionalInformation: "Photo + Video",
                noOfReviews : "40",
                vendorRating : "4.4",
                vendorCardProfile : "#"
            },
            {
                image : "https://images.ctfassets.net/u0haasspfa6q/Li6RWnbla5FphpJMf7ysa/300e244d31222131a4293d4c6b767781/hisu-lee-FTW8ADj5igs-unsplash",
                vendorTitle : "Creative Photography",
                vendorLocation : "Himachal",
                price: "50,000",
                isVerified : false,
                addtionalInformation: "Photo + Video",
                noOfReviews : "40",
                vendorRating : "5.0",
                vendorCardProfile : "#"
            },
            {
                image : "https://images.ctfassets.net/u0haasspfa6q/Li6RWnbla5FphpJMf7ysa/300e244d31222131a4293d4c6b767781/hisu-lee-FTW8ADj5igs-unsplash",
                vendorTitle : "Creative Photography",
                vendorLocation : "Himachal",
                price: "50,000",
                isVerified : true,
                addtionalInformation: "Photo + Video",
                noOfReviews : "40",
                vendorRating : "5.0",
                vendorCardProfile : "#"
            },
            {
                image : "https://images.ctfassets.net/u0haasspfa6q/Li6RWnbla5FphpJMf7ysa/300e244d31222131a4293d4c6b767781/hisu-lee-FTW8ADj5igs-unsplash",
                vendorTitle : "Creative Photography",
                vendorLocation : "Himachal",
                price: "50,000",
                isVerified : false,
                addtionalInformation: "Photo + Video",
                noOfReviews : "40",
                vendorRating : "5.0",
                vendorCardProfile : "#"
            },
            {
                image : "https://images.ctfassets.net/u0haasspfa6q/Li6RWnbla5FphpJMf7ysa/300e244d31222131a4293d4c6b767781/hisu-lee-FTW8ADj5igs-unsplash",
                vendorTitle : "Creative Photography",
                vendorLocation : "Himachal",
                price: "50,000",
                isVerified : true,
                addtionalInformation: "Photo + Video",
                noOfReviews : "40",
                vendorRating : "5.0",
                vendorCardProfile : "#"
            },
            {
                image : "https://images.ctfassets.net/u0haasspfa6q/Li6RWnbla5FphpJMf7ysa/300e244d31222131a4293d4c6b767781/hisu-lee-FTW8ADj5igs-unsplash",
                vendorTitle : "Creative Photography",
                vendorLocation : "Himachal",
                price: "50,000",
                isVerified : false,
                addtionalInformation: "Photo + Video",
                noOfReviews : "40",
                vendorRating : "5.0",
                vendorCardProfile : "#"
            },
            {
                image : "https://images.ctfassets.net/u0haasspfa6q/Li6RWnbla5FphpJMf7ysa/300e244d31222131a4293d4c6b767781/hisu-lee-FTW8ADj5igs-unsplash",
                vendorTitle : "Creative Photography",
                vendorLocation : "Himachal",
                price: "50,000",
                isVerified : false,
                addtionalInformation: "Photo + Video",
                noOfReviews : "40",
                vendorRating : "5.0",
                vendorCardProfile : "#"
            },
            {
                image : "https://images.ctfassets.net/u0haasspfa6q/Li6RWnbla5FphpJMf7ysa/300e244d31222131a4293d4c6b767781/hisu-lee-FTW8ADj5igs-unsplash",
                vendorTitle : "Creative Photography",
                vendorLocation : "Himachal",
                price: "50,000",
                isVerified : true,
                addtionalInformation: "Photo + Video",
                noOfReviews : "40",
                vendorRating : "5.0",
                vendorCardProfile : "#"
            },
            {
                image : "https://images.ctfassets.net/u0haasspfa6q/Li6RWnbla5FphpJMf7ysa/300e244d31222131a4293d4c6b767781/hisu-lee-FTW8ADj5igs-unsplash",
                vendorTitle : "Creative Photography",
                vendorLocation : "Himachal",
                price: "50,000",
                isVerified : false,
                addtionalInformation: "Photo + Video",
                noOfReviews : "40",
                vendorRating : "5.0",
                vendorCardProfile : "#"
            },
            {
                image : "https://images.ctfassets.net/u0haasspfa6q/Li6RWnbla5FphpJMf7ysa/300e244d31222131a4293d4c6b767781/hisu-lee-FTW8ADj5igs-unsplash",
                vendorTitle : "Creative Photography",
                vendorLocation : "Himachal",
                price: "50,000",
                isVerified : true,
                addtionalInformation: "Photo + Video",
                noOfReviews : "40",
                vendorRating : "5.0",
                vendorCardProfile : "#"
            },
            {
                image : "https://images.ctfassets.net/u0haasspfa6q/Li6RWnbla5FphpJMf7ysa/300e244d31222131a4293d4c6b767781/hisu-lee-FTW8ADj5igs-unsplash",
                vendorTitle : "Creative Photography",
                vendorLocation : "Himachal",
                price: "50,000",
                isVerified : false,
                addtionalInformation: "Photo + Video",
                noOfReviews : "40",
                vendorRating : "5.0",
                vendorCardProfile : "#"
            },
            {
                image : "https://images.ctfassets.net/u0haasspfa6q/Li6RWnbla5FphpJMf7ysa/300e244d31222131a4293d4c6b767781/hisu-lee-FTW8ADj5igs-unsplash",
                vendorTitle : "Creative Photography",
                vendorLocation : "Himachal",
                price: "50,000",
                isVerified : false,
                addtionalInformation: "Photo + Video",
                noOfReviews : "40",
                vendorRating : "5.0",
                vendorCardProfile : "#"
            },
            {
                image : "https://images.ctfassets.net/u0haasspfa6q/Li6RWnbla5FphpJMf7ysa/300e244d31222131a4293d4c6b767781/hisu-lee-FTW8ADj5igs-unsplash",
                vendorTitle : "Creative Photography",
                vendorLocation : "Himachal",
                price: "50,000",
                isVerified : false,
                addtionalInformation: "Photo + Video",
                noOfReviews : "40",
                vendorRating : "5.0",
                vendorCardProfile : "#"
            }
        ]
    },
    {
        id : 2,
        cardText : "Make Up",
        active : false,
        toLink : "/categories/make-up"
    },
    {
        id : 3,
        cardText : "Bridal Wear",
        active : false,
        toLink : "/categories/bridal-wear"
    },
    {
        id : 4,
        cardText : "Groom Wear",
        active : false,
        toLink : "/categories/groom-wear"
    },
    {
        id : 5,
        cardText : "Mehndi",
        active : false,
        toLink : "/categories/mehndi"
    },
    {
        id : 6,
        cardText : "Planning & Decor",
        active : false,
        toLink : "/categories/planning-and-decor"
    },
    {
        id : 7,
        cardText : "Food",
        active : false,
        toLink : "/categories/food"
    },
    {
        id : 8,
        cardText : "Invites & Gifts",
        active : false,
        toLink : "/categories/invites-and-gifts"
    },
    {
        id : 9,
        cardText : "Venues",
        active : false,
        toLink : "/categories/venues"
    },
    {
        id : 10,
        cardText : "Music & Dance",
        active : false,
        toLink : "/categories/music-and-dance"
    },
    {
        id : 11,
        cardText : "Pandits",
        active : false,
        toLink : "/categories/pandits"
    },
    {
        id : 12,
        cardText : "Jewellery Accessories",
        active : false,
        toLink : "/categories/jewellery-accessories",
    }

]

export default cardData;