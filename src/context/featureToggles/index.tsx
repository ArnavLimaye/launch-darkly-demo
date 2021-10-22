import { asyncWithLDProvider } from 'launchdarkly-react-client-sdk';

export default async function FeatureTogglesContext() {
  console.log('env', process.env.REACT_APP_LAUNCHDARKLY_CLIENT_ID);
  return asyncWithLDProvider({
    clientSideID: process.env.REACT_APP_LAUNCHDARKLY_CLIENT_ID || '',
    options: {
      bootstrap: 'localStorage',
      streaming: false,
    },
    reactOptions: {
      useCamelCaseFlagKeys: false,
    },
  });
}
