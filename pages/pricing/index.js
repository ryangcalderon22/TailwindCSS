import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import CallToAction from '../../components/CallToAction'
import IconGrid from '../../components/IconGrid'

export default function GetStarted() {
  return (
    <div class="bg-white">
      <Navigation />
      <div class="bg-white">
        <div class="container">
          <div class="py-8 md:py-16">
            <h1 class="heading text-black">Pricing and licensing</h1>
            <p>Both Barcode Essentials Solution (all versions) and Barcode Essentials for iPhone app (from App Store) are free to download and install. Only the synchronization of data between a device and your CMDB server is licensed. </p>
          </div>
        </div>
      </div>
      <main>
        <div class="bg-gray-100 pt-12 pb-10 lg:pb-0">
          <div class="container lg:max-h-72 lg:mb-0">
            <div class="max-w-xl mx-auto px-4 sm:px-6 md:max-w-5xl md:px-8">
              <dl class="space-y-10 md:grid md:grid-cols-2 md:space-y-0 md:gap-8 md:-mb-36">
                <div class="bg-white shadow-md pt-8 pb-4 px-8 border-2 border-gray-200">
                  <div class="flex items-center">
                    <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43 40">
                      <path d="M39 19.3c0 10.6-8.6 19.2-19.2 19.2S.6 29.9.6 19.3v-.7C.9 7.9 9.8-.4 20.4 0 30.8.4 39 8.9 39 19.3z" opacity=".5" fill="#ccc"></path>
                      <path d="M37.1 26.8v.7c-4.5 9.6-16 13.7-25.6 9.2-6.7-3.2-11-10-11-17.4v-.7C5 8.9 16.5 4.8 26.1 9.4c6.7 3.1 11 9.9 11 17.4z" opacity=".5" fill="#b3b3b3"></path>
                      <path fill="#fff" d="M6.9 15.1l4-3 5.5 7.4L38.3 1.6l3.2 3.9-25.9 21.2z"></path>
                      <path fill="none" stroke="#ccc" stroke-miterlimit="10" d="M6.9 15.1l4-3 5.5 7.4L38.3 1.6l3.2 3.9-25.9 21.2z"></path>
                      </svg>
                    <span class="ml-2 text-sm lg:text-lg leading-5 font-bold">Perpetual</span>
                  </div>
                  <div class="flex flex-nowrap flex-col items-center justify-center mb-7">
                    <div class="flex items-start px-0 py-4 sm:px-2 lg:px-6">
                      <svg class="w-12 h-6 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      <span class="text-gray-700">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, <br/>sed diam nonummy</span>
                    </div>
                    <h2 class="font-extralight text-center text-5xl lg:text-6xl py-4 px-4 pt-0 md:px-8 md:pt-4">$1,495.00</h2>
                  </div>
                  <div class="flex items-center justify-center gap-5 border-t-2 border-gray-200 mt-2 -mx-8 pt-4">
                    <button class="btn-primary btn-secondary bg-gray-400 hover:bg-gray-500 flex justify-center md:px-7">
                      <svg class="w-4 h-4 mr-1 md:w-6 md:h-6 md:mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>
                      <span>Buy Now</span>
                    </button>
                    <a class="btn-primary btn-link md:px-7" href="#">Get a quote</a>
                  </div>
                </div>
                <div class="bg-white shadow-md pt-8 pb-4 px-8 border-2 border-primary">
                  <div class="flex items-center">
                    <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 49"><path d="M38.7 23.1c0 10.6-8.6 19.2-19.2 19.2S.3 33.7.3 23.1v-.7C.6 11.7 9.5 3.5 20.2 3.8c10.3.4 18.5 8.9 18.5 19.3z" opacity=".5" fill="#39b54a"></path><path d="M36.9 30.6v.7c-4.5 9.6-16 13.7-25.6 9.2-6.7-3.2-11-10-11-17.4v-.7c4.5-9.6 16-13.7 25.6-9.2 6.7 3.1 10.9 9.9 11 17.4z" opacity=".5" fill="#48ba13"></path><path fill="#fff" d="M6.6 18.9l4-3 5.6 7.4L38 5.4l3.2 3.9-25.9 21.2z"></path><path fill="none" stroke="#48ba13" stroke-miterlimit="10" d="M6.6 18.9l4-3 5.6 7.4L38 5.4l3.2 3.9-25.9 21.2z"></path></svg>
                    <span class="ml-2 text-sm lg:text-lg leading-5 font-bold">Subscription</span>
                  </div>
                  <div class="px-0 py-4 sm:px-8">
                    <div class="relative my-auto mt-4 bg-white rounded-full flex flex-1 items-center justify-center border-2 border-gray-300 mb-8 md:mt-3">
                      <button type="button" class="bg-white border-2 -my-1 border-primary text-primary rounded-full py-2 text-sm font-medium whitespace-nowrap px-5 w-1/2 sm:px-8">Monthly</button>
                      <button type="button" class="ml-0.5 border border-transparent rounded-full py-2 text-sm font-medium text-gray-700 whitespace-nowrap px-5 w-1/2 sm:px-8">Anually</button>
                    </div>
                    <h2 class="font-extralight text-center text-5xl lg:text-6xl py-4 px-4 md:px-8 md:pt-4">$99.00 <span class="text-sm font-normal block">per device</span></h2>
                  </div>
                  <div class="flex items-center justify-center gap-5 border-t-2 border-gray-200 -mt-2 -mx-8 pt-4">
                    <button class="btn-primary btn-secondary flex justify-center md:px-7">
                      <svg class="w-4 h-4 mr-1 md:w-6 md:h-6 md:mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>
                      <span>Buy Now</span>
                    </button>
                    <a class="btn-primary btn-link md:px-7" href="#">Get a quote</a>
                  </div>
                </div>
              </dl>
            </div>
          </div>
        </div>
        <div class="bg-white bg-bg-faq bg-right-top bg-no-repeat bg-1/2 md:mt-36">
          <div class="container py-10 my-12">
            <div class="max-w-xl mx-auto px-4 sm:px-6 md:max-w-5xl md:px-8">
              <div class="flex items-center flex-col flex-nowrap mb-12">
                <h2 class="heading text-primary mb-4">Any questions?</h2>
                <p class="text-gray-700">Learn more about our product</p>
              </div>
              <div class="flex items-center mb-9">
                <h2 class="heading leading-none text-lg text-graydarker mb-0 min-w-max mr-2">Frequently Asked Questions</h2>
                <span class="h-1 w-full bg-graydarker bg-opacity-10"></span>
              </div>
              <div>
                <div class="max-w-2xl pr-4 sm:pr-6 lg:pr-8">
                  <p class="text-gray-700 mb-4">Please visit our <span class="heading text-primary text-base">Help Center</span> for more information.</p>
                  <dl class="space-y-2 divide-y-2 divide-gray-200">
                    <div class="pt-2">
                      <dt class="text-base font-extrabold">
                        <button class="text-left w-full flex justify-between items-start text-gray-400">
                          <span class="font-medium text-green-darker flex items-center">
                            <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                            <span>How licensing works?</span>
                          </span>
                          <span class="ml-6 h-7 flex items-center">
                            <svg class="-rotate-180 h-6 w-6 transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                          </span>
                        </button>
                      </dt>
                      <dd class="mt-2 pl-12 mb-5">
                        <p class="text-base text-graydarkest mb-5">
                          Barcode Essentials™ licensing is device based, and each device that synchronizes with your server needs its own license. There is no concurrent user licensing in Barcode Essentials.
                        </p>
                        <p class="text-base text-graydarkest mb-5">Devices requiring licenses include:</p>
                        <ul class="pl-4">
                          <li class="flex mb-5">
                            <span class="bg-white rounded-full mr-3 w-10 h-10 flex border-2 border-primary justify-center items-center">
                              <svg class="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                            </span>
                            <span>iOS devices (iPhone, iPad, iPad mini, iPod touch) running the Barcode Essentials app</span>
                          </li>
                          <li class="flex mb-5">
                            <span class="bg-white rounded-full mr-3 w-10 h-10 flex border-2 border-primary justify-center items-center">
                              <svg class="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                            </span>
                            <span>Any computer running Barcode Essentials Console Application in a desktop browser*</span>
                          </li>
                          <li class="flex mb-5">
                            <span class="bg-white rounded-full mr-3 w-10 h-10 flex border-2 border-primary justify-center items-center">
                              <svg class="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                            </span>
                            <span>Windows Mobile devices running Symantec Barcoder 7.5 that sync with your server*</span>
                          </li>
                        </ul>
                        <p class="text-graydarkest text-sm">* Applies to Barcode Essentials Solution 7.6 & 8.0.</p>
                      </dd>
                    </div>
                    <div class="pt-2">
                      <dt class="text-base font-extrabold">
                        <button class="text-left w-full flex justify-between items-start text-gray-400">
                          <span class="font-medium text-graydarkest flex items-center">
                            <svg class="w-6 h-6 mr-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                            <span>Required license counts</span>
                          </span>
                          <span class="ml-6 h-7 flex items-center">
                            <svg class="-rotate-0 h-6 w-6 transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                            </svg>
                          </span>
                        </button>
                      </dt>
                      <dd class="mt-2 pl-12 hidden">
                        <p class="text-base text-graydarkest mb-5">
                          Barcode Essentials™ licensing is device based, and each device that synchronizes with your server needs its own license. There is no concurrent user licensing in Barcode Essentials.
                        </p>
                        <p class="text-base text-graydarkest mb-5">Devices requiring licenses include:</p>
                        <ul>
                          <li class="flex mb-5">
                            <span class="bg-white rounded-full mr-3 w-6 h-6 flex border-2 border-primary justify-center items-center">
                              <svg class="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                            </span>
                            <span>iOS devices (iPhone, iPad, iPad mini, iPod touch) running the Barcode Essentials app</span>
                          </li>
                          <li class="flex mb-5">
                            <span class="bg-white rounded-full mr-3 w-6 h-6 flex border-2 border-primary justify-center items-center">
                              <svg class="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                            </span>
                            <span>Any computer running Barcode Essentials Console Application in a desktop browser*</span>
                          </li>
                          <li class="flex mb-5">
                            <span class="bg-white rounded-full mr-3 w-6 h-6 flex border-2 border-primary justify-center items-center">
                              <svg class="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                            </span>
                            <span>Windows Mobile devices running Symantec Barcoder 7.5 that sync with your server*</span>
                          </li>
                        </ul>
                      </dd>
                    </div>
                    <div class="pt-2">
                      <dt class="text-base font-extrabold">
                        <button class="text-left w-full flex justify-between items-start text-gray-400">
                          <span class="font-medium text-graydarkest flex items-center">
                            <svg class="w-6 h-6 mr-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                            <span>How to install licenses?</span>
                          </span>
                          <span class="ml-6 h-7 flex items-center">
                            <svg class="-rotate-0 h-6 w-6 transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                            </svg>
                          </span>
                        </button>
                      </dt>
                      <dd class="mt-2 pl-12 hidden">
                        <p class="text-base text-graydarkest mb-5">
                          Barcode Essentials™ licensing is device based, and each device that synchronizes with your server needs its own license. There is no concurrent user licensing in Barcode Essentials.
                        </p>
                        <p class="text-base text-graydarkest mb-5">Devices requiring licenses include:</p>
                        <ul>
                          <li class="flex mb-5">
                            <span class="bg-white rounded-full mr-3 w-6 h-6 flex border-2 border-primary justify-center items-center">
                              <svg class="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                            </span>
                            <span>iOS devices (iPhone, iPad, iPad mini, iPod touch) running the Barcode Essentials app</span>
                          </li>
                          <li class="flex mb-5">
                            <span class="bg-white rounded-full mr-3 w-6 h-6 flex border-2 border-primary justify-center items-center">
                              <svg class="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                            </span>
                            <span>Any computer running Barcode Essentials Console Application in a desktop browser*</span>
                          </li>
                          <li class="flex mb-5">
                            <span class="bg-white rounded-full mr-3 w-6 h-6 flex border-2 border-primary justify-center items-center">
                              <svg class="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                            </span>
                            <span>Windows Mobile devices running Symantec Barcoder 7.5 that sync with your server*</span>
                          </li>
                        </ul>
                      </dd>
                    </div>
                    <div class="pt-2">
                      <dt class="text-base font-extrabold">
                        <button class="text-left w-full flex justify-between items-start text-gray-400">
                          <span class="font-medium text-graydarkest flex items-center">
                            <svg class="w-6 h-6 mr-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                            <span>How to back up licenses?</span>
                          </span>
                          <span class="ml-6 h-7 flex items-center">
                            <svg class="-rotate-0 h-6 w-6 transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                          </span>
                        </button>
                      </dt>
                      <dd class="mt-2 pl-12 hidden">
                        <p class="text-base text-graydarkest mb-5">
                          Barcode Essentials™ licensing is device based, and each device that synchronizes with your server needs its own license. There is no concurrent user licensing in Barcode Essentials.
                        </p>
                        <p class="text-base text-graydarkest mb-5">Devices requiring licenses include:</p>
                        <ul>
                          <li class="flex mb-5">
                            <span class="bg-white rounded-full mr-3 w-6 h-6 flex border-2 border-primary justify-center items-center">
                              <svg class="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                            </span>
                            <span>iOS devices (iPhone, iPad, iPad mini, iPod touch) running the Barcode Essentials app</span>
                          </li>
                          <li class="flex mb-5">
                            <span class="bg-white rounded-full mr-3 w-6 h-6 flex border-2 border-primary justify-center items-center">
                              <svg class="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                            </span>
                            <span>Any computer running Barcode Essentials Console Application in a desktop browser*</span>
                          </li>
                          <li class="flex mb-5">
                            <span class="bg-white rounded-full mr-3 w-6 h-6 flex border-2 border-primary justify-center items-center">
                              <svg class="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                            </span>
                            <span>Windows Mobile devices running Symantec Barcoder 7.5 that sync with your server*</span>
                          </li>
                        </ul>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-100">
          <div class="container py-10 my-12">
            <div class="flex items-center flex-col flex-nowrap mb-12">
              <h2 class="heading text-primary mb-4">Versions available</h2>
              <p class="text-gray-700">The Barcode Essentials product you need depends on the version of Symantec Management Platform you use.</p>
            </div>
            <div class="grid sm:grid-cols-2 sm:gap-16">
              <div class="bg-white shadow-md p-6 mb-8 sm:p-10 sm:mb-0">
                <h3 class="heading text-primary text-lg leading-4 mb-4">For SMP 7.1 / 7.5</h3>
                <p class="mb-4 text-green-shadow">Barcode Essentials 1.x is an add-on for Symantec Barcode Solution 7.1 / 7.5, and provides an iOS app for iPhone, iPad, iPad mini and iPod touch, plus a server side solution you can use to manage device licenses.</p>
                <p class="mb-4 text-green-shadow">To use Barcode Essentials 1.x you must own at least one license of Symantec Barcode Solution (e.g. acquired as part of ITMS or AMS or as a standalone license from Symantec) and Symantec Barcode Solution must be installed on your server.</p>
                <p class="mb-4 text-green-shadow">To get started, visit the <span class="text-primary"><svg class="w-6 h-6 inline" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> <span class="heading text-primary text-base">Downloads</span></span> page:</p>
                <ul class="pl-4">
                  <li class="flex mb-5">
                    <span class="bg-white rounded-full mr-3 w-10 h-10 flex border-2 border-primary justify-center items-center text-sm">
                      <span class="px-4 py-2">1</span>
                    </span>
                    <span>Install Barcode Essentials Solution Version 1.x on your Symantec server.</span>
                  </li>
                  <li class="flex mb-5">
                    <span class="bg-white rounded-full mr-3 w-10 h-10 flex border-2 border-primary justify-center items-center text-sm">
                      <span class="px-4 py-2">2</span>
                    </span>
                    <span>Get Barcode Essentials for iPhone app from App Store on your iOS device.</span>
                  </li>
                </ul>
                <p>You will also need at least one Barcode Essentials 7.1 - 7.5 <span class="text-primary"><span class="heading text-primary text-base">device license</span> <svg class="w-6 h-6 inline" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path></svg></span></p>
              </div>
              <div class="bg-green-midtone shadow-md p-6 md:p-10">
                <h3 class="heading text-white text-lg leading-4 mb-4">For SMP 7.6+ / 8.0+</h3>
                <p class="text-white mb-5">Barcode Essentials 7.6 & 8.0 are new products that take the place of Symantec Barcode Solution and provide seamless integration of barcode-based asset management workflows for all ITMS 7.6+ & 8.0+ users.</p>
                <p class="text-white mb-5">To use Barcode Essentials 7.6 & 8.0 you only need Symantec CMDB which you can obtain as part of ITMS, AMS or CMS or in a custom bundle from Symantec.</p>
                <p class="text-white mb-5">You will need:</p>
                <ul class="pl-4 text-white">
                  <li class="flex mb-5">
                    <span class="bg-white rounded-full mr-3 w-10 h-10 flex border-2 border-primary justify-center items-center text-sm shadow-md">
                      <span class="px-4 py-2 text-primary">1</span>
                    </span>
                    <span>Barcode Essentials Solution Version 7.6 or 8.0 installed on your Symantec server.</span>
                  </li>
                  <li class="flex mb-5">
                    <span class="bg-white rounded-full mr-3 w-10 h-10 flex border-2 border-primary justify-center items-center text-sm shadow-md">
                      <span class="px-4 py-2 text-primary">2</span>
                    </span>
                    <span>Barcode Essentials for iPhone app from App Store on any iOS devices.</span>
                  </li>
                </ul>
                <p class="mb-5 text-white">You will also need at least one Barcode Essentials 7.1 - 7.5 <span class="text-green-shadow"><span class="heading text-green-shadow text-base">device license</span> <svg class="w-6 h-6 inline" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path></svg></span></p>
                <p class="mb-5 text-white">Note that Barcode Essentials 7.6 & 8.0 are new product lines, not an upgrade from Barcode Essentials 1.x releases, so all 1.x licenses must be <span class="heading text-green-shadow text-base">crossgraded</span> before using Barcode Essentials 7.6 or 8.0.</p>
                <p class="mb-5 text-white">Crossgrade offers are available for both Symantec Barcode Solution licenses and any existing Barcode Essentails 1.x device licenses you own. Visit the <span class="heading text-green-shadow text-base">Crossgrade Offers</span> page for details.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white">
          <div class="pt-8 pb-12 lg:py-16 lg:px-8">
            <IconGrid
              header="Distributors"
              description="Get access to NFR licensing and wholesale discounts."
              icons={[
                {
                  label: 'ITS',
                  icon: './images/logo-distributor-its.svg'
                },
                {
                  label: 'Expressability',
                  icon: './images/logo-distributor-expressability.svg'
                },
                {
                  label: 'Intuitive',
                  icon: './images/logo-distributor-intuitive.svg'
                },
                {
                  label: 'Shi',
                  icon: './images/logo-distributor-shi.svg'
                },
                {
                  label: 'NetX',
                  icon: './images/logo-distributor-net.svg'
                },
                {
                  label: 'DMI',
                  icon: './images/logo-distributor-dmi.svg'
                }
              ]}
            >
              <div class="flex items-center flex-col flex-nowrap mb-0">
                <span class="w-24 h-1 mt-12 bg-primary mb-10"></span>
                <p class="font-bold">Partner with us!</p>
                <p class="text-graydarkest mb-4">Get access to NFR licensing and wholesale discounts.</p>
                <a href="#" class="px-5 py-3 btn-primary btn-secondary flex justify-center">
                  <svg class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 30"><path d="M27.4 11.6h-8.5v3.1c0 2.2-1.8 4-4 4s-4-1.8-4-4V7.9l-3.7 2.2c-1.1.6-1.7 1.8-1.7 3.1v2.7L1 18.5C.1 19-.2 20.1.3 21l4.5 7.8c.5.9 1.6 1.2 2.5.7L13 26h7.7c2 0 3.6-1.6 3.6-3.6h.9c1 0 1.8-.8 1.8-1.8V17h.4c.7 0 1.3-.6 1.3-1.3V13c.1-.8-.5-1.4-1.3-1.4zm8.3-2.1l-4.5-7.8C30.7.8 29.6.5 28.7 1L23 4.4h-5.7c-.7 0-1.3.2-1.9.5l-1.9 1.2c-.5.3-.8.9-.8 1.5v7.1c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2V9.8h10.3c1.7 0 3.1 1.4 3.1 3.1v1.6l4.5-2.6c.9-.4 1.2-1.5.7-2.4z" fill="#fff"/></svg>Be a Distributor
                </a>
              </div>
            </IconGrid>
          </div>
        </div>
        <div class="py-12 bg-graydarker">
          <CallToAction />
        </div>
      </main>
      <Footer />
    </div>
  )
}