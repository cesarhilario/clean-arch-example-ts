import { ParkingLotAdapter } from "./../../adapter/ParkingLotAdapter";
import { ParkingLot } from "../../core/entity/ParkingLot";
import { ParkingLotRepository } from "../../core/repository/ParkingLotRepository";

import database from "../database/database";

export class ParkingLotRepositorySQL implements ParkingLotRepository {
  public async getParkingLot(code: string): Promise<ParkingLot> {
    const parkingLotData = await database.oneOrNone(
      "SELECT *, (SELECT COUNT(*) as occupied_spaces FROM parked_car pc WHERE pc.code = pl.code)::int FROM parking_lot pl WHERE pl.code = $1",
      [code]
    );

    return ParkingLotAdapter.create(
      parkingLotData.code,
      parkingLotData.capacity,
      parkingLotData.open_hour,
      parkingLotData.close_hour,
      parkingLotData.occupied_spaces
    );
  }

  async saveParkedCar(code: string, plate: string, date: Date): Promise<void> {
    await database.none(
      "INSERT INTO parked_car (code,  plate, date) VALUES ($1, $2, $3)",
      [code, plate, date]
    );
  }
}
