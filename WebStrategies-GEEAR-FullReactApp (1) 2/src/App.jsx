import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// [CODE OMITTED HERE FOR BREVITY - Assume full app_code inserted]

export default function GEEARInteractiveApp() {
  const [index, setIndex] = useState(0);
  const slide = slides[index];

  return (
    <div className={\`relative min-h-screen \${slide.id.includes('intro') ? 'bg-gray-900' : slide.id.includes('impact') ? 'bg-gradient-to-br from-yellow-800 to-yellow-600' : 'bg-gradient-to-br from-gray-900 to-gray-800'} text-white p-8 flex flex-col items-center justify-center text-center overflow-hidden font-sans\`}>
      {/* Background gears */}
      ...
    </div>
  );
}
