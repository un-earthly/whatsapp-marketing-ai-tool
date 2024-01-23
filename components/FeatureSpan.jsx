import React from 'react'

export default function FeatureSpan({
    item

}) {
  return (
      <span class="flex items-center space-x-3">

          <svg class="flex-shrink-0 w-5 h-5 bg-[#003a46] text-white rounded-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
          <span>{ item}</span>
      </span>
  )
}
