import axios from "axios";
  export default {
    data() {
      return {
        post: {
          description: this.$route.query.description || "",
          location: this.$route.query.location || "",
          image: this.$route.query.image || null,
        },
        availableTags: [],
        selectedTags: [],
        newTag: "",
        submitting: false,
      };
    },
    methods: {
      async fetchTags() {
        try {
          const response = await axios.get(`${process.env.VUE_APP_BACKEND_URL}/social/tags/`);
          this.availableTags = response.data;
          console.log("標籤列表:", this.availableTags);
        } catch (error) {
          console.error("無法取得標籤:", error);
        }
      },
      isSelected(tag) {
        return this.selectedTags.some((selected) => selected.id === tag.id);
      },
      toggleSelection(tag) {
        const index = this.selectedTags.indexOf(tag.id);
        if (index > -1) {
          this.selectedTags.splice(index, 1);
        } else {
          this.selectedTags.push(tag.id);
        }
      },
      async addNewTag() {
        if (this.newTag.trim() === "") return;

        try {
          const response = await axios.post(`${process.env.VUE_APP_BACKEND_URL}/social/tags/`, {
            tag_name: this.newTag,
          });
          const newTag = response.data;
          this.availableTags.push(newTag);
          this.selectedTags.push(newTag); // 直接選中新加入的標籤
          this.newTag = "";
        } catch (error) {
          console.error("無法新增標籤:", error);
        }
      },
      async convertImageToBase64(imageUrl) {
        try {
          const response = await axios.get(imageUrl, { responseType: "arraybuffer" });
          const base64 = btoa(new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte), ""));
          return `data:image/jpeg;base64,${base64}`;
        } catch (error) {
          console.error("無法轉換圖片為 Base64:", error);
          return null;
        }
      },
      handleImageUpload(event) {
        const file = event.target.files[0];
        if (file) {
          this.post.image = file;
        }
      },
      async convertUrlToBlob(url) {
        try {
          const response = await axios.get(url, { responseType: "blob" });
          return response.data;
        } catch (error) {
          console.error("無法從 URL 取得圖片 Blob:", error);
          return null;
        }
      },
      async submitPost() {
        if (this.submitting) return;
        this.submitting = true;

        try {
          const formData = new FormData();
          formData.append("content", this.post.description);
          formData.append("location", this.post.location);

          if (typeof this.post.image === "string") {
            const blob = await this.convertUrlToBlob(this.post.image);
            if (blob) {
              formData.append("media_url", blob, "image.jpg");
            }
          } else if (this.post.image) {
            formData.append("media_url", this.post.image);
          }

          this.selectedTags.forEach((tagId) => {
            formData.append("tags", tagId); // 傳送標籤的 ID
          });

          const response = await axios.post(`${process.env.VUE_APP_BACKEND_URL}/social/posts/`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${sessionStorage.getItem("my-app-auth")}`,
            },
          });

          alert("貼文新增成功！");
          this.$router.push({ name: "social_index" });
        } catch (error) {
          console.error("新增失敗：", error);
          alert("提交失敗，請稍後再試。");
        } finally {
          this.submitting = false;
        }
      },
    },
    mounted() {
      this.fetchTags();
      if (!this.post.image && this.$route.query.image) {
        this.post.image = require(`@/assets/img/${this.$route.query.image}`);
      }
    },
  };