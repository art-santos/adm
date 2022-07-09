import Plans from '../../../models/Plans';
import dbConnect from '../../../utils/dbConnect';

dbConnect();

export default async (req, res) => {
  const { method } = req;


  switch (method) {
    case 'GET':
      try {
        const note = await Plans.count();

        if (!note) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: note });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'PUT':
      try {
        const note = await Plans.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!note) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: note });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'DELETE':
      try {
        const deletedNote = await Plans.deleteOne({
          _id: id,
        });

        if (!deletedNote) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
