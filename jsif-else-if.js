var perc;

perc=parseFloat(prompt("Enter Percenyage=="));

if(perc>=75 && perc<100)
{
    alert("Distinction");
}
else if(perc>=60 && perc<75)
{
    alert("First class");
}

else if(perc>=50 && perc<60)
{
    alert("Second class");
}

else if(perc>=35 && perc<50)
{
    alert("Pass class");
}
else if(perc>=0 && perc<35)
{
    alert("Fail");
}
else{

    alert("Input Not Correct");
}