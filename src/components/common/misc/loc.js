import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { strings } from '../../../common/i18n';

const Loc = ({ text, style }) => <Text style={style}>{strings(text)}</Text>;

Loc.propTypes = {
  text: PropTypes.string.isRequired,
  style: PropTypes.arrayOf(PropTypes.shape({})),
};

Loc.defaultProps = {
  style: null,
};

const mapStateToProps = (state) => ({
  language: state.LanguageSwitcher.get('language'),
});

export default connect(mapStateToProps)(Loc);