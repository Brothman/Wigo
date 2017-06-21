function requireAuth() {
    const key = Object.keys(localStorage).find(e => e.match(/firebase:authUser/));
    const data = JSON.parse(localStorage.getItem(key));
    if (data == null) {
        /*replace({
            pathname: '/login',
            state: {
                nextPathname: nextState.location.pathname, */
                return true;
            }
}

module.exports = requireAuth;
