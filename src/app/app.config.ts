import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { routes } from './app.routes';

const firebaseConfig = {
  apiKey: "AIzaSyCs1CNfjJEJVFlkjGs9gWFFPVSTFpXxK9Q",
  authDomain: "angular-firebase-b0a3d.firebaseapp.com",
  projectId: "angular-firebase-b0a3d",
  storageBucket: "angular-firebase-b0a3d.firebasestorage.app",
  messagingSenderId: "481850842053",
  appId: "1:481850842053:web:1bb25a04130eb5259a89ac"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore())
  ],

};
