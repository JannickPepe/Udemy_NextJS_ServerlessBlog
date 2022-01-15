
import { library, config } from '@fortawesome/fontawesome-svg-core'; // setup config
import {
    faBorderAll,
    faList,
    faSortNumericDown,
    faSortNumericUp } from '@fortawesome/free-solid-svg-icons'; // icons you want to import

// add the imported icons
config.autoAddCss = false;
library.add(faList, faBorderAll, faSortNumericDown, faSortNumericUp);

import '@fortawesome/fontawesome-svg-core/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'highlight.js/styles/darcula.css';
import '../styles/index.scss';

export default ({Component, pageProps}) => <Component {...pageProps} />