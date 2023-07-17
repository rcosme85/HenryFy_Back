const server = require("./src/app");
const PORT = 3001;

server.listen(PORT, () => {
  console.log("server listening in PORT +" + PORT)
})
