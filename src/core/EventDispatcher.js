class EventDispatcher {
  constructor() {
    this.listeners = new Map();
  }

  on(event, callback) {
    const listeners = this.listeners.get(event) || [];
    listeners.push(callback);
    this.listeners.set(event, listeners);
  }

  emit(event, payload) {
    const listeners = this.listeners.get(event) || [];
    return Promise.all(listeners.map((callback) => callback(payload)));
  }
}

export default EventDispatcher;
