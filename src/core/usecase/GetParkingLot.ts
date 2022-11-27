import { ParkingLotRepository } from "./../repository/ParkingLotRepository";

export class GetParkingLot {
  private parkingLotRepository: ParkingLotRepository;

  constructor(parkingLotRepository: ParkingLotRepository) {
    this.parkingLotRepository = parkingLotRepository;
  }

  public execute(code: string) {
    return this.parkingLotRepository.getParkingLot(code);
  }
}
