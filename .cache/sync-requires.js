const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-template-js": hot(preferDefault(require("/Users/stevenfewster/Development/com.stevenfewster.gatsby/src/templates/blogTemplate.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/stevenfewster/Development/com.stevenfewster.gatsby/.cache/dev-404-page.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/stevenfewster/Development/com.stevenfewster.gatsby/src/pages/about.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/Users/stevenfewster/Development/com.stevenfewster.gatsby/src/pages/blog.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/stevenfewster/Development/com.stevenfewster.gatsby/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/stevenfewster/Development/com.stevenfewster.gatsby/src/pages/index.js")))
}

