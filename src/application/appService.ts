/**
 * Service containing the app's Use-Cases
 */
import { documentClient } from './infra';

export const getDocumentById = async (id: string) => {
  const document = await documentClient.getDocumentByShortId(id);
  console.log('[AppService]: getDocumentById', document);
  return document;
};

export const getNextArtboard = (artboardId: number) => {
  return documentClient.getNextArtboard(artboardId);
};

export const getPreviousArtboard = (artboardId: number) => {
  return documentClient.getPreviousArtboard(artboardId);
};
