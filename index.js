//
const express = require("express");

const PORT = 300;
const app = express();

app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`));
