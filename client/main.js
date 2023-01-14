const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("fortuneButton");
const allFortuneBtn = document.getElementById("getAllButton");
const newSection = document.getElementById("fortune");
const form = document.querySelector("form");

const fortunesCallback = ({ data: fortunes }) => addToView(fortunes);

//get all fortunes
const getAllFortunes = () => {
  axios.get("http://localhost:4000/api/fortune/").then(fortunesCallback);
};

//get random compliment
const getCompliment = () => {
  axios.get("http://localhost:4000/api/compliment/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

//get random fortune
const getFortune = () => {
  axios.get("http://localhost:4000/api/random/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

//add a fortune to the fortune list
const createFortune = (body) => {
  axios.post("http://localhost:4000/api/fortune/", body).then(fortunesCallback);
};

//delete a fortune
const deleteFortune = (id) => {
  axios
    .delete(`http://localhost:4000/api/fortune/${id}`)
    .then(fortunesCallback);
};

//handle input
const submitHandler = (e) => {
  e.preventDefault();

  let fortune = document.querySelector("#quote");

  let bodyObj = {
    fortune: fortune.value,
  };

  createFortune(bodyObj);
};

//add to view
const addToView = (dataArr) => {
  newSection.innerHTML = ``;
  for (let i = 0; i < dataArr.length; i++) {
    let fortuneCard = dataArr[i].fortune;
    let newLine = document.createElement("div");
    newLine.innerHTML = `<p> ${fortuneCard} </p>
        <button onclick="deleteFortune(${dataArr[i].id})">delete</button>`;
    newLine.id = "fortune";
    newSection.appendChild(newLine);
  }
};

complimentBtn.addEventListener("click", getCompliment);
fortuneBtn.addEventListener("click", getFortune);
allFortuneBtn.addEventListener("click", getAllFortunes);
form.addEventListener("submit", submitHandler);

// getAllFortunes();
