export class Country {
    constructor(public id: number, public name: string) { }
}
export class State {
    constructor(public id: number, public countryid: number, public name: string) { }
}
export class City {
    constructor(public id: number, public stateid: number, public name: string) { }
}
  