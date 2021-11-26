import { Link } from "react-router-dom";
import { useSession } from "../../contexts/Session";
import { app } from "../../services/firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, setDoc, getDoc, getFirestore } from "firebase/firestore";
import { useHistory } from "react-router-dom";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
// signInWithPopup(auth, provider)
//   .then((result) => {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;
//     // The signed-in user info.
//     const user = result.user;
//     // ...
//   })
//   .catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//   });

const Login = () => {
  // const { login } = useSession()
  const history = useHistory();

  const login = async () => {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    const userRef = doc(db, "users", user.uid);
    const userSnapshot = await getDoc(userRef);
    if (!userSnapshot.exists()) {
      await setDoc(doc(db, "users", user.uid), {
        name: user.displayName || null,
        photoURL: user.photoURL || null,
      });
      history.push(`/users/${user.uid}`);
    } else {
      history.push(`/dashboard`);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <div>
        <button onClick={login}>Login</button>
      </div>
      <div>
        Don't have account? <Link to="/auth/signup">Signup</Link>
      </div>
      <div>
        <Link to="/auth/forgot-password">Forgot password?</Link>
      </div>
    </div>
  );
};

export default Login;
