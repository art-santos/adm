import Providers from '../../../models/Providers';
import dbConnect from '../../../utils/dbConnect';

dbConnect();

export default async (req, res) => {
    const { method } = req;

    switch (method) {  
        case 'GET':
            try {
                const cards = await Providers.find().sort({"relevance": 1});
                res.status(200).json({ success: true, data: cards})
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'POST':
            try {
                const note = await Providers.create(req.body);

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