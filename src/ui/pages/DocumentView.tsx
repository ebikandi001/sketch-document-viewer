import React, { useEffect } from 'react';
import { getDocument, useDocumentState, useDocumentDispatch } from 'adapters';
import { DocumentTitle, ThumbnailGrid } from '../components/organisms';
import { Layout } from '../components/templates';

export const DocumentView = (props: any) => {
  const doc = useDocumentState();
  const dispatch = useDocumentDispatch();
  console.log('DocumentView', doc);
  useEffect(() => {
    if (!doc?.shortId) {
      getDocument('Y8wDM', dispatch);
    }
  }, []);

  const header = <DocumentTitle text={doc?.name || ''} />;
  const content = <ThumbnailGrid items={doc?.artboards || []} />;

  return <Layout header={header} content={content} />;
};
