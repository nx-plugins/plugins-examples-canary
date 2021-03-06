import React from 'react';
import './styles.css';
import { TranslateContextProvider } from '@nx-plugins/i18n-react';
import { Inbox } from './inbox';
var messagesEn = require('../i18n/messages.en.json');

function CustomApp( ) {
  const config = {
    locales: ["en","es"],
    current: "en",
    messages: { "en": messagesEn}
  }

  return (
    <>
      {/* <Plural value={'paragraph | description@@@inboxPlural'}>
      Este es nuevo
    </Plural> */}
    
      <TranslateContextProvider config={config}>
        <Inbox/>
      </TranslateContextProvider>
    </>
  );
}

export default CustomApp;
