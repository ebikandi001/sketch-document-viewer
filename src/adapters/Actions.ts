export type Action = { type: string; payload?: any };

export type Dispatch = (action: Action) => void;

export const GET_DOCUMENT_BY_ID = 'getDocumentById';

export const DOCUMENT_FETCHED = 'documentFetched';

export const SET_CURRENT_ARTBOARD = 'setCurrentArtboard';
