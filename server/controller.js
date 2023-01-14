let fortunes = [
  {
    id: 1,
    fortune:
      "A beautiful, smart, and loving person will be coming into your life.",
  },
  {
    id: 2,
    fortune: "A dubious friend may be an enemy in camouflage.",
  },
  {
    id: 3,
    fortune: "A faithful friend is a strong defense.",
  },
];
const fortuneID = 4;

module.exports = {
  getCompliment: (req, res) => {
    const compliments = [
      "Gee, you're a smart cookie!",
      "Cool shirt!",
      "Your Javascript skills are stellar.",
    ];

    // choose random compliment
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];

    res.status(200).send(randomCompliment);
  },

  getFortune: (req, res) => {
    let randomIndex = Math.floor(Math.random() * fortunes.length);
    let randomFortune = fortunes[randomIndex].fortune;

    res.status(200).send(randomFortune);
  },

  createFortune: (req, res) => {
    let { fortune } = req.body;

    if (!fortune) {
      return res.status(400).send("Invalid Input");
    }

    const newFortune = {
      id: fortuneID,
      fortune,
    };

    fortunes.push(newFortune);
    fortuneID += 1;
    res.status(200).send(fortunes);
  },
};
