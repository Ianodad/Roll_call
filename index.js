const express = require("express");

const app = express();
const helmet = require("helmet");
const compression = require("compression");

require("./startup/cors")(app);
require("./startup/routes")(app);
require("./startup/db")();


// production
app.use(helmet());
app.use(compression());

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
