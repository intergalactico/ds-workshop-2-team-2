import React from 'react';
import { node, arrayOf } from 'prop-types';

const Form = ({ children, ...props }) => <form {...props}>{children}</form>;

Form.propTypes = {
    children: arrayOf(node)
};

export default Form;
