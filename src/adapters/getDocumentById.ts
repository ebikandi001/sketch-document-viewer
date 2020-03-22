import { getDocumentById } from '../application';
import { DOCUMENT_FETCHED, Dispatch } from './Actions';

export const getDocument = async (documentId: string, dispatch: Dispatch) => {
  const fetchedDocument = await getDocumentById(documentId);
  dispatch({ type: DOCUMENT_FETCHED, payload: fetchedDocument });
};
