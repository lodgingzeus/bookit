/* eslint-disable react/no-unescaped-entities */

import Header from "@/components/Header/page";
import Image from "next/image";

export default function ROOT() {
  return (
    <div className="header">
      <Header />
        <div className="flex">
          <div className="right "> 
          <section>
              <div>
                <p>
                  Make easy hotel reservation's to The Worlds best HOTELS.
                </p>
              </div>
              <div className="button">
                <button>BookIT</button>
              </div>
          </section>
          </div>
          <div>
            <div className="w-1/2 right-full left-0">
              <Image src="/img.jpg" width={100} height={100} alt="Hotel"/>
            </div>
          </div>
      </div>
    </div>
  )
}
