import React from 'react';
import { Document } from 'domainModels';
import * as appService from 'application';
import { DOCUMENT_FETCHED, NEXT, PREVIOUS, Action, Dispatch } from './actions';

type State = Document & {
  currentArtboard: number;
  showDetails: boolean;
};
type DocumentProviderProps = { children: React.ReactNode };

const initialState: State = {
  shortId: '',
  name: '',
  artboards: [],
  numArtboards: 0,
  currentArtboard: 0,
  showDetails: false,
};
const DocumentStateContext = React.createContext<State | undefined>(undefined);
const DocumentDispatchContext = React.createContext<Dispatch | undefined>(
  undefined
);

const documentReducer = (state: State, action: Action) => {
  switch (action.type) {
    case DOCUMENT_FETCHED:
      return { ...state, ...action.payload };
    case NEXT:
      return {
        ...state,
        currentArtboard: appService.getNextArtboard(action.payload),
      };
    case PREVIOUS:
      return {
        ...state,
        currentArtboard: appService.getPreviousArtboard(action.payload),
      };
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
