import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
apiKey: "AIzaSyDFI8Y_LdqtrQlw2ajhNq1LYdibLLP2hBY",
authDomain: "gifty-37c8f.firebaseapp.com",
projectId: "gifty-37c8f",
storageBucket: "gifty-37c8f.firebasestorage.app",
messagingSenderId: "926219705031",
appId: "1:926219705031:web:6aa2b883689a67ef06fce2",
measurementId: "G-M8EF2PM0S3"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);