import Plans from '../../../../models/Plans';
import dbConnect from '../../../../utils/dbConnect';

dbConnect();

export default async (req, res) => {
  const { method } = req;


  switch (method) {
    case 'PUT':
        const { id } = req.params
        const { image, provider, name, caps, relevance, price, speed, tel, link} = req.body
        //update mongo plan
        try {
            const plan = await Plans.findByIdAndUpdate(id, {
                image,
                provider,
                name,
                caps,
                relevance,
                price,
                speed,
                tel,
                link
            }).select('id name image provider price speed relevance caps tel link')
            res.send({ message: "Plan updated successfully", plan })
        }
        catch (err) {
            console.error(err)
            res.send({ message: "Error updating plan" })
        }
    }
};
