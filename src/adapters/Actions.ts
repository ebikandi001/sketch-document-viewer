export type Action = { type: string; payload?: any };

export type Dispatch = (action: Action) => void;

export const DOCUMENT_FETCHED = 'documentFetched';
