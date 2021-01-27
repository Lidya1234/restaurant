//import { page_load } from './page_load.js';
import navbar  from './nav.js'
import header from './header.js'
import footer from './footer.js'
document.body.prepend(navbar());
//document.body.prepend(page_load());
document.body.prepend(header());
document.body.prepend(footer());