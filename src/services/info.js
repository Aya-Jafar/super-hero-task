
const getInfo = (url, setter) => {
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        setter(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };
  export default getInfo;
  