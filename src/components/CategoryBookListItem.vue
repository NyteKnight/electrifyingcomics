<template>
  <div class="card">
    <img
      :src="require('@/assets/images/books/' + bookImageFileName(book))"
      :alt="book.title"
    />
    <div class="container">
      <h3 id="bookTitle">
        <b>
          {{ bookSeries(book) }} <br />
          Issue #{{ bookIssue(book) }}
        </b>
      </h3>
      <p id="bookSubTitle">{{ book.title.split(":")[1] }}</p>
      <p id="author">{{ book.author }}</p>
      <span v-for="n in randomRating()" :key="n" id="filledStar">&#9733;</span>
      <p id="bookPrice">${{ (book.price / 100).toFixed(2) }}</p>
      <ul class="itemActions">
        <li v-if="book.isPublic" class="read">
          <input type="submit" value="Read Now" />
        </li>
        <li class="addToCart">
          <input @click="addToCart(book)" type="submit" value="Add to Cart" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "categoryBookListItem",
  props: {
    book: {
      type: Object,
      required: true
    }
  },
  methods: {
    randomRating: function() {
      return Math.floor(Math.random() * 5 + 1);
    },
    bookImageFileName: function(book) {
      let name = book.title.toLowerCase().split(":")[0];

      name = name.replace(/ /g, "_");
      name = name.replace(/#/g, "");
      // console.log(name)
      return `${name}.jpg`;
    },
    bookSeries: function(book) {
      let series = book.title.split("#")[0];
      // console.log(series)
      return `${series}`;
    },
    bookIssue: function(book) {
      let issue = book.title.split(":")[0].split("#")[1];
      // console.log(issue)
      // console.log(issue)
      return `${issue}`;
    },
    addToCart: function(book) {
      this.$store.dispatch("addToCart", book);
    }
  }
};
</script>
<style scoped>
#categoryBookList div {
  /* border: 1px black solid; */
  text-align: left;
  margin: 10px;
}
h3 {
  font-size: 20px;
}

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
#author {
  font-size: smaller;
  margin-bottom: 10px;
}
img {
  height: 220px;
  margin: 5px;
  border-radius: 5px 5px 5px 5px;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 400px;
  min-height: 300px;
  border-radius: 5px;
  color: black;
  display: flex;
  align-items: center;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.9);
}

.container {
  padding: 2px 16px;
}
div {
  text-align: left;
  margin: 10px;
}
#filledStar {
  color: #0ab3a3;
  content: "\2605"; /* Full star in UTF8 */
  /* position: absolute; */
  left: 0;
  /* text-shadow: 0 0 2px #0AB3A3; */
  margin-bottom: 5px;
}
#emptyStar {
  color: rgb(128, 128, 128);
  margin-bottom: 5px;
}
#author {
  font-size: smaller;
  margin-bottom: 10px;
}

#bookTitle {
  margin-bottom: 5px;
}
#bookSubTitle {
  margin-bottom: 5px;
}
#bookPrice {
  margin-top: 10px;
  margin-bottom: 5px;
}
.read input,
.addToCart input {
  margin-right: 0.5em;
  background-color: #0ab3a3;
  border: 1px solid #0ab3a3;
  border-radius: 0.2em;
  margin-bottom: 5px;
  cursor: pointer;
}
</style>
