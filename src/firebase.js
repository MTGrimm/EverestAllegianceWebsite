import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDJ9vhyvkMAU6KZYVV8pwzsGs2ER08N0_g",
	authDomain: "everest-allegiance.firebaseapp.com",
	projectId: "everest-allegiance",
	storageBucket: "everest-allegiance.appspot.com",
	messagingSenderId: "816238140175",
	appId: "1:816238140175:web:babdbb45654fe19e757c7a",
	measurementId: "G-X680JJ9P6N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);    