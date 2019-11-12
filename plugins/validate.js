import { extend } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';

// Add the required rule
extend('name', required);

// Add the email rule
extend('email', email);

extend('message', message);

