<template>
  <div id="app">
    <app-header></app-header>
    <router-view :key="$route.fullPath"></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter
  },
  created: function() {
    this.$store.dispatch("fetchCategories");
  }
};
</script>

<style>
template {
  font: 1em normal Verdana, Tahoma, sans-serif;
  color: black;
  font-size: 20px;
}

app {
  background: white;
  /* stack header-section-footer on all pages */
  display: flex;
  flex-direction: column;
}

a,
a:visited,
input[type="submit"] {
  /* do NOT use blue for this; change the color to fit your theme */
  color: white;
}

a:hover,
a:active,
input[type="submit"]:hover,
ul.buttons a:hover {
  /* do NOT use purple for this; change the color to fit your theme */
  color: black;
}
/*set default font to cursive,to keep consistency*/
p {
  font-family: cursive;
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
</style>
