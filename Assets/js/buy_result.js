import axios from "axios";
export default {
  props: ["id"],
  name: "buy_index",
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
          price: "$150",
          addedDate: "2024/06/01",
          image: require("@/assets/img/Uniqlo_white_Tshirt.png"),
          tags: ["春天", "夏天", "休閒", "百搭"],
          link: "closet_detail.html?id=1",
        },
        {
          id: 2,
          name: "連身裙",
          category: "dress",
          brand: "GU",
          price: "$100",
          addedDate: "2024/06/02",
          image: require("@/assets/img/closet_02.png"),
          tags: ["春天", "夏天"],
          link: "closet_detail.html?id=2",
        },
        {
          id: 3,
          name: "牛仔褲",
          category: "bottom",
          brand: "GU",
          price: "$70",
          addedDate: "2024/06/03",
          image: require("@/assets/img/closet_03.png"),
          tags: ["春天", "夏天"],
          link: "closet_detail.html?id=3",
        },
        {
          id: 4,
          name: "短褲",
          category: "bottom",
          brand: "UNIQLO",
          price: "$220",
          addedDate: "2024/06/04",
          image: require("@/assets/img/closet_04.png"),
          tags: ["秋天", "冬天"],
          link: "closet_detail.html?id=4",
        },
        {
          id: 5,
          name: "小白鞋",
          category: "shoes",
          brand: "無印",
          price: "$80",
          addedDate: "2024/06/05",
          image: require("@/assets/img/closet_05.png"),
          tags: ["春天", "夏天"],
          link: "closet_detail.html?id=5",
        },
      ],
    };
  },
  methods: {
    goToDetail(itemId) {
      this.$router.push(`/buy_detail/${itemId}`); // 使用商品id動態路由
    },
    again() {
      this.$router.push("/buy_suggest");
    },
  },
};