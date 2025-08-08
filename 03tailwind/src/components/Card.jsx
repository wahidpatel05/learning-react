import React from 'react'

function Card({username = "WP"}) {
  return (
<>    
<div className="flex flex-col items-center justify-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl bg-amber-200 ">
  <div>
    <img
      className="size-48 shadow-xl rounded-md"
      alt=""
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjk9ZnVHLvlJKay80hXEPCBZpYpxPKD8oG3A&s"
    />
  </div>

  {/* Text Section */}
  <div className="flex flex-col items-center md:items-start gap-1 text-black">
    <span className="text-2xl font-medium">Name: {username}</span>
    
    <span className="font-medium text-sky-500">The Anti-Patterns</span>
    <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
      <span>No. 4</span>
      <span>·</span>
      <span>2025</span>
    </span>
  </div>
</div>

</>
  )
}

export default Card