/**
 * Service with the application's Use-Cases
 */
import { DocumentClient } from './infra';

export const getDocumentById = async () => {
  const document = await DocumentClient.getDocumentByShortId()
  console.log('[AppService]: getDocumentById', document);
}