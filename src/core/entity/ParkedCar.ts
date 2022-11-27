export class ParkedCar {
  code: string;
  plate: string;
  date: Date;

  constructor(code: string, plate: string, date: Date) {
    if (!/[A-Z]{3}-[0-9]{4}/.test(plate)) {
      // TODO: [A-Z]{3}[0-9][0-9A-Z][0-9]{2}
      throw new Error("Invalid plate");
    }
    this.code = code;
    this.plate = plate;
    this.date = date;
  }
}
