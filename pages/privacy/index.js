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
              <option selected>Privacy</option>
              <option>EULA</option>
              <option>Legal</option>
            </select>
          </div>
          <div class="hidden sm:block">
            <div class="border-b border-gray-200">
              <nav class="-mb-px flex space-x-1" aria-label="Tabs">
                <a href="#" class="bg-white border-primary text-graydarkest whitespace-nowrap py-3 px-6 border-t-2 font-bold" aria-current="page">
                  Privacy
                </a>
                <a href="#" class="bg-gray-200 text-graydarkest whitespace-nowrap py-3 px-6 font-bold bg-opacity-60 hover:bg-opacity-100" aria-current="page">
                  EULA
                </a>
                <a href="#" class="bg-gray-200 text-graydarkest whitespace-nowrap py-3 px-6 font-bold bg-opacity-60 hover:bg-opacity-100" aria-current="page">
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
              <div class="flex items-center flex-col flex-nowrap mb-6 md:items-start">
                <h2 class="heading text-black mb-4">Barcode Essentials™ Privacy Policy</h2>
                <span class="w-24 h-1 mb-5 bg-primary"></span>
                <div>
                  <h3 class="font-light text-xl mb-5 text-graydarkest">Your privacy is important</h3>
                  <p class="mb-5">Barcode Essentials Pty Limited A.C.N. 629 267 581 ("Barcode Essentials") has developed these global information practices to assure that your privacy is respected and your personal or professional information is protected.</p>
                  <p>Our Privacy Policy discloses Barcode Essentials’s online information practices for handling personal and professional information, which is meant to comply with applicable local laws and regulations. Please read this Privacy Policy carefully before you use any of Barcode Essentials’s products, services and websites. </p>
                </div>
              </div>
            </div>
            <div class="flex justify-center mb-6 md:mb-0">
              <img class="object-center h-48 w-auto sm:h-96" src="./images/img-privacy.svg" />
            </div>
          </div>
          <div class="py-3">
            <h3 class="font-light text-xl mb-5 text-graydarkest">How your information is used</h3>
            <p class="mb-5">Barcode Essentials will not sell, rent, loan or lease your personal or professional information to others except where we have your express written permission or are required by law to do so. Barcode Essentials will not use or share the personal or professional information that you provide to us online in ways unrelated to those described herein. Barcode Essentials retains the right to send you notifications directly related to the services provided and in relation to other forms of communication not directly related to the service provided and will offer you a choice to opt out any stage.</p>
            <p class="mb-5">Because Barcode Essentials operate globally, we may need to share your personal and professional information with our worldwide business units. We will only share your information with other Barcode Essentials entities (including subsidiaries and affiliates) and/or business partners who are acting on our behalf to provide the necessary service or information requested by you, to consolidate data storage, or to simplify the management of customer information. </p>
            <p class="mb-5">Such Barcode Essentials entities and/or business partners are governed by our Privacy Policy with respect to the use of this data and are bound by appropriate confidentiality agreements. If you have any problems exercising your choice to opt out, please contact us.</p>
          </div>
          <div class="pt-8 grid md:grid-cols-2 md:gap-16">
            <div class="flex justify-center mb-6 md:mb-0">
              <img class="object-center h-48 sm:h-full" src="./images/img-info-collect.svg" />
            </div>
            <div class="md:text-left">
              <div class="flex items-center flex-col flex-nowrap mb-6 md:items-start">
                <div class="mb-5">
                  <h3 class="font-light text-xl mb-5 text-graydarkest">Information We Collect</h3>
                  <p class="mb-5">Non-personally Identifiable Information</p>
                  <p class="mb-5">As a visitor to our Site, you can engage in many activities without providing any personal information. We do, however, collect and aggregate information indicating, among other things, which pages were visited, the order in which they were visited, and which hyperlinks were “clicked”. Such information is not linked to any personally identifiable information. The non-personally identifiable information we collect help us identify the most popular areas of our Site and determine the effectiveness of our promotional activities.</p>
                </div>
                <div>
                  <h3 class="font-light text-xl mb-5 text-graydarkest">Cookies</h3>
                  <p class="mb-5">Cookies are text files that store some information on your computer’s hard drive and allow our systems to recognize your browser. Cookies collect information like IP addresses, operating systems and browser software, but they do not collect any personal or professional information.</p>
                  <p class="mb-5">Cookies let you customize your experience at our Site. We also use cookies to record anonymous information pertaining to particular web pages viewed, which helps us in analyzing trends, tracking user’s movement, and gathering broad demographic information for aggregate use.</p>
                  <p class="mb-5">In this effort, we also may use measurement technologies from our business partners to assist us in gathering and analyzing that data.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="py-3">
            <h3 class="font-light text-xl mb-5 text-graydarkest">Personally Identifiable Information</h3>
            <p class="mb-5">At some Barcode Essentials sites, you can order products or Services, register for materials, make requests, download software or documentation, vote in polls or otherwise express an opinion, subscribe to one of our services, such as our online newsletters, Webinars, or participate in one of our online forums, discussion groups or communities.</p>
            <p class="mb-5">The types of personally identifiable information that may be collected at these pages include: name, address, E-mail address, telephone number, fax number, and information about your interests in and use of various products, programs, and services. Data collected online may also be combined with information you provide offline to Barcode Essentials. Barcode Essentials uses your information to better understand your needs and to provide you with better service.</p>
          </div>
        </div>
      </div>
      <main>
        <div class="bg-gray-100 pt-12 pb-10 lg:pb-0">
          <div class="container lg:max-h-72 lg:mb-0">
            <div class="mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
              <div class="flex items-center flex-col flex-nowrap mb-12">
                <h2 class="heading text-black mb-4">Why We Collect Your Personal Information</h2>
                <span class="w-24 h-1 bg-primary"></span>
              </div>
              <dl class="space-y-10 md:grid md:grid-cols-2 md:space-y-0 md:gap-8 md:-mb-36">
                <div class="bg-white shadow-md py-8 px-8">
                  <div class="sm:flex sm:items-start">
                    <div class="flex items-center justify-center mb-5 md:items-start md:justify-start sm:mr-5 sm:mb-0">
                      <img class="object-top h-24 w-24 sm:h-auto md:w-40 lg:w-36" src="./images/icon-surveys.svg" />
                    </div>
                    <div>
                      <dt class="text-lg leading-6 font-bold text-graydarkest">
                        Surveys and Promotions
                      </dt>
                      <dd class="mt-2 mb-5 text-base text-primary font-bold">
                        From time to time our Sites may request information from you via surveys or similar.
                      </dd>
                    </div>
                  </div>
                  <p class="mb-5">Participation in these surveys or questionnaires is completely voluntary and you have a choice whether or not to disclose any information.</p>
                  <p>Information requested may include contact information, such as your name shipping address and demographic information. Survey information will be used for purposes of monitoring or improving the use and satisfaction of our site.</p>
                </div>
                <div class="bg-white shadow-md py-8 px-8">
                  <div class="sm:flex sm:items-start">
                    <div class="flex items-center justify-center mb-5 md:items-start md:justify-start sm:mr-5 sm:mb-0">
                      <img class="object-top h-24 w-24 sm:h-auto sm:w-60" src="./images/icon-mailing-list.svg" />
                    </div>
                    <div>
                      <dt class="text-lg leading-6 font-bold text-graydarkest">
                        Mailing Lists
                      </dt>
                      <dd class="mt-2 mb-5 text-base text-primary font-bold">
                        Barcode Essentials provides the opportunity for visitors to supply their E-mail address for the purpose of receiving a specific newsletter or product information.
                      </dd>
                    </div>
                  </div>
                  <p class="mb-5">These E-mail addresses will only be used for this purpose and will never be shared with unaffiliated third parties unless you have provided your consent for us to do so.</p>
                  <p>At a minimum, we will always give you the opportunity to opt out of receiving such materials. In addition, where applicable, we will follow all local requirements, such as allowing you to opt in before receiving unsolicited contact.</p>
                </div>
              </dl>
            </div>
          </div>
        </div>
        <div class="bg-white lg:pt-72 md:pt-24">
          <div class="container">
            <div class="pt-8 grid md:grid-cols-2 md:gap-16">
              <div class="md:text-left">
                <div class="flex items-center flex-col flex-nowrap mb-6 md:items-start">
                  <h2 class="heading text-black mb-4">Third Party Web Sites</h2>
                  <span class="w-24 h-1 mb-5 bg-primary"></span>
                  <div>
                    <h3 class="font-light text-xl mb-5 text-graydarkest">Please note that our Privacy Policy only applies to sites controlled by Barcode Essentials  andl inks to third party web sites are provided solely as a convenience to you.</h3>
                    <p class="mb-5">You are advised to check the privacy policies of those sites before providing your personal information to them. Barcode Essentials has not reviewed all of these third party web sites, does not control and is not responsible for any of these sites, their content or their privacy policies.</p>
                    <p>Thus, Barcode Essentials does not endorse or make any representations about these sites, or any information, products or other materials that may be found there.</p>
                  </div>
                </div>
              </div>
              <div class="flex justify-center mb-6 md:mb-0">
                <img class="object-center h-48 w-auto sm:h-96" src="./images/img-third-party.svg" />
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white pt-12 pb-10 lg:pb-0">
          <div class="container py-6">
            <div class="mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
              <dl class="space-y-10 md:grid md:grid-cols-2 md:space-y-0 md:gap-8">
                <div class="bg-white border-2 border-gray-100 shadow-md py-8 px-8">
                  <div class="sm:flex sm:items-start">
                    <div class="flex items-center justify-center mb-5 md:items-start md:justify-start sm:mr-5 sm:mb-0">
                      <img class="object-top h-24 w-24 sm:h-auto md:w-40 lg:w-36" src="./images/icon-protect.svg" />
                    </div>
                    <div>
                      <dt class="text-lg leading-6 font-bold text-graydarkest">
                        How We Protect Your Information
                      </dt>
                      <dd class="mt-2 mb-5 text-base text-primary font-bold">
                        To prevent unauthorized access or disclosure, to maintain data accuracy and to ensure the appropriate use of information
                      </dd>
                    </div>
                  </div>
                  <p class="mb-5">Participation in these surveys or questionnaires is completely voluntary and you have a choice whether or not to disclose any information.</p>
                  <p>Information requested may include contact information, such as your name shipping address and demographic information. Survey information will be used for purposes of monitoring or improving the use and satisfaction of our site.</p>
                </div>
                <div class="bg-white border-2 border-gray-100  shadow-md py-8 px-8">
                  <div class="sm:flex sm:items-start">
                    <div class="flex items-center justify-center mb-5 md:items-start md:justify-start sm:mr-5 sm:mb-0">
                      <img class="object-top h-24 w-24 sm:h-auto sm:w-60" src="./images/icon-children.svg" />
                    </div>
                    <div>
                      <dt class="text-lg leading-6 font-bold text-graydarkest">
                        Children’s Information
                      </dt>
                      <dd class="mt-2 mb-5 text-base text-primary font-bold">
                        Barcode Essentials does not target its web sites to children, and we will never knowingly collect personally identifiable information from children.
                      </dd>
                    </div>
                  </div>
                  <p> If we become aware that a subscriber is under the age of 18 and has registered, we will remove their personally identifiable information from our files.</p>
                </div>
              </dl>
            </div>
          </div>
        </div>
        <div class="bg-white">
          <div class="container">
            <div class="pt-5 pb-6 grid lg:pt-8 md:grid-cols-2 md:gap-16 md:pb-16">
              <div class="flex justify-center mb-6 md:mb-0">
                <img class="object-center h-48 w-auto sm:h-96" src="./images/img-contact.svg" />
              </div>
              <div class="md:pt-14 md:text-left">
                <div class="flex items-center flex-col flex-nowrap mb-6 md:items-start">
                  <h2 class="heading text-black mb-4">Contacting Us </h2>
                  <span class="w-24 h-1 mb-5 bg-primary"></span>
                  <p class="font-bold">We value your opinion.</p>
                  <p class="mb-5">If you have any questions or comments about our Privacy Policy, please contact us.</p>
                  <a href="#" class="px-5 py-3 btn-primary btn-secondary flex justify-center">
                    <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2.94 6.412A2 2 0 002 8.108V16a2 2 0 002 2h12a2 2 0 002-2V8.108a2 2 0 00-.94-1.696l-6-3.75a2 2 0 00-2.12 0l-6 3.75zm2.615 2.423a1 1 0 10-1.11 1.664l5 3.333a1 1 0 001.11 0l5-3.333a1 1 0 00-1.11-1.664L10 11.798 5.555 8.835z" clip-rule="evenodd"></path></svg>
                    Contact us
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