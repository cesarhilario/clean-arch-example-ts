export class ParkingLot {
  public code: string;
  public capacity: number;
  public openHour: number;
  public closeHour: number;
  public occupiedSpaces: number;

  constructor(code, capacity, openHour, closeHour, occupiedSpaces) {
    this.code = code;
    this.capacity = capacity;
    this.openHour = openHour;
    this.closeHour = closeHour;
    this.occupiedSpaces = occupiedSpaces;
  }

  public isOpen(date: Date) {
    const hour = date.getHours();
    return hour >= this.openHour && hour <= this.closeHour;
  }

  public isFull() {
    return this.capacity === this.occupiedSpaces;
  }
}
