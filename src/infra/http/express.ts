import Express from "express";

import { ExpressAdapter } from "../../adapter/ExpressAdapter";
import { ParkingLotController } from "../../controller/ParkingLotController";

const app = Express();

app.get(
  "/parking-lots/:code",
  ExpressAdapter.create(ParkingLotController.getParkingLot)
);

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
