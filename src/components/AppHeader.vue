<template>
  <header>
    <div id="leftHeader" class="flexItem">
      <div id="logo">
        <router-link to="/">
          <img
            src="../assets/images/site/bookstore-logo.png"
            alt="Electrifying Comics Logo"
          />
        </router-link>
      </div>
      <div id="logoText">
        <router-link to="/"
          ><img
            src="../assets/images/site/logo-text.jpg"
            alt="Electrifying Comics"
        /></router-link>
      </div>
    </div>
    <div id="midHeader">
      <header-search-bar></header-search-bar>
      <header-category-dropdown></header-category-dropdown>
    </div>
    <div id="rightHeader">
      <div id="loginButton">
        <img
          class="cart-icon"
          src="../assets/images/site/user_logo.png"
          alt="User Login"
          width="50px"
          height="50px"
        />
        <router-link to="/"><div>Login</div></router-link>
      </div>
      <div id="cartButton">
        <router-link :to="{ name: 'cart' }"
          ><img
            class="cart-icon"
            src="../assets/images/site/cart-icon.png"
            alt="Cart Icon"
            width="50px"
            height="50px"
          />
          My Cart</router-link
        >
        <router-link :to="{ name: 'cart' }"
          ><div id="cartCount">
            {{ $store.state.cart.numberOfItems }}
          </div></router-link
        >
      </div>
    </div>
  </header>
</template>

<script>
import HeaderSearchBar from "@/components/HeaderSearchBar";
import HeaderCategoryDropdown from "@/components/HeaderCategoryDropdown";
export default {
  name: "AppHeader",
  components: { HeaderSearchBar, HeaderCategoryDropdown },
  component: {
    HeaderSearchBar,
    HeaderCategoryDropdown
  }
};
</script>

<style scoped>
#logo {
  width: 170px;
  height: 132px;
}
#logoText {
  width: 445px;
  height: 88px;
  margin-left: auto;
  margin-right: auto;
  display: block;
}
.cart-icon {
  filter: invert(100%);
}
header {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-content: stretch;
  align-items: flex-start;
  background: #0ab3a3;
  color: white;
  height: 150px;
}

#leftHeader {
  align-self: center;
  align-items: center;
  display: flex;
}

#midHeader {
  flex: 2 0 auto;
  align-self: center;
  padding: 0 1em;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

#rightHeader {
  flex: 1 0 auto;
  min-width: 6em;
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  align-self: center;
  justify-content: center;
  font-family: cursive;
  color: white;
}

#loginButton {
  display: flex;
  flex-direction: row;
  align-items: center;
}
#cartButton {
  display: flex;
  flex-direction: row;
  align-items: baseline;
}
#cartButton {
  margin: 5px;
}
#cartCount {
  background-color: #069184;
  border: 5px solid #069184;
  margin: 5px;
}

section .flexContainer {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-content: stretch;
  align-items: flex-start;
}
</style>
