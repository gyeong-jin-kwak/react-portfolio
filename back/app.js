const express = require("express");
const cardRouter = require("./routes/card");

const app = express();

app.get("/", (req, res) => {
	res.send("hello express");
});

// prefix card
app.use("/card", cardRouter);

app.listen(3002, () => {
	console.log("서버 실행중");
});
