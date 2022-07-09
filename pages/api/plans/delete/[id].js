import Plans from '../../../../models/Plans';
import dbConnect from '../../../../utils/dbConnect';

dbConnect();

export default async (req, res) => {
  const { method } = req;


  switch (method) {
    case 'POST':
        const { id } = req.params
        try {
            await Plans.remove({_id: id })
            res.send({ message: "Plan deleted successfully" })
        }
        catch (err) {
            console.error(err)
            res.send({ message: "Error deleting plan" })
        }
  }
};
