import Plans from '../../../models/Plans';
import dbConnect from '../../../utils/dbConnect';

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case 'GET':
        const { zip, image, provider, name, caps, relevance, price, speed, tel, link} = req.body

        const plan = new Plans({
            tel,
            zip,
            caps,
            provider,
            image,
            name,
            relevance,
            price,
            speed,
            link
        })
        try {
            plan.save()
            res.send({ message: "Plan created successfully", plan: plan }, 200)
        }
        catch (err) {
            console.error(err)
            res.send({ message: "Error creating plan" })
        }
  }
};
