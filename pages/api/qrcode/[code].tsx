export default function handler(req, res) {
    const { code } = req.query
  
    console.log(req.method);
    res.json({
        name:"akshay",
        number:"8329143520",
        code:"wEAKX2"
    })
 
  }