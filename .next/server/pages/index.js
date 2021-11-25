"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 371:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: external "react-bootstrap"
const external_react_bootstrap_namespaceObject = require("react-bootstrap");
;// CONCATENATED MODULE: ./components/Navbar.js


const BlogNavbar = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_namespaceObject.Navbar, {
        className: "fj-navbar fj-nav-base",
        bg: "transparent",
        expand: "lg",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_namespaceObject.Navbar.Brand, {
                className: "fj-navbar-brand",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: "#",
                    children: "Jannick Pedersen"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_namespaceObject.Navbar.Toggle, {
                "aria-controls": "basic-navbar-nav"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_namespaceObject.Navbar.Collapse, {
                id: "basic-navbar-nav",
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_namespaceObject.Nav, {
                    className: "ml-auto",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_namespaceObject.Nav.Link, {
                        className: "fj-navbar-item fj-navbar-link",
                        href: "/",
                        children: "Home"
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const Navbar = (BlogNavbar);

;// CONCATENATED MODULE: ./components/PageLayout.js



function PageLayout({ children , className  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_namespaceObject.Container, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `page-wrapper ${className}`,
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("footer", {
                className: "page-footer",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "#",
                            children: "courses"
                        }),
                        ' | ',
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "#",
                            children: "github"
                        }),
                        ' | ',
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "#",
                            children: "facebook"
                        })
                    ]
                })
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./components/AuthorIntro.js


const AuthorIntro = ()=>/*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_namespaceObject.Row, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_namespaceObject.Col, {
            md: "8",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_namespaceObject.Media, {
                className: "mb-4 admin-intro",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_namespaceObject.Image, {
                        roundedCircle: true,
                        width: 64,
                        height: 64,
                        className: "mr-3",
                        src: "https://avatars.githubusercontent.com/JannickPepe",
                        alt: "Generic placeholder"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_namespaceObject.Media.Body, {
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

;// CONCATENATED MODULE: ./components/CardItem.js


// have the title and subtitle as value
const CardItem = ({ title , subtitle  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_namespaceObject.Card, {
        className: `fj-card`,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "card-body-wrapper",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_namespaceObject.Card.Header, {
                        className: "d-flex flex-row",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: 'https://via.placeholder.com/150',
                                className: "rounded-circle mr-3",
                                height: "50px",
                                width: "50px",
                                alt: "avatar"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_namespaceObject.Card.Title, {
                                        className: "font-weight-bold mb-1",
                                        children: "Placeholder Author"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_namespaceObject.Card.Text, {
                                        className: "card-date",
                                        children: "Placeholder Date"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "view overlay",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_namespaceObject.Card.Img, {
                            src: "https://via.placeholder.com/250",
                            alt: "Card image cap"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_namespaceObject.Card.Body, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_namespaceObject.Card.Title, {
                                className: "card-main-title",
                                children: title
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_namespaceObject.Card.Text, {
                                children: subtitle
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                className: "card-button",
                children: "Read More"
            })
        ]
    }));
};
/* harmony default export */ const components_CardItem = (CardItem);

;// CONCATENATED MODULE: ./components/CardListItem.js


const CardListItem = ()=>{
    return(/*#__PURE__*/ _jsxs(Card, {
        className: `fj-card fj-card-list`,
        children: [
            /*#__PURE__*/ _jsxs("div", {
                className: "card-body-wrapper",
                children: [
                    /*#__PURE__*/ _jsxs(Card.Header, {
                        className: "d-flex flex-row",
                        children: [
                            /*#__PURE__*/ _jsx("img", {
                                src: 'https://via.placeholder.com/150',
                                className: "rounded-circle mr-3",
                                height: "50px",
                                width: "50px",
                                alt: "avatar"
                            }),
                            /*#__PURE__*/ _jsxs("div", {
                                children: [
                                    /*#__PURE__*/ _jsx(Card.Title, {
                                        className: "font-weight-bold mb-1",
                                        children: "Placeholder Author"
                                    }),
                                    /*#__PURE__*/ _jsx(Card.Text, {
                                        className: "card-date",
                                        children: "Placeholder Date"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs(Card.Body, {
                        children: [
                            /*#__PURE__*/ _jsx(Card.Title, {
                                className: "card-main-title",
                                children: "Placeholder Title"
                            }),
                            /*#__PURE__*/ _jsx(Card.Text, {
                                children: "Placehodler Subtitle"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ _jsx("a", {
                href: "#",
                className: "card-button",
                children: "Read More"
            })
        ]
    }));
};
/* harmony default export */ const components_CardListItem = ((/* unused pure expression or super */ null && (CardListItem)));

;// CONCATENATED MODULE: external "@sanity/client"
const client_namespaceObject = require("@sanity/client");
var client_default = /*#__PURE__*/__webpack_require__.n(client_namespaceObject);
;// CONCATENATED MODULE: ./lib/sanity.js

// for access the env 
const options = {
    dataset: process.env.SANITY_DATASET_NAME,
    projectId: process.env.SANITY_PROJECT_ID,
    useCdn: "production" === 'production'
};
/* harmony default export */ const sanity = (client_default()(options));

;// CONCATENATED MODULE: ./lib/api.js

// define what we will like to fetch 
const blogFields = `
    title,
    subtitle,
    'slug': slug.current
`;
// when returning block results only show the array type blog with the specific values with blogfields
async function getAllBlogs() {
    const results = await sanity.fetch(`*[_type == "blog"]{${blogFields}}`);
    return results;
}

;// CONCATENATED MODULE: ./pages/index.js








// Iterate over the blogs and map the blog
function Home({ blogs , randomNumber  }) {
    console.log('Hello World');
    (0,external_react_.useEffect)(()=>{
        console.log(blogs);
    });
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(PageLayout, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_AuthorIntro, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("hr", {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: randomNumber
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_namespaceObject.Row, {
                className: "mb-5",
                children: blogs.map((blog)=>/*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_namespaceObject.Col, {
                        md: "4",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(components_CardItem, {
                            title: blog.title,
                            subtitle: blog.subtitle
                        })
                    }, blog.slug)
                )
            })
        ]
    }));
};
// This function is called during the build (build-time)
// Provides props to your page and It will create static page
async function getStaticProps() {
    const randomNumber = Math.random();
    const blogs = await getAllBlogs();
    return {
        props: {
            blogs,
            randomNumber
        }
    };
} // export async function getServerSideProps() {
 //   const randomNumber = Math.random();
 //   const blogs = await getAllBlogs();
 //   return {
 //     props: {
 //       blogs,
 //       randomNumber
 //     }
 //   }
 // }
 // Static Page
 // Faster, can be cached using CDN
 // Created at build time
 // When we making the request we are always receiving the same html document
 // Dynamic Page
 // Created at request time (we can fetch data on server)
 // Little bit slower, the time depends on data you are fetching


/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(371));
module.exports = __webpack_exports__;

})();