
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { getAuth, provideAuth } from '@angular/fire/auth';


export const firebaseConfig = () => initializeApp(environment.firebase)
export const authConfig = ()=>  provideAuth(() => getAuth())


