import React, { useEffect } from 'react';
import { getDocument, useDocumentState, useDocumentDispatch } from 'adapters';
import { DocumentTitle, ThumbnailGrid } from '../components/organisms';
import { Layout } from '../components/templates';

const getNextDocLink = (currentId: string | undefined) => {
  const nextId = ['Y8wDM', '4W43q'].find(id => currentId !== id);
  return `/document/${nextId}`;
};

export const DocumentView = ({
  match: {
    params: { id },
  },
}: any) => {
  const doc = useDocumentState();
  const dispatch = useDocumentDispatch();
  useEffect(() => {
    if (!doc?.shortId || !doc?.shortId !== id) {
      getDocument(id, dispatch);
    }
  }, [id]);

  const nextDocLink = getNextDocLink(doc?.shortId);
  const header = <DocumentTitle text={doc?.name || ''} link={nextDocLink} />;
  const content = <ThumbnailGrid items={doc?.artboards || []} />;

  return <Layout header={header} content={content} />;
};
