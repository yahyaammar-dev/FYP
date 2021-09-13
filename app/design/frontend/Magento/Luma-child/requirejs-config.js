/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */


var config = {
    shim:{
        bootstrap: {
            deps: ['jquery', 'popper','popperm']
        },
        owlcarousel: {
            deps: ['jquery']
        }
    },
    map: {
        '*': {
            bootstrap: 'js/bootstrap.min',
            popper: 'js/popper.min',
            popperm: 'js/popper',
            abc:   'Magento_Theme/js/theme',
            owlcarousel: 'js/owl.carousel'
        }
    }
};
