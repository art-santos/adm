import Plans from '../../../../../models/Plans';
import dbConnect from '../../../../../utils/dbConnect';

dbConnect();

export default async (req, res) => {
  const { method } = req;


  switch (method) {
    case 'PUT':
        const { id } = req.params
        const { relevance } = req.body
        try {
            const plan = await Plans.findByIdAndUpdate(id, {
                relevance,
            }).select('id name relevance')
            res.send({ message: "Relevance updated successfully", plan })
        }
        catch (err) {
            console.error(err)
            res.send({ message: "Error updating plan" })
        }
}
};
