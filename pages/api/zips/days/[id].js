import Zips from '../../../../models/Zips';
import dbConnect from '../../../../utils/dbConnect';

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
                const january = await Zips.find({"date" : {"$gte": new Date(`2021-01-01T00:00:00.000Z`), "$lt": new Date(`2021-01-31T23:59:59.999Z`)}}).count();
                const february = await Zips.find({"date" : {"$gte": new Date(`2021-02-01T00:00:00.000Z`), "$lt": new Date(`2021-02-31T23:59:59.999Z`)}}).count();
                const march = await Zips.find({"date" : {"$gte": new Date(`2021-03-01T00:00:00.000Z`), "$lt": new Date(`2021-03-31T23:59:59.999Z`)}}).count();
                const april = await Zips.find({"date" : {"$gte": new Date(`2021-04-01T00:00:00.000Z`), "$lt": new Date(`2021-04-31T23:59:59.999Z`)}}).count();
                const may = await Zips.find({"date" : {"$gte": new Date(`2021-05-01T00:00:00.000Z`), "$lt": new Date(`2021-05-31T23:59:59.999Z`)}}).count();
                const june = await Zips.find({"date" : {"$gte": new Date(`2021-06-01T00:00:00.000Z`), "$lt": new Date(`2021-06-31T23:59:59.999Z`)}}).count();
                const july = await Zips.find({"date" : {"$gte": new Date(`2021-07-01T00:00:00.000Z`), "$lt": new Date(`2021-07-31T23:59:59.999Z`)}}).count();
                const august = await Zips.find({"date" : {"$gte": new Date(`2021-08-01T00:00:00.000Z`), "$lt": new Date(`2021-08-31T23:59:59.999Z`)}}).count();
                const september = await Zips.find({"date" : {"$gte": new Date(`2021-09-01T00:00:00.000Z`), "$lt": new Date(`2021-09-31T23:59:59.999Z`)}}).count();
                const october = await Zips.find({"date" : {"$gte": new Date(`2021-10-01T00:00:00.000Z`), "$lt": new Date(`2021-10-31T23:59:59.999Z`)}}).count();
                const november = await Zips.find({"date" : {"$gte": new Date(`2021-11-01T00:00:00.000Z`), "$lt": new Date(`2021-11-31T23:59:59.999Z`)}}).count();
                const december = await Zips.find({"date" : {"$gte": new Date(`2021-12-01T00:00:00.000Z`), "$lt": new Date(`2021-12-31T23:59:59.999Z`)}}).count();
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
                    total: count,
                    month: month,
                    months:[
                    {month: january},
                    {month: february},
                    {month: march},
                    {month: april},
                    {month: may},
                    {month: june},
                    {month: july},
                    {month: august},
                    {month: september},
                    {month: october},
                    {month: november}, 
                    {month: december}
                    ],
                    day: [ 
                    {day: day1},
                    {day: day2},
                    {day: day3},
                    {day: day4},
                    {day: day5},
                    {day: day6},
                    {day: day7},
                    {day: day8},
                    {day: day9},
                    {day: day10},
                    {day: day11},
                    {day: day12},
                    {day: day13},
                    {day: day14},
                    {day: day15},
                    {day: day16},
                    {day: day17},
                    {day: day18},
                    {day: day19},
                    {day: day20},
                    {day: day21},
                    {day: day22},
                    {day: day23},
                    {day: day24},
                    {day: day25},
                    {day: day26},
                    {day: day27},
                    {day: day28},
                    {day: day29},
                    {day: day30},
                    {day: day31},
                    ],
                    plans: [
                        {internet: internet},
                        {bundles: bundles},
                        {video: video},
                        {mobile: mobile},
                        {phone: phone}
                    ]
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