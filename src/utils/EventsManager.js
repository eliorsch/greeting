import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  onSnapshot,
  query,
  updateDoc,
} from "firebase/firestore";

export default class EventsManager {
  constructor(userId) {
    this.userId = userId;
    this.firestore = getFirestore();
    this.collectionPath = `users/${userId}/userData/events/eventsCollection`;
    this.collectionRef = collection(this.firestore, this.collectionPath);
  }
  
  getNewEvent(){
    return {
      name: '',
      date: new Date(),
      title: '',
      isHaveReminder: false,
      reminderDate: new Date(),
    }
  }

  createEventDocRef(eventId) {
    return doc(this.firestore, `${this.collectionRef.path}/${eventId}`).withConverter(eventConverter);
  }

  // Create a new event
  async createEvent(eventData) {
    try {
      const newDocRef = await addDoc(this.collectionRef, eventData);
      return newDocRef.id;
    } catch (error) {
      console.error("Error creating event:", error);
    }
  }

  // Read a single event by event ID
  async getEvent(eventId) {
    try {
      const eventDocRef = this.createEventDocRef(eventId);
      const eventSnapshot = await getDoc(eventDocRef);
      if (eventSnapshot.exists()) {
        return eventSnapshot.data();
      } else {
        console.log("Event does not exist");
        return null;
      }
    } catch (error) {
      console.error("Error getting event:", error);
    }
  }

  // Update an existing event
  async updateEvent(eventId, eventData) {
    try {
      const eventDocRef = this.createEventDocRef(eventId);
      await updateDoc(eventDocRef, eventData);
      console.log("Event updated successfully");
    } catch (error) {
      console.error("Error updating event:", error);
    }
  }

  // Delete an event
  async deleteEvent(eventId) {
    try {
      const eventDocRef = this.createEventDocRef(eventId);
      await deleteDoc(eventDocRef);
      console.log("Event deleted successfully");
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  }

  // Fetch all events for the user
  setupRealtimeListener(callback) {
    const eventsQuery = query(this.collectionRef);
    const unsubscribe = onSnapshot(eventsQuery, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        const event = {
          id: change.doc.id,
          ...change.doc.data(),
        };
        callback(change.type, event);
      });
    });

    return unsubscribe;
  }
  // Fetch all events for the user
  async getAllEvents() {
    const result = [];
    try {
      const docs = await getDocs(query(this.collectionRef).withConverter(eventConverter));
      docs.forEach((doc) => {
        result.push(doc.data());
      });
      return result;
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  }
}

// Firestore data converter
const eventConverter = {
  toFirestore: (event) => {
    return {
      name: event.name,
      date: event.date,
      title: event.title,
      isHaveReminder: event.isHaveReminder,
      reminderDate: event.reminderDate,
    };
  },
  fromFirestore: (snapshot, options) => {
    return snapshot.data(options)
  },
};
