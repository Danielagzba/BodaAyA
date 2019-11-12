import { extend } from 'vee-validate';

extend('required', {
  validate: value => !!value,
  message() {
    // You might want to generate a more complex message with this function.
    return 'This field is required';
  }
});
