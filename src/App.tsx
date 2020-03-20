import React from 'react';
import './App.css';
import styled from 'styled-components';

import { Thumbnail, CloseButton, Navigation } from './ui/components/molecules';

import {
  ArtboardDetailBar,
  DocumentTitle,
  ThumbnailGrid,
} from './ui/components/organisms';

import { Layout } from './ui/components/templates';

import { getDocumentById } from 'application';

function App() {
  const artBoardProps = {
    image: {
      src:
        'https://resources-live.sketch.cloud/files/abbb4734-7963-414c-8f09-108988579905.png?Expires=1584752400&Signature=jFgkYoWdqJTCjOL06JPjMKPTM8JrZHtkmBMvSNgUOMzndRvCOU0371-kocks3cN73GHb2W4A7lBvlBpFm1V3pezhILbKpfDbLkmhLKgNRS9wRMbLHE3sJk3Vxv50vGqkkUrSj10hBk9b~QdiXMgP2mhCNAD5KFQ07yRbOTzKSec_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA',
      onClick: (e: any) => console.log('thumbnail cliked', e),
    },
    label: {
      isBold: true,
      text: 'aupa hi!!',
    },
  };

  // const artboardDetailBarProps = {
  //   onClose: () => console.log('close'),
  //   goPrev: () => console.log('goPrev'),
  //   goNext: () => console.log('goNext'),
  //   text: 'TUPE',
  // };

  const AppContainer = styled.div`
    background-color: rgb(33, 33, 33);
    height: 100vh;
    display: flex;
    align-items: center;
  `;

  return (
    <AppContainer className="App">
      {/* <Thumbnail {...artBoardProps} /> */}
      {/* <Navigation goPrev={true} goNext={true} /> */}
      {/* <DocumentTitle /> */}
      {/* <CloseButton onClose={true} /> */}
      {/* <ArtboardDetailBar {...artboardDetailBarProps} /> */}
      {/* <ThumbnailGrid items={result.map((elem: any) => artBoardProps)} /> */}
      <Layout />
    </AppContainer>
  );
}

export default App;
