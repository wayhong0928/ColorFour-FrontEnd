import axios from "axios";
export default {
  props: ["id"],
  name:"buy_index",
  data() {
    return {
      selectedCategory: "all",
      selectedBrand: "all",
      sortBy: "newest",
      selectedItems: [],
      items: [ 
        {
            id: 1,
            name: "白T萬歲",
            category: "t-shirt",
            brand: "UNIQLO",
            price: "$200",
            image: require("@/Assets/image/Uniqlo_white_Tshirt.png"),
            tags: ["春天", "夏天", "休閒", "百搭"],
            link: "closet_detail.html?id=1",
          },
          {
            id: 2,
            name: "連身裙",
            category: "dress",
            brand: "GU",
            price: "$300",
            image: require("@/Assets/image/closet_02.png"),
            tags: ["春天", "夏天", "野餐", "可愛"],
            link: "closet_detail.html?id=2",
          },
          {
            id: 3,
            name: "牛仔褲",
            category: "jean",
            brand: "GU",
            price: "$550",
            image: require("@/Assets/image/closet_03.png"),
            tags: ["春天", "夏天", "休閒", "百搭"],
            link: "closet_detail.html?id=3",
          },
          {
            id: 4,
            name: "短褲",
            category: "bottom",
            brand: "UNIQLO",
            price: "$250",
            image: require("@/Assets/image/closet_04.png"),
            tags: ["秋天", "春天", "夏天","野餐"],
            link: "closet_detail.html?id=4",
          },
          {
            id: 5,
            name: "小白鞋",
            category: "shoes",
            brand: "無印",
            price: "$200",
            image: require("@/Assets/image/closet_05.png"),
            tags: ["四季", "休閒", "百搭"],
            link: "closet_detail.html?id=5",
          },
      ]
    };
  },
  methods: {
  goToSuggest() {
    this.$router.push('/buy_suggest');
  },
  goToDetail(itemId) {
    this.$router.push(`/buy_detail/${itemId}`); // 使用商品id動態路由
  }
}
};