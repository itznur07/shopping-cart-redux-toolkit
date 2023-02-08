import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    product: [
      {
        id: 1,
        img:
          "https://img.freepik.com/free-psd/realistic-glossy-plastic-ice-cream-cup-packaging-mockup_47987-4532.jpg?w=900&t=st=1675820244~exp=1675820844~hmac=2a43ea1bc1caff733d93ddd7d144f796b94764bf20d16a9eb691943399ef0979",
        heading: "Realistic glossy plastic ice cram",
        description:
          "Our premium ice cream is made with only the freshest ingredients, providing a creamy and indulgent taste experience.",
        price: 60
      },
      {
        id: 2,
        img:
          "https://img.freepik.com/free-photo/stationery-ice-cream-concept_23-2147803280.jpg?w=1060&t=st=1675820351~exp=1675820951~hmac=93392d0236d11a818df3aafd2497f4a0d877d8a187a98e414bbead0d60633790",
        heading: "Coll flavour ice cream",
        description:
          "Our premium ice cream is made with only the freshest ingredients, providing a creamy and indulgent taste experience.",
        price: 35
      },
      {
        id: 3,
        img:
          "https://img.freepik.com/free-vector/coconut-ice-cream-vector-realistic-product-placement-healthy-delicious-desserts_1268-18067.jpg?w=1060&t=st=1675820606~exp=1675821206~hmac=1450329c22bd30958a9aeaab6d36e9864693b3011e94ff1ee47bfdd1f5d94f76",
        heading: "Coconut icr cream with many colors",
        description:
          "Our premium ice cream is made with only the freshest ingredients, providing a creamy and indulgent taste experience.",
        price: 50
      },
      {
        id: 4,
        img:
          "https://img.freepik.com/free-vector/realistic-ice-cream-ad-template_52683-63815.jpg?w=1060&t=st=1675820689~exp=1675821289~hmac=92a400afee5e580dad39e8d6d4d32a2262987cfcf55706b672a219fced4fe080",
        heading: "Realistic vanila ice cream",
        description:
          "Our premium ice cream is made with only the freshest ingredients, providing a creamy and indulgent taste experience.",
        price: 65
      },
      {
        id: 5,
        img:
          "https://img.freepik.com/free-vector/realistic-ice-cream-promo-template_23-2148980953.jpg?w=1060&t=st=1675820781~exp=1675821381~hmac=2d2ff1327b9f95a05548af9a0f399280a4c7eb37a43cff779c5a441e22e545e3",
        heading: "Defferent test vanila ice cream",
        description:
          "Our premium ice cream is made with only the freshest ingredients, providing a creamy and indulgent taste experience.",
        price: 40
      },
      {
        id: 6,
        img:
          "https://img.freepik.com/free-vector/realistic-fresh-organic-ice-cream_52683-65513.jpg?w=1060&t=st=1675820877~exp=1675821477~hmac=8aee19475083dfcf4fd4f0fe82cb195f6fa31d0cd8289d26e90b4c69ae7becae",
        heading: "Realistice fresh organic ice cream",
        description:
          "Our premium ice cream is made with only the freshest ingredients, providing a creamy and indulgent taste experience.",
        price: 85
      },
      {
        id: 7,
        img:
          "https://img.freepik.com/free-vector/premium-quality-realistic-ice-cream-ad_23-2148984339.jpg?w=1060&t=st=1675820950~exp=1675821550~hmac=379d5d3f02c9f3819f2f90df5412a2d9c687fca3990ea3c5342e3b4e4fd1bb21",
        heading: "Premium quality vanila ice cream",
        description:
          "Our premium ice cream is made with only the freshest ingredients, providing a creamy and indulgent taste experience.",
        price: 25
      },
      {
        id: 8,
        img:
          "https://img.freepik.com/free-vector/vanilla-ice-cream-naturally-flavored-product-advertising-poster-with-plant-flower-aromatic-seed-pods-realistic_1284-31945.jpg?w=1380&t=st=1675821014~exp=1675821614~hmac=858b0d0807cc50d87e9602ae320a42f2dd59583aa95dbf700aac916fc19e90be",
        heading: "Vanilla ice cream naturally flavored",
        description:
          "Our premium ice cream is made with only the freshest ingredients, providing a creamy and indulgent taste experience.",
        price: 75
      }
    ]
  },
  reducers: {}
});

export default productSlice.reducer;
