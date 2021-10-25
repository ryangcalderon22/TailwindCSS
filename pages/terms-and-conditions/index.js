import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import CallToAction from '../../components/CallToAction'

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
              <option>EULA</option>
              <option selected>Legal</option>
            </select>
          </div>
          <div class="hidden sm:block">
            <div class="border-b border-gray-200">
              <nav class="-mb-px flex space-x-1" aria-label="Tabs">
                <a href="#" class="bg-gray-200 text-graydarkest whitespace-nowrap py-3 px-6 font-bold bg-opacity-60 hover:bg-opacity-100">
                  Privacy
                </a>
                <a href="#" class="bg-gray-200 text-graydarkest whitespace-nowrap py-3 px-6 font-bold bg-opacity-60 hover:bg-opacity-100">
                  EULA
                </a>
                <a href="#" class="bg-white border-primary border-t-2 text-graydarkest whitespace-nowrap py-3 px-6 font-bold" aria-current="page">
                  Legal
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-white">
        <div class="container">
          <div class="pt-8 pb-4">
            <div class="md:pt-14 md:text-left">
              <div class="flex items-center flex-col flex-nowrap mb-6 md:items-start">
                <h3 class="font-light text-lg text-graydarkest uppercase">Legal</h3>
                <h2 class="heading text-black mb-4">Terms &amp; Conditions</h2>
                <span class="w-24 h-1 mb-5 bg-primary"></span>
                <div>
                  <p class="mb-1"><span class="text-primary">Terms of Sale</span> - The following terms and conditions apply all Barcode Essentials orders.</p>
                  <p><span class="text-primary">Distributor Agreement Terms and Conditions</span> - Applicable to all parties reselling or distributing the Barcode Essentials product.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main>
        <div class="bg-white">
          <div class="container">
            <div class="flex items-center mb-9">
              <h2 class="heading leading-none text-lg text-graydarker mb-0 min-w-max mr-2">Barcode Essentials Terms of Sale</h2>
              <span class="h-1 w-full bg-graydarker bg-opacity-10"></span>
            </div>
            <div class="overflow-hidden">
              <img src="./images/img-terms.svg" alt="Terms" class="w-1/2 m-auto mb-4 md:float-right md:w-1/3 md:ml-4" />
              <h3 class="font-light text-xl mb-5 text-graydarkest">Payments, Taxes & Refund Policy</h3>
              <p class="mb-5">The vendor is Barcode Essentials Pty Limited A.C.N. 629 267 581 ("Barcode Essentials") of 158/208 Pacific Highway, Hornsby NSW 2077, Australia, an Australian business in the state of New South Wales.</p>
              <p class="mb-5">You agree that you will pay for all products you purchase including any taxes, as applicable.</p>
              <p class="mb-5">You are responsible for the payment of all fees and for providing Barcode Essentials with a valid payment method for payment for all fees. You agree that the product remains the sole property of Barcode Essentials until your purchase is completed by payment in full of all fees. Your purchase fee will include the price of the product plus any applicable sales tax; such sales tax will be based on the bill-to address and the sales tax rate in effect at the time your order is processed. You will only be charged tax in states, regions and territories where tax for digital goods applies in accordance with international tax treaties.</p>
              <p class="mb-5">Volume discounts are only available where multiple licenses of the same type are purchased in one transaction. Crossgrade discounts are only available for Barcode Essentials 7.6 where eligible licenses are not expired, have not been crossgraded previously, and are for Barcode Essentials 7.1-7.5 or Symantec Barcode Solution. Academic discounts are only available to customers with current SymEd agreements.</p>
              <p class="mb-5">All sales of products are final.</p>
              <p class="mb-5">Please complete all product evaluations in trial mode prior to purchase.</p>
              <p class="mb-5">If the product becomes unavailable following completion of your purchase but prior to your use of your redemption code, your sole remedy is a refund. Refund requests must be submitted within 14 days of purchase. Refunds will not be offered if the product is still available or for redemption codes that have already been activated or where refund requests are submitted more than 14 days after purchase.</p>
              <p class="mb-5">Where the product is found to be defective, your exclusive and sole remedy is to obtain a replacement or refund at the discretion of Barcode Essentials in accordance with the Australian Trade Practices Act of 1974.</p>
              <p class="mb-5">The laws of the State of New South Wales, Australia govern these Terms of Sale and the parties submit to the non-exclusive jurisdiction of courts exercising jurisdiction there.</p>
            </div>
          </div>
        </div>
        <div class="bg-white">
          <div class="container mb-24">
            <div class="flex items-center mb-2">
              <h2 class="heading leading-none text-lg text-graydarker mb-0 min-w-max mr-2">Barcode Essentials Distributor Agreement</h2>
              <span class="h-1 w-full bg-graydarker bg-opacity-10"></span>
            </div>
            <h3 class="font-light text-lg mb-4 text-graydarkest"><a class="hover:underline" href="#">(Download as PDF)</a></h3>
            <div class="sm:overflow-auto sm:h-720 bg-gray-200 py-6 px-10">
              <h3 class="font-light text-xl mb-5 text-graydarkest">Distributor Agreement Terms and Conditions</h3>
              <div class="mb-2">
                <p class="font-bold uppercase">BACKGROUND</p>
                <ul class="pl-4">
                  <li>A. Barcode Essentials has developed the Product.</li>
                  <li>B. Barcode Essentials wishes to engage the Distributor for the purpose of marketing and procuring the sale of the Product to customers within the Territory 		     on the terms set out in this Agreement.</li>
                </ul>
              </div>
              <div class="mb-2">
                <p class="font-bold">1. Definitions</p>
                <ul class="pl-4">
                  <li>Unless the context otherwise requires, in this Agreement:</li>
                  <li><strong>Activated Redemption Code</strong> means a Redemption Code that has been redeemed as a License File for the Product;</li>
                  <li><strong>Claim</strong> includes any claim, damage, demand, liability, cost, loss, proceeding, right of action and claim for compensation;</li>
                  <li><strong>Confidential Information</strong> means all trade secrets, ideas, know-how, concepts and information whether in writing or otherwise relating in any way to:</li>
                </ul>
                <ul class="pl-4">
                  <li>a) either party, their employees or their customers;</li>
                  <li>b) the Product;</li>
                  <li>c) Intellectual Property Rights;</li>
                  <li>d) Wholesale Price List;</li>
                  <li>e) a party’s affairs or business, sales, marketing or promotional information; and but does not include information that:
                    <ul class="pl-4">
                      <li>i) is, or becomes part of, the public domain otherwise than because of a breach of this Agreement by either party or a breach of an obligation of confidentiality by any person; or</li>
                      <li>ii) is lawfully obtained by either party from another person without any restriction as to use and disclosure (other than where the person from whom 		             the information is obtained breaches an obligation of confidentiality by providing the information); or</li>
                      <li>iii) was in either party’s possession prior to disclosure to it by the other party;</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div class="mb-2">
                <p class="font-bold">Copyright means:</p>
                <ul class="pl-4">
                  <li>a) any copyright under the Copyright Act 1968 (Cth);</li>
                  <li>b) any copyright under the Law of a country other than Australia; and</li>
                  <li>c) rights in the nature of or analogous to the rights in (a) or (b) under the Law of Australia or any other country (including future copyright and rights in the nature of or analogous to copyright);</li>
                  <li><strong>Documentation</strong> means the user guides, reference manuals, videos and other materials developed by Barcode Essentials for use in connection with the Product;</li>
                  <li><strong>End User</strong> means any Person who obtains copies of the Product solely for its own internal use from a Distributor in the Territory;</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="py-12 bg-graydarker">
          <div class="container">
            <div class="flex items-center flex-col flex-nowrap">
              <h2 class="heading mb-4 text-center text-sm sm:text-xl">
                <span class="block">Get everything you need to manage your fixed asset inventory</span>
                <span class="block">Try Barcode Essentials for 30 days</span>
              </h2>
              <a href="#" class="px-5 py-3 btn-primary btn-secondary flex justify-center">
                Get Started NOW! <svg class="w-6 h-6 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path></svg>
              </a>
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