import Plans from '../../../models/Plans';
import dbConnect from '../../../utils/dbConnect';

dbConnect();

export default async (req, res) => {
  const { method } = req;


  switch (method) {
    case 'GET':
      try {
        const plans = await Plans.find({}, ['id', 'name', 'image', 'provider', 'price', 'speed', 'relevance', 'caps', 'tel', 'link', 'type', 'is_business'])
        res.send({ plans })
    }
    catch (err) {
        console.error(err)
        res.send({ message: "Error getting plans" })
    }
      break;
    
  }
};
