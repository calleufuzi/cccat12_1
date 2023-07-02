// @ts-nocheck
export default class RideHandler {
    private db

    constructor(db) {
        this.db = db;
    }

    CalculateRide(req, res) {
        try {
            const ride = new Ride();
            for (const segment of req.body.segments) {
                ride.addSegment(segment.distance, new Date(segment.date));
            }
            const price = ride.calculate();
            res.json({price});
        } catch (e) {
            res.status(422).send(e.message);
        }
    }
}