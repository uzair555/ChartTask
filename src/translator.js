import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {withLocalize} from 'react-localize-redux';

import englishTranslation from './translations/en.json';
import somaliTranslation from './translations/so.json';

const Translator = ({
  children,
  addTranslationForLanguage,
  setActiveLanguage,
}) => {
  useEffect(() => {
    addTranslationForLanguage(englishTranslation, 'en');
    addTranslationForLanguage(somaliTranslation, 'so');
    setActiveLanguage('so');
  }, []);

  return children;
};

export default withLocalize(Translator);