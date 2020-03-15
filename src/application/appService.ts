/**
 * Service with the application's Use-Cases
 */
import { DocumentClient } from './infra';

export const getDocumentById = () => {
  const result = DocumentClient.getDocumentByShortId();
  console.log('** DOCUMENTS! **', result);
}