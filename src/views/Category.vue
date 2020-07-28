<template>
  <div id="middle">
    <div class="flexContainer content">
      <article class="flexItem categoryNav">
        <category-nav></category-nav>
      </article>
      <div id="midRow">
        <!--      <h2>All Comics</h2>-->
        <category-book-list :books="$store.state.books"> </category-book-list>
      </div>
    </div>
  </div>
</template>

<script>
import CategoryNav from "@/components/CategoryNav";
import CategoryBookList from "@/components/CategoryBookList";

export default {
  name: "category",
  components: {
    CategoryNav,
    CategoryBookList
  },
  data: function() {
    return {};
  },
  created: function() {
    this.$store.dispatch("selectCategory", this.$route.params.name);
    this.$store.dispatch("fetchSelectedCategoryBooks");
  },
  methods: {}
};
</script>

<style scoped>
#middle {
  min-height: 759px;
}
.content > .flexItem:first-child {
  /* category navigation */
  width: 15%;
  min-width: 15em;
  padding-right: 2em;
  margin-top: 25px;
  font-family: cursive;
}

.content ul.buttons {
  margin-top: 0;
  text-align: center;
}

.flexContainer {
  display: flex;
  flex-direction: row;
}
.categoryNav ul.buttons li a.selected {
  background-color: black;
  color: #fff;
  cursor: pointer;
}
.categoryNav ul.buttons li a.unselected {
  background-color: #0ab3a3;
  color: #fff;
  cursor: pointer;
}
h2 {
  font-family: cursive;
  font-size: larger;
  font-weight: bold;
  font-size: 1.3em;
}
</style>
