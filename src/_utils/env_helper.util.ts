export default function envHelper() {
  switch (process.env.NODE_ENV) {
    case 'development':
      return '.env.development.local';
    case 'local':
      return '.env.local';
    case 'production':
      return '.env.production.local';
    case 'test':
      return '.env.test.local';
  }
}
