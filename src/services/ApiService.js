const apiUrl =
  location.protocol +
  "//" +
  location.hostname +
  ":8080" +
  process.env.BASE_URL +
  "api";
export default {
  fetchCategories() {
    const url = apiUrl + "/categories";
    console.log("GET from " + url);
    return fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .catch(reason => {
        console.log("Error fetching category data", reason);
      });
  },
  fetchSelectedCategoryBooks(categoryName = null) {
    const url = apiUrl + "/categories/name/" + categoryName + "/books";
    console.log("GET from " + url);
    return fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .catch(reason => {
        console.log("Error fetching category book data", reason);
      });
  }
};
