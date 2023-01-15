import respond from './respond'

interface IRequest {
  postData: {
    contents: string;
  }
}

export function doPost(req: IRequest) {
  console.info(req);
  const status = { success: false };
  if (!req.postData.contents) {
    console.error("Erreur : pas de données", req.postData.contents);
    return respond(status);
  }
  /* get and parse JSON from request '\n' to be escaped before parsing */
  const cleanedDataString = String(req.postData.contents).replace(new RegExp('\n', 'g'), '');
  const data = JSON.parse(cleanedDataString);
  return respond({ success: true, data })
}
