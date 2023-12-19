import React from 'react'
import logo from '../assets/img/logo.jpg'
export default function Eventscomp() {
  return (
    <div class="w-full h-full bg-yellow-100 bg-opacity-50">
      <div class="container p-4 mx-auto mt-[73px]">
        <h1 class="text-3xl font-bold text-center ">Events and Charges</h1>
        <div class="hidden w-full sm:block">
          <div class="flex flex-row items-center justify-center gap-3 sm:w-full px-80">
            <hr class="h-1 mx-auto my-4 bg-gray-900 border-0 rounded sm:w-full md:my-10 dark:bg-gray-700" />
            <img src={logo} class="w-10 h-10 rounded-full" />
            <hr class="h-1 mx-auto my-4 bg-gray-900 border-0 rounded sm:w-full md:my-10 dark:bg-gray-700" />
          </div>
        </div>
        <table class="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th class="px-4 py-2 border-b">Event</th>
              <th class="px-4 py-2 border-b">Description</th>
              <th class="px-4 py-2 border-b">Charge</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="px-4 py-2 border-b">Engagement</td>
              <td class="px-4 py-2 border-b">4 Rooms, 1 Hall with Decoration</td>
              <td class="px-4 py-2 border-b">40,000</td>
            </tr>
            <tr>
              <td class="px-4 py-2 border-b">Meeting</td>
              <td class="px-4 py-2 border-b">Only Hall (5-6 hrs)</td>
              <td class="px-4 py-2 border-b">15,000</td>
            </tr>
            <tr>
              <td class="px-4 py-2 border-b">Birthday</td>
              <td class="px-4 py-2 border-b">Only Hall with Decoration</td>
              <td class="px-4 py-2 border-b">20,000</td>
            </tr>
            <tr>
              <td class="px-4 py-2 border-b">Engagement</td>
              <td class="px-4 py-2 border-b">4 rooms, Big Hall with Decoration</td>
              <td class="px-4 py-2 border-b">60,000</td>
            </tr>
            <tr>
              <td class="px-4 py-2 border-b">Engagement</td>
              <td class="px-4 py-2 border-b">8 rooms, 2 Halls with Decoration</td>
              <td class="px-4 py-2 border-b">60,000</td>
            </tr>
            <tr>
              <td class="px-4 py-2 border-b">Resort </td>
              <td class="px-4 py-2 border-b">Full Wedding Setup</td>
              <td class="px-4 py-2 border-b">2,11,000</td>
            </tr>
          </tbody>
        </table>
        <div class="flex flex-col items-center justify-center p-2 rounded-xl"><a href="contact.html"><button
          class="p-2 font-bold text-gray-900 bg-yellow-500 hover:bg-yellow-600 rounded-xl">Book
          Event</button></a></div>
      </div>
    </div>
  )
}
