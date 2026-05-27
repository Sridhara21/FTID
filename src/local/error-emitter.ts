import { FirestorePermissionError } from './errors';

type EventCallback = (error: FirestorePermissionError | Error) => void;

class ErrorEmitter {
  private listeners: Map<string, Set<EventCallback>> = new Map();

  on(event: string, callback: EventCallback) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, new Set());
    }
    this.listeners.get(event)!.add(callback);
  }

  off(event: string, callback: EventCallback) {
    if (this.listeners.has(event)) {
      this.listeners.get(event)!.delete(callback);
    }
  }

  emit(event: string, error: FirestorePermissionError | Error) {
    if (this.listeners.has(event)) {
      this.listeners.get(event)!.forEach((callback) => callback(error));
    }
  }
}

export const errorEmitter = new ErrorEmitter();
