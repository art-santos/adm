import Zips from '../../../models/Zips';
import dbConnect from '../../../utils/dbConnect';

dbConnect();

export default async (req, res) => {
    const {
        query: { id },
        method,
      } = req;

    switch (method) { 
        case 'GET':
            try {
                const count = await Zips.count();
                const month = await Zips.find({"date" : {"$gte": new Date(`2021-${id}-01T00:00:00.000Z`), "$lt": new Date(`2021-${id}-30T23:59:59.999Z`)}}).count();
                const day1  = await Zips.find({"date" : {"$gte": new Date(`2021-${id}-01T00:00:00.000Z`), "$lt": new Date(`2021-${id}-01T23:59:59.999Z`)}}).count();
                const day2  = await Zips.find({"date" : {"$gte": new Date(`2021-${id}-02T00:00:00.000Z`), "$lt": new Date(`2021-${id}-02T23:59:59.999Z`)}}).count();
                const day3  = await Zips.find({"date" : {"$gte": new Date(`2021-${id}-03T00:00:00.000Z`), "$lt": new Date(`2021-${id}-03T23:59:59.999Z`)}}).count();
                const day4  = await Zips.find({"date" : {"$gte": new Date(`2021-${id}-04T00:00:00.000Z`), "$lt": new Date(`2021-${id}-04T23:59:59.999Z`)}}).count();
                const day5  = await Zips.find({"date" : {"$gte": new Date(`2021-${id}-05T00:00:00.000Z`), "$lt": new Date(`2021-${id}-05T23:59:59.999Z`)}}).count();
                const day6  = await Zips.find({"date" : {"$gte": new Date(`2021-${id}-06T00:00:00.000Z`), "$lt": new Date(`2021-${id}-06T23:59:59.999Z`)}}).count();
                const day7  = await Zips.find({"date" : {"$gte": new Date(`2021-${id}-07T00:00:00.000Z`), "$lt": new Date(`2021-${id}-07T23:59:59.999Z`)}}).count();
                const day8  = await Zips.find({"date" : {"$gte": new Date(`2021-${id}-08T00:00:00.000Z`), "$lt": new Date(`2021-${id}-08T23:59:59.999Z`)}}).count();
                const day9  = await Zips.find({"date" : {"$gte": new Date(`2021-${id}-09T00:00:00.000Z`), "$lt": new Date(`2021-${id}-09T23:59:59.999Z`)}}).count();
                const day10 = await Zips.find({"date" : {"$gte": new Date(`2021-${id}-10T00:00:00.000Z`), "$lt": new Date(`2021-${id}-10T23:59:59.999Z`)}}).count();
                const day11 = await Zips.find({"date" : {"$gte": new Date(`2021-${id}-11T00:00:00.000Z`), "$lt": new Date(`2021-${id}-11T23:59:59.999Z`)}}).count();
                const day12 = await Zips.find({"date" : {"$gte": new Date(`2021-${id}-12T00:00:00.000Z`), "$lt": new Date(`2021-${id}-12T23:59:59.999Z`)}}).count();
                const day13 = await Zips.find({"date" : {"$gte": new Date(`2021-${id}-13T00:00:00.000Z`), "$lt": new Date(`2021-${id}-13T23:59:59.999Z`)}}).count();
                const day14 = await Zips.find({"date" : {"$gte": new Date(`2021-${id}-14T00:00:00.000Z`), "$lt": new Date(`2021-${id}-14T23:59:59.999Z`)}}).count();
                const day15 = await Zips.find({"date" : {"$gte": new Date(`2021-${id}-15T00:00:00.000Z`), "$lt": new Date(`2021-${id}-15T23:59:59.999Z`)}}).count();
                const day16 = await Zips.find({"date" : {"$gte": new Date(`2021-${id}-16T00:00:00.000Z`), "$lt": new Date(`2021-${id}-16T23:59:59.999Z`)}}).count();
                const day17 = await Zips.find({"date" : {"$gte": new Date(`2021-${id}-17T00:00:00.000Z`), "$lt": new Date(`2021-${id}-17T23:59:59.999Z`)}}).count();
                const day18 = await Zips.find({"date" : {"$gte": new Date(`2021-${id}-18T00:00:00.000Z`), "$lt": new Date(`2021-${id}-18T23:59:59.999Z`)}}).count();
                const day19 = await Zips.find({"date" : {"$gte": new Date(`2021-${id}-19T00:00:00.000Z`), "$lt": new Date(`2021-${id}-19T23:59:59.999Z`)}}).count();
                const day20 = await Zips.find({"date" : {"$gte": new Date(`2021-${id}-20T00:00:00.000Z`), "$lt": new Date(`2021-${id}-20T23:59:59.999Z`)}}).count();
                const day21 = await Zips.find({"date" : {"$gte": new Date(`2021-${id}-21T00:00:00.000Z`), "$lt": new Date(`2021-${id}-21T23:59:59.999Z`)}}).count();
                const day22 = await Zips.find({"date" : {"$gte": new Date(`2021-${id}-22T00:00:00.000Z`), "$lt": new Date(`2021-${id}-22T23:59:59.999Z`)}}).count();
                const day23 = await Zips.find({"date" : {"$gte": new Date(`2021-${id}-23T00:00:00.000Z`), "$lt": new Date(`2021-${id}-23T23:59:59.999Z`)}}).count();
                const day24 = await Zips.find({"date" : {"$gte": new Date(`2021-${id}-24T00:00:00.000Z`), "$lt": new Date(`2021-${id}-24T23:59:59.999Z`)}}).count();
                const day25 = await Zips.find({"date" : {"$gte": new Date(`2021-${id}-25T00:00:00.000Z`), "$lt": new Date(`2021-${id}-25T23:59:59.999Z`)}}).count();
                const day26 = await Zips.find({"date" : {"$gte": new Date(`2021-${id}-26T00:00:00.000Z`), "$lt": new Date(`2021-${id}-26T23:59:59.999Z`)}}).count();
                const day27 = await Zips.find({"date" : {"$gte": new Date(`2021-${id}-27T00:00:00.000Z`), "$lt": new Date(`2021-${id}-27T23:59:59.999Z`)}}).count();
                const day28 = await Zips.find({"date" : {"$gte": new Date(`2021-${id}-28T00:00:00.000Z`), "$lt": new Date(`2021-${id}-28T23:59:59.999Z`)}}).count();
                const day29 = await Zips.find({"date" : {"$gte": new Date(`2021-${id}-29T00:00:00.000Z`), "$lt": new Date(`2021-${id}-29T23:59:59.999Z`)}}).count();
                const day30 = await Zips.find({"date" : {"$gte": new Date(`2021-${id}-30T00:00:00.000Z`), "$lt": new Date(`2021-${id}-30T23:59:59.999Z`)}}).count();
                const day31 = await Zips.find({"date" : {"$gte": new Date(`2021-${id}-31T00:00:00.000Z`), "$lt": new Date(`2021-${id}-31T23:59:59.999Z`)}}).count();
                const internet = await Zips.find({"date" : {"$gte": new Date(`2021-${id}-01T00:00:00.000Z`), "$lt": new Date(`2021-${id}-31T23:59:59.999Z`)}, "plan": "internet"}).count();
                const bundles = await Zips.find({"date" : {"$gte": new Date(`2021-${id}-01T00:00:00.000Z`), "$lt": new Date(`2021-${id}-31T23:59:59.999Z`)}, "plan": "bundles"}).count();
                const video = await Zips.find({"date" : {"$gte": new Date(`2021-${id}-01T00:00:00.000Z`), "$lt": new Date(`2021-${id}-31T23:59:59.999Z`)}, "plan": "video"}).count();
                const mobile = await Zips.find({"date" : {"$gte": new Date(`2021-${id}-01T00:00:00.000Z`), "$lt": new Date(`2021-${id}-31T23:59:59.999Z`)}, "plan": "mobile"}).count();
                const phone = await Zips.find({"date" : {"$gte": new Date(`2021-${id}-01T00:00:00.000Z`), "$lt": new Date(`2021-${id}-31T23:59:59.999Z`)}, "plan": "phone"}).count();

                res.status(200).json({ success: true, 
                    all: count, 
                    month: month, 
                    day1: day1,
                    day2: day2,
                    day3: day3,
                    day4: day4,
                    day5: day5,
                    day6: day6,
                    day7: day7,
                    day8: day8,
                    day9: day9,
                    day10: day10,
                    day11: day11,
                    day12: day12,
                    day13: day13,
                    day14: day14,
                    day15: day15,
                    day16: day16,
                    day17: day17,
                    day18: day18,
                    day19: day19,
                    day20: day20,
                    day21: day21,
                    day22: day22,
                    day23: day23,
                    day24: day24,
                    day25: day25,
                    day26: day26,
                    day27: day27,
                    day28: day28,
                    day29: day29,
                    day30: day30,
                    day31: day31,
                    internet: internet,
                    bundles: bundles,
                    video: video,
                    phone: phone,
                    mobile: mobile,
                })
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'POST':
            try {
                const note = await Cards.create(req.body);

                res.status(201).json({ success: true, data: note })
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }
}