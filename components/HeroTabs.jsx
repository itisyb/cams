import { useState } from "react";
import { Tab } from "@headlessui/react";
import { nord } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
// import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CopyToClipboard } from "react-copy-to-clipboard";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const handleCopy = e => {
  if (content && !copied) {
    copy(content);
    setTimeout(() => {
      turnOffCopied();
    }, 1000);
  }
};

const copyOnClick = e => {
  e.preventDefault();
  handleCopy();
};

export default function Tabs() {
  const python = `import requests
import json

url = "https://chrome.browserless.io/function?TOKEN=b81e7484-231c-425c-89e6-d20dedb104d4&stealth&headless=true&ignoreDefaultArgs='-disable-extensions','--enable-automation'&args='--disable-web-security','--disable-features=IsolateOrigins,site-per-process','--allow-running-insecure-content','--disable-blink-features=AutomationControlled','--no-sandbox','--mute-audio','--no-zygote','--no-xshm','--window-size=1920,1080','--no-first-run','--no-default-browser-check','--disable-dev-shm-usage','--disable-gpu','--enable-webgl','--ignore-certificate-errors','--lang=en-US,en;q=0.9','--password-store=basic','--disable-gpu-sandbox','--disable-software-rasterizer','--disable-background-timer-throttling','--disable-backgrounding-occluded-windows','--disable-renderer-backgrounding','--disable-infobars','--disable-breakpad','--disable-canvas-aa','--disable-2d-canvas-clip-aa','--disable-gl-drawing-for-tests','--enable-low-end-device-mode','--disable-extensions-except=./plugin','--load-extension=./plugin'&--proxy-server=https=103.92.114.2:8080"

payload = json.dumps({
    "code": "module.exports=async({page:t,context:b})=>{const{url:c}=b;await t.goto(c);await t.setViewport({width:1920,height:1009});let hello=null;await t.waitForSelector('.mat-radio-group > #mat-radio-2 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle'),await t.click('.mat-radio-group > #mat-radio-2 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle'),await t.waitForTimeout(2000);await t.waitForSelector('.ng-star-inserted > .ng-star-inserted > .mat-dialog-content > .button-row > .check-now-btn'),await t.click('.ng-star-inserted > .ng-star-inserted > .mat-dialog-content > .button-row > .check-now-btn'),await t.waitForTimeout(2000);await t.waitForSelector('#mat-input-0'),await t.click('#mat-input-0'),await t.type('#mat-input-0','itisyb@gmail.com', {delay: 200}),await t.type('#mat-input-2','yashu123', {delay: 200}),await t.type('#mat-input-3','yashu123', {delay: 200}),await t.waitForTimeout(1500);await t.waitForSelector('div > div > .ng-touched > .form-group > .check-now-btn:nth-child(1)'),await t.click('div > div > .ng-touched > .form-group > .check-now-btn:nth-child(1)');try{await t.waitForSelector('.success-icon', {timeout: 500}),hello='success';}catch(e){try{await t.waitForSelector('[role=\"alertdialog\"],{timeout: 2000}'),hello='red box error';}catch{console.log(e); hello=e;}};return{data:hello,type:\"application/html\"}};",
    "context": {
    "url": "https://www.camsonline.com/Investors/Statements/Consolidated-Account-Statement"
    }
})
headers = {
    'Content-Type': 'application/json'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)
            `;

  const Javascript = `var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "code": "module.exports=async({page:t,context:b})=>{const{url:c}=b;await t.goto(c);await t.setViewport({width:1920,height:1009});let hello=null;await t.waitForSelector('.mat-radio-group > #mat-radio-2 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle'),await t.click('.mat-radio-group > #mat-radio-2 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle'),await t.waitForTimeout(2000);await t.waitForSelector('.ng-star-inserted > .ng-star-inserted > .mat-dialog-content > .button-row > .check-now-btn'),await t.click('.ng-star-inserted > .ng-star-inserted > .mat-dialog-content > .button-row > .check-now-btn'),await t.waitForTimeout(2000);await t.waitForSelector('#mat-input-0'),await t.click('#mat-input-0'),await t.type('#mat-input-0','itisyb@gmail.com', {delay: 200}),await t.type('#mat-input-2','yashu123', {delay: 200}),await t.type('#mat-input-3','yashu123', {delay: 200}),await t.waitForTimeout(1500);await t.waitForSelector('div > div > .ng-touched > .form-group > .check-now-btn:nth-child(1)'),await t.click('div > div > .ng-touched > .form-group > .check-now-btn:nth-child(1)');try{await t.waitForSelector('.success-icon', {timeout: 500}),hello='success';}catch(e){try{await t.waitForSelector('[role=\"alertdialog\"],{timeout: 2000}'),hello='red box error';}catch{console.log(e); hello=e;}};return{data:hello,type:\"application/html\"}};",
  "context": {
    "url": "https://www.camsonline.com/Investors/Statements/Consolidated-Account-Statement"
  }
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://chrome.browserless.io/function?TOKEN=b81e7484-231c-425c-89e6-d20dedb104d4&stealth&headless=true&ignoreDefaultArgs='-disable-extensions','--enable-automation'&args='--disable-web-security','--disable-features=IsolateOrigins,site-per-process','--allow-running-insecure-content','--disable-blink-features=AutomationControlled','--no-sandbox','--mute-audio','--no-zygote','--no-xshm','--window-size=1920,1080','--no-first-run','--no-default-browser-check','--disable-dev-shm-usage','--disable-gpu','--enable-webgl','--ignore-certificate-errors','--lang=en-US,en;q=0.9','--password-store=basic','--disable-gpu-sandbox','--disable-software-rasterizer','--disable-background-timer-throttling','--disable-backgrounding-occluded-windows','--disable-renderer-backgrounding','--disable-infobars','--disable-breakpad','--disable-canvas-aa','--disable-2d-canvas-clip-aa','--disable-gl-drawing-for-tests','--enable-low-end-device-mode','--disable-extensions-except=./plugin','--load-extension=./plugin'&--proxy-server=https=103.92.114.2:8080", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
    `;

  const cURL = `curl --location --request POST 'https://chrome.browserless.io/function?TOKEN=b81e7484-231c-425c-89e6-d20dedb104d4&stealth&headless=true&ignoreDefaultArgs='\''-disable-extensions'\'','\''--enable-automation'\''&args='\''--disable-web-security'\'','\''--disable-features=IsolateOrigins,site-per-process'\'','\''--allow-running-insecure-content'\'','\''--disable-blink-features=AutomationControlled'\'','\''--no-sandbox'\'','\''--mute-audio'\'','\''--no-zygote'\'','\''--no-xshm'\'','\''--window-size=1920,1080'\'','\''--no-first-run'\'','\''--no-default-browser-check'\'','\''--disable-dev-shm-usage'\'','\''--disable-gpu'\'','\''--enable-webgl'\'','\''--ignore-certificate-errors'\'','\''--lang=en-US,en;q=0.9'\'','\''--password-store=basic'\'','\''--disable-gpu-sandbox'\'','\''--disable-software-rasterizer'\'','\''--disable-background-timer-throttling'\'','\''--disable-backgrounding-occluded-windows'\'','\''--disable-renderer-backgrounding'\'','\''--disable-infobars'\'','\''--disable-breakpad'\'','\''--disable-canvas-aa'\'','\''--disable-2d-canvas-clip-aa'\'','\''--disable-gl-drawing-for-tests'\'','\''--enable-low-end-device-mode'\'','\''--disable-extensions-except=./plugin'\'','\''--load-extension=./plugin'\''&--proxy-server=https=103.92.114.2:8080' \
  --header 'Content-Type: application/json' \
  --data-raw '{
    "code": "module.exports=async({page:t,context:b})=>{const{url:c}=b;await t.goto(c);await t.setViewport({width:1920,height:1009});let hello=null;await t.waitForSelector('\''.mat-radio-group > #mat-radio-2 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle'\''),await t.click('\''.mat-radio-group > #mat-radio-2 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle'\''),await t.waitForTimeout(2000);await t.waitForSelector('\''.ng-star-inserted > .ng-star-inserted > .mat-dialog-content > .button-row > .check-now-btn'\''),await t.click('\''.ng-star-inserted > .ng-star-inserted > .mat-dialog-content > .button-row > .check-now-btn'\''),await t.waitForTimeout(2000);await t.waitForSelector('\''#mat-input-0'\''),await t.click('\''#mat-input-0'\''),await t.type('\''#mat-input-0'\'','\''itisyb@gmail.com'\'', {delay: 200}),await t.type('\''#mat-input-2'\'','\''yashu123'\'', {delay: 200}),await t.type('\''#mat-input-3'\'','\''yashu123'\'', {delay: 200}),await t.waitForTimeout(1500);await t.waitForSelector('\''div > div > .ng-touched > .form-group > .check-now-btn:nth-child(1)'\''),await t.click('\''div > div > .ng-touched > .form-group > .check-now-btn:nth-child(1)'\'');try{await t.waitForSelector('\''.success-icon'\'', {timeout: 500}),hello='\''success'\'';}catch(e){try{await t.waitForSelector('\''[role=\"alertdialog\"],{timeout: 2000}'\''),hello='\''red box error'\'';}catch{console.log(e); hello=e;}};return{data:hello,type:\"application/html\"}};",
    "context": {
      "url": "https://www.camsonline.com/Investors/Statements/Consolidated-Account-Statement"
    }
  }
  '`;
  return (
    
    <Tab.Group>
      <Tab.List>
        <Tab className="p-4 bg-gray-900 text-white focus:bg-gray-900/80">
          Python
        </Tab>
        <Tab className="p-4 bg-gray-900 text-white focus:bg-gray-900/80">
          Javascript
        </Tab>
        <Tab className="p-4 bg-gray-900 text-white focus:bg-gray-900/80">
          C#
        </Tab>
      </Tab.List>
      <Tab.Panels
        style={{ width: "36rem", height: "30rem", overflowX: "scroll" }}
      >
        <Tab.Panel className="relative">
          <CopyToClipboard
            className="absolute right-2 top-2 p-2 rounded-md bg-white"
            text={python}
          >
            <button>Copy</button>
          </CopyToClipboard>
          <SyntaxHighlighter
            wrapLongLines={true}
            language="python"
            style={atomOneDark}
          >
            {python}
          </SyntaxHighlighter>
        </Tab.Panel>
        <Tab.Panel className="relative">
          <CopyToClipboard
            className="absolute right-2 top-2 p-2 rounded-md bg-white"
            text={Javascript}
          >
            <button onClick={copyOnClick}>Copy</button>
          </CopyToClipboard>
          <SyntaxHighlighter
            wrapLongLines={true}
            language="javascript"
            style={atomOneDark}
          >
            {Javascript}
          </SyntaxHighlighter>
        </Tab.Panel>
        <Tab.Panel className="relative">
        <CopyToClipboard
            className="absolute right-2 top-2 p-2 rounded-md bg-white"
            text={cURL}
          >
            <button>Copy</button>
          </CopyToClipboard>
          <SyntaxHighlighter
            wrapLongLines={true}
            language="cURL"
            style={atomOneDark}
          >
            {cURL}
          </SyntaxHighlighter>
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}

// export default function Tabs() {
//   let [categories] = useState({
//     Recent: [
//       {
//         id: 1,
//         title: `
//         import requests
//         import json

//         url = "https://chrome.browserless.io/function?TOKEN=b81e7484-231c-425c-89e6-d20dedb104d4&stealth&headless=true&ignoreDefaultArgs='-disable-extensions','--enable-automation'&args='--disable-web-security','--disable-features=IsolateOrigins,site-per-process','--allow-running-insecure-content','--disable-blink-features=AutomationControlled','--no-sandbox','--mute-audio','--no-zygote','--no-xshm','--window-size=1920,1080','--no-first-run','--no-default-browser-check','--disable-dev-shm-usage','--disable-gpu','--enable-webgl','--ignore-certificate-errors','--lang=en-US,en;q=0.9','--password-store=basic','--disable-gpu-sandbox','--disable-software-rasterizer','--disable-background-timer-throttling','--disable-backgrounding-occluded-windows','--disable-renderer-backgrounding','--disable-infobars','--disable-breakpad','--disable-canvas-aa','--disable-2d-canvas-clip-aa','--disable-gl-drawing-for-tests','--enable-low-end-device-mode','--disable-extensions-except=./plugin','--load-extension=./plugin'&--proxy-server=https=103.92.114.2:8080"

//         payload = json.dumps({
//           "code": "module.exports=async({page:t,context:b})=>{const{url:c}=b;await t.goto(c);await t.setViewport({width:1920,height:1009});let hello=null;await t.waitForSelector('.mat-radio-group > #mat-radio-2 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle'),await t.click('.mat-radio-group > #mat-radio-2 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle'),await t.waitForTimeout(2000);await t.waitForSelector('.ng-star-inserted > .ng-star-inserted > .mat-dialog-content > .button-row > .check-now-btn'),await t.click('.ng-star-inserted > .ng-star-inserted > .mat-dialog-content > .button-row > .check-now-btn'),await t.waitForTimeout(2000);await t.waitForSelector('#mat-input-0'),await t.click('#mat-input-0'),await t.type('#mat-input-0','itisyb@gmail.com', {delay: 200}),await t.type('#mat-input-2','yashu123', {delay: 200}),await t.type('#mat-input-3','yashu123', {delay: 200}),await t.waitForTimeout(1500);await t.waitForSelector('div > div > .ng-touched > .form-group > .check-now-btn:nth-child(1)'),await t.click('div > div > .ng-touched > .form-group > .check-now-btn:nth-child(1)');try{await t.waitForSelector('.success-icon', {timeout: 500}),hello='success';}catch(e){try{await t.waitForSelector('[role=\"alertdialog\"],{timeout: 2000}'),hello='red box error';}catch{console.log(e); hello=e;}};return{data:hello,type:\"application/html\"}};",
//           "context": {
//             "url": "https://www.camsonline.com/Investors/Statements/Consolidated-Account-Statement"
//           }
//         })
//         headers = {
//           'Content-Type': 'application/json'
//         }

//         response = requests.request("POST", url, headers=headers, data=payload)

//         print(response.text)
//         `,
//       },

//     ],
//     Popular: [
//       {
//         id: 1,
//         title: 'Is tech making coffee better or worse?',
//       },
//     ],
//     Trending: [
//       {
//         id: 1,
//         title: 'Ask Me Anything: 10 answers to your questions about coffee',
//         shareCount: 5,
//       },
//     ],
//   })

//   return (
//     <div className="w-full max-w-md px-2 py-16 sm:px-0">
//       <Tab.Group>
//         <Tab.List className="flex rounded-md">
//           {Object.keys(categories).map((category) => (
//             <Tab
//               key={category}
//               className={({ selected }) =>
//                 classNames(
//                   'w-full py-2.5 text-sm leading-5 font-medium rounded-md text-black',

//                   selected
//                     ? 'bg-gray-800 text-white'
//                     : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
//                 )
//               }
//             >
//               {category}
//             </Tab>
//           ))}
//         </Tab.List>
//         <Tab.Panels className="w-96">
//           {Object.values(categories).map((posts, idx) => (
//             <Tab.Panel
//               key={idx}
//               className={classNames(
//                 ' text-white rounded-xl ',

//               )}
//             >
//               <ul>
//                 {posts.map((post) => (
//                   <li
//                     key={post.id}
//                     className="relative rounded-md hover:bg-coolGray-100"
//                   >
//                      <SyntaxHighlighter language="python">
//                       {post.title}
//                     </SyntaxHighlighter>
//                     <a
//                       href="#"
//                       className={classNames(
//                         'absolute inset-0 rounded-md',
//                         'focus:z-10 focus:outline-none focus:ring-2 ring-blue-400'
//                       )}
//                     />
//                   </li>
//                 ))}
//               </ul>
//             </Tab.Panel>
//           ))}
//         </Tab.Panels>
//       </Tab.Group>
//     </div>
//   )
// }

// const Tabs = ({ color }) => {
//   const [openTab, setOpenTab] = React.useState(1);
//   return (
//     <div className="w-full">
//       <div
//         className="coding inverse-toggle px-5 pt-4 shadow-lg text-gray-100 text-sm font-mono subpixel-antialiased
//                   bg-gray-800  pb-6 pt-4 rounded-lg leading-normal overflow-hidden"
//       >
//         <div className="top mb-2 flex">
//           <div className="h-3 w-3 bg-red-500 rounded-full"></div>
//           <div className="ml-2 h-3 w-3 bg-orange-300 rounded-full"></div>
//           <div className="ml-2 h-3 w-3 bg-green-500 rounded-full"></div>
//         </div>
//         <div className="mt-4 flex">
//           <Tab.Group>
//             <Tab.List>
//               <Tab>Tab 1</Tab>
//               <Tab>Tab 2</Tab>
//               <Tab>Tab 3</Tab>
//             </Tab.List>
//             <Tab.Panels>
//               <Tab.Panel>Content 1</Tab.Panel>
//               <Tab.Panel>Content 2</Tab.Panel>
//               <Tab.Panel>Content 3</Tab.Panel>
//             </Tab.Panels>
//           </Tab.Group>
//           <p className="flex-1 typing items-center pl-2">
//             apt-get hire me
//             <br></br>
//           </p>
//         </div>
//       </div>
//     </div>
// <>
//   <div classNameName="flex flex-wrap">
//     <div classNameName="w-full">
//       <ul
//         classNameName="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
//         role="tablist"
//       >
//         <li classNameName="-mb-px mr-2 last:mr-0 flex-auto text-center">
//           <a
//             classNameName={
//               "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
//               (openTab === 1
//                 ? "text-white bg-" + color + "-600"
//                 : "text-" + color + "-600 bg-white")
//             }
//             onClick={e => {
//               e.preventDefault();
//               setOpenTab(1);
//             }}
//             data-toggle="tab"
//             href="#link1"
//             role="tablist"
//           >
//             Profile
//           </a>
//         </li>
//         <li classNameName="-mb-px mr-2 last:mr-0 flex-auto text-center">
//           <a
//             classNameName={
//               "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
//               (openTab === 2
//                 ? "text-white bg-" + color + "-600"
//                 : "text-" + color + "-600 bg-white")
//             }
//             onClick={e => {
//               e.preventDefault();
//               setOpenTab(2);
//             }}
//             data-toggle="tab"
//             href="#link2"
//             role="tablist"
//           >
//              Settings
//           </a>
//         </li>
//         <li classNameName="-mb-px mr-2 last:mr-0 flex-auto text-center">
//           <a
//             classNameName={
//               "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
//               (openTab === 3
//                 ? "text-white bg-" + color + "-600"
//                 : "text-" + color + "-600 bg-white")
//             }
//             onClick={e => {
//               e.preventDefault();
//               setOpenTab(3);
//             }}
//             data-toggle="tab"
//             href="#link3"
//             role="tablist"
//           >
//              Options
//           </a>
//         </li>
//       </ul>
//       <div classNameName="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
//         <div classNameName="px-4 py-5 flex-auto">
//           <div classNameName="tab-content tab-space">
//             <div classNameName={openTab === 1 ? "block" : "hidden"} id="link1">
//               <p>
//                 Collaboratively administrate empowered markets via
//                 plug-and-play networks. Dynamically procrastinate B2C users
//                 after installed base benefits.
//                 <br />
//                 <br /> Dramatically visualize customer directed convergence
//                 without revolutionary ROI.
//               </p>
//             </div>
//             <div classNameName={openTab === 2 ? "block" : "hidden"} id="link2">
//               <p>
//                 Completely synergize resource taxing relationships via
//                 premier niche markets. Professionally cultivate one-to-one
//                 customer service with robust ideas.
//                 <br />
//                 <br />
//                 Dynamically innovate resource-leveling customer service for
//                 state of the art customer service.
//               </p>
//             </div>
//             <div classNameName={openTab === 3 ? "block" : "hidden"} id="link3">
//               <p>
//                 Efficiently unleash cross-media information without
//                 cross-media value. Quickly maximize timely deliverables for
//                 real-time schemas.
//                 <br />
//                 <br /> Dramatically maintain clicks-and-mortar solutions
//                 without functional solutions.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </>
//   );
// };
