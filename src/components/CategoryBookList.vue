<template>
  <div id="categoryBookList">
    <category-book-list-item
      v-for="book in $store.state.selectedCategoryBooks"
      :key="book.bookId"
      :book="book"
    ></category-book-list-item>
  </div>
</template>

<script>
import CategoryBookListItem from "./CategoryBookListItem";

export default {
  name: "CategoryBookList",
  components: {
    CategoryBookListItem
  }
};
</script>

<style scoped>
#categoryBookList {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: stretch;
  align-items: center;
  color: white;
}
/*#categoryBookList div*/
/*{*/
/*  !* border:1px black solid; *!*/
/*  text-align: left;*/
/*  margin:10px;  !* and that, will result in a 10px gap *!*/
/*}*/
#categoryBookList img {
  height: 220px;
  margin: 5px;
  border-radius: 5px 5px 5px 5px;
}
</style>
