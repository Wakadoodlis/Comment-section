<template>
<!-- Main wraper  -->
    <div class="main-wraper">
      <h5 class="title">{{title}} <span class="subtitle"> {{subtitle}}</span></h5>
      <!-- componentas comments.vue -->
      <comment> </comment>
    </div> <!-- END OF MAIN WRAPER-->
</template>

<script>
import Comment from "./comments.vue";

export default {
  components: {
    comment: Comment
  },

  data() {
    return {
      title: "This is chat component",
      subtitle: "for Your site"
    };
  },
  methods: {}
};
</script>

