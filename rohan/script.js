
  // Import the functions you need from the SDKs you need
  
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getDatabase,onValue,ref } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAiR-D10z1zl1N-TrtKXTJYTRLvSHZ19JI",
    authDomain: "course-pirate-2.firebaseapp.com",
    projectId: "course-pirate-2",
    storageBucket: "course-pirate-2.appspot.com",
    messagingSenderId: "688442215734",
    appId: "1:688442215734:web:e23bb8bc1e7690a4b67797"
  };
   
  
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  let user=ref(database)

  let render = ()=>{
   onValue(user,(snapshot)=>{
    snapshot.forEach(element => {
        document.getElementById("cardcontainer").innerHTML+=`
        <div class="card w-[25%]  p-3  flex shadow-xl  flex-col justify-center items-center">
            <img src="image/${element.val().image}" alt="">
            
                <div class="detail-section flex flex-col gap-3">
                    <div class="Price text-2xl w-full text-start">
                         ${element.val().price == 0 ? "free" : element.val().price}
                    </div>
          
                    <div class="desc text-center text-justify max-h-[50px] overflow-hidden  hidden md:block">${element.val().Description}</div>
                    <a href="${element.val().url} target="_blank"><button class="w-full text-center bg-gray-800 text-white py-2">proceed</button></a>
                 </div>
        </div>`
        
       
         console.log(element.val().price,element.val().image,element.val().url)
       });
   })

  }
  render();