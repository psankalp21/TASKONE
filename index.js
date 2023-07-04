const express = require("express")
const app = express()
const port = 3000

app.get('/',(req,res)=>
{
    res.send("Welcome to Xpress Calculator")
})

app.get('/:op/:n1/:n2',(req,res)=>
{

    var op = (req.params.op);

    var num1 = (req.params.n1)
    var num2 = (req.params.n2)


    if(num1.includes("."))
        var n1 = parseFloat(num1);
    else
        var n1 = parseInt(num1);

    if(num2.includes("."))
        var n2 = parseFloat(num2);
    else
        var n2 = parseInt(num2);
  
    var result;
    
    switch (op)
    {
        case "add": result = (n1+n2).toString();
        res.send(result);
        break;

        case "subs": result = (n1-n2);
        res.send(result.toString());
        break;

        case "multiply": result = (n1*n2).toString();
        res.send(result);
        break;

        case "divide": result = (n1/n2).toString();
        res.send(result);
        break;

        case "percent": result = ((n1/100)*100).toString();
        res.send(result);
        break;

        case "pow" : for(let x=n2;x>0;x--){n1*n1}
            result = n1.toString();
            res.send(result);
            break;
    

        default : res.send("Invalid Operations!")
        break;



    }
})

app.listen(port,()=> console.log(`App running on port ${port}`))