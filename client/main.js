const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("fortuneButton");

const getCompliment = () => {
  axios.get("http://localhost:4000/api/compliment/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

const getFortune = () => {
  axios.get("http://localhost:4000/api/fortune/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

const createFortune = () => {
  axios.post("http://localhost:4000/api/fortune/").then;
};

// const submitHandler = (e) => {
//   e.preventDefault();

//   let quote = document.querySelector("#quote");

//   let bodyObj = {
//     quote: quote.value,
//   };
// };

complimentBtn.addEventListener("click", getCompliment);
fortuneBtn.addEventListener("click", getFortune);
