import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { getAuth, signInWithPopup, getRedirectResult, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyDh1VRLXTNL1LabqI3IvivTu2pqUwDXgoo",
  authDomain: "ta-project-103dc.firebaseapp.com",
  projectId: "ta-project-103dc",
  storageBucket: "ta-project-103dc.appspot.com",
  messagingSenderId: "13760289877",
  appId: "1:13760289877:web:d9f055de8bb6a9483388dc"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const analytics = getAnalytics(app);
const authBtn = document.getElementById("authenticateBtn")
// app.get("/allowedMails", async (req, res) => {
// 	try {
// 		await client.connect();
// 		const db = client.db(dbName);
// 		const collectionName = 'allowedMails';
// 		const collection = db.collection(collectionName);

// 		// Fetch the allowed emails from MongoDB
// 		const result = await collection.find({}).toArray();
// 		res.send(result.map(entry => entry.email));
// 	} catch (error) {
// 		res.status(500).send(error);
// 	}
// });
// create variable to get mails
const fetchAllowedEmails = async () => {
  const response = await fetch('/allowedMails');
  const allowedEmails = await response.json();
  return allowedEmails;
}


// fetch('/allowedMails')
//   .then(response => response.json())
//   .then(data => console.log(JSON.stringify(data, null, 2)))
//   .catch(error => console.error(error));


async function logout() {

  auth.signOut()
    .then(() => {
      // Logout successful
      console.log("User logged out");
      // Perform any additional actions or redirection as needed
    })
    .catch((error) => {
      // Handle logout error
      console.error("Logout error:", error);
    });
};

function signInGoogle(){
const provider = new GoogleAuthProvider();
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    // localStorage.setItem("isLogin",1)
    console.log(user)
    console.log("done")
    //   write function to signout user with google authentication firebase sdk
try
{
  auth.onAuthStateChanged(async (user) => {
    if (user) {
      const userEmail = user.email;
      const allowedEmails = await fetchAllowedEmails();

      if (allowedEmails.includes(userEmail)) {
        // The email is in the allowed list, grant access
        console.log('Access granted.');
        sessionStorage.setItem("isLogin",1);
        // localStorage.setItem("isLogin",1);
        window.location.replace("/faculty")
        
      } else {
        // The email is not in the allowed list, deny access
        console.log('Access denied.');
        // You can log out or take other actions as needed
        logout();
        window.location.replace("/profpage")
      }
    } else {
      // User is not authenticated
      await logout();
      alert("You do not have access")
      window.location.replace("/profpage")
    }
  });
  }catch(err){
    console.log(err)
  }
    // window.location.href = "./sale.html"
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}

authBtn.addEventListener("click", signInGoogle)


