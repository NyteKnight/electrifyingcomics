<template>
  <form id="searchForm">
    <input id="searchBar" type="text" />
    <input
      id="searchIcon"
      type="image"
      :src="require('../assets/images/site/search-icon.png')"
      alt="Search Icon"
    />
  </form>
</template>

<script>
export default {
  name: "HeaderSearchBar"
};
</script>

<style scoped>
#searchBar {
  width: 350px;
  height: 35px;
  border-radius: 10px;
  padding-right: 72.5px;
  padding-left: 72.5px;
}

#searchIcon {
  width: 35px;
  height: 35px;
  padding-left: 5px;
}
#searchForm {
  display: flex;
  justify-content: center;
  color: black;
  font-family: cursive;
}
</style>
