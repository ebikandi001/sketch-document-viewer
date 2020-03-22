import React from 'react';
import { Document } from '../domainModels';

import { DOCUMENT_FETCHED, Action, Dispatch } from './Actions';

type State = Document & {
  // UI related state props would go here
};
type DocumentProviderProps = { children: React.ReactNode };

const initialState: Document = {
  shortId: '',
  name: '',
  artboards: [],
  numArtboards: 0,
};
const DocumentStateContext = React.createContext<State | undefined>(undefined);
const DocumentDispatchContext = React.createContext<Dispatch | undefined>(
  undefined
);

const documentReducer = (state: State, action: Action) => {
  switch (action.type) {
    case DOCUMENT_FETCHED:
      return { ...state, ...action.payload };
    default:
      console.warn(`Unhandled action type: ${action.type}`);
      return state;
  }
};

const DocumentProvider = ({ children }: DocumentProviderProps) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [state, dispatch] = React.useReducer(documentReducer, initialState);

  return (
    <DocumentStateContext.Provider value={state}>
      <DocumentDispatchContext.Provider value={dispatch}>
        {children}
      </DocumentDispatchContext.Provider>
    </DocumentStateContext.Provider>
  );
};

const useDocumentState = () => {
  const context = React.useContext(DocumentStateContext);
  if (context === undefined) {
    console.warn('useDocumentState must be used within a CountProvider');
  }
  return context;
};

const useDocumentDispatch = () => {
  const context = React.useContext(DocumentDispatchContext);
  if (context === undefined) {
    throw new Error('useCountDispatch must be used within a CountProvider');
  }
  return context;
};

export { DocumentProvider, useDocumentState, useDocumentDispatch };
