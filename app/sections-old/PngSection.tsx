import React from "react"
import Image from "next/image"
import theImage from "@/public/image.png"
const PngSection = () => {
    return (
        <div>
            <Image src={theImage} alt="image" />
        </div>
    )
}

export default PngSection