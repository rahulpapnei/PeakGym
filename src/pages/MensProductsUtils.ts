export interface Product {
    id: number;
    name: string;
    originalPrice: number;
    discount: number;
    image: string;
    images: string[];
    description: string;
    details: string;
    features: string[];
    rating: number;
    colors?: { name: string; hex: string; image: string }[];
  }
  
  // Function that returns the product data
  export function getMensProducts(): Product[] {
    return [
      {
        id: 1,
        name: "Men's Oversized Fit T-Shirt",
        originalPrice: 1099,
        discount: 57,
        image: "https://m.media-amazon.com/images/I/51d1ou5cw0L._SX679_.jpg",
        images: [
          "https://m.media-amazon.com/images/I/51d1ou5cw0L._SX679_.jpg",  
          "https://m.media-amazon.com/images/I/61kv5kYjxpL._SX679_.jpg",
          "https://m.media-amazon.com/images/I/61WKv9LdqLL._SX679_.jpg",
          "https://m.media-amazon.com/images/I/613k268BxnL._SX679_.jpg",
          "https://m.media-amazon.com/images/I/514kkXyMcfL._SX679_.jpg",
          "https://m.media-amazon.com/images/I/61BgBsxkHpL._SX679_.jpg"
        ],
        description: "Stay cool and comfy oversized fit T-shirt.",
        details: "Stay cool and comfy oversized fit T-shirt — a perfect blend of effortless style, softness, and everyday comfort.",
        features: [
          "100% Cotton",
          "Pattern: Printed",
          "Neck: Crew Neck",
          "Fit: Oversized",
          "Occasion: Casual",
          "Short Sleeve",
          "Collarless",
          "Standard Length"
        ],
        rating: 3.9,
      },
      {
        id: 2,
        name: "Printed oversized Round Neck T-shirt for men",
        originalPrice: 1199,
        discount: 78,
        image: "https://m.media-amazon.com/images/I/612Rl6GKHoL._SX679_.jpg",
        images: [
          "https://m.media-amazon.com/images/I/612Rl6GKHoL._SX679_.jpg",
          "https://m.media-amazon.com/images/I/51ktt+O7m3L._SY741_.jpg",
          "https://m.media-amazon.com/images/I/616QzCNCUfL._SY741_.jpg",
          "https://m.media-amazon.com/images/I/61AVlaEWxJL._SY741_.jpg",
          "https://m.media-amazon.com/images/I/61BgBsxkHpL._SX679_.jpg"
        ],
        description: "Perfect for everyday wear with a modern vibe.",
        details: "Stay stylish and comfortable with this printed oversized round neck t-shirt for men — perfect for everyday wear with a relaxed, modern vibe.",
        features: [
          "Material: Cotton blend",
          "Pattern: Printed",
          "Fit type: Regular Fit",
          "Sleeve type: Half Sleeve",
          "Collar style: Club Collar",
          "Length: Standard Length",
          "Country:   India"
    
        ],
        rating: 3.6
      },
      {
        id: 3,
        name: "Men's Letter Print Regular Fit T-Shirt",
        originalPrice: 999.00,
        discount: 56,
        image: "https://m.media-amazon.com/images/I/51GL3VKJLaL._SX679_.jpg",
        images: [
          "https://m.media-amazon.com/images/I/51TIzTSYdKL._SX679_.jpg",
          "https://m.media-amazon.com/images/I/61dHvyFyFBL._SX679_.jpg",
          "https://m.media-amazon.com/images/I/616R0ZfT+bL._SX679_.jpg",
          "https://m.media-amazon.com/images/I/514kkXyMcfL._SX679_.jpg",
          "https://m.media-amazon.com/images/I/61BgBsxkHpL._SX679_.jpg"
        ],
        description: "Perfect for everyday wear or casual outings.",
        details: "Stay cool and stylish with this Men's Letter Print Regular Fit T-Shirt — lightweight, comfy, and perfect for everyday wear or casual outings.",
        features: [
          "Material: 100% Cotton",
          "Fit type: Regular Fit",
          "Sleeve type: Short Sleeve",
          "Length: Standard Length",
          "Neck style: Crew Neck",
          "Style: Modern",
          "Country: India"
        ],
        rating: 4.2
      },
      {
        id: 4,
        name: "Men's Typography Regular Fit T-Shirt",
        originalPrice: 799.00,
        discount: 40,
        image: "https://m.media-amazon.com/images/I/51Hf2ayVzwL._SX679_.jpg",
        images: [
          "https://m.media-amazon.com/images/I/51Hf2ayVzwL._SX679_.jpg",
          "https://m.media-amazon.com/images/I/51uOC9CnVkL._SX679_.jpg",
          "https://m.media-amazon.com/images/I/61Q+7YjVIJL._SY741_.jpg",
          "https://m.media-amazon.com/images/I/61MJtroTamL._SY741_.jpg",
          "https://m.media-amazon.com/images/I/61BgBsxkHpL._SX679_.jpg"
        ],
        description: "Men's  regular fit t-shirt for casual days.",
        details: "Stay stylish and comfortable with this men's typography regular fit t-shirt—perfect for casual days, bold statements, and effortless everyday wear. Made for real life.",
        features: [
          "Material: 100% Combed Cotton",
          "Fit type: Regular Fit",
          "Sleeve type: Half Sleeve",
          "Length: Standard Length",
          "Neck style: Crew Neck",
          "Style: Western",
          "Country : India"
        ],
        rating: 4.6
      },
      {
        id: 5,
        name: "Men's Oversized Solid Loose fit Heavy Cotton T-Shirt (Pack of 2)",
        originalPrice: 1999.99,
        discount: 56,
        image: "https://m.media-amazon.com/images/I/51wBWiEz2qL._SX679_.jpg",
        images: [
          "https://m.media-amazon.com/images/I/51wBWiEz2qL._SX679_.jpg",
          "https://m.media-amazon.com/images/I/61vNv66qnAL._SY741_.jpg",
          "https://m.media-amazon.com/images/I/61hIDlSN8+L._SY741_.jpg",
          "https://m.media-amazon.com/images/I/61ewNYgvPJL._SY741_.jpg",
          "https://m.media-amazon.com/images/I/61BgBsxkHpL._SX679_.jpg"
        ],
        description: "Comfortable sneakers for everyday wear.",
        details: "Stay comfy and stylish with this pack of 2 men's oversized heavy cotton tees. Soft, durable, and perfect for everyday wear with a relaxed vibe.",
        features: [
          "Material: 100% Cotton",
          "Pattern: Solid",
          "Fit type: Oversized Fit",
          "Sleeve type: Half Sleeve",
          "Collar style: Collarless",
          "Length: Standard Length",
          "Country: India"
        ],
        rating: 3.9
      },
      {
        id: 6,
        name: "Tshirt for Men | Printed T Shirt for Men | 100% Cotton Regular Fit T-Shirt",
        originalPrice: 1499.99,
        discount: 71,
        image: "https://m.media-amazon.com/images/I/519cECQlGoL._SY741_.jpg",
        images: [
          "https://m.media-amazon.com/images/I/519cECQlGoL._SY741_.jpg",
          "https://m.media-amazon.com/images/I/61i2EdTx1gL._SY741_.jpg",
          "https://m.media-amazon.com/images/I/51TahmRGvaL._SY741_.jpg",
          "https://m.media-amazon.com/images/I/61E+qVZkHRL._SY741_.jpg",
          "https://m.media-amazon.com/images/I/61BgBsxkHpL._SX679_.jpg"
        ],
        description: "The print adds personality without overdoing it.",
        details: "Designed for comfort and style, this regular fit tee is made with breathable cotton. The print adds personality without overdoing it. A must-have staple.",
        features: [
        "Material:  100% Cotton",
        "Pattern: Graphic",
        "Fit type: Regular Fit",
        "Sleeve type: Half Sleeve",
        "Collar style: Collarless",
        "Length: Standard Length",
        "Country: India"
        ],
        rating: 4.5
      },
      {
        id: 7,
        name: "Men T-Shirt || T Shirt for Men",
        originalPrice: 1199.00,
        discount: 70,
        image: "https://m.media-amazon.com/images/I/61RUvfPGO+L._SY741_.jpg",
        images: [
          "https://m.media-amazon.com/images/I/61RUvfPGO+L._SY741_.jpg",
          "https://m.media-amazon.com/images/I/71MmqF5yo3L._SY741_.jpg",
          "https://m.media-amazon.com/images/I/61a+2L5D41L._SY741_.jpg",
          "https://m.media-amazon.com/images/I/81ci9n6DVzL._SY741_.jpg",
          "https://m.media-amazon.com/images/I/61BgBsxkHpL._SX679_.jpg"
        ],
        description: "Classic dress shirt for formal occasions.",
        details: "Regular fit, real comfort, and a print that adds personality. This cotton tee checks every box for men who keep it simple but sharp.",
        features: [
               "Material:  Cotton Blend",
               "Fit type: Regular Fit",
               "Sleeve type: Half Sleeve",
               "Neck style: Round Neck",
               "Length: Standard Length",
               "style: Men T-shirt",
               "Country: India"
        ],
        rating: 4.6
      },
      {
        id: 8,
        name: "Men's Jacquard Chain Polo Shirt",
        originalPrice: 799.99,
        discount: 53,
        image: "https://m.media-amazon.com/images/I/61w7r7NhqJL._SY741_.jpg",
        images: [
         "https://m.media-amazon.com/images/I/61w7r7NhqJL._SY741_.jpg",
         "https://m.media-amazon.com/images/I/61t8K7Fi7PL._SY741_.jpg",
         "https://m.media-amazon.com/images/I/61slpMHEc7L._SY741_.jpg",
         "https://m.media-amazon.com/images/I/61Uc5jZrX7L._SY741_.jpg",
         "https://m.media-amazon.com/images/I/51cjco5C8UL._SX679_.jpg",
         "https://m.media-amazon.com/images/I/61BgBsxkHpL._SX679_.jpg"
        ],
        description: "Comfortable shorts for casual wear.",
        details: "Looks sharp, feels easy. This jacquard chain polo adds just the right edge to your everyday outfit. Classic fit, modern vibe.",
        features: [
          "Material:  Polyester-blend",
          "Pattern: Striped",
          "Fit type: Regular Fit",
          "Sleeve type: Half Sleeve",
          "Collar style: Spread Collar",
          "Length: Standard Length",
          "Country: India"
        ],
        rating: 4.4
      },
      {
        id: 9,
        name: "Men T-Shirt || T-Shirt for Men || Solid T Shirt",
        originalPrice: 1299,
        discount: 70,
        image: "https://m.media-amazon.com/images/I/71hKncxuEPL._SY741_.jpg",
        images: [
          "https://m.media-amazon.com/images/I/71hKncxuEPL._SY741_.jpg",
          "https://m.media-amazon.com/images/I/61lAEK7RL1L._SY741_.jpg",
          "https://m.media-amazon.com/images/I/81LuZLbdekL._SY741_.jpg",
          "https://m.media-amazon.com/images/I/51O8HDGz6CL._SX679_.jpg"
        ],
        description: "whether you’re out and about or just chilling at home.",
        details: "Soft, breathable, and built for everyday comfort—this men’s t-shirt is your go-to for effortless style, whether you’re out and about or just chilling at home.",
        features: [
          "Material:  Cotton Blend",
          "Fit type: Regular Fit",
          "Sleeve type: Half Sleeve",
          "Neck style: Collared Neck",
          "Collar style: Spread Collar",
          "Occasion type: Casual",
          "Country: India"
        ],
        rating: 4.2
      },
      {
        id: 10,
        name: "Men's Super Combed Cotton Rich Solid Regular Fit Polo Neck Half Sleeve Casual T-Shirt | Pack of 2 |",
        originalPrice: 899,
        discount: 45,
        image: "https://m.media-amazon.com/images/I/61vX+fSrbAL._SX679_.jpg",
        images: [
          "https://m.media-amazon.com/images/I/61vX+fSrbAL._SX679_.jpg",
          "https://m.media-amazon.com/images/I/61Nf3Yn-ysL._SY741_.jpg",
          "https://m.media-amazon.com/images/I/51YaHoBQzQL._SY741_.jpg",
          "https://m.media-amazon.com/images/I/61mGYYpOEWL._SY741_.jpg",
          "https://m.media-amazon.com/images/I/51O8HDGz6CL._SX679_.jpg"
        ],
        description: "Classic look that never goes out of style.",
        details: "Stay cool and comfy in this soft, cotton-rich polo tee—perfect for everyday casual wear with a clean, classic look that never goes out of style.",
        features: [
         "Material:  Cotton",
         "Pattern: Solid",
         "Fit type: Regular Fit",
         "Sleeve type: Half Sleeve",
         "Collar style: Polo Collar",
         "Length: Standard Length",
         "Country: India"
        ],
        rating: 3.7
      },
      {
        id: 11,
        name: "Jaqquard Men's Polo T Shirt for Men",
        originalPrice: 1399.00,
        discount: 75,
        image: "https://m.media-amazon.com/images/I/518t+Fw6P4L.jpg",
        images: [
          "https://m.media-amazon.com/images/I/518t+Fw6P4L.jpg",
          "https://m.media-amazon.com/images/I/71RKhU5ORqL._SY741_.jpg",
          "https://m.media-amazon.com/images/I/71ZNkF-P4nL._SY741_.jpg",
          "https://m.media-amazon.com/images/I/71qBkiaGwlL._SY741_.jpg",
          "https://m.media-amazon.com/images/I/51O8HDGz6CL._SX679_.jpg"
        ],
        description: "Just the right touch to your everyday look.",
        details: "Stay cool and stylish with this Jacquard Men’s Polo—perfect fit, soft feel, and subtle texture that adds just the right touch to your everyday look.",
        features: [
         "Material:  Polyester-blend",
         "Style: Western",
         "Fit type: Regular Fit",
         "Sleeve type: Half Sleeve",
         "Neck style: Collared Neck",
         "Length: Standard Length",
         "Country: India"
        ],
        rating: 3.6
      },
      {
        id: 12,
        name: "Mens Printed Cotton Oversized Tshirt",
        originalPrice: 1299.99,
        discount: 74,
        image: "https://m.media-amazon.com/images/I/71M2kw8YMGL._SY741_.jpg",
        images: [
          "https://m.media-amazon.com/images/I/71M2kw8YMGL._SY741_.jpg",
          "https://m.media-amazon.com/images/I/71nF4tKDoCL._SY741_.jpg",
          "https://m.media-amazon.com/images/I/71tIRlUifhL._SY741_.jpg",
          "https://m.media-amazon.com/images/I/61ARxfqcb5L._SY741_.jpg",
          "https://m.media-amazon.com/images/I/71+0PS9vhdL._SY741_.jpg",
          "https://m.media-amazon.com/images/I/71JzWR49gZL._SY741_.jpg",
          "https://m.media-amazon.com/images/I/51O8HDGz6CL._SX679_.jpg"
        ],
        description: "Everyday vibes with a bold look that stands out.",
        details: "Stay comfy and cool in this men’s printed cotton oversized tee—soft, breathable, and made for everyday vibes with a bold look that stands out.",
        features: [
          "Material:  Cotton",
          "Pattern: Printed",
          "Fit type: Oversized Fit",
          "Sleeve type: 3/4 Sleeve",
          "Collar style: Round Neck",
          "Length: Standard Length",
          "Country: India"
        ],
        rating: 4.4
      },
      {
        id: 13,
        name: "Textured Polo T-Shirts | Premium Cotton",
        originalPrice: 1999.00,
        discount: 54,
        image: "https://m.media-amazon.com/images/I/71aQE8KVQaL._SX569_.jpg",
        images: [
          "https://m.media-amazon.com/images/I/71aQE8KVQaL._SX569_.jpg",
          "https://m.media-amazon.com/images/I/61MiS5LDAKL._SY741_.jpg",
          "https://m.media-amazon.com/images/I/71Njxvrb2cL._SY741_.jpg",
          "https://m.media-amazon.com/images/I/618cCONPdkL._SY741_.jpg",
          "https://m.media-amazon.com/images/I/61nZ3JWoTBL._SY741_.jpg",
          "https://m.media-amazon.com/images/I/616VQ4sne8L._SY741_.jpg"
        ],
        description: "Perfect for casual or smart looks.",
        details: "Our Textured Polo T-Shirts blend comfort and style with subtle patterns, perfect for casual or smart looks. Easy to wear, and effortlessly sharp.",
        features: [
         "Material: 100% Cotton",
         "Pattern: Solid",
         "Fit type: Regular Fit",
         "Sleeve type: Short Sleeve",
         "Collar style: Polo Collar",
         "Length: Standard Length",
         "Country: India"
        ],
        rating: 4.0
      },
      {
        id: 14,
        name: "Men's Solid Regular Fit T-Shirt",
        originalPrice: 699.99,
        discount: 49,
        image: "https://m.media-amazon.com/images/I/71jotnk9z1L._SY741_.jpg",
        images: [
          "https://m.media-amazon.com/images/I/71jotnk9z1L._SY741_.jpg",
          "https://m.media-amazon.com/images/I/81JnjCPzrjL._SY741_.jpg",
          "https://m.media-amazon.com/images/I/810Ot8RtgWL._SY741_.jpg",
          "https://m.media-amazon.com/images/I/714ILQDLtxL._SY741_.jpg",
          "https://m.media-amazon.com/images/I/51ZDZK3GkTL._SX679_.jpg"
        ],
        description: "Classic solid T-shirt for men.",
        details: "A classic solid T-shirt for men with a regular fit—super comfy, easy to style, and perfect for everyday wear. Your go-to casual essential!",
        features: [
         "Material: Cotton",
         "Fit type: Regular Fit",
         "Sleeve type: Half Sleeve",
         "Collar style: Collarless",
         "Length: Standard Length",
         "Neck style: Dom",
         "Country: India"
        ],
        rating: 4.3
      },
      {
        id: 15,
        name: "Men's Regular Fit T-Shirt",
        originalPrice: 1399.00,
        discount: 71,
        image: "https://m.media-amazon.com/images/I/51jnzduo7DL._SX569_.jpg",
        images: [
          "https://m.media-amazon.com/images/I/51jnzduo7DL._SX569_.jpg",
          "https://m.media-amazon.com/images/I/61EXgAGZv-L._SY741_.jpg",
          "https://m.media-amazon.com/images/I/61Tcnta8zrL._SY741_.jpg",
          "https://m.media-amazon.com/images/I/61IIz6KRt6L._SY741_.jpg",
          "https://m.media-amazon.com/images/I/61tWi4Kj6ZL._SY741_.jpg",
          "https://m.media-amazon.com/images/I/51ZDZK3GkTL._SX679_.jpg"
        ],
        description: "Stay comfortable and stylish.",
        details: "Stay comfortable and stylish with this men's regular fit t-shirt—soft, breathable fabric and a classic cut that’s perfect for everyday wear.",
        features: [
         "Material: 100% Cotton",
         "Pattern: Printed",
         "Fit type: Regular Fit",
         "Sleeve type: Half Sleeve",
         "Collar style: Round Collar",
         "Length: Standard Length",
         "Country: India"
        ],
        rating: 4.8
      },
      {
        id: 16,
        name: "Men's Graphic Printed 100% Cotton T-Shirt",
        originalPrice: 699.99,
        discount: 40,
        image: "https://m.media-amazon.com/images/I/61RY4G0j5XL._SY741_.jpg",
        images: [
          "https://m.media-amazon.com/images/I/61RY4G0j5XL._SY741_.jpg",
          "https://m.media-amazon.com/images/I/41G+KfeQlGL._SY741_.jpg",
          "https://m.media-amazon.com/images/I/61T5YKX6IrL._SY741_.jpg",
          "https://m.media-amazon.com/images/I/51RHV7vNYIL._SY741_.jpg",
          "https://m.media-amazon.com/images/I/61WW4f2NkDL._SY741_.jpg",
          "https://m.media-amazon.com/images/I/61tC8XHeE1L._SY741_.jpg",
          "https://m.media-amazon.com/images/I/51ZDZK3GkTL._SX679_.jpg"
        ],
        description: "Rock your everyday look.",
        details: "Rock your everyday look with this men’s graphic tee. Made from 100% cotton, it’s soft, stylish, and built for all-day comfort and personality.",
        features: [
          "Material: 100% Cotton",
          "Pattern: Solid",
          "Fit type: Regular Fit",
          "Sleeve type: Half Sleeve",
          "Collar style: Round Collar",
          "Length: Standard Length",
          "Country: India"
        ],
        rating: 4.3
      },
      {
        id: 17,
        name: "Men's Waffle Knitted Crew Neck Regular Fit Tees",
        originalPrice: 799.99,
        discount: 48,
        image: "https://m.media-amazon.com/images/I/81csgfZcMmL._SY741_.jpg",
        images: [
          "https://m.media-amazon.com/images/I/81csgfZcMmL._SY741_.jpg",
          "https://m.media-amazon.com/images/I/81LS9OCMuNL._SY741_.jpg",
          "https://m.media-amazon.com/images/I/81s4C9uPvFL._SY741_.jpg",
          "https://m.media-amazon.com/images/I/81QxpCbISZL._SY741_.jpg",
          "https://m.media-amazon.com/images/I/51ZDZK3GkTL._SX679_.jpg"
        ],
        description: "Casual style that works year-round.",
        details: "Soft, breathable, and perfect for everyday wear, these waffle-knit crew neck tees offer a comfy fit and casual style that works year-round.",
        features: [
          "Material: Heavy Lycra",
          "Pattern: Solid",
          "Fit type: Regular Fit",
          "Sleeve type: Short Sleeve",
          "Collar style: Collarless",
          "Length: Standard Length",
          "Country: India"
        ],
        rating: 4.1
      },
      {
        id: 18,
        name: "Casual T Shirt for Men",
        originalPrice: 749,
        discount: 36,
        image: "https://m.media-amazon.com/images/I/71LLwVdmsfL._SY741_.jpg",
        images: [
          "https://m.media-amazon.com/images/I/71LLwVdmsfL._SY741_.jpg",
          "https://m.media-amazon.com/images/I/71IK7YiFIAL._SY741_.jpg",
          "https://m.media-amazon.com/images/I/81jyH+KIg5L._SY741_.jpg",
          "https://m.media-amazon.com/images/I/61eH5ls6lWL._SY741_.jpg",
          "https://m.media-amazon.com/images/I/61NgdW2o5YL._SY741_.jpg",
          "https://m.media-amazon.com/images/I/51mKzq6RmOL.jpg"
        ],
        description: "Easy to pair with jeans or chinos.",
        details: "A comfy, everyday polo t-shirt for men that’s perfect for casual outings. Soft fabric, smart fit, and easy to pair with jeans or chinos.",
        features: [
          "Material: Polycotton",
          "Pattern: Solid",
          "Fit type: Oversized Fit",
          "Sleeve type: Half Sleeve",
          "Collar style: Polo Collar",
          "Length: Standard Length",
          "Country: India"
        ],
        rating: 3.7
      },
      {
        id: 19,
        name: "Men's Cotton Regular Fit Combo Plain Solid T-Shirt Pack of 2",
        originalPrice: 899.99,
        discount: 40,
        image: "https://m.media-amazon.com/images/I/51gYZG5xlrL._SX679_.jpg",
        images: [
          "https://m.media-amazon.com/images/I/51gYZG5xlrL._SX679_.jpg",
          "https://m.media-amazon.com/images/I/61ik2fIR+jL._SX679_.jpg",
          "https://m.media-amazon.com/images/I/61qL9GJMjmL._SX679_.jpg",
          "https://m.media-amazon.com/images/I/51iwjsmCVQL._SX679_.jpg",
          "https://m.media-amazon.com/images/I/51G2WKG7AiL._SY741_.jpg",
          "https://m.media-amazon.com/images/I/61+AZtR4uKL._SY741_.jpg",
          "https://m.media-amazon.com/images/I/51ZDZK3GkTL._SX679_.jpg"
        ],
        description: "Perfect for everyday wear.",
        details: "Soft, breathable, and perfect for everyday wear, this men's cotton regular fit combo offers classic solid t-shirts that keep you comfortable and effortlessly stylish all day.",
        features: [
          "Material: 100% Cotton",
          "Pattern: Solid",
          "Fit type: Regular Fit",
          "Sleeve type: Half Sleeve",
          "Collar style: Collarless",
          "Length: Standard Length",
          "Country: India"
        ],
        rating: 4.4
      },
      {
        id: 20,
        name: "Men's 100% Combed Cotton Regular Fit Polo T-Shirt",
        originalPrice: 599.99,
        discount: 40,
        image: "https://m.media-amazon.com/images/I/71BwDteGcaL._SY741_.jpg",
        images: [
          "https://m.media-amazon.com/images/I/71BwDteGcaL._SY741_.jpg",
          "https://m.media-amazon.com/images/I/61dqOjsWgXL._SY741_.jpg",
          "https://m.media-amazon.com/images/I/61utrT8XafL._SY741_.jpg",
          "https://m.media-amazon.com/images/I/61a5e3+qeeL._SY741_.jpg",
          "https://m.media-amazon.com/images/I/81RbN1Qr9vL._SY741_.jpg",
          "https://m.media-amazon.com/images/I/51ZDZK3GkTL._SX679_.jpg"
        ],
        description: "Regular fit polo t-shirt.",
        details: "Soft, breathable, and made from 100% combed cotton, this regular fit polo t-shirt offers everyday comfort with a clean, classic look for any occasion.",
        features: [
          "Material: 100% Combed Cotton",
          "Pattern: Solid",
          "Fit type: Regular Fit",
          "Sleeve type: Half Sleeve",
          "Collar style: Collarless",
          "Length: Standard Length",
          "Country: India"
        ],
        rating: 4.5
      },
      {
        id: 21,
        name: "Colorful Printed T Shirt for Men",
        originalPrice: 799,
        discount: 42,
        image: "https://m.media-amazon.com/images/I/51S9VxNGINL._SX679_.jpg",
        images: [
          "https://m.media-amazon.com/images/I/51S9VxNGINL._SX679_.jpg",
          "https://m.media-amazon.com/images/I/51pqSlhUbqL._SX679_.jpg",
          "https://m.media-amazon.com/images/I/617uAd0HPkL._SY741_.jpg",
          "https://m.media-amazon.com/images/I/617v79FQXnL._SY741_.jpg",
          "https://m.media-amazon.com/images/I/51ZDZK3GkTL._SX679_.jpg" 
          ],
        description: "Perfect for everyday style.",
        details: "Add a splash of personality to your look with this colorful printed T-shirt for men—comfortable, eye-catching, and perfect for everyday style.",
        features: [
             "Material: 100% Cotton",
             "Fit type: Regular Fit",
             "Sleeve type: Half Sleeve",
             "Collar style: Collarless",
             "Length: Standard Length",
             "Neck style: Crew Neck",
             "Country: India"
        ],
        rating: 4.0
      },
      {
        id: 22,
        name: "Men's Mandarin Collar Solid Regular Fit Polo T-Shirt",
        originalPrice: 1349,
        discount: 64,
        image: "https://m.media-amazon.com/images/I/71SPhfeKRmL._SX679_.jpg",
        images: [
          "https://m.media-amazon.com/images/I/71SPhfeKRmL._SX679_.jpg",
          "https://m.media-amazon.com/images/I/81Vx3Md0OML._SX679_.jpg",
          "https://m.media-amazon.com/images/I/71ZejwEW1YL._SX679_.jpg",
          "https://m.media-amazon.com/images/I/71FK-aAxVqL._SX679_.jpg",
          "https://m.media-amazon.com/images/I/715YVM137EL._SX679_.jpg",
          "https://m.media-amazon.com/images/I/51ZDZK3GkTL._SX679_.jpg"
        ],
        description: "Modern look perfect for everyday.",
        details: "This men’s polo t-shirt features a sleek mandarin collar and regular fit, offering a clean, modern look perfect for everyday comfort and effortless style.",
        features: [
          "Material: 60% Cotton, 40% Polyester",
          "Pattern: Solid",
          "Fit type: Regular Fit",
          "Sleeve type: Half Sleeve",
          "Collar style: Collarless",
          "Length: Standard Length",
          "Country: India"
        ],
        rating: 4.4
      },
      {
        id: 23,
        name: "Men's 100% Combed Cotton Regular Fit Polo T-Shirt",
        originalPrice: 999.00,
        discount: 45,
        image: "https://m.media-amazon.com/images/I/61w2PG6QNqL._SY741_.jpg",
        images: [
          "https://m.media-amazon.com/images/I/61w2PG6QNqL._SY741_.jpg",
          "https://m.media-amazon.com/images/I/71H1+o7yoPL._SY741_.jpg",
          "https://m.media-amazon.com/images/I/61aiocYHe7L._SY741_.jpg",
          "https://m.media-amazon.com/images/I/61rMzpKvJwL._SY741_.jpg",
          "https://m.media-amazon.com/images/I/71sDqPmgGcL._SY741_.jpg",
          "https://m.media-amazon.com/images/I/51ZDZK3GkTL._SX679_.jpg"
        ],
        description: "Classic look for any occasion.",
        details: "Soft, breathable, and made from 100% combed cotton, this regular fit polo t-shirt offers all-day comfort with a clean, classic look for any occasion.",
        features: [
          "Material: 100% Combed Cotton",
          "Pattern: Solid",
          "Fit type: Regular Fit",
          "Sleeve type: Half Sleeve",
          "Collar style: Collarless",
          "Length: Standard Length",
          "Country: India"
        ],
        rating: 4.5
      },
      {
        id: 24,
        name: "Men's Relaxed Fit Half Sleeve Polo T-Shirt",
        originalPrice: 1349.00,
        discount: 44,
        image: "https://m.media-amazon.com/images/I/61Yj97PjHEL._SY741_.jpg",
        images: [
          "https://m.media-amazon.com/images/I/61Yj97PjHEL._SY741_.jpg",
          "https://m.media-amazon.com/images/I/71zDw6KNtsL._SY741_.jpg",
          "https://m.media-amazon.com/images/I/71CDaEbbhkL._SY741_.jpg",
          "https://m.media-amazon.com/images/I/710150gW50L._SY741_.jpg",
          "https://m.media-amazon.com/images/I/51SH9+mkH6L._SY741_.jpg",
          "https://m.media-amazon.com/images/I/51ZDZK3GkTL._SX679_.jpg"
        ],
        description: "Perfect for casual days or laid-back outings.",
        details: "A super comfortable, easygoing polo t-shirt with half sleeves—perfect for casual days or laid-back outings. Soft fabric, relaxed fit, and effortlessly cool style.",
        features: [
          "Material: 100% Combed Cotton",
          "Pattern: Solid",
          "Fit type: Regular Fit",
          "Sleeve type: Half Sleeve",
          "Collar style: Collarless",
          "Length: Standard Length",
          "Country: India"
        ],
        rating: 4.3
      },
      {
        id: 25,
        name: "Regular Fit Polo Colored Collar T-Shirt for Men",
        originalPrice: 649.00,
        discount: 35,
        image: "https://m.media-amazon.com/images/I/61N91VeKvyL._SY741_.jpg",
        images: [
          "https://m.media-amazon.com/images/I/61N91VeKvyL._SY741_.jpg",
          "https://m.media-amazon.com/images/I/7196F7RxswL._SY741_.jpg",
          "https://m.media-amazon.com/images/I/61bElKNmLWL._SY741_.jpg",
          "https://m.media-amazon.com/images/I/61Hf2gmzVDL._SY741_.jpg",
          "https://m.media-amazon.com/images/I/61GRt0g+lJL._SY741_.jpg",
          "https://m.media-amazon.com/images/I/51ZDZK3GkTL._SX679_.jpg"
        ],
        description: "Comfortable, stylish, and easy to pair.",
        details: "A classic regular fit polo for men featuring a smart colored collar. Comfortable, stylish, and easy to pair with jeans or chinos for any day.",
        features: [
          "Material: Cotton",
          "Pattern: Solid",
          "Fit type: Regular Fit",
          "Sleeve type: Half Sleeve",
          "Collar style: Polo Collar",
          "Length: Standard Length",
          "Country: India"
        ],
        rating: 4.3
      },
      {
        id: 26,
        name: "Casual Sunglasses",
        originalPrice: 1299.99,
        discount: 40,
        image: "https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&q=80&w=800",
        images: [
          "https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&q=80&w=800",
          "https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&q=80&w=800",
          "https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&q=80&w=800"
        ],
        description: "Stylish sunglasses for casual wear.",
        details: "Premium sunglasses with UV protection. Perfect for sunny days.",
        features: [
          "Material: 60% Cotton, 40% Polyester",
          "Pattern: Solid",
          "Fit type: Slim Fit",
          "Sleeve type: Half Sleeve",
          "Collar style: Polo Collar",
          "Length: Standard Length",
          "Country: India"
        ],
        rating: 4.6
      },
      {
        id: 27,
        name: "Polo T Shirt for Men | Casual T Shirt for Men",
        originalPrice: 789,
        discount: 40,
        image: "https://m.media-amazon.com/images/I/61nBbiiPI-L._SY741_.jpg",
        images: [
         "https://m.media-amazon.com/images/I/61nBbiiPI-L._SY741_.jpg",
         "https://m.media-amazon.com/images/I/61O6+I-P0tL._SY741_.jpg",
         "https://m.media-amazon.com/images/I/612JXA67wVL._SY741_.jpg",
         "https://m.media-amazon.com/images/I/615VArX-2YL._SX679_.jpg",
         "https://m.media-amazon.com/images/I/51mKzq6RmOL.jpg",
        ],
        description: "Great for casual outings.",
        details: "Comfortable and stylish, this polo t-shirt for men is perfect for everyday wear. Great for casual outings, it pairs easily with jeans or shorts.",
        features: [
          "Material: POLYCOTTON",
          "Fit type: Regular Fit",
          "Sleeve type: Half Sleeve",
          "Collar style: Polo Collar",
          "Length: Standard Length",
          "Nect style: Collered Neck",
          "Country: India"
        ],
        rating: 4.4
      },
      {
        id: 28,
        name: "Polo T Shirt for Men || Men Casual T-Shirt",
        originalPrice: 1679.00,
        discount: 79,
        image: "https://m.media-amazon.com/images/I/61zJyG+p4lL._SY741_.jpg",
        images: [
          "https://m.media-amazon.com/images/I/61zJyG+p4lL._SY741_.jpg",
          "https://m.media-amazon.com/images/I/61e+OZyvReL._SY741_.jpg",
          "https://m.media-amazon.com/images/I/615sgk6DwlL._SY741_.jpg",
          "https://m.media-amazon.com/images/I/81pmONegZpL._SY741_.jpg",
          "https://m.media-amazon.com/images/I/61rLyJ1sIpL._SX679_.jpg"
        ],
        description: "Perfect for everyday wear.",
        details: "Comfort meets style with this casual polo t-shirt for men. Perfect for everyday wear, it’s soft, breathable, and effortlessly sharp—ideal for any casual outing.",
        features: [
          "Material: 60% Cotton, 40% Polyester",
          "Pattern: Solid",
          "Fit type: Slim Fit",
          "Sleeve type: Half Sleeve",
          "Collar style: Polo Collar",
          "Length: Standard Length",
          "Country: India"
        ],
        rating: 3.9
      },
      {
        id: 29,
        name: "Casual T Shirt for Men",
        originalPrice: 649.00,
        discount: 34,
        image: "https://m.media-amazon.com/images/I/61KDENIHcZL._SY741_.jpg",
        images: [
          "https://m.media-amazon.com/images/I/61KDENIHcZL._SY741_.jpg",
          "https://m.media-amazon.com/images/I/71MSNKBPo1L._SY741_.jpg",
          "https://m.media-amazon.com/images/I/819OB26DtEL._SY741_.jpg",
          "https://m.media-amazon.com/images/I/61qeN-GvhcL._SY741_.jpg",
          "https://m.media-amazon.com/images/I/61N18wn08TL._SY741_.jpg",
          "https://m.media-amazon.com/images/I/51mKzq6RmOL.jpg"
        ],
        description: "Easy to pair with jeans or shorts.",
        details: "A super comfortable casual t-shirt for men, perfect for everyday wear. Soft fabric, relaxed fit, and easy to pair with jeans or shorts.",
        features: [
          "Material: COTTON LYCRA",
          "Pattern: Solid",
          "Fit type: Oversized Fit",
          "Sleeve type: Half Sleeve",
          "Collar style: Polo Collar",
          "Length: Standard Length",
          "Country: India"
        ],
        rating: 4.3
      },
      {
        id: 30,
        name: "Men's Polo T-Shirt with Coloured Collar Tipping",
        originalPrice: 999.00,
        discount: 40,
        image: "https://m.media-amazon.com/images/I/510eBznFnKL._SY741_.jpg",
        images: [
          "https://m.media-amazon.com/images/I/510eBznFnKL._SY741_.jpg",
          "https://m.media-amazon.com/images/I/51ZClbuu-kL._SY741_.jpg",
          "https://m.media-amazon.com/images/I/61CcDABJoJL._SY741_.jpg",
          "https://m.media-amazon.com/images/I/51OwsROvAYL._SY741_.jpg",
          "https://m.media-amazon.com/images/I/5128ybXB8fL._SY741_.jpg",
          "https://m.media-amazon.com/images/I/51ZDZK3GkTL._SX679_.jpg"
        ],
        description: "For casual days or smart outings.",
        details: "Step up your style with this men's polo t-shirt, featuring a sleek fit and eye-catching coloured collar tipping—perfect for casual days or smart outings.",
        features: [
          "Material: 60% Cotton, 40% Polyester",
          "Pattern: Solid",
          "Fit type: Slim Fit",
          "Sleeve type: Half Sleeve",
          "Collar style: Polo Collar",
          "Length: Standard Length",
          "Country: India"
        ],
        rating: 3.9
      }
    ];
  }