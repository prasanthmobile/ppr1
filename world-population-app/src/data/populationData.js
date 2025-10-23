export const populationData = [
  {
    id: 1,
    region: "East Asia",
    population: 1678000000,
    ethnicity: "Han Chinese, Japanese, Korean",
    religion: ["Buddhism", "Taoism", "Shintoism", "Atheist"],
    foodHabits: "Rice-based diet, Seafood, Noodles, Soy products",
    clothing: "Traditional: Hanfu, Kimono, Hanbok; Modern: Western wear",
    principles: "Collectivism, Family values, Hard work, Education",
    lifestyle: "Urban-focused, Technology adoption, Traditional ceremonies"
  },
  {
    id: 2,
    region: "South Asia",
    population: 1950000000,
    ethnicity: "Indo-Aryan, Dravidian, Bengali, Punjabi",
    religion: ["Hinduism", "Islam", "Buddhism", "Sikhism"],
    foodHabits: "Vegetarian & Non-vegetarian, Spices, Curry, Rice, Wheat",
    clothing: "Saree, Kurta, Salwar Kameez, Dhoti, Modern fusion wear",
    principles: "Spirituality, Family unity, Karma, Dharma, Respect for elders",
    lifestyle: "Diverse: Rural agriculture to urban tech hubs"
  },
  {
    id: 3,
    region: "Middle East",
    population: 411000000,
    ethnicity: "Arab, Persian, Turkish, Kurdish",
    religion: ["Islam (Sunni & Shia)", "Christianity", "Judaism"],
    foodHabits: "Halal meat, Dates, Hummus, Kebabs, Flatbreads",
    clothing: "Thobe, Hijab, Abaya, Keffiyeh, Modern business attire",
    principles: "Hospitality, Family honor, Faith, Charity",
    lifestyle: "Mix of traditional and modern, Oil-rich economies"
  },
  {
    id: 4,
    region: "Sub-Saharan Africa",
    population: 1186000000,
    ethnicity: "Over 3000 ethnic groups: Yoruba, Hausa, Zulu, etc.",
    religion: ["Christianity", "Islam", "Traditional African religions"],
    foodHabits: "Cassava, Yams, Millet, Plantains, Stews, Grilled meats",
    clothing: "Colorful prints, Dashiki, Kente cloth, Western wear",
    principles: "Ubuntu (humanity), Community, Oral traditions, Respect",
    lifestyle: "Diverse: Traditional villages to growing cities"
  },
  {
    id: 5,
    region: "Europe",
    population: 745000000,
    ethnicity: "Germanic, Slavic, Romance, Celtic peoples",
    religion: ["Christianity (Catholic, Protestant, Orthodox)", "Atheist", "Agnostic"],
    foodHabits: "Bread, Cheese, Wine, Varied cuisines, Mediterranean diet",
    clothing: "Western fashion, Business formal, Casual contemporary",
    principles: "Individualism, Democracy, Human rights, Secularism",
    lifestyle: "Developed economies, Urban centers, Welfare states"
  },
  {
    id: 6,
    region: "North America",
    population: 580000000,
    ethnicity: "Diverse: European descent, Hispanic, African American, Asian",
    religion: ["Christianity", "Judaism", "Islam", "No religion"],
    foodHabits: "Fast food, Burgers, Pizza, BBQ, Mexican fusion, Diverse",
    clothing: "Casual Western wear, Jeans, T-shirts, Business attire",
    principles: "Freedom, Individualism, Innovation, Entrepreneurship",
    lifestyle: "Suburban life, Car culture, Technology, Consumerism"
  },
  {
    id: 7,
    region: "Latin America",
    population: 659000000,
    ethnicity: "Mestizo, Indigenous peoples, European, African descent",
    religion: ["Roman Catholicism", "Protestantism", "Indigenous beliefs"],
    foodHabits: "Corn, Beans, Rice, Spicy foods, Tropical fruits, Empanadas",
    clothing: "Colorful traditional wear, Ponchos, Modern casual",
    principles: "Family, Community, Celebration, Religion, Resilience",
    lifestyle: "Vibrant culture, Music & dance, Growing urbanization"
  },
  {
    id: 8,
    region: "Southeast Asia",
    population: 686000000,
    ethnicity: "Malay, Thai, Vietnamese, Filipino, Indonesian",
    religion: ["Buddhism", "Islam", "Christianity", "Animism"],
    foodHabits: "Rice, Noodles, Seafood, Tropical fruits, Spicy curries",
    clothing: "Sarong, Batik, Ao Dai, Barong, Modern casual",
    principles: "Harmony, Respect, Family, Buddhism/Islam values",
    lifestyle: "Tropical climate, Agriculture, Growing economies"
  },
  {
    id: 9,
    region: "Oceania",
    population: 44000000,
    ethnicity: "European descent, Indigenous Australians, Maori, Pacific Islanders",
    religion: ["Christianity", "No religion", "Indigenous spirituality"],
    foodHabits: "Seafood, BBQ, Meat pies, Bush tucker, Pacific cuisine",
    clothing: "Casual beach wear, Western fashion, Traditional Maori/Islander",
    principles: "Egalitarianism, Outdoor lifestyle, Multiculturalism",
    lifestyle: "Beach culture, Sports, Outdoor activities, Laid-back"
  },
  {
    id: 10,
    region: "Central Asia",
    population: 78000000,
    ethnicity: "Turkic peoples, Mongolian, Persian",
    religion: ["Islam (Sunni)", "Buddhism", "Christianity"],
    foodHabits: "Nomadic meat dishes, Kumis, Plov, Bread, Dairy",
    clothing: "Traditional nomadic wear, Fur hats, Modern urban clothing",
    principles: "Hospitality, Nomadic heritage, Family, Tradition",
    lifestyle: "Steppe culture, Ancient trade routes, Modernizing cities"
  },
  {
    id: 11,
    region: "Eastern Europe",
    population: 293000000,
    ethnicity: "Slavic: Russian, Ukrainian, Polish, Romanian",
    religion: ["Orthodox Christianity", "Catholicism", "Atheist"],
    foodHabits: "Hearty soups, Bread, Potatoes, Cabbage, Meat stews, Vodka",
    clothing: "Traditional folk costumes, Winter wear, Modern European fashion",
    principles: "Strong family ties, Resilience, Literature, Arts",
    lifestyle: "Cold climate adaptation, Rich history, Transition economies"
  },
  {
    id: 12,
    region: "Indigenous Communities Worldwide",
    population: 476000000,
    ethnicity: "Native Americans, Aboriginal, First Nations, Tribal groups",
    religion: ["Animism", "Nature worship", "Christianity (syncretic)"],
    foodHabits: "Hunting & gathering, Traditional crops, Sustainable practices",
    clothing: "Traditional ceremonial wear, Feathers, Beadwork, Modern mix",
    principles: "Harmony with nature, Oral traditions, Community, Sustainability",
    lifestyle: "Connection to land, Preservation of culture, Modern challenges"
  }
];

export const categories = {
  regions: [...new Set(populationData.map(item => item.region))],
  religions: [...new Set(populationData.flatMap(item => item.religion))],
  foodTypes: ["Vegetarian", "Non-vegetarian", "Seafood", "Dairy", "Grains", "Spices"],
  clothingStyles: ["Traditional", "Modern", "Religious", "Casual", "Formal"],
  principles: ["Individualism", "Collectivism", "Spirituality", "Secularism", "Family Values"]
};
