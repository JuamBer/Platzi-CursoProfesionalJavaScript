interface Observer {
  update: (data: any) => void;
}

interface Subject {
  subscribe: (observer: Observer) => void;
  unsubscribe: (observer: Observer) => void;
}

class BitcoinPrice implements Subject {
  observers: Observer[] = [];

  constructor() {
    const el: HTMLInputElement | null = document.querySelector('#value');
    
    if (el){
      el.addEventListener('input', () => {
        this.notify(el.value);
      });
    }
  }

  subscribe(observer: Observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer: Observer) {
    const index = this.observers.findIndex(obs => {
      return obs === observer;
    });

    this.observers.splice(index, 1);
  }

  notify(data: any) {
    this.observers.forEach(observer => observer.update(data));
  }
}

class PriceDisplay implements Observer {
  private el: HTMLElement;

  constructor() {
    if (this.el) {
      const price: HTMLElement | null = document.querySelector('#price');
      if (price){
        this.el = price;
      }
    }
  }

  update(data: any) {
    this.el.innerText = data;
  }
}

const value = new BitcoinPrice();
const display = new PriceDisplay();

value.subscribe(display);

setTimeout(() => value.unsubscribe(display), 5000);
