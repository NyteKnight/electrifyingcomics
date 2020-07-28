<template>
  <footer>
    <div class="flexItem"></div>
    <div class="flexItem">
      <div id="midFooterContactInfo"></div>
      <div id="midFooterContactInfo">
        <p>&copy;2020 Electrifying Comics</p>
      </div>
      <div id="midFooterContactInfo">
        <p>Contact us</p>
      </div>
      <div id="midFooterContactInfo">
        <p>Directions</p>
      </div>
    </div>
    <div class="flexItem">
      <router-link to="/"
        ><img
          src="../assets/images/site/social_media.png"
          alt="Social Media Links"
      /></router-link>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter"
};
</script>

<style scoped>
footer {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-content: stretch;
  align-items: flex-start;
  background: #0ab3a3;
  color: white;
  height: 60px;
  font-family: cursive;
  font-size: 20px;
}

footer {
  /* override */
  align-items: center; /* vertical center align */
}

footer .flexItem {
  order: 0;
  flex: 0 1 auto;
  align-self: auto;
}

footer .flexItem {
  width: 33%;
}

footer .flexItem:nth-child(2) {
  display: flex;
  text-align: center;
  padding: 0 1em;
  flex-direction: row;
  justify-content: center;
}

footer .flexItem:last-child {
  text-align: right;
  margin-top: 10px;
}
#midFooterContactInfo {
  border-right: 1px solid white;
}
#midFooterContactInfo p {
  margin: 5px;
  overflow: hidden;
  white-space: nowrap;
  align-self: center;
  display: inline;
}
</style>
