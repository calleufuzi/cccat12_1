// @ts-nocheck
import express from "express";

import RideHandler from "./adapters/inbound/handlers/RideHandler";
import PassengerHandler from "./adapters/inbound/handlers/PassengerHandler";

import Database from "./adapters/outbound/database";
import UUID from "./adapters/outbound/uuid";
import DriverHandler from "./adapters/inbound/handlers/DriverHandler";

const router = express();
const db = new Database("localhost", "root", "root", "uber");
const uuid = new UUID();

const rideHandler = new RideHandler(db);
const passengerHandler = new PassengerHandler(db, uuid);
const driverHandler = new DriverHandler(db, uuid);

router.post("/calculate_ride", rideHandler.CalculateRide.bind(rideHandler));
router.post("/passengers", passengerHandler.Create.bind(passengerHandler));
router.post("/drivers", driverHandler.Create.bind(driverHandler));

export default router;
