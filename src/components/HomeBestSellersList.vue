<template>
  <div id="midHome">
    <h2>Best Sellers</h2>
    <div id="bestSellersRow">
      <div class="card">
        <img
          src="../assets/images/books/my_hero_academia_4.jpg"
          alt="My Hero Academia"
        />
        <div class="container">
          <h3>
            <b
              >My Hero Academia <br />
              Issue #4</b
            >
          </h3>
          <p>Deku vs. Bakugo</p>
        </div>
      </div>
      <div class="card">
        <img
          src="../assets/images/books/naruto_2.jpg"
          alt="Electrifying Comics Logo"
        />
        <div class="container">
          <h3>
            <b>Naruto<br />Issue #2</b>
          </h3>
          <p>Team 7 Assemble!</p>
        </div>
      </div>
      <div class="card">
        <img
          src="../assets/images/books/dragonball_z_3.jpg"
          alt="Electrifying Comics Logo"
        />
        <div class="container">
          <h3>
            <b>DragonBall Z<br />Issue #24</b>
          </h3>
          <p>Gotenks Appears!</p>
        </div>
      </div>
      <div class="card">
        <img
          src="../assets/images/books/one-punch_man_18.jpg"
          alt="Electrifying Comics Logo"
        />
        <div class="container">
          <h3>
            <b
              >Watchmen<br />
              Issue #1</b
            >
          </h3>
          <p>The Watchmen</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeBestSellersList"
};
</script>

<style scoped>
section .flexContainer {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-content: stretch;
  align-items: flex-start;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 250px;
  min-height: 300px;
  border-radius: 5px;
  color: black;
}

#topCategoriesRow .card:hover,
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.9);
  cursor: pointer;
}

img {
  border-radius: 5px 5px 0 0;
}

.container {
  padding: 2px 16px;
}

#bestSellersRow {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  align-content: stretch;
  align-items: center;
  /* background: #0AB3A3; */
  color: white;
}
#bestSellersRow div {
  border: 1px black solid;
  text-align: center;
  margin: 10px; /* and that, will result in a 10px gap */
}
#bestSellersRow img {
  height: 220px;
  margin: 5px;
  border-radius: 5px 5px 5px 5px;
}
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
</style>
