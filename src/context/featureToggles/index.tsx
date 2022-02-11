import { asyncWithLDProvider } from 'launchdarkly-react-client-sdk';
import getUserData from '../authentication';

export default async function FeatureTogglesContext() {
  console.log('env', process.env.REACT_APP_LAUNCHDARKLY_CLIENT_ID);
  const { id, name, email } = getUserData();
  return asyncWithLDProvider({
    clientSideID: process.env.REACT_APP_LAUNCHDARKLY_CLIENT_ID || '',
    options: {
      bootstrap: 'localStorage',
      streaming: false,
    },
    reactOptions: {
      useCamelCaseFlagKeys: false,
    },
    user: {
      name,
      email,
      key: id,
    },
  });
}
