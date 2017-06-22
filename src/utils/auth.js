import FireBaseTools from './firebase'

export function loginWithProvider(provider) {
  return FireBaseTools.loginWithProvider(provider);
}

export function requireAuth(nextState, replace) {
    const key = Object.keys(localStorage).find(e => e.match(/firebase:authUser/));
    const data = JSON.parse(localStorage.getItem(key));
    if (data == null) {
        replace({
            pathname: '/',
            state: {
                nextPathname: nextState.location.pathname,
            },
        });
    }
}
