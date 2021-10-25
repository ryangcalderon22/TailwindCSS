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
            <div class="flex justify-center mb-6 md:mb-0">
              <img class="object-center h-48 w-auto sm:h-96" src="./images/img-hero-gs.svg" />
            </div>
            <div class="text-center md:pr-32 md:pt-14 md:text-left">
              <h2 class="heading text-graydarker">
                <span>Turn your iOS device into a Barcode Scanner and manage assets in the field.</span>
              </h2>
              <p class="text-graydarker font-body mb-4 md:mb-6">Get started now! Youʼll be up and running in no time</p>
              <a href="#" class="px-5 py-3 btn-primary shadow-md">
                Sign up for a free trial
              </a>
            </div>
          </div>
        </div>
      </div>
      <main>
        <div class="bg-gray-100 pt-12 pb-10 lg:pb-0">
          <div class="container lg:max-h-72 lg:mb-0">
            <div class="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
              <div class="flex items-center flex-col flex-nowrap mb-12">
                <h2 class="heading text-black mb-4">Barcode Essentials lets you:</h2>
                <span class="w-24 h-1 bg-primary"></span>
              </div>
              <dl class="space-y-10 md:grid md:grid-cols-2 md:space-y-0 lg:grid-cols-4 md:gap-8 md:-mb-36">
                <div class="bg-white shadow-md py-8 px-8">
                  <div class="flex items-center justify-center">
                    <img class="object-center h-20 w-20" src="./images/icon-feature-01.svg" />
                  </div>
                  <div class="mt-5">
                    <dt class="text-center text-lg leading-6 font-bold text-graydarkest">
                      Work with barcode data
                    </dt>
                    <dd class="mt-2 text-base text-graydarkest text-center">
                      SMP console <span class="block">(7.6 & 8.0+)</span>
                    </dd>
                  </div>
                </div>

                <div class="bg-white shadow-md py-8 px-8">
                  <div class="flex items-center justify-center">
                    <img class="object-center h-20 w-20" src="./images/icon-feature-05.svg" />
                  </div>
                  <div class="mt-5">
                    <dt class="text-center text-lg leading-6 font-bold text-graydarkest">
                      Secure download
                    </dt>
                    <dd class="mt-2 text-base text-graydarkest text-center">
                      Securely download asset data from your Symantec™ CMDB to an iOS device
                    </dd>
                  </div>
                </div>

                <div class="bg-white shadow-md py-8 px-8">
                  <div class="flex items-center justify-center">
                    <img class="object-center h-20 w-20" src="./images/icon-feature-06.svg" />
                  </div>
                  <div class="mt-5">
                    <dt class="text-center text-lg leading-6 font-bold text-graydarkest">
                      Scanning workflows
                    </dt>
                    <dd class="mt-2 text-base text-graydarkest text-center">
                      Work with assets anywhere using powerful scanning workflows
                    </dd>
                  </div>
                </div>

                <div class="bg-white shadow-md py-8 px-8">
                  <div class="flex items-center justify-center">
                    <img class="object-center h-20 w-20" src="./images/icon-feature-07.svg" />
                  </div>
                  <div class="mt-5">
                    <dt class="text-center text-lg leading-6 font-bold text-graydarkest">
                      Sync
                    </dt>
                    <dd class="mt-2 text-base text-graydarkest text-center">
                      Synchronize asset data wirelessly in the field
                    </dd>
                  </div>
                </div>
              </dl>
            </div>
          </div>
        </div>
        <div class="bg-white lg:pt-16">
          <div class="container">
            <div class="py-8 grid md:grid-cols-2 md:gap-16 md:py-16">
              <div class="flex justify-center mb-6 md:mb-0">
                <img class="object-center h-48 w-auto sm:h-96" src="./images/img-hero-gs-02.svg" />
              </div>
              <div class="text-center md:pr-8 md:pt-14 md:text-left">
                <h2 class="heading text-graydarker">
                  <span>Works with:</span>
                </h2>
                <div class="bg-white shadow-md px-4 py-4 border-gray-200 border border-opacity-50">
                  <ul class="text-graydarkest">
                    <li class="flex mb-2 md:items-start">
                      <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 49"><path d="M38.7 23.1c0 10.6-8.6 19.2-19.2 19.2S.3 33.7.3 23.1v-.7C.6 11.7 9.5 3.5 20.2 3.8c10.3.4 18.5 8.9 18.5 19.3z" opacity=".5" fill="#39b54a"/><path d="M36.9 30.6v.7c-4.5 9.6-16 13.7-25.6 9.2-6.7-3.2-11-10-11-17.4v-.7c4.5-9.6 16-13.7 25.6-9.2 6.7 3.1 10.9 9.9 11 17.4z" opacity=".5" fill="#48ba13"/><path fill="#fff" d="M6.6 18.9l4-3 5.6 7.4L38 5.4l3.2 3.9-25.9 21.2z"/><path fill="none" stroke="#48ba13" stroke-miterlimit="10" d="M6.6 18.9l4-3 5.6 7.4L38 5.4l3.2 3.9-25.9 21.2z"/></svg>
                      <span class="ml-2 text-sm lg:text-lg leading-5 font-bold">SMP 7.1 - 7.5 running <span class="block leading-none">Symantec Barcode Solution *</span></span>
                    </li>
                    <li class="flex mb-2 md:items-center">
                      <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 49"><path d="M38.7 23.1c0 10.6-8.6 19.2-19.2 19.2S.3 33.7.3 23.1v-.7C.6 11.7 9.5 3.5 20.2 3.8c10.3.4 18.5 8.9 18.5 19.3z" opacity=".5" fill="#39b54a"/><path d="M36.9 30.6v.7c-4.5 9.6-16 13.7-25.6 9.2-6.7-3.2-11-10-11-17.4v-.7c4.5-9.6 16-13.7 25.6-9.2 6.7 3.1 10.9 9.9 11 17.4z" opacity=".5" fill="#48ba13"/><path fill="#fff" d="M6.6 18.9l4-3 5.6 7.4L38 5.4l3.2 3.9-25.9 21.2z"/><path fill="none" stroke="#48ba13" stroke-miterlimit="10" d="M6.6 18.9l4-3 5.6 7.4L38 5.4l3.2 3.9-25.9 21.2z"/></svg>
                      <span class="ml-2 text-sm lg:text-lg leading-5 font-bold">SMP 7.6+</span>
                    </li>
                    <li class="flex mb-2 md:items-center">
                      <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 49"><path d="M38.7 23.1c0 10.6-8.6 19.2-19.2 19.2S.3 33.7.3 23.1v-.7C.6 11.7 9.5 3.5 20.2 3.8c10.3.4 18.5 8.9 18.5 19.3z" opacity=".5" fill="#39b54a"/><path d="M36.9 30.6v.7c-4.5 9.6-16 13.7-25.6 9.2-6.7-3.2-11-10-11-17.4v-.7c4.5-9.6 16-13.7 25.6-9.2 6.7 3.1 10.9 9.9 11 17.4z" opacity=".5" fill="#48ba13"/><path fill="#fff" d="M6.6 18.9l4-3 5.6 7.4L38 5.4l3.2 3.9-25.9 21.2z"/><path fill="none" stroke="#48ba13" stroke-miterlimit="10" d="M6.6 18.9l4-3 5.6 7.4L38 5.4l3.2 3.9-25.9 21.2z"/></svg>
                      <span class="ml-2 text-sm lg:text-lg leading-5 font-bold">SMP 8.0+</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-100">
          <div class="container py-10 my-12">
            <div class="flex items-center flex-col flex-nowrap mb-12">
              <h2 class="heading text-primary mb-4">Applying it to your business</h2>
              <p class="text-gray-700">Would you like to run a proof of concept for your management team?</p>
            </div>
            <div class="grid sm:grid-cols-2 sm:gap-16">
              <div class="bg-white shadow-md p-6 mb-8 sm:p-10 sm:mb-0">
                <h3 class="font-bold text-green-shadow text-lg leading-4 mb-4">Ask about our Free Enterprise Trial option today.</h3>
                <p class="mb-2 text-green-shadow">Receiving stock, allocating assets to users, managing simple daily updates and auditing what you have are just some of workflows that you can achieve with Barcode Essentials™ - and for the first time, with very little set up or training required. </p>
                <p class="mb-2 text-green-shadow">Best of all you can try Barcode Essentials by downloading it from the <span class="font-heading">Apple App Store </span>directly to your own iOS device. All app features are available without restriction for 7 days, at no cost to you.</p>
              </div>
              <div class="bg-green-midtone shadow-md p-6 md:p-10">
                <ul class="text-white">
                  <li class="flex mb-2 md:items-center">
                    <span class="bg-white rounded-full w-4 h-4 flex justify-center items-center">
                      <svg class="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                    </span>
                    <span class="ml-2 text-sm lg:text-lg leading-5 font-bold">New hardware cost is low</span>
                  </li>
                  <li class="flex mb-2 md:items-center">
                    <span class="bg-white rounded-full w-4 h-4 flex justify-center items-center">
                      <svg class="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                    </span>
                    <span class="ml-2 text-sm lg:text-lg leading-5 font-bold">Trial it using devices you already have</span>
                  </li>
                  <li class="flex mb-2 md:items-center">
                    <span class="bg-white rounded-full w-4 h-4 flex justify-center items-center">
                      <svg class="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                    </span>
                    <span class="ml-2 text-sm lg:text-lg leading-5 font-bold">Multiplied returns on your iOS fleet</span>
                  </li>
                  <li class="flex mb-2 md:items-center">
                    <span class="bg-white rounded-full w-4 h-4 flex justify-center items-center">
                      <svg class="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                    </span>
                    <span class="ml-2 text-sm lg:text-lg leading-5 font-bold">No special hardware training needed</span>
                  </li>
                  <li class="flex mb-2 md:items-center">
                    <span class="bg-white rounded-full w-4 h-4 flex justify-center items-center">
                      <svg class="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                    </span>
                    <span class="ml-2 text-sm lg:text-lg leading-5 font-bold">100% wireless usage in the field</span>
                  </li>
                  <li class="flex mb-2 md:items-center">
                    <span class="bg-white rounded-full w-4 h-4 flex justify-center items-center">
                      <svg class="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                    </span>
                    <span class="ml-2 text-sm lg:text-lg leading-5 font-bold">Wireless (Over the Air) provisioning</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white">
          <div class="container py-10 my-12">
            <div class="sm:max-w-5xl sm:mx-auto">
              <div class="flex items-center flex-col flex-nowrap mb-12">
                <h2 class="heading text-primary mb-4">How it works?</h2>
                <p class="text-gray-700">Typical asset workflows</p>
              </div>
              <div class="flex items-center mb-12">
                <h2 class="heading leading-none text-lg text-graydarker mb-0 min-w-max mr-2">Asset creation and assignment</h2>
                <span class="h-1 w-full bg-gray-100"></span>
              </div>
              <div class="hidden sm:flex sm:items-center sm:mb-12 sm:gap-20">
                <div>
                  <div class="mb-12">
                    <div class="flex items-center justify-center">
                      <img class="object-center h-42 w-auto md:h-72" src="./images/img-asset-01.svg" />
                    </div>
                    <div class="mt-5">
                      <dt class="text-lg leading-6 font-bold text-graydarkest">
                        Receiving to Stock Room
                      </dt>
                      <dd class="mt-2 text-base text-graydarkest">
                        The moment new assets enter the organisation is the right time to scan and identify them, and mark their location and status before distributing them to stockroom or to users.
                      </dd>
                    </div>
                  </div>
                  <div>
                    <div class="flex items-center justify-center">
                      <img class="object-center h-42 w-auto md:h-72" src="./images/img-asset-03.svg" />
                    </div>
                    <div class="mt-5">
                      <dt class="text-lg leading-6 font-bold text-graydarkest">
                        Assigning to Owners
                      </dt>
                      <dd class="mt-2 text-base text-graydarkest">
                        Once an asset is delivered to its intended user, its owner property can be updated or confirmed for accurate reporting and cost center allocation.
                      </dd>
                    </div>
                  </div>
                </div>
                <div>
                  <img class="object-center h-24 w-auto" src="./images/img-asset-arrow.svg" />
                  <div class="flex items-center justify-center">
                    <img class="object-center h-42 w-auto md:h-72" src="./images/img-asset-02.svg" />
                  </div>
                  <div class="mt-5">
                    <dt class="text-lg leading-6 font-bold text-graydarkest">
                      Checking out items
                    </dt>
                    <dd class="mt-2 text-base text-graydarkest">
                      Assets are then checked out from Stock Room and made available for distribution within the organization simply by scanning and updating their location and status.
                    </dd>
                  </div>
                  <img class="object-center h-24 w-auto ml-12 mt-4" src="./images/img-asset-arrow-02.svg" />
                </div>
              </div>
            </div>
            <div class="mb-8 sm:hidden">
              <div class="mb-6">
                <div class="flex items-center justify-center">
                  <img class="object-center h-42 w-auto md:h-72" src="./images/img-asset-01.svg" />
                </div>
                <div class="mt-5">
                  <dt class="text-center text-lg leading-6 font-bold text-graydarkest">
                    Receiving to Stock Room
                  </dt>
                  <dd class="mt-2 text-base text-graydarkest text-center">
                    The moment new assets enter the organisation is the right time to scan and identify them, and mark their location and status before distributing them to stockroom or to users.
                  </dd>
                </div>
              </div>
              <div class="mb-6">
                <div class="flex items-center justify-center">
                  <img class="object-center h-42 w-auto md:h-72" src="./images/img-asset-02.svg" />
                </div>
                <div class="mt-5">
                  <dt class="text-center text-lg leading-6 font-bold text-graydarkest">
                    Checking out items
                  </dt>
                  <dd class="mt-2 text-base text-graydarkest text-center">
                    Assets are then checked out from Stock Room and made available for distribution within the organization simply by scanning and updating their location and status.
                  </dd>
                </div>
              </div>
              <div>
                <div class="flex items-center justify-center">
                  <img class="object-center h-42 w-auto md:h-72" src="./images/img-asset-03.svg" />
                </div>
                <div class="mt-5">
                  <dt class="text-center text-lg leading-6 font-bold text-graydarkest">
                    Assigning to Owners
                  </dt>
                  <dd class="mt-2 text-base text-graydarkest text-center">
                    Once an asset is delivered to its intended user, its owner property can be updated or confirmed for accurate reporting and cost center allocation.
                  </dd>
                </div>
              </div>
            </div>
            <div class="mb-8 sm:max-w-5xl sm:mx-auto sm:mb-0">
              <div class="flex items-center mb-12">
                <h2 class="heading leading-none text-lg text-graydarker mb-0 min-w-max mr-2">Changing owners</h2>
                <span class="h-1 w-full bg-gray-100"></span>
              </div>
              <div class="sm:flex sm:items-center sm:mb-12 sm:gap-20">
                <div>
                  <div class="flex items-center justify-center mb-8 sm:mb-0">
                    <img class="object-center h-42 w-auto md:h-72" src="./images/img-asset-04.svg" />
                  </div>
                </div>
                <div>
                  <dt class="text-lg text-center leading-6 font-bold text-graydarkest sm:text-left">
                    Re-assigning Assets
                  </dt>
                  <dd class="mt-2 text-base text-graydarkest text-center sm:text-left">
                    Where assets need to be re-assigned from one user to another, simply scan them to update the new owner detail's.
                  </dd>
                </div>
              </div>
            </div>
            <div class="sm:max-w-5xl sm:mx-auto">
              <div class="flex items-center mb-12">
                <h2 class="heading leading-none text-lg text-graydarker mb-0 min-w-max mr-2">Retiring an asset</h2>
                <span class="h-1 w-full bg-gray-100"></span>
              </div>
              <div class="sm:flex sm:items-center sm:mb-12 sm:gap-20">
                <div>
                  <div class="flex items-center justify-center mb-8 sm:mb-0">
                    <img class="object-center h-42 w-auto md:h-72" src="./images/img-asset-05.svg" />
                  </div>
                </div>
                <div>
                  <dt class="text-lg text-center leading-6 font-bold text-graydarkest sm:text-left">
                    Asset Disposal
                  </dt>
                  <dd class="mt-2 text-base text-graydarkest text-center sm:text-left">
                    An asset's End of Life has direct implications for ledger accounts, depreciation and insurance. Dispose of an assset by scanning and updating the final status and location.
                  </dd>
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