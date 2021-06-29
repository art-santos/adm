import metatags from '../../../models/Metatags';
import dbConnect from '../../../utils/dbConnect';

dbConnect();

export default async (req, res) => {

  const {
    query: { id },
    method,
  } = req;


  switch (method) {
    case "GET":
      try {
        const note = await metatags.find();

        if (!note) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, items: note });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    }
};

