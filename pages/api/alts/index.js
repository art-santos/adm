import alts from '../../../models/Alts';
import dbConnect from '../../../utils/dbConnect';

dbConnect();

export default async (req, res) => {
  const { method } = req;


  switch (method) {
    case "GET":
      try {
        const note = await alts.find();

        if (!note) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, items: note });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
};

