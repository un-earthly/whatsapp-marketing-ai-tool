import React from 'react'

export default function Demo() {
  return (
      <section id="demo" class="w-full pt-24 pb-32 bg-white ">
          <div class="relative px-12 mx-auto max-w-7xl">

              <div class="relative grid items-center grid-cols-1 gap-10 p-12 overflow-hidden shadow-2xl md:p-16 lg:p-20 xl:p-24 bg-gradient-to-r from-green-400 to-green-500 rounded-2xl md:grid-cols-5 lg:gap-0" data-primary="green-400" data-rounded="rounded-2xl" data-rounded-max="rounded-full">

                  <div class="absolute top-0 right-0">
                      <svg viewBox="0 0 487 487" class="object-cover w-full h-full" xmlns="http://www.w3.org/2000/svg"><path d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z" fill="#FFF" fill-rule="nonzero" fill-opacity=".1" class=""></path></svg>
                  </div>

                  <div class="absolute bottom-0 left-0 h-full">
                      <svg viewBox="0 0 487 487" class="w-auto h-full opacity-75 object-stretch" xmlns="http://www.w3.org/2000/svg"><path d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z" fill="#FFF" fill-rule="nonzero" fill-opacity=".1"></path></svg>
                  </div>

                  <div class="relative z-30 col-span-1 md:col-span-3">
                      <h2 class="mb-1 text-3xl font-bold leading-tight text-white md:mb-3 md:text-3xl lg:text-4xl xl:text-5xl">Test the AI chat system!</h2>
                      <p class="max-w-sm my-6 text-base font-normal text-green-200 xl:max-w-lg lg:pr-0 pr-7 lg:text-xl" data-primary="green-400">Scan the QR Code or click on the button and it will open your WhatsApp. Then start a chat with our AI bot.</p>
                      <a href="https://wa.me/message/MNSPQTA7THW5G1" class="flex items-center justify-center w-full px-4 py-2 text-base font-medium leading-6 text-green-500 whitespace-no-wrap bg-white border-2 border-transparent rounded-full shadow-sm md:w-auto md:inline-flex hover:bg-transparent hover:text-white hover:border-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600" data-primary="green-400" data-rounded="rounded-full">
                          Start demo chat
                      </a>
                  </div>
                  <a href="https://wa.me/message/MNSPQTA7THW5G1" class="flex items-center h-full col-span-1 md:col-span-2 mr-10">
                      <img style={{ "max-height": "320px" }} src="https://wpbox.mobidonia.com/uploads/default/wpbox/qr.png" class="pr-10 relative top-0 right-2 object-cover max-h-md w-full -mr-1 rounded md:max-w-sm md:w-auto max-w-none lg:absolute lg:max-w-md xl:max-w-lg lg:mt-9 shadow-sm" alt="Dashboard"/>
                  </a>
              </div>
          </div>
      </section>
  )
}
