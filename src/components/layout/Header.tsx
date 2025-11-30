// Header component
export default function Header() {
     return (
          <header className="shadow-sm shadow-accent/10">
               <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                         <h1 className="text-2xl font-bold">Floruna</h1>
                         <nav>
                              {/* Add navigation items here */}
                         </nav>
                    </div>
               </div>
          </header>
     );
}
