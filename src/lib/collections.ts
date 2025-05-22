export interface subCategory {
  name: string;
}

export interface category {
  name: string;
  subCategories: subCategory[];
}

export interface Collection {
  name: string;
  categories: category[];
}

export const CollectionData: Collection[] = [
  {
    name: "Grocery",
    categories: [
      {
        name: "Atta , Rice & Dal",
        subCategories: [
          {
            name: "Atta"
          },
          {
            name: "Rice"
          },
          {
            name: "Dal & Pulses"
          },
          {
            name: "Poha Daliya & Other Grains"
          },
        ]
      },
      {
        name: "Biscuit & Cookies",
        subCategories: [
          {
            name: "Biscuits"
          },
          {
            name: "Cookies"
          },
          {
            name: "Cream Biscuits"
          },
          {
            name: "Glucose & Digestive"
          },
          {
            name: "Rusks & Waffers"
          },
          {
            name: "Sweet & Salty"
          },
        ]
      },
      {
        name: "Cleaning Essentials",
        subCategories: [
          {
            name: "Cleaning Tools Shoe Care"
          },
          {
            name: "Detergent Powder & Bars"
          },
          {
            name: "Dishwash Gel & Bar"
          },
          {
            name: "Disinfectant"
          },
          {
            name: "Floor & Surface Cleaner"
          },
          {
            name: "Liquid Detergent & Additive"
          },
          {
            name: "Toilet & Bathroom Cleaner"
          },
        ]
      },
      {
        name: "Cold Drinks & Juices",
        subCategories: [
          {
            name: "Fruit Juices"
          },
          {
            name: "Lassi Shakes & More"
          },
          {
            name: "Soda & Mixers"
          },
          {
            name: "Water & Energy Drink"
          },
          {
            name: "Soft Drinks"
          },
        ]
      },
      {
        name: "Dairy , Breads & Eggs",
        subCategories: [
          {
            name: "Cheese & Butter"
          },
          {
            name: "Paneer & Cream"
          }
        ]
      },
      {
        name: "Ice Cream & More",
        subCategories: [
          {
            name: "Cones"
          },
          {
            name: "Cups"
          },
          {
            name: "Kulfi"
          },
          {
            name: "Sticks"
          },
          {
            name: "Tube"
          },
          {
            name: "Cake Sandwich & More"
          }
        ]
      },
      {
        name: "Instant Food & Sauces",
        subCategories: [
          {
            name: "Batter & Mixes"
          },
          {
            name: "Cereals Muesli & More"
          },
          {
            name: "Dry Fruits"
          },
          {
            name: "Ketchup & Sauces"
          },
          {
            name: "Noodles Delight"
          },
          {
            name: "Peanut Butter & Spreads"
          }
        ]
      },
      {
        name: "Masala, Oil & More",
        subCategories: [
          {
            name: "Ghee"
          },
          {
            name: "Oils"
          },
          {
            name: "Pickles"
          },
          {
            name: "Powdered Spices"
          },
          {
            name: "Salt Sugar & Jaggery"
          },
          {
            name: "Whole Spices"
          }
        ]
      },
      {
        name: "Snacks & Munchies",
        subCategories: [
          {
            name: "Chips & Crisps"
          },
          {
            name: "Namkeen"
          },
          {
            name: "Papad & More"
          },
          {
            name: "Popcorn Makhana & More"
          }
        ]
      },
      {
        name: "Sweet Lover",
        subCategories: [
          {
            name: "Cakes & Rolls"
          },
          {
            name: "Chocolates"
          },
          {
            name: "Chocolates Gift Packs"
          },
          {
            name: "Desi Sweets"
          },
          {
            name: "Energy Bar"
          },
          {
            name: "Mouth Freshener & Candies"
          }
        ]
      },
      {
        name: "Tea, Coffee & Drink Mixes",
        subCategories: [
          {
            name: "Coffee"
          },
          {
            name: "Drink Mixes"
          },
          {
            name: "Ready To Drink"
          },
          {
            name: "Tea & Herbal Teas"
          }
        ]
      },
      {
        name: "Baby",
        subCategories: [
          {
            name: "Baby Food"
          },
          {
            name: "Baby Oral Care"
          },
          {
            name: "Baby Skin & Hair Care"
          },
          {
            name: "Baby Wipes & Tissues"
          },
          {
            name: "Diapers & More"
          }
        ]
      }
    ]
  },
  {
    name: "Cosmetics",
    categories: [
      {
        name: "Bath & Body",
        subCategories: [
          {
            name: "Conditioner"
          },
          {
            name: "Face Wash & Scrubs"
          },
          {
            name: "Handwash"
          },
          {
            name: "Oral Care"
          },
          {
            name: "Shampoo"
          },
          {
            name: "Shaving Cream"
          },
          {
            name: "Shower Gel"
          },
          {
            name: "Soaps"
          }
        ]
      },
      {
        name: "Feminine Hygiene",
        subCategories: [
          {
            name: "Hair Removal & Razors"
          },
          {
            name: "Intimate"
          },
          {
            name: "Sanitary"
          }
        ]
      },
      {
        name: "Hair Care",
        subCategories: [
          {
            name: "Hair Accessories"
          },
          {
            name: "Hair Colour"
          },
          {
            name: "Hair Oil & Gel"
          },
          {
            name: "Hair Serum"
          }
        ]
      },
      {
        name: "Makeup & Beauty",
        subCategories: [
          {
            name: "Bindi Bangle & More"
          },
          {
            name: "Blush & Highlighters"
          },
          {
            name: "Cleaner & Toners"
          },
          {
            name: "Foundation & Compact"
          },
          {
            name: "Kajal & Eyeliners"
          },
          {
            name: "Lipstick & Gloss"
          },
          {
            name: "Nail Accessories"
          },
          {
            name: "Primers & Concealers"
          }
        ]
      },
      {
        name: "Pharma & Wellness",
        subCategories: [
          {
            name: "Cotton & Bandage"
          },
          {
            name: "Digestive Care"
          },
          {
            name: "Disinfectant"
          },
          {
            name: "Honey & Chyawanprash"
          },
          {
            name: "Pain Relief"
          },
          {
            name: "Protein Supplements"
          }
        ]
      },
      {
        name: "Skin & Face Care",
        subCategories: [
          {
            name: "Body Lotion"
          },
          {
            name: "Cream"
          },
          {
            name: "Face Mask, Gel And More"
          },
          {
            name: "Facewash And Scrubs"
          },
          {
            name: "Hand And Foot Care"
          },
          {
            name: "Lip And Eye Care"
          },
          {
            name: "Perfume, Deo And Talc"
          },
          {
            name: "Sunscreen And Serum"
          }
        ]
      }
    ]
  },
  {
    name: "Pooja",
    categories: [{
      name: "Pooja essential ",
      subCategories: []
    },
    {
      name: "Offerings ",
      subCategories: []
    },
    {
      name: "Pooja Accessories",
      subCategories: []
    },
    ]
  },
  {
    name: "Stationary",
    categories: [
      {
        name: "Paper",
        subCategories: [
          {
            name: "Books & Magazines"
          },
          {
            name: "Colour Paper"
          },
          {
            name: "Craft & Hobbies"
          }
        ]
      },
      {
        name: "Writing Instruments",
        subCategories: [
          {
            name: "Pen & Markers"
          },
          {
            name: "School Supplies"
          },
          {
            name: "Sketch Colour"
          }
        ]
      },
      {
        name: "Office Supplies",
        subCategories: [
          {
            name: "Files & Office Needs"
          },
          {
            name: "Glue Tape & Sticker"
          },
          {
            name: "Stapler & Scissors"
          }
        ]
      }
    ]
  }
]; 