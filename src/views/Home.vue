<template>
  <div id="center-div">
    <div id="upperHome">
      <h1>
        Welcome to Electrifying Comics! <br />From Gotham City to the Tokyo
        District, we cover all your comic book needs!<br />
      </h1>
    </div>
    <home-best-sellers-list></home-best-sellers-list>
    <home-top-categories-list></home-top-categories-list>
  </div>
</template>

<script>
import HomeBestSellersList from "@/components/HomeBestSellersList";
import HomeTopCategoriesList from "@/components/HomeTopCategoriesList";
export default {
  name: "Home",
  components: {
    HomeBestSellersList,
    HomeTopCategoriesList
  }
};
</script>

<style scoped>
h1 {
  font-family: cursive;
  font-size: larger;
  font-weight: bold;
  font-size: 1.5em;
}
h2 {
  font-family: cursive;
  font-size: larger;
  font-weight: bold;
  font-size: 1.3em;
}

h3 {
  font-size: 20px;
  font-family: cursive;
}
#upperHome {
  text-align: center;
  font-family: cursive;
  margin-bottom: 15px;
  padding: 10px;
}
#center-div {
  margin-left: auto;
  margin-right: auto;
  width: 75em;
  font-size: 20px;
}
</style>
