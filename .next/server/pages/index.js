"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 2213:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "BlogList": () => (/* binding */ BlogList),
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
// EXTERNAL MODULE: ./components/PageLayout.js + 2 modules
var PageLayout = __webpack_require__(6281);
;// CONCATENATED MODULE: ./components/AuthorIntro.js


const AuthorIntro = ()=>/*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Row, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
            md: "8",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Media, {
                className: "mb-4 admin-intro",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Image, {
                        roundedCircle: true,
                        width: 64,
                        height: 64,
                        className: "mr-3",
                        src: "https://avatars.githubusercontent.com/JannickPepe",
                        alt: "Generic placeholder"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Media.Body, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                className: "font-weight-bold mb-0",
                                children: "Hello Friends,"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "welcome-text",
                                children: "My name is Jannick Pedersen and I do paid Udemey courses here and there."
                            })
                        ]
                    })
                ]
            })
        })
    })
;
/* harmony default export */ const components_AuthorIntro = (AuthorIntro);

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(7197);
;// CONCATENATED MODULE: ./components/FilteringMenu.js


const LIST_VIEW_ICONS = [
    'list',
    'border-all'
];
const DATE_FILTERING_ICONS = [
    'sort-numeric-down',
    'sort-numeric-up'
];
const FilteringMenu = ({ onChange , filter  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "filtering-menu mb-2",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                className: "clickable hoverable mr-3",
                size: "2x",
                icon: LIST_VIEW_ICONS[filter.view.list],
                onClick: ()=>onChange('view', {
                        list: +!filter.view.list
                    })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                className: "clickable hoverable",
                size: "2x",
                icon: DATE_FILTERING_ICONS[filter.date.asc],
                onClick: ()=>onChange('date', {
                        asc: +!filter.date.asc
                    })
            })
        ]
    }));
};
/* harmony default export */ const components_FilteringMenu = (FilteringMenu);

// EXTERNAL MODULE: ./components/PreviewAlert.js
var PreviewAlert = __webpack_require__(3407);
;// CONCATENATED MODULE: external "swr/infinite"
const infinite_namespaceObject = require("swr/infinite");
var infinite_default = /*#__PURE__*/__webpack_require__.n(infinite_namespaceObject);
;// CONCATENATED MODULE: external "swr"
const external_swr_namespaceObject = require("swr");
;// CONCATENATED MODULE: ./actions/index.js

// we create the fetcher function so the SWR function can be more usable
const fetcher = (url)=>fetch(url).then((res)=>res.json()
    )
;
// create the useGetHello arrow function witht the useSWR function with the path string and fether function values
const useGetHello = ()=>useSWR('../api/hello', fetcher)
;
// for the new useSWR
const getBlogs = (url)=>{
    return fetcher(url);
};
const useGetBlogs = (initialData)=>{
    return useSWR(`../api/blogs`, fetcher, {
        fallbackData: initialData
    });
};

;// CONCATENATED MODULE: ./actions/pagination.js


const useGetBlogsPages = ({ filter  })=>{
    const result = infinite_default()((index, previousPageData)=>{
        if (index === 0) {
            return `/api/blogs?date=${filter.date.asc ? 'asc' : 'desc'}`;
        }
        if (!previousPageData.length) {
            return null;
        }
        return `/api/blogs?offset=${index * 3}&date=${filter.date.asc ? 'asc' : 'desc'}`;
    }, getBlogs);
    let hitEnd = false;
    const { data  } = result;
    if (data) {
        hitEnd = data[data.length - 1].length === 0;
    }
    return {
        ...result,
        hitEnd
    };
};

// EXTERNAL MODULE: ./lib/api.js + 1 modules
var api = __webpack_require__(4282);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/CardItem.js




// have the CardItem object which have the props
const CardItem = ({ title , subtitle , image , date , author , link , mode ='normal'  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Card, {
        className: `fj-card ${mode}`,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `card-body-wrapper ${!image ? 'no-image' : ''}`,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Card.Header, {
                        className: "d-flex flex-row",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: (author === null || author === void 0 ? void 0 : author.avatar) || 'https://via.placeholder.com/150',
                                className: "rounded-circle mr-3",
                                height: "50px",
                                width: "50px",
                                alt: "avatar"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: mode === 'placeholder' ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Card.Title, {
                                            className: "font-weight-bold mb-1",
                                            children: "Placeholder Title"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Card.Text, {
                                            className: "card-date",
                                            children: "Placeholder Date"
                                        })
                                    ]
                                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Card.Title, {
                                            className: "font-weight-bold mb-1",
                                            children: author === null || author === void 0 ? void 0 : author.name
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Card.Text, {
                                            className: "card-date",
                                            children: date
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "view overlay",
                        children: mode === 'placeholder' ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "image-placeholder"
                        }) : image && /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Card.Img, {
                            src: (0,api/* urlFor */.uH)(image).height(300).crop('center').fit('clip').url(),
                            alt: "Card image cap"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Card.Body, {
                        children: mode === 'placeholder' ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Card.Title, {
                                    className: "card-main-title",
                                    children: "Placeholder Title"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Card.Text, {
                                    children: "Placeholder Subtitle"
                                })
                            ]
                        }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Card.Title, {
                                    className: "card-main-title",
                                    children: title
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Card.Text, {
                                    children: subtitle
                                })
                            ]
                        })
                    })
                ]
            }),
            link && /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                ...link,
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: "card-button",
                    children: "Read More"
                })
            })
        ]
    }));
};
/* harmony default export */ const components_CardItem = (CardItem);

;// CONCATENATED MODULE: ./components/CardListItem.js



// have the method CardListItem which the given values
const CardListItem = ({ title , subtitle , author , link , date , mode ='normal'  })=>{
    // Have to return to show the card class, then the card.Header prop and the other props with the given html tags
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Card, {
        className: `fj-card fj-card-list ${mode}`,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "card-body-wrapper",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Card.Header, {
                        className: "d-flex flex-row",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: (author === null || author === void 0 ? void 0 : author.avatar) || 'https://via.placeholder.com/150',
                                className: "rounded-circle mr-3",
                                height: "50px",
                                width: "50px",
                                alt: "avatar"
                            }),
                            mode === 'placeholder' ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Card.Title, {
                                        className: "font-weight-bold mb-1",
                                        children: "Placeholder Author"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Card.Text, {
                                        className: "card-date",
                                        children: "Placeholder Date"
                                    })
                                ]
                            }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Card.Title, {
                                        className: "font-weight-bold mb-1",
                                        children: author === null || author === void 0 ? void 0 : author.name
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Card.Text, {
                                        className: "card-date",
                                        children: date
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Card.Body, {
                        children: mode === 'placeholder' ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Card.Title, {
                                    className: "card-main-title",
                                    children: "Placeholder Title"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Card.Text, {
                                    children: "Placeholder Subtitle"
                                })
                            ]
                        }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Card.Title, {
                                    className: "card-main-title",
                                    children: title
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Card.Text, {
                                    children: subtitle
                                })
                            ]
                        })
                    })
                ]
            }),
            link && /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                ...link,
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: "card-button",
                    children: "Read More"
                })
            })
        ]
    }));
};
/* harmony default export */ const components_CardListItem = (CardListItem);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(2245);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);
;// CONCATENATED MODULE: ./pages/index.js













const BlogList = ({ data =[] , filter  })=>{
    return data.map((page)=>page.map((blog)=>filter.view.list ? /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                md: "9",
                children: /*#__PURE__*/ jsx_runtime_.jsx(components_CardListItem, {
                    author: blog.author,
                    title: blog.title,
                    subtitle: blog.subtitle,
                    date: external_moment_default()(blog.date).format('LL'),
                    link: {
                        href: '/blogs/[slug]',
                        as: `/blogs/${blog.slug}`
                    }
                })
            }, `${blog.slug}-list`) : /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                lg: "4",
                md: "6",
                children: /*#__PURE__*/ jsx_runtime_.jsx(components_CardItem, {
                    author: blog.author,
                    title: blog.title,
                    subtitle: blog.subtitle,
                    date: external_moment_default()(blog.date).format('LL'),
                    image: blog.coverImage,
                    link: {
                        href: '/blogs/[slug]',
                        as: `/blogs/${blog.slug}`
                    }
                })
            }, blog.slug)
        )
    );
};
// Iterate over the blogs and map the blog
function Home({ blogs , preview  }) {
    const { 0: filter , 1: setFilter  } = (0,external_react_.useState)({
        view: {
            list: 0
        },
        date: {
            asc: 0
        }
    });
    const { data , size , setSize , hitEnd  } = useGetBlogsPages({
        filter
    });
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(PageLayout/* default */.Z, {
        children: [
            preview && /*#__PURE__*/ jsx_runtime_.jsx(PreviewAlert/* default */.Z, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_AuthorIntro, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_FilteringMenu, {
                filter: filter,
                onChange: (option, value)=>setFilter({
                        ...filter,
                        [option]: value
                    })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("hr", {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Row, {
                className: "mb-5",
                children: /*#__PURE__*/ jsx_runtime_.jsx(BlogList, {
                    data: data || [
                        blogs
                    ],
                    filter: filter
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                style: {
                    textAlign: 'center'
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Button, {
                    onClick: ()=>{
                        debugger;
                        setSize(size + 1);
                    },
                    disabled: hitEnd,
                    size: "lg",
                    variant: "outline-secondary",
                    children: "Load More"
                })
            })
        ]
    }));
};
;
//
async function getStaticProps({ preview =false  }) {
    const blogs = await (0,api/* getPaginatedBlogs */.sO)({
        offset: 0,
        date: 'desc'
    });
    return {
        props: {
            blogs,
            preview
        }
    };
}
;


/***/ }),

/***/ 7197:
/***/ ((module) => {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ 1097:
/***/ ((module) => {

module.exports = require("@sanity/client");

/***/ }),

/***/ 1791:
/***/ ((module) => {

module.exports = require("@sanity/image-url");

/***/ }),

/***/ 2245:
/***/ ((module) => {

module.exports = require("moment");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 358:
/***/ ((module) => {

module.exports = require("react-bootstrap");

/***/ }),

/***/ 7938:
/***/ ((module) => {

module.exports = require("react-toggle");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9816:
/***/ ((module) => {

module.exports = require("styled-jsx/style");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,348,125], () => (__webpack_exec__(2213)));
module.exports = __webpack_exports__;

})();