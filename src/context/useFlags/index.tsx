export default function useFlags() {
  const SHOW_HOME_DIV =
    process.env.REACT_APP_SHOW_HOME_DIV?.toLowerCase() === 'true';
  return { SHOW_HOME_DIV };
}
