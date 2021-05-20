import React from 'react';

function ScrollToTop({ children, location }) {
    React.useEffect(() => window.scrollTo(0, 0), [location.pathname])
    return children;
  }


export default ScrollToTop;

// import {useRef} from 'react';

// function useScrollToTop() {
//   const ref = useRef();
//   const {current} = ref;
//   if (current) current.scrollIntoView({alignToTop: true});
//   return ref;
// }

// export default useScrollToTop;