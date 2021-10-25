import { useState } from 'react'
import Link from 'next/link'

function Navigation() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuHidden = isMenuOpen ? '' : 'hidden';
  const menuItems = [
    {
      label: 'Get Started',
      url: '/get-started'
    },
    {
      label: 'Pricing',
      url: '/pricing'
    },
    {
      label: 'Help Desk',
      url: '/helpdesk'
    }
  ];

  return (
    <div class="bg-white sticky top-0 z-10 shadow-md">
      <div class="container">
        <nav class="py-3 flex justify-between items-center md:py-6">
          <div class="flex items-center">
            <Link href="/">
              <a>
                <span class="sr-only">Barcode Essentials</span>
                <img class="h-12 sm:h-16" src="./images/barcode-essentials-logo.svg" />
              </a>
            </Link>
            <div class="border-l border-gray-300 ml-3 px-2 sm:px-3 sm:ml-5">
              <img class="h-6 w-auto sm:h-8" src="./images/symantec.svg" />
            </div>
          </div>
          <div class="px-4 cursor-pointer md:hidden" onClick={() => setMenuOpen(!isMenuOpen)}>
            <svg id="burger" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </div>
          <ul class="hidden md:flex md:justify-center">
            {
              menuItems.map(menuItem => (
                <li key={menuItem.url}>
                  <Link href={menuItem.url}>
                    <a class="nav-item">{menuItem.label}</a>
                  </Link>
                </li>
              ))
            }
            <li>
              <a class="btn-primary nav-item hover:text-black" href="#">Signup</a>
            </li>
          </ul>
          <div id="menu" class={`absolute top-16 inset-x-0 z-10 p-2 transition transform origin-top-right md:hidden ${menuHidden}`}>
            <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div class="pt-5 pb-6 px-5">
                <div class="mt-6">
                  <nav class="grid gap-y-8">
                    {
                      menuItems.map(menuItem => (
                        <Link key={menuItem.url} href={menuItem.url}>
                          <a class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                            <span class="nav-item">
                              {menuItem.label}
                            </span>
                          </a>
                        </Link>
                      ))
                    }
                  </nav>
                </div>
              </div>
              <div class="py-6 px-5 space-y-6">
                <div>
                  <a href="#" class="w-full flex items-center justify-center px-4 py-2 border border-transparent shadow-sm btn-primary">
                    Sign up
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navigation