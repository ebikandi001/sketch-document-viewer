import React from 'react';
import { useDocumentState } from 'adapters';
import { NavigationBar, ArtboardDetail } from '../components/organisms';
import { Layout } from '../components/templates';

export const ArtboardView = ({
  match: {
    params: { id },
  },
}: any) => {
  const doc = useDocumentState();
  const currentId = Number(id);

  const currentArtboard = doc?.artboards[currentId];
  const numArtboards = doc?.numArtboards || 0;
  const prevId = currentId === 0 ? numArtboards - 1 : currentId - 1;
  const nextId = currentId === numArtboards - 1 ? 0 : currentId + 1;

  const NavigationBarProps = {
    closeRoute: `/document/${doc?.shortId}`,
    goPrevRoute: `/artboard/${prevId}`,
    goNextRoute: `/artboard/${nextId}`,
    text: currentArtboard?.name || '',
    current: currentId + 1,
    total: numArtboards,
  };

  const header = <NavigationBar {...NavigationBarProps} />;
  const content = <ArtboardDetail {...(currentArtboard?.picture as any)} />;

  return <Layout header={header} content={content} />;
};
