import { sendToCloud } from "./sendToCloud";

export async function sendToMongo(files){
  const res = await sendToCloud(files);
  return (res.url)
}

export default sendToMongo;