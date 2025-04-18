const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vers": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-unnecessary-type-constraint": "off",
      "@typescript-eslint/no-wrapper-object-type": "off",
      "@typescript-eslint/no-unsafe-function-type": "off",
    }
  }
];



if we still getting some error 
try
deleting 
client\node_modules 
and client\package-lock.json 
and reinstalling it

or some how fix the error 

util you see 
"""""""""""
PS G:\Projects\EdRoh 24 Feb 2025 3 - Copy\client> npm run build

> my-app@0.1.0 build
> next build

   ▲ Next.js 15.1.6
   - Environments: .env

   Creating an optimized production build ...
 ✓ Compiled successfully
 ✓ Linting and checking validity of types
 ✓ Collecting page data    
from nav undefined
 ✓ Generating static pages (15/15)
 ✓ Collecting build traces    
 ✓ Finalizing page optimization

Route (app)                              Size     First Load JS
┌ ○ /                                    3.19 kB         266 kB
├ ○ /_not-found                          990 B           107 kB
├ ○ /landing                             5.34 kB         183 kB
├ ○ /managers/applications               7.07 kB         196 kB
├ ○ /managers/newproperty                1.6 kB          269 kB
├ ○ /managers/properties                 2.84 kB         177 kB
├ ƒ /managers/properties/[id]            2.87 kB         177 kB
├ ○ /managers/settings                   1.07 kB         269 kB
├ ○ /search                              12.9 kB         627 kB
├ ƒ /search/[id]                         7.04 kB         695 kB
├ ○ /tenants/applications                3.2 kB          186 kB
├ ○ /tenants/favorites                   2.9 kB          177 kB
├ ○ /tenants/residences                  2.9 kB          177 kB
├ ƒ /tenants/residences/[id]             3.84 kB         169 kB
└ ○ /tenants/settings                    1.07 kB         269 kB
+ First Load JS shared by all            106 kB
  ├ chunks/1517-b70690a5093c01e3.js      50.7 kB
  ├ chunks/4bd1b696-ad5709229f2239d7.js  53 kB
  └ other shared chunks (total)          2.06 kB


○  (Static)   prerendered as static content
ƒ  (Dynamic)  server-rendered on demand
""""""""""""
this , means successfully

why run build in client:
npm run build is used to bundle and optimize your project for production. It creates a static, production-ready version of your app with all the dev tools stripped out, minified code, and pre-rendered stuff (if using frameworks like Next.js).