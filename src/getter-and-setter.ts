export {};

class MyNumberCard {
  private _owner: string;
  private _sercretNumber: number;

  constructor(owner: string, sercretNumber: number) {
    this._owner = owner;
    this._sercretNumber = sercretNumber;
  }

  get owner() {
    return this._owner;
  }

  set sercretNumber(sercretNumber: number) {
    this._sercretNumber = sercretNumber;
  }

  debugPrint() {
    return `sercretNumber: ${this._sercretNumber}`;
  }
}

let card = new MyNumberCard('bsuke', 1234567890);
console.log(card.debugPrint());
card.sercretNumber = 1111111111;
console.log(card.debugPrint());

// card.owner = 'asuke';
console.log(card.owner);
console.log(card.sercretNumber);
