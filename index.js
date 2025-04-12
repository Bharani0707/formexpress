const express=require("express");
const app=express();
const port=4000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.get('/',(req,res)=>{
    res.send(__dirname+'/index.html')

app.post('/submit',(req,res)=>{
    const data=req.body;
    console.log(data)
    res.send(`
        alret("Form Submitted Successfully!");
        <div style='border: 2px solid blue; padding: 20px; text-align: center; font-family: Arial, sans-serif; background-color:rgb(210, 236, 203);'>
            <h1 style='color:blue'><marquee>Form Submitted Successfully!</marquee></h1>
        </div>
    `);
})
})
app.listen(port,()=>{console.log("listening number is"+port)});


app.post('/submit',(req,res)=>{
    const data=req.body;
    console.log(data)
    res.send(`
        <div style='border: 2px solid green; padding: 20px; text-align: center; background-color:rgb(203, 231, 195); font-family: Arial, sans-serif;'>
            <h1 style='color:green'>Registration successfully</h1>
            <p>Your registration is successful. Thanks for creating an account.</p>
            <button style='padding: 10px 20px; background-color: darkgreen; color: white; border: none; border-radius: 5px; cursor: pointer;'>Back to Home</button>
        </div>
    `);
})

app.put('/update',(req,res)=>{
    
    const { names,email,password, gender, phone, salary } = req.body;
    console.log({ password, gender, phone, salary });
    
    res.send(`
        <div style='text-align: center; border: 2px solid green; padding: 20px; background-color:rgb(216, 244, 208); font-family: Arial, sans-serif;'>
            <h2 style='color: blue'><marquee>welcome! Thanks for create a account</marquee></h2>
            <h1 style='color:green'>Data Updated Successfully!</h1>
            <p><strong>Name:</strong> ${names}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Password: </strong>${password}</p>
            <p><strong>Gender:</strong> ${gender}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Salary:</strong> ${salary}</p>
        </div>
    `);
});

app.delete('/delete', (req, res) => {
    const { names, email, password, gender, phone, salary } = req.body;
    console.log({ password, gender, phone, salary });
    

    res.send(`
        <div style='text-align: center; border: 2px solid red; padding: 20px; background-color:rgb(42, 13, 13);'>
            <h2 style='color:green'>Hi user!</h2>
            <h1 style='color:red'>Your account deleted successfully!</h1>
            
        </div>
    `);
});
