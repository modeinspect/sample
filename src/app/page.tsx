import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center p-8 bg-white border-2 border-black rounded-xl shadow-[5px_5px_0_0_rgba(0,0,0,1)]">
        <h1 className="text-4xl font-bold mb-4">Welcome to Financial App</h1>
        <div className="w-24 h-1 mx-auto my-4 bg-black"></div>
        <p className="text-lg mb-6 italic">Access your financial dashboard</p>
        
        {/* Hand-drawn arrow pointing to button */}
        <div className="relative mb-8">
          <div className="absolute -top-10 right-20 transform rotate-45">
            <svg width="50" height="50" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
              <path d="M10,40 Q15,30 5,20 Q15,25 25,10" stroke="black" fill="none" strokeWidth="2" strokeLinecap="round" />
              <polygon points="25,10 20,19 30,16" fill="black" />
            </svg>
          </div>
        </div>
        
        <Link 
          href="/dashboard" 
          className="bg-white border-2 border-black px-6 py-3 rounded-lg font-bold text-black shadow-[3px_3px_0_0_rgba(0,0,0,1)] hover:shadow-[1px_1px_0_0_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
        >
          View Dashboard
        </Link>
        
        {/* Hand-drawn decorations */}
        <div className="mt-12 flex justify-center space-x-4">
          <div className="w-10 h-10 border-2 border-black rounded-full"></div>
          <div className="w-10 h-10 border-2 border-black"></div>
          <div className="w-10 h-10 border-2 border-black rotate-45"></div>
        </div>
      </div>
    </div>
  );
}
