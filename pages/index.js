import Head from 'next/head'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import CallToAction from '../components/CallToAction'
import IconGrid from '../components/IconGrid'

export default function Home() {
  return (
    <div class="bg-white">
      <Navigation />
      <div class="bg-gradient-to-r from-green-light via-brand-primary to-green-dark">
        <div class="container">
          <div class="py-16 grid md:grid-cols-2 md:gap-16">
            <div class="flex justify-center mb-6 sm:mb-0">
              <img class="object-center h-48 w-auto sm:h-72" src="./images/img-hero.svg" />
            </div>
            <div class="mt-4 text-center md:mt-0 md:text-left">
              <h2 class="heading">
                <span>Fixed asset inventory management for the Symantec Management Platform</span>
              </h2>
              <p class="text-white font-body font-bold mb-4 md:mb-6">Work with your assets in the field using barcode-based mobile fixed asset workflows by building on the CMDB infrastructure you already have and eliminating the need to buy new hardware by turning mobile devices you already own into all-in-one barcode scanners.</p>
              <a href="#" class="px-5 py-3 btn-primary shadow-md">
                Get Started for FREE
              </a>
            </div>
          </div>
        </div>
      </div>
      <main>
        <div class="pt-16 pb-8">
          <div class="text-center container md:px-20 sm:max-w-5xl">
            <h2 class="heading text-graydarkest mb-2 leading-none">Why Barcode Essentials™?</h2>
            <p>It's the fastest way to get moving with asset management in the field</p>
            <div class="relative mx-auto my-6 w-full rounded-lg shadow-lg">
              <button type="button" class="relative block w-full bg-white overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span class="sr-only">Watch our video to learn more</span>
                <img class="w-full" src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80" />
                <div class="absolute inset-0 w-full h-full flex items-center justify-center" aria-hidden="true">
                  <svg class="h-20 w-20 text-black" fill="currentColor" viewBox="0 0 84 84">
                    <circle opacity="0.9" cx="42" cy="42" r="42" fill="white"></circle>
                    <path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z"></path>
                  </svg>
                </div>
              </button>
            </div>
            <p class="font-bold text-gray-500">Building on the CMDB infrastructure you already have and eliminating the need to buy new hardware by turning the iOS devices you already own into all-in-one barcode scanners.</p>
          </div>
        </div>
        <div class="bg-graydarkest">
          <div class="container sm:max-w-5xl py-10 my-12">
            <div class="grid sm:grid-cols-2 sm:gap-16">
              <div class="bg-primary -mt-16 sm:-my-16 p-6 sm:p-10">
                <h3 class="font-bold text-white text-xl leading-6 mb-4">Barcode Essentials™ on Mobile Devices</h3>
                <ul class="text-white pl-6">
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
              <div class="mt-5 sm:mt-0">
                <h3 class="text-white font-bold mb-4">Conventional devices</h3>
                <ul class="ml-2">
                  <li class="flex mb-2 md:items-center">
                    <span class="bg-white rounded-sm w-4 h-4 flex justify-center items-center">
                      <svg class="w-6 h-6 text-graydarkest" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path></svg>
                    </span>
                    <span class="ml-3 text-sm lg:text-base leading-5 text-white">High capital spend to get started</span>
                  </li>
                  <li class="flex mb-2 md:items-center">
                    <span class="bg-white rounded-sm w-4 h-4 flex justify-center items-center">
                      <svg class="w-6 h-6 text-graydarkest" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path></svg>
                    </span>
                    <span class="ml-3 text-sm lg:text-base leading-5 text-white">Limited hardware trial options</span>
                  </li>
                  <li class="flex mb-2 md:items-center">
                    <span class="bg-white rounded-sm w-4 h-4 flex justify-center items-center">
                      <svg class="w-6 h-6 text-graydarkest" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path></svg>
                    </span>
                    <span class="ml-3 text-sm lg:text-base leading-5 text-white">Low returns from single-purpose tools</span>
                  </li>
                  <li class="flex mb-2 md:items-center">
                    <span class="bg-white rounded-sm w-4 h-4 flex justify-center items-center">
                      <svg class="w-6 h-6 text-graydarkest" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path></svg>
                    </span>
                    <span class="ml-3 text-sm lg:text-base leading-5 text-white">Requires user training</span>
                  </li>
                  <li class="flex mb-2 md:items-center">
                    <span class="bg-white rounded-sm w-4 h-4 flex justify-center items-center">
                      <svg class="w-6 h-6 text-graydarkest" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path></svg>
                    </span>
                    <span class="ml-3 text-sm lg:text-base leading-5 text-white">Desktop / tethered management</span>
                  </li>
                  <li class="flex mb-2 md:items-center">
                    <span class="bg-white rounded-sm w-4 h-4 flex justify-center items-center">
                      <svg class="w-6 h-6 text-graydarkest" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path></svg>
                    </span>
                    <span class="ml-3 text-sm lg:text-base leading-5 text-white">Return-to-base provisioning</span>
                  </li>
                  <li class="flex mb-2 md:items-center">
                    <span class="bg-white rounded-sm w-4 h-4 flex justify-center items-center">
                      <svg class="w-6 h-6 text-graydarkest" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path></svg>
                    </span>
                    <span class="ml-3 text-sm lg:text-base leading-5 text-white">Specialized servicing</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="py-12">
          <div class="container lg:max-w-7xl lg:px-8">
            <div class="flex items-center flex-col flex-nowrap mb-12">
              <h2 class="heading text-black mb-4">Product features</h2>
              <span class="w-24 h-1 bg-primary"></span>
            </div>
            <dl class="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-8 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-8">
              <div>
                <div class="flex items-center justify-center">
                  <img class="object-center h-20 w-20" src="./images/icon-feature-01.svg" />
                </div>
                <div class="mt-5">
                  <dt class="text-center text-lg leading-6 font-bold text-graydarkest">
                    Get full control of your assets
                  </dt>
                  <dd class="mt-2 text-base text-graydarkest text-center">
                    Maintain accurate, up-to-date asset records. Get access to asset details at the scan of a barcode.
                  </dd>
                </div>
              </div>

              <div>
                <div class="flex items-center justify-center">
                  <img class="object-center h-20 w-20" src="./images/icon-feature-02.svg" />
                </div>
                <div class="mt-5">
                  <dt class="text-center text-lg leading-6 font-bold text-graydarkest">
                    Share reports immediately
                  </dt>
                  <dd class="mt-2 text-base text-graydarkest text-center">
                    See patterns and prevent issues from occurring. Ensure compliance and accuracy of your asset inventory.
                  </dd>
                </div>
              </div>

              <div>
                <div class="flex items-center justify-center">
                  <img class="object-center h-20 w-20" src="./images/icon-feature-03.svg" />
                </div>
                <div class="mt-5">
                  <dt class="text-center text-lg leading-6 font-bold text-graydarkest">
                    Reduce Hardware Costs
                  </dt>
                  <dd class="mt-2 text-base text-graydarkest text-center">
                    Don’t pay thousands to acquire specialized barcode scanning hardware. Users prefer existing iOS hardware over new device types.
                  </dd>
                </div>
              </div>

              <div>
                <div class="flex items-center justify-center">
                  <img class="object-center h-20 w-20" src="./images/icon-feature-04.svg" />
                </div>
                <div class="mt-5">
                  <dt class="text-center text-lg leading-6 font-bold text-graydarkest">
                    Meet compliance requirements
                  </dt>
                  <dd class="mt-2 text-base text-graydarkest text-center">
                    Establish and track your compliance baseline. Stay focused on your core business while meeting regulatory equirements.
                  </dd>
                </div>
              </div>
            </dl>
          </div>
        </div>
        <div class="py-12 lg:py-20 lg:px-8 bg-gray-100">
          <IconGrid
            header="Customers"
            description="You're in good company. Here are some of our happy customers."
            icons={[
              {
                label: 'Time Warner Cable',
                icon: './images/icon-partner-time-warner.svg'
              },
              {
                label: 'New York Times',
                icon: './images/icon-partner-new-york-times.svg'
              },
              {
                label: 'LegalShield',
                icon: './images/icon-partner-legalShield.svg'
              },
              {
                label: 'Total',
                icon: './images/icon-partner-total.svg'
              },
              {
                label: 'Disney',
                icon: './images/icon-partner-disney.svg'
              },
              {
                label: 'DirectTV',
                icon: './images/icon-partner-directtv.svg'
              }
            ]}
          />
        </div>
        <div class="py-12 bg-graydarker">
          <CallToAction />
        </div>
      </main>
      <Footer />
    </div>
  )
}
