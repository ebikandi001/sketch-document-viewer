import React from 'react';
import {
  useDocumentState,
  useDocumentDispatch,
  SET_CURRENT_ARTBOARD,
} from 'adapters';
import { NavigationBar, ArtboardDetail } from '../components/organisms';
import { Layout } from '../components/templates';

export const ArtboardView = ({
  match: {
    params: { id },
  },
}: any) => {
  const doc = useDocumentState();
  const dispatch = useDocumentDispatch();
  dispatch({ type: SET_CURRENT_ARTBOARD, payload: id });

  const currentArtboard = doc?.artboards[id];

  const NavigationBarProps = {
    onClose: () => console.log('close'),
    goPrev: () => console.log('goPrev'),
    goNext: () => console.log('goNext'),
    text: currentArtboard?.name || '',
  };

  const header = <NavigationBar {...NavigationBarProps} />;
  const content = <ArtboardDetail {...(currentArtboard?.picture as any)} />;

  return <Layout header={header} content={content} />;
};
