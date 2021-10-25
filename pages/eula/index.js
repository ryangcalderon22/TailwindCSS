import Navigation from '../../components/navigation'
import Footer from '../../components/footer'
import CallToAction from '../../components/callToAction'

export default function GetStarted() {
  return (
    <div class="bg-white">
      <Navigation />
      <div class="bg-gray-100">
        <div class="container pt-2">
          <div class="sm:hidden">
            <label for="tabs" class="sr-only">Select a tab</label>
            <select id="tabs" name="tabs" class="bg-transparent block w-full pr-10 py-4 font-bold focus:outline-none">
              <option>Privacy</option>
              <option selected>EULA</option>
              <option>Legal</option>
            </select>
          </div>
          <div class="hidden sm:block">
            <div class="border-b border-gray-200">
              <nav class="-mb-px flex space-x-1" aria-label="Tabs">
                <a href="#" class="bg-gray-200 text-graydarkest whitespace-nowrap py-3 px-6 font-bold bg-opacity-60 hover:bg-opacity-100">
                  Privacy
                </a>
                <a href="#" class="bg-white border-primary border-t-2 text-graydarkest whitespace-nowrap py-3 px-6 font-bold" aria-current="page">
                  EULA
                </a>
                <a href="#" class=" bg-gray-200 text-graydarkest whitespace-nowrap py-3 px-6 font-bold bg-opacity-60 hover:bg-opacity-100" >
                  Legal
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-white">
        <div class="container">
          <div class="pt-8 grid md:grid-cols-2 md:gap-16">
            <div class="md:pt-14 md:text-left">
              <div class="flex items-center flex-col flex-nowrap md:items-start">
                <h3 class="font-light text-lg text-graydarkest uppercase">Eula</h3>
                <h2 class="heading text-black mb-4">End User License Agreements</h2>
                <span class="w-24 h-1 mb-5 bg-primary"></span>
                <div>
                  <p class="mb-5">The terms and conditions for use of your Barcode Essentials product may be obtained from the relevant End User License Agreement below.</p>
                </div>
              </div>
              <div class="mb-12">
                <div class="relative border border-gray-200 bg-white px-3 py-3 shadow-sm flex items-center mb-3 hover:border-primary focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary">
                  <div class="flex-shrink-0">
                    <img class="h-10 w-10" src="./images/icon-pdf-file.svg" alt="pdf" />
                  </div>
                  <div class="flex-1 min-w-0">
                    <a href="#" class="focus:outline-none">
                      <span class="absolute inset-0" aria-hidden="true"></span>
                      <p class="font-bold text-graydarkest ml-2">
                        Barcode Essentials Solution 1.x, 7.6.x, 8.0.x
                      </p>
                      <p class="text-sm text-primary truncate ml-2">
                        BCES Product EULA 181119.pdf
                      </p>
                    </a>
                  </div>
                </div>
                <div class="relative border border-gray-200 bg-white px-3 py-3 shadow-sm flex items-center mb-3 hover:border-primary focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary">
                  <div class="flex-shrink-0">
                    <img class="h-10 w-10" src="./images/icon-pdf-file.svg" alt="pdf" />
                  </div>
                  <div class="flex-1 min-w-0">
                    <a href="#" class="focus:outline-none">
                      <span class="absolute inset-0" aria-hidden="true"></span>
                      <p class="font-bold text-graydarkest ml-2">
                        Barcode Essentials License Files
                      </p>
                      <p class="text-sm text-primary truncate ml-2">
                        BCELF License File EULA 181119.pdf
                      </p>
                    </a>
                  </div>
                </div>
                <div class="relative border border-gray-200 bg-white px-3 py-3 shadow-sm flex items-center mb-3 hover:border-primary focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary">
                  <div class="flex-shrink-0">
                    <img class="h-10 w-10" src="./images/icon-pdf-file.svg" alt="pdf" />
                  </div>
                  <div class="flex-1 min-w-0">
                    <a href="#" class="focus:outline-none">
                      <span class="absolute inset-0" aria-hidden="true"></span>
                      <p class="font-bold text-graydarkest ml-2">
                        Barcode Essentials for iOS <span class="text-xs font-normal opacity-50">(iPhone, iPad, iPod touch)</span>
                      </p>
                      <p class="text-sm text-primary truncate ml-2">
                        BCEIOS EULA 181119.pdf
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex justify-center mb-12 md:mb-0">
              <img class="object-center h-48 w-auto sm:h-96" src="./images/img-eula.svg" />
            </div>
          </div>
        </div>
      </div>
      <main>
        <div class="py-12 bg-graydarker">
          <CallToAction />
        </div>
      </main>
      <Footer />
    </div>
  )
}