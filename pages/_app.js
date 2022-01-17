
import ThemeProvider from '../providers/ThemeProvider';
import { library, config } from '@fortawesome/fontawesome-svg-core'; // setup config
import {
    faSun,
    faMoon,
    faBorderAll,
    faList,
    faSortNumericDown,
    faSortNumericUp } from '@fortawesome/free-solid-svg-icons'; // icons you want to import

// add the imported icons
config.autoAddCss = false;
library.add(
    faSun,
    faMoon,
    faList,
    faBorderAll,
    faSortNumericDown,
    faSortNumericUp);

import '@fortawesome/fontawesome-svg-core/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'highlight.js/styles/darcula.css';
import "react-toggle/style.css";
import '../styles/index.scss';

export default ({Component, pageProps}) =>
    <ThemeProvider>
        <Component {...pageProps} />
    </ThemeProvider>