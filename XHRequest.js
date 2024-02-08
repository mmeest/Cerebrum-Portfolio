const req = new XMLHttpRequest();

req.onload = function () {
  console.log("TI LOADED!!");
  console.log(this.responseText);              // response in string format

  const data = JSON.parse(this.responseText);  // we pars the response into JSON format
  console.log(data);
};

req.onerror = function () {
  console.log("ERROR!!!!");
  console.log(this);
};

req.open("GET", "https://sqapi.dev/api/people/1");
req.send();
