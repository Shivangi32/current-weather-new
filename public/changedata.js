var currdate=document.getElementById("date");
    let weathercon=document.getElementById("weather_icon");
    const tempStatus=document.querySelector("#status").textContent;
    if(tempStatus=="Sunny" || tempStatus=="Clear")
    {
        weathercon.innerHTML="<i class='fas fa-sun fa-3x' style='color: rgba(249, 253, 4, 0.87)'></i>";
        document.body.style.backgroundImage="url('sunny.jpg')";
    }
    else if(tempStatus=="Clouds")
    {
        weathercon.innerHTML="<i class='fas fa-cloud fa-3x' style='color: aliceblue'></i>";
        document.body.style.backgroundImage="url('clouds.jpg')";
    }
    else if(tempStatus=="Rainy")
    {
        weathercon.innerHTML="<i class='fas fa-cloud-rain fa-3x' style='color: rgb(0, 132, 255)'></i>";
        document.body.style.backgroundImage="url('rainy.jpg')";
    }
    else if(tempStatus=="Haze")
    {
        weathercon.innerHTML="<i class='fas fa-cloud-sun fa-3x' style='color: rgba(249, 253, 4, 0.87)'></i>";
        document.body.style.backgroundImage="url('haze.jpg')";
    } 
    console.log(tempStatus);
    var months = [
     "January",
     "February",
     "March",
     "April",
     "May",
     "June",
     "July",
     "August",
     "September",
     "October",
     "November",
     "December",];
    var weekday =[
     "Sunday",
     "Monday",
     "Tuesday", 
     "Wednesday",
     "Thursday",
     "Friday",
     "Saturday"];
    var now=new Date();
    var date=now.getDate();
    var month=months[now.getMonth()];
    var day=weekday[now.getDay()];
    let hours=now.getHours();
    let minute=now.getMinutes();
    let period="A.M.";
    if(hours>11)
      {
        period="P.M.";
        if(hours>12)
          hours-=12;
      }
    if(minute<10)
      minute="0"+minute;
  
    currdate.innerHTML=day+" | "+date+" "+month+" | "+hours+":"+minute+" "+period;