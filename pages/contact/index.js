import Navigation from '../../components/navigation'
import Footer from '../../components/footer'
import CallToAction from '../../components/callToAction'

export default function GetStarted() {
  return (
    <div class="bg-white">
      <Navigation />
      <div class="bg-white">
        <div class="container">
          <div class="py-8 md:py-16">
            <h1 class="heading text-black">Contact us</h1>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo </p>
          </div>
        </div>
      </div>
      <main>
        <div class="bg-gray-100 pt-12 pb-10 lg:pb-0">
          <div class="container lg:max-h-72 lg:mb-0">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <dl class="space-y-10 md:grid md:grid-cols-3 md:space-y-0 md:gap-8 md:-mb-36">
          
                <div class="bg-white shadow-md py-8 px-8">
                  <dt class="text-center text-lg leading-6 font-bold text-graydarkest mb-2">
                    Secure download 
                  </dt>
                  <div class="flex items-center justify-center">
                    <img class="object-center h-36 w-full" src="./images/img-demo.svg" />
                  </div>
                  <div class="mt-5 mb-5">
                    <dd class="mt-2 text-base text-graydarkest text-center px-1">
                      Securely download asset data from your Symantec™ CMDB to an iOS device
                    </dd>
                  </div>
                  <div class="flex justify-center">
                    <a class="btn-primary btn-tertiary w-full text-center" href="#">Request a Demo</a>
                  </div>
                </div>
    
                <div class="bg-white shadow-md py-8 px-8">
                  <dt class="text-center text-lg leading-6 font-bold text-graydarkest mb-2">
                    Sales Inquiry
                  </dt>
                  <div class="flex items-center justify-center">
                    <img class="object-center h-36 w-full" src="./images/img-sales.svg" />
                  </div>
                  <div class="mt-5 mb-5">
                    <dd class="mt-2 text-base text-graydarkest text-center px-1">
                      Request a demonstration of Barcode Essentials award-winning, differentiated instruction solutions.
                    </dd>
                  </div>
                  <div class="flex justify-center">
                    <a class="btn-primary btn-tertiary w-full text-center" href="#">Sales Inquiry</a>
                  </div>
                </div>
    
                <div class="bg-white shadow-md py-8 px-8">
                  <dt class="text-center text-lg leading-6 font-bold text-graydarkest mb-2">
                    Support Request
                  </dt>
                  <div class="flex items-center justify-center">
                    <img class="object-center h-36 w-full" src="./images/img-support-request.svg" />
                  </div>
                  <div class="mt-5 mb-5">
                    <dd class="mt-2 text-base text-graydarkest text-center px-1">
                      Request a demonstration of Barcode Essentials award-winning, differentiated instruction solutions.
                    </dd>
                  </div>
                  <div class="flex justify-center">
                    <a class="btn-primary btn-tertiary w-full text-center" href="#">Support Request</a>
                  </div>
                </div>
              </dl>
            </div>
          </div>
        </div>
        <div class="bg-gray-100 md:mt-52">
          <div class="lg:grid lg:grid-cols-5 lg:space-y-0 lg:gap-0">
            <div class="md:col-span-2 container py-8">
              <h3 class="heading text-graydarkest text-lg leading-4 mb-4">The Barcode Essentials Team</h3>
              <p class="text-base">Barcode Essentials is owned and developed by Barcode Essentials Pty Ltd, <span class="heading text-primary text-base">Strategic Technology Partner for Symantec Endpoint Management</span></p>
              <dl class="mt-8 px-10">
                <div>
                  <dt class="font-bold">Barcode Essentials Pty Ltd (Australia)</dt>
                  <dd class="pl-5">
                    <p>742 Evergreen Terrace</p>
                    <p>Springfield, OR 12345</p>
                  </dd>
                </div>
                <div class="mt-3">
                  <dt class="sr-only">Email</dt>
                  <dd class="flex pl-5">
                    <svg class="flex-shrink-0 h-6 w-6 text-primary" x-description="Heroicon name: mail" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    <span class="ml-2">
                      <a href="mailto:info@barcodeessentials.com" class="text-primary">info@barcodeessentials.com </a>
                    </span>
                  </dd>
                </div>
              </dl>
            </div>
            <div class="col-span-3">
              <img class="object-center h-full w-full" src="./images/img-map.png" />
            </div>
          </div>
        </div>
        <div class="py-12 bg-graydarker">
          <CallToAction />
        </div>
      </main>
      <Footer />
      <div class="fixed z-10 inset-0 overflow-y-auto">
        <div class="flex items-end justify-center min-h-screen pt-4 pb-20 text-center sm:block sm:p-0">
          <div class="fixed inset-0 transition-opacity" aria-hidden="true">
            <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>

          <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

          <div class="inline-block align-bottom bg-white text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
            <div class="flex items-center justify-between border-b-2 border-gray-200 px-4 py-4 sm:px-6">
              <div class="mt-3 text-center sm:mt-0 sm:text-left">
                <h3 class="text-lg leading-6 font-bold text-graydarkest" id="modal-headline">
                  Send a Support Request
                </h3>
              </div>
              <button type="button" class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span class="sr-only">Close</span>
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <div>
              <form class="space-y-8">
                <div class="space-y-8 px-4 sm:px-6 sm:space-y-5">
                  <div class="pt-6 space-y-6 sm:pt-8 sm:space-y-5">
                    <div class="mb-5">
                      <p class="text-graydarkest">
                        Can't find what you're looking for?
                      </p>
                      <p class="text-graydarkest">
                        Send us a message and we'll reply as soon as possible.
                      </p>
                    </div>
                    <div class="px-10">
                      <div class="mb-4 sm:mb-0 sm:grid sm:grid-cols-4 sm:gap-4 sm:items-start sm:pt-5">
                        <label for="name" class="block font-body text-sm uppercase text-graydarkest sm:text-right sm:mt-px sm:pt-2">
                          Name
                        </label>
                        <div class="mt-1 sm:mt-0 sm:col-span-3">
                          <input type="text" name="name" id="name" autocomplete="name" placeholder="Full name" class="focus:border-graydarkest block w-full py-2 px-3 border-2 border-gray-200 rounded-md font-body text-sm" />
                        </div>
                      </div>
                      <div class="mb-4 sm:mb-0 sm:grid sm:grid-cols-4 sm:gap-4 sm:items-start sm:pt-5">
                        <label for="email" class="block font-body text-sm uppercase text-graydarkest sm:text-right sm:mt-px sm:pt-2">
                          Email
                        </label>
                        <div class="mt-1 sm:mt-0 sm:col-span-3">
                          <input type="email" name="email" id="email" autocomplete="email" placeholder="Your email address" class="focus:border-graydarkest block w-full py-2 px-3 border-2 border-gray-200 rounded-md font-body text-sm" />
                        </div>
                      </div>
                      <div class="mb-4 sm:mb-0 sm:grid sm:grid-cols-4 sm:gap-4 sm:items-start sm:pt-5">
                        <label for="email" class="block font-body text-sm uppercase text-graydarkest sm:text-right sm:mt-px sm:pt-2">
                          Message
                        </label>
                        <div class="mt-1 sm:mt-0 sm:col-span-3">
                          <textarea id="message" name="message" rows="3" placeholder="Your email address" class="focus:border-graydarkest block w-full py-2 px-3 border-2 border-gray-200 rounded-md font-body text-sm"></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="border-t-2 border-gray-200 px-4 py-3 sm:px-6 flex flex-row-reverse">
                  <button type="button" class="btn-primary btn-secondary text-lg px-10 py-3">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}