import React from 'react';
import PropTypes from 'prop-types';
import './Link.css';

const Link = (props) => {
  let className = `link link--${props.theme}-theme`;

  if (!props.underline) className += ' link--no-underline';

  return <a href={props.href} className={className}>{props.children}</a>;
};

Link.propTypes = {
  theme: PropTypes.oneOf([
    'default', // primary color, no underline
    'blend', // inherit surrounding styles
    'primary-button', // primary color, solid block
  ]),
  underline: PropTypes.bool,
  href: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
    PropTypes.string,
  ]).isRequired,
};

Link.defaultProps = {
  theme: 'default',
  underline: false,
};

export default Link;


/*
How to use

Just like HTML’s binary attributes, you don’t need to do underline={true}

1.<Link href="www.google.com">Link</Link><br />
2.<Link href="www.google.com" underline>Link</Link><br />
3.<Link href="www.google.com" theme="blend">Link</Link><br />
4.<Link href="www.google.com" theme="primary-button">Link</Link>

*/
