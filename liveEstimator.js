//2000-01-01
if(document.getElementById('birthday').valueAsDate == null){
  document.getElementById('birthday').valueAsDate = new Date(2000, 2, 2);
}


// gender
document.getElementById("gender").addEventListener("change", function() {


  var onlyForWomen = document.getElementById("onlyForWomen");
  if(this.value == "Frau"){
    // document.getElementById("onlyForWomen").style.display = "block";
    // document.getElementById("onlyForWomen").style.backgroundColor = "green";
    onlyForWomen.style.display = "";
    
  }else{
    // document.getElementById("onlyForWomen").style.backgroundColor = "red";
    onlyForWomen.style.display = "none";
    
   
    // document.getElementById("onlyForWomen").style.display = "none";
  }
});

// document.getElementById('birthday').defaultValue = "2014-02-09"; 



// let estimatedLifeExpectancy = 0;

    document.getElementById('questionnaireForm').addEventListener('submit', function (event) {
      event.preventDefault();
     
      const dob = new Date(event.target.dob.value);
      const gender = event.target.gender.value;
      const height = parseInt(event.target.height.value);
      const weight = parseInt(event.target.weight.value);
      const exercise = event.target.exercise.value;
      const alcohol = parseInt(event.target.alcohol.value);
      const preexisting = event.target.preexisting.value;
      const disability = event.target.disability.value;
      const medication = event.target.medication.value;
      const familyIllness = event.target.familyIllness.value;
      const mentalIllness = event.target.mentalIllness.value;
      const personality = event.target.personality.value;
      const surgery = event.target.surgery.value;
      const teethCleaning = parseInt(event.target.teethCleaning.value);
      const dailyWater = parseInt(event.target.dailyWater.value);
      const healthyDiet = event.target.healthyDiet.value;
      const allergies = event.target.allergies.value;
      const stressLevel = event.target.stressLevel.value;
      const pregnancy = event.target.pregnancy.value;
      const workStress = event.target.workStress.value;
      const sleepHours = parseInt(event.target.sleepHours.value);
      const phoneUsageHours = parseInt(event.target.phoneUsageHours.value);
      const workHours = parseInt(event.target.workHours.value);



      // Perform calculations to estimate life expectancy
      // You can add more logic based on additional questions asked.

      // For simplicity, let's just use a random number as an example:
      const estimatedLifeExpectancy = Math.floor(Math.random() * 80) + 50;
      // now subtracht the age from the estimatedLifeExpectancy
      const currentYear = new Date().getFullYear();

      const age = new Date().getFullYear() - dob.getFullYear();
      const timeLeftToLive = estimatedLifeExpectancy - age;
      // add the whole birthday plus the timeLeftToLive
      // const deathDate = new Date(currentYear + timeLeftToLive, dob.getMonth(), dob.getDate());
      // const 

      // console.log("Birthday:"+dob);
      // console.log("Age:"+age);
      // console.log("Estimated life expectancy:"+estimatedLifeExpectancy);
      // console.log("Time left to live:"+timeLeftToLive);
      // console.log("Death date:"+deathDate);


    //   <form action="lifeTimer.html" method="POST" id="sendingResults">
    //   <input name="result" id="result" >
    //   <button type="submit">Zum Lebenszeitrechner</button>
    // </form>

      // var deathDateString =  dob.getDate() + "-" +   dob.getMonth() + + "-" + (currentYear + timeLeftToLive);
      var deathDateString = (currentYear + timeLeftToLive) + "-" + dob.getMonth() + "-" + dob.getDate();
      document.getElementById('result').value = deathDateString;
      document.getElementById('sendingResults').submit();



      // window.location.href = "80Years.html";

      // Display the result
      // document.getElementById('result').innerText = `Geschätzte Lebenserwartung: ${estimatedLifeExpectancy} Jahre`;
    });