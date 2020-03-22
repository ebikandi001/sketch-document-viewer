/*eslint-disable import/first */
jest.mock('../adapters', () => ({
  getDocument: jest.fn(),
  useDocumentState: jest.fn(),
  useDocumentDispatch: jest.fn(),
}));

// Mock dependant components
jest.mock('../ui/components/organisms', () => ({
  DocumentTitle: jest.fn(() => <div data-testid="document__title" />),
  ThumbnailGrid: jest.fn(() => <div data-testid="thumbnail__grid" />),
}));

jest.mock('../ui/components/templates', () => ({
  Layout: jest.fn(props => (
    <div data-testid="layout">
      {props.header}
      {props.content}
    </div>
  )),
}));

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { DocumentView } from '../ui/pages';
import { DocumentTitle, ThumbnailGrid } from '../ui/components/organisms';
import {
  getDocument,
  useDocumentState,
  useDocumentDispatch,
} from '../adapters';

describe('DocumentView', () => {
  // Mock context
  const mockedArtboards = [
    { id: 0, name: 'art-1', picture: 'pic-1' },
    { id: 1, name: 'art-2', picture: 'pic-2' },
  ];
  const mockDocument = {
    shortId: 'mock-id',
    name: 'mock-name',
    artboard: mockedArtboards,
    numArtboards: mockedArtboards.length,
  };
  // cast once
  const mockGetDocument = getDocument as jest.Mock;
  const mockUseDocumentState = useDocumentState as jest.Mock;
  const mockUseDocumentDispatch = useDocumentDispatch as jest.Mock;

  const mockDispatch = jest.fn();

  mockGetDocument.mockImplementation(() => {
    mockDispatch({ payload: mockDocument });
  });
  mockUseDocumentState.mockReturnValue(mockDocument);
  mockUseDocumentDispatch.mockReturnValue(mockDispatch);

  // Mock components (just to caste them once)
  const mockDocumentTitle = DocumentTitle as jest.Mock;
  const mockTumbnailGrid = ThumbnailGrid as jest.Mock;

  // Mock props
  const mockProps = { match: { params: { id: 'mock-id' } } };

  let view: any;

  beforeEach(() => {
    view = render(<DocumentView {...mockProps} />);
  });

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  describe('On mount', () => {
    it('Gets the document and dispatch function from context', () => {
      expect(mockUseDocumentState).toHaveBeenCalled();
      expect(mockUseDocumentDispatch).toHaveBeenCalled();
    });

    it('Tries to fetch the document from the api given the id param', () => {
      expect(mockGetDocument).toHaveBeenCalledWith('mock-id', mockDispatch);
    });
  });

  describe('Render', () => {
    it('Instantiates a header and a content', () => {
      expect(mockDocumentTitle).toHaveBeenCalled();
      expect(mockTumbnailGrid).toHaveBeenCalled();
    });

    it('Returns a Layout', () => {
      const layout = view.queryByTestId('layout');
      expect(layout).toBeTruthy();
    });

    it('The Layout has the header set ', () => {
      const header = view.queryByTestId('document__title');
      expect(header).toBeTruthy();
    });

    it('The Layout has the content set ', () => {
      const content = view.queryByTestId('thumbnail__grid');
      expect(content).toBeTruthy();
    });
  });
});
