/**
 * Service containing the app's Use-Cases
 */
import { documentClient } from './infra';

export const getDocumentById = async (id: string) => {
  const document = await documentClient.getDocumentByShortId(id);
  console.log('[AppService]: getDocumentById', document);
  return document;
};
