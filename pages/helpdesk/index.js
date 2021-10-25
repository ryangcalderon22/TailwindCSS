import Navigation from '../../components/navigation'
import Footer from '../../components/footer'
import CallToAction from '../../components/callToAction'

export default function GetStarted() {
  return (
    <div class="bg-white">
      <Navigation />
      <div class="bg-white">
        <div class="container">
          <div class="py-8 grid md:grid-cols-2 md:gap-16 md:py-16">
            <div class="text-center md:pt-14 md:text-left">
              <h2 class="heading text-graydarker">
                <span>Support</span>
              </h2>
              <div>
                <label for="account_number" class="block text-sm font-medium text-gray-700 sr-only">Search Helpdesk</label>
                <div class="mb-5 relative shadow-sm">
                  <input type="text" name="searchSupport" id="searchSupport" class="focus:border-graydarkest block w-full py-3 pl-5 pr-10 sm:text-lg border-2 border-gray-300" placeholder="How can we help you?" />
                  <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <svg class="w-6 h-6 text-black opacity-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                  </div>
                </div>
              </div>
              <p class="text-graydarker text-lg mb-4 md:mb-6">Get started now! Youʼll be up and running in no time</p>
            </div>
            <div class="flex justify-center mb-6 md:mb-0">
              <img class="object-center h-48 w-auto sm:h-96" src="./images/img-support.svg" />
            </div>
          </div>
        </div>
      </div>
      <main>
        <div class="bg-gray-100 pt-12 pb-10 lg:pb-0">
          <div class="container lg:max-h-96 lg:mb-0">
            <div class="max-w-5xl mx-auto px-4 sm:px-6">
              <div class="flex items-center flex-col flex-nowrap mb-12">
                <h2 class="heading text-primary mb-4">Find additional information</h2>
                <p class="text-gray-700">Learn more about our product</p>
              </div>
              <dl class="space-y-10 md:grid md:grid-cols-2 md:space-y-0 md:gap-8 md:-mb-36">
    
                <div class="bg-white shadow-md py-8 px-8">
                  <div class="sm:flex sm:items-start">
                    <div class="flex items-center justify-center sm:mr-5">
                      <img class="object-center h-20 w-20" src="./images/icon-setup.svg" />
                    </div>
                    <div class="mt-5">
                      <dt class="text-lg leading-6 font-bold text-graydarkest">
                        General/Setup
                      </dt>
                      <dd class="mt-2 mb-5 text-base text-graydarkest">
                        Meet Barcode Essentials™ and discover how to make it work in your business.
                      </dd>
                      <ul>
                        <li class="flex mb-2 items-start">
                          <span class="bg-white rounded-full mr-2 flex justify-center items-center">
                            <svg class="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                          </span> 
                          <span class="text-base">Migrate your Barcode Essentials™ licenses</span>
                        </li>
                        <li class="flex mb-2 items-start">
                          <span class="bg-white rounded-full mr-2 flex justify-center items-center">
                            <svg class="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                          </span> 
                          <span class="text-base">What is educational pricing?</span>
                        </li>
                        <li class="flex mb-2 items-start">
                          <span class="bg-white rounded-full mr-2 flex justify-center items-center">
                            <svg class="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                          </span> 
                          <span class="text-base">Why Barcode Essentials™?</span>
                        </li>
                        <li class="flex mb-2 items-start">
                          <span class="bg-white rounded-full mr-2 flex justify-center items-center">
                            <svg class="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                          </span> 
                          <span class="text-base">Setting up your server</span>
                        </li>
                        <li class="flex mb-2 items-start">
                          <span class="bg-white rounded-full mr-2 flex justify-center items-center">
                            <svg class="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                          </span> 
                          <span class="text-base">Send a Support Request</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
    
                <div class="bg-white shadow-md py-8 px-8">
                  <div class="sm:flex sm:items-start">
                    <div class="flex items-center justify-center sm:mr-5">
                      <img class="object-center h-24 w-24" src="./images/icon-setup-support.svg" />
                    </div>
                    <div class="mt-5">
                      <dt class="text-lg leading-6 font-bold text-graydarkest">
                        Licensing
                      </dt>
                      <dd class="mt-2 mb-5 text-base text-graydarkest">
                        Barcode Essentials™ licensing is device based, and each device that synchronizes with your server needs its own license. 
                      </dd>
                      <ul>
                        <li class="flex mb-2 items-start">
                          <span class="bg-white rounded-full mr-2 flex justify-center items-center">
                            <svg class="w-6 h-6 inline text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path></svg>
                          </span> 
                          <span class="text-base">How licensing works?</span>
                        </li>
                        <li class="flex mb-2 items-start">
                          <span class="bg-white rounded-full mr-2 flex justify-center items-center">
                            <svg class="w-6 h-6 inline text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path></svg>
                          </span> 
                          <span class="text-base">Required license counts</span>
                        </li>
                        <li class="flex mb-2 items-start">
                          <span class="bg-white rounded-full mr-2 flex justify-center items-center">
                            <svg class="w-6 h-6 inline text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path></svg>
                          </span> 
                          <span class="text-base">Installing licenses</span>
                        </li>
                        <li class="flex mb-2 items-start">
                          <span class="bg-white rounded-full mr-2 flex justify-center items-center">
                            <svg class="w-6 h-6 inline text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path></svg>
                          </span> 
                          <span class="text-base">Backing up licenses</span>
                        </li>
                        <li class="flex mb-2 items-start">
                          <span class="bg-white rounded-full mr-2 flex justify-center items-center">
                            <svg class="w-6 h-6 inline text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path></svg>
                          </span> 
                          <span class="text-base">What are license crossgrades?</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </dl>
            </div>
          </div>
        </div>
        <div class="bg-white">
          <div class="container">
            <div class="pt-8 grid mt-20 md:grid-cols-2 md:gap-16 md:pt-16">
              <div class="flex justify-center mb-6 md:mb-0">
                <img class="object-center h-48 w-auto sm:h-96" src="./images/img-videos.svg" />
              </div>
              <div class="md:pt-14 md:text-left">
                <div class="flex items-start flex-col flex-nowrap mb-6">
                  <h2 class="heading text-black mb-4">Videos</h2>
                  <span class="w-24 h-1 mb-0 bg-primary"></span>
                </div>
                <div>
                  <p class="font-bold mb-4">Discover Barcode Essentials and get your asset team moving.</p>
                  <ul>
                    <li class="flex mb-2 items-start">
                      <svg class="w-5 h-5 text-primary mr-3" stroke="currentColor" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 21">
                        <path class="st0" d="M23.9 3.7c-.3-2.1-2-3.7-4.2-3.7H5C2.6 0 .7 2 .7 4.3v12.9c.3 2.1 2.1 3.7 4.2 3.7h14.7c2.4 0 4.3-1.9 4.3-4.3V3.7zM5 19.6c-1.7 0-3.1-1.4-3.1-3.1V4.3c0-.8.3-1.6.9-2.2.6-.5 1.4-.8 2.2-.8h14.7c1.7 0 3.1 1.4 3.1 3.1v12.2c0 .8-.3 1.6-.9 2.2-.6.6-1.3.9-2.2.9H5z"></path>
                        <path class="st0" d="M3.8 2.5c-.3 0-.6.3-.6.6v2.4h1.2V3.7h1.8V2.5H3.8zM3.2 6.8h1.2V8H3.2zM15.7 9.3l-4.9-2.4c-.1 0-.2-.1-.3-.1-.3 0-.6.3-.6.6v4.9c0 .3.3.6.6.6.1 0 .2 0 .3-.1l4.9-2.4.3-.3c.1-.3 0-.7-.3-.8zM9.3 15.3h8.6v1.2H9.3zM19.1 15.3h1.2v1.2h-1.2z"></path>
                      </svg>
                      <a class="underline hover:no-underline" href="#">Barcode Essentials Features and Licensing</a>
                    </li>
                    <li class="flex mb-2 items-start">
                      <svg class="w-5 h-5 text-primary mr-3" stroke="currentColor" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 21">
                        <path class="st0" d="M23.9 3.7c-.3-2.1-2-3.7-4.2-3.7H5C2.6 0 .7 2 .7 4.3v12.9c.3 2.1 2.1 3.7 4.2 3.7h14.7c2.4 0 4.3-1.9 4.3-4.3V3.7zM5 19.6c-1.7 0-3.1-1.4-3.1-3.1V4.3c0-.8.3-1.6.9-2.2.6-.5 1.4-.8 2.2-.8h14.7c1.7 0 3.1 1.4 3.1 3.1v12.2c0 .8-.3 1.6-.9 2.2-.6.6-1.3.9-2.2.9H5z"></path>
                        <path class="st0" d="M3.8 2.5c-.3 0-.6.3-.6.6v2.4h1.2V3.7h1.8V2.5H3.8zM3.2 6.8h1.2V8H3.2zM15.7 9.3l-4.9-2.4c-.1 0-.2-.1-.3-.1-.3 0-.6.3-.6.6v4.9c0 .3.3.6.6.6.1 0 .2 0 .3-.1l4.9-2.4.3-.3c.1-.3 0-.7-.3-.8zM9.3 15.3h8.6v1.2H9.3zM19.1 15.3h1.2v1.2h-1.2z"></path>
                      </svg>
                      <a class="underline hover:no-underline" href="#">Video 1: Getting Started</a>
                    </li>
                    <li class="flex mb-2 items-start">
                      <svg class="w-5 h-5 text-primary mr-3" stroke="currentColor" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 21">
                        <path class="st0" d="M23.9 3.7c-.3-2.1-2-3.7-4.2-3.7H5C2.6 0 .7 2 .7 4.3v12.9c.3 2.1 2.1 3.7 4.2 3.7h14.7c2.4 0 4.3-1.9 4.3-4.3V3.7zM5 19.6c-1.7 0-3.1-1.4-3.1-3.1V4.3c0-.8.3-1.6.9-2.2.6-.5 1.4-.8 2.2-.8h14.7c1.7 0 3.1 1.4 3.1 3.1v12.2c0 .8-.3 1.6-.9 2.2-.6.6-1.3.9-2.2.9H5z"></path>
                        <path class="st0" d="M3.8 2.5c-.3 0-.6.3-.6.6v2.4h1.2V3.7h1.8V2.5H3.8zM3.2 6.8h1.2V8H3.2zM15.7 9.3l-4.9-2.4c-.1 0-.2-.1-.3-.1-.3 0-.6.3-.6.6v4.9c0 .3.3.6.6.6.1 0 .2 0 .3-.1l4.9-2.4.3-.3c.1-.3 0-.7-.3-.8zM9.3 15.3h8.6v1.2H9.3zM19.1 15.3h1.2v1.2h-1.2z"></path>
                      </svg>
                      <a class="underline hover:no-underline" href="#">Video 2: Enrolling Fixed Assets using Receiving</a>
                    </li>
                    <li class="flex mb-2 items-start">
                      <svg class="w-5 h-5 text-primary mr-3" stroke="currentColor" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 21">
                        <path class="st0" d="M23.9 3.7c-.3-2.1-2-3.7-4.2-3.7H5C2.6 0 .7 2 .7 4.3v12.9c.3 2.1 2.1 3.7 4.2 3.7h14.7c2.4 0 4.3-1.9 4.3-4.3V3.7zM5 19.6c-1.7 0-3.1-1.4-3.1-3.1V4.3c0-.8.3-1.6.9-2.2.6-.5 1.4-.8 2.2-.8h14.7c1.7 0 3.1 1.4 3.1 3.1v12.2c0 .8-.3 1.6-.9 2.2-.6.6-1.3.9-2.2.9H5z"></path>
                        <path class="st0" d="M3.8 2.5c-.3 0-.6.3-.6.6v2.4h1.2V3.7h1.8V2.5H3.8zM3.2 6.8h1.2V8H3.2zM15.7 9.3l-4.9-2.4c-.1 0-.2-.1-.3-.1-.3 0-.6.3-.6.6v4.9c0 .3.3.6.6.6.1 0 .2 0 .3-.1l4.9-2.4.3-.3c.1-.3 0-.7-.3-.8zM9.3 15.3h8.6v1.2H9.3zM19.1 15.3h1.2v1.2h-1.2z"></path>
                      </svg>
                      <a class="underline hover:no-underline" href="#">Video 3: Looking Up Fixed Assets using Search</a>
                    </li>
                    <li class="flex mb-2 items-start">
                      <svg class="w-5 h-5 text-primary mr-3" stroke="currentColor" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 21">
                        <path class="st0" d="M23.9 3.7c-.3-2.1-2-3.7-4.2-3.7H5C2.6 0 .7 2 .7 4.3v12.9c.3 2.1 2.1 3.7 4.2 3.7h14.7c2.4 0 4.3-1.9 4.3-4.3V3.7zM5 19.6c-1.7 0-3.1-1.4-3.1-3.1V4.3c0-.8.3-1.6.9-2.2.6-.5 1.4-.8 2.2-.8h14.7c1.7 0 3.1 1.4 3.1 3.1v12.2c0 .8-.3 1.6-.9 2.2-.6.6-1.3.9-2.2.9H5z"></path>
                        <path class="st0" d="M3.8 2.5c-.3 0-.6.3-.6.6v2.4h1.2V3.7h1.8V2.5H3.8zM3.2 6.8h1.2V8H3.2zM15.7 9.3l-4.9-2.4c-.1 0-.2-.1-.3-.1-.3 0-.6.3-.6.6v4.9c0 .3.3.6.6.6.1 0 .2 0 .3-.1l4.9-2.4.3-.3c.1-.3 0-.7-.3-.8zM9.3 15.3h8.6v1.2H9.3zM19.1 15.3h1.2v1.2h-1.2z"></path>
                      </svg>
                      <a class="underline hover:no-underline" href="#">Video 4: Updating Multiple Assets using Quick Scan</a>
                    </li>
                  </ul>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        <div class="bg-white bg-bg-demo bg-right-top bg-no-repeat bg-1/2 lg:bg-contain">
          <div class="container pt-36 lg:pt-48 pb-10 mb-12 md:-mt-24">
            <div class="max-w-lg px-4 sm:px-6">
              <div class="flex items-start flex-col flex-nowrap mb-6">
                <h2 class="heading text-black mb-4">Demo Scenarios</h2>
                <span class="w-24 h-1 mb-5 bg-primary"></span>
                <h3 class="text-graydarkest text-lg font-bold mb-5">These interactive scenarios help tell the story of how each of the three main flows work in Barcode Essentials.</h3>
                <p class="mb-5">Download the PDF file and follow the step-by-step instructions. Each scenario takes between 5 and 10 minutes to complete.</p>
                <p class="mb-5">All you need is an Internet connection so your device can sync with our free, public demo server.</p>
              </div>
              <ul>
                <li class="flex mb-2 items-start">
                  <svg class="w-5 h-5 mr-3 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 24"><path d="M17.3 4.7L13.4.8c-.4-.4-1-.7-1.6-.7H2.2C1 .1 0 1.1 0 2.4v19.4C0 23 1 24 2.2 24h13.5c1.2 0 2.2-1 2.2-2.2V6.3c0-.6-.2-1.2-.6-1.6zm-1.8 1.4H12V2.5l3.5 3.6zM2.2 21.8V2.4h7.5v4.9c0 .6.5 1.1 1.1 1.1h4.9v13.5H2.2zm11.7-6.7c-.6-.6-2.2-.4-3-.3-.8-.5-1.3-1.2-1.7-2.2.2-.8.5-1.9.3-2.6-.2-1.2-1.8-1.1-2-.3-.2.8 0 1.8.3 3.1-.5 1.1-1.2 2.6-1.7 3.5-.9.5-2.2 1.2-2.4 2.2-.1.7 1.3 2.6 3.6-1.5 1-.3 2.2-.8 3.2-.9.9.5 1.9.8 2.6.8 1.2 0 1.3-1.3.8-1.8zm-9.2 3.6c.2-.6 1.1-1.4 1.4-1.6-.9 1.4-1.4 1.7-1.4 1.6zm3.8-8.9c.3 0 .3 1.5.1 1.9-.2-.6-.2-1.9-.1-1.9zm-1.1 6.4c.5-.8.8-1.7 1.2-2.6.4.7.9 1.3 1.4 1.7-1.1.2-1.9.6-2.6.9zm6.1-.2s-.2.3-1.7-.4c1.6-.1 1.9.3 1.7.4z" fill="#48ba13"></path></svg>
                  <a class="underline hover:no-underline" href="#" title="Scenario 1: Quick Scan">Scenario 1: Quick Scan</a>
                </li>
                <li class="flex mb-2 items-start">
                  <svg class="w-5 h-5 mr-3 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 24"><path d="M17.3 4.7L13.4.8c-.4-.4-1-.7-1.6-.7H2.2C1 .1 0 1.1 0 2.4v19.4C0 23 1 24 2.2 24h13.5c1.2 0 2.2-1 2.2-2.2V6.3c0-.6-.2-1.2-.6-1.6zm-1.8 1.4H12V2.5l3.5 3.6zM2.2 21.8V2.4h7.5v4.9c0 .6.5 1.1 1.1 1.1h4.9v13.5H2.2zm11.7-6.7c-.6-.6-2.2-.4-3-.3-.8-.5-1.3-1.2-1.7-2.2.2-.8.5-1.9.3-2.6-.2-1.2-1.8-1.1-2-.3-.2.8 0 1.8.3 3.1-.5 1.1-1.2 2.6-1.7 3.5-.9.5-2.2 1.2-2.4 2.2-.1.7 1.3 2.6 3.6-1.5 1-.3 2.2-.8 3.2-.9.9.5 1.9.8 2.6.8 1.2 0 1.3-1.3.8-1.8zm-9.2 3.6c.2-.6 1.1-1.4 1.4-1.6-.9 1.4-1.4 1.7-1.4 1.6zm3.8-8.9c.3 0 .3 1.5.1 1.9-.2-.6-.2-1.9-.1-1.9zm-1.1 6.4c.5-.8.8-1.7 1.2-2.6.4.7.9 1.3 1.4 1.7-1.1.2-1.9.6-2.6.9zm6.1-.2s-.2.3-1.7-.4c1.6-.1 1.9.3 1.7.4z" fill="#48ba13"></path></svg>
                  <a class="underline hover:no-underline" href="#" title="Scenario 1: Quick Scan">Scenario 2: Receiving</a>
                </li>
                <li class="flex mb-2 items-start">
                  <svg class="w-5 h-5 mr-3 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 24"><path d="M17.3 4.7L13.4.8c-.4-.4-1-.7-1.6-.7H2.2C1 .1 0 1.1 0 2.4v19.4C0 23 1 24 2.2 24h13.5c1.2 0 2.2-1 2.2-2.2V6.3c0-.6-.2-1.2-.6-1.6zm-1.8 1.4H12V2.5l3.5 3.6zM2.2 21.8V2.4h7.5v4.9c0 .6.5 1.1 1.1 1.1h4.9v13.5H2.2zm11.7-6.7c-.6-.6-2.2-.4-3-.3-.8-.5-1.3-1.2-1.7-2.2.2-.8.5-1.9.3-2.6-.2-1.2-1.8-1.1-2-.3-.2.8 0 1.8.3 3.1-.5 1.1-1.2 2.6-1.7 3.5-.9.5-2.2 1.2-2.4 2.2-.1.7 1.3 2.6 3.6-1.5 1-.3 2.2-.8 3.2-.9.9.5 1.9.8 2.6.8 1.2 0 1.3-1.3.8-1.8zm-9.2 3.6c.2-.6 1.1-1.4 1.4-1.6-.9 1.4-1.4 1.7-1.4 1.6zm3.8-8.9c.3 0 .3 1.5.1 1.9-.2-.6-.2-1.9-.1-1.9zm-1.1 6.4c.5-.8.8-1.7 1.2-2.6.4.7.9 1.3 1.4 1.7-1.1.2-1.9.6-2.6.9zm6.1-.2s-.2.3-1.7-.4c1.6-.1 1.9.3 1.7.4z" fill="#48ba13"></path></svg>
                  <a class="underline hover:no-underline" href="#" title="Scenario 1: Quick Scan">Scenario 3: Search</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="bg-white">
          <div class="container">
            <div class="pt-2 pb-8 grid mb-20 lg:pt-8 md:grid-cols-2 md:gap-16 md:pb-16">
              <div class="flex justify-center mb-6 md:mb-0">
                <img class="object-center h-48 w-auto sm:h-96" src="./images/img-on-ground.svg" />
              </div>
              <div class="md:pt-14 md:text-left">
                <div class="flex items-center flex-col flex-nowrap mb-6 md:items-start">
                  <h2 class="heading text-black mb-4">On-ground support </h2>
                  <span class="w-24 h-1 mb-5 bg-primary"></span>
                  <p class="font-bold">Can't find what you're looking for?</p>
                  <p class="mb-5">Send us a message and we'll reply as soon as possible.</p>
                  <a href="#" class="px-5 py-3 btn-primary btn-secondary flex justify-center">
                    <svg class="w-6 h-6 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M22.2 8.1L13 12.3c-.4.2-.8.6-1 1l-4.2 9.2c-.5 1.1.6 2.2 1.7 1.7l9.2-4.2c.4-.2.8-.6 1-1l4.2-9.2c.5-1.1-.6-2.2-1.7-1.7zm-4.9 9.5c-.8.8-2.1.8-2.9 0-.8-.8-.8-2.1 0-2.9.8-.8 2.1-.8 2.9 0 .8.8.8 2.1 0 2.9zM15.9.3C7.1.3 0 7.4 0 16.1S7.1 32 15.9 32s15.9-7.1 15.9-15.9S24.6.3 15.9.3zm0 28.6c-7.1 0-12.8-5.7-12.8-12.8S8.8 3.4 15.9 3.4s12.8 5.7 12.8 12.8-5.8 12.7-12.8 12.7z" fill="#fff"/></svg>
                    Find a Distributor
                  </a>
                </div>
              </div>
            </div>
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