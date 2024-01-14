import React from 'react'

export default function Features() {
  return (
      <section id="features" class="w-full bg-white ">
          <div class="pB-10 mx-auto max-w-7xl md:px-8">



              <div class="flex mt-10 flex-col-reverse items-center w-full p-10 bg-gray-100 md:rounded-xl sm:p-10 md:flex-row" data-rounded="rounded-xl" data-rounded-max="rounded-full">

                  <div class="w-full mt-16 md:w-1/2 md:mt-0">
                      <img src=" https://mobidonia-demo.imgix.net/img/campaign.png" class="w-full"/>
                  </div>

                  <div class="flex flex-col w-full space-y-6 text-center md:w-1/2 px-7 sm:px-0">
                      <h2 class="max-w-md mx-auto text-3xl font-semibold md:text-4xl">Email marketing is 🏴‍☠️. Say hi to Whatsapp marketing</h2>
                      <p class="text-gray-600">Whatsapp Marketing is a new fields in Direct Marketing. Experience around 98% read rate on your campaigns and never fear your account to get blocked from Whatsapp.</p>
                  </div>

              </div>
              <div class="flex flex-col mt-10 md:flex-row md:mt-8 md:space-x-8">
                  <div class="flex flex-col items-center justify-center flex-1 overflow-hidden text-center bg-gray-100 md:rounded-xl" data-rounded="rounded-xl" data-rounded-max="rounded-full">
                      <img src="https://mobidonia-demo.imgix.net/img/chat_clear.png" class="w-2/3 mt-5"/>
                          <div class="flex flex-col px-10 pb-24 space-y-6 pt-14 md:px-24 ">
                              <p class="text-3xl font-semibold leading-none md:text-4xl">Chat with your contacts</p>
                              <p class="font-light text-gray-600">Here, you will find fully featured chat system, from where you can send docs, images, fast replies, and rich message templates. Offer manual and automated support via the reply bot triggered by the client message.</p>
                          </div>

                  </div>
                  <div class="relative flex flex-col items-center flex-1 mt-10 overflow-hidden text-center bg-gray-100 md:rounded-xl md:mt-0" data-rounded="rounded-xl" data-rounded-max="rounded-full">
                      <img src="https://mobidonia-demo.imgix.net/img/ai_chat.png" class="w-2/3 mt-5"/>
                          <div class="flex flex-col px-10 pb-24 space-y-6 pt-14 md:px-24">
                              <p class="text-3xl font-semibold leading-none md:text-4xl">AI Chat 🤖</p>
                              <p class="font-light text-gray-600">Engage with your customers using our AI chat feature. It can handle common queries, provide information, and direct the conversation to a human operator if needed. Improve your customer service with our AI chat.</p>
                          </div>

                  </div>
              </div>









          </div>
      </section>
  )
}
