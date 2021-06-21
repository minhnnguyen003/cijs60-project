export async function register(name, email, password){
    try{
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        alert("Create account successfully!")
    }catch(error){
        alert(error.message)
    }
}

export async function login(email, password){
    try{
        await firebase.auth().signInWithEmailAndPassword(email, password)
        alert("Login successfully!")
        window.location="http://127.0.0.1:5500/news.html"
    }catch(error){
        alert(error.message)
    }
}

export async function authStateChanged() {
    firebase.auth().onAuthStateChanged((user) => {
        if(user != null)
        {
            let uid = user.uid;
        }
        else {
            window.location = "./signin.html";
        }
    });
}