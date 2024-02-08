// send fetch request
fetch("https://swapi.dev/api/people/1")
.then((res) => {
  console.log("RESOLVED!", res);
  res.json().then((data) => console.log("JSON DONE", data));
})
.catch(e) => {
  console.log("ERROR!", e);
});

