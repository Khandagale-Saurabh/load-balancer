const jio = require('express')();
jio.get('/',(req,res)=>{
    res.send(`<h1>Jio Data    ${DataForJio}</h1>`)
  })

  jio.listen(3003);
  export default jio;