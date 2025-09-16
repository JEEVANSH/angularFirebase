import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, docData, addDoc, updateDoc, deleteDoc, CollectionReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Review {
  id?: string;
  message: string;
  name: string;
  ratings: number;
}

@Injectable({
  providedIn: 'root'
})
export class FireBaseService {
  private collectionRef: CollectionReference<Review>;

  constructor(private firestore: Firestore) {
    this.collectionRef = collection(this.firestore, 'review') as CollectionReference<Review>;
  }

  // Get all reviews (list)
  getItems(): Observable<Review[]> {
    return collectionData(this.collectionRef, { idField: 'id' }) as Observable<Review[]>;
  }

  // Get single review by id
  getItem(id: string): Observable<Review | undefined> {
    const docRef = doc(this.firestore, `review/${id}`);
    return docData(docRef, { idField: 'id' }) as Observable<Review | undefined>;
  }

  // Add new review
  async addItem(item: Review): Promise<void> {
    await addDoc(this.collectionRef, item);
  }

  // Update an existing review
  async updateItem(id: string, data: Partial<Review>): Promise<void> {
    const docRef = doc(this.firestore, `review/${id}`);
    await updateDoc(docRef, data);
  }

  // Delete a review by id
  async deleteItem(id: string): Promise<void> {
    const docRef = doc(this.firestore, `review/${id}`);
    await deleteDoc(docRef);
  }
}
