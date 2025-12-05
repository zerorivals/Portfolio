import { useEffect, useState } from "react";


export const PixelBackground = () => {
//pixel will have id, size, x, y, opacity, animationDuration
    const [pixels, setPixels] = useState([])

    useEffect (() => {
        generatePixels();
    }, []);

    const generatePixels = () => {
        const numberOfPixels = Math.floor(window.innerWidth * window.innerHeight / 12000
        );
        const newPixels = []

        for (let i = 0; i < numberOfPixels; i++) {
            newPixels.push({
            Id: i,
            size: Math.random() * 20 + 1,
            x: Math.random() * 100, 
            y: Math.random() * 100,
            opacity: Math.random() *0.5 + 0.5,
            animationDuration: Math.random() * 4 + 2, 
            })
        };
        setPixels(newPixels);

    };

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {pixels.map((pixel) => (
            <div key={pixel.id} className="pixel animate-pulse-subtle fade-in" style={{
                width: pixel.size + "px",
                height: pixel.size + "px",
                left: pixel.x + "%",
                top: pixel.y + "%",
                opacity: pixel.opacity,
                animationDuration: pixel.animationDuration + "s",

            }}/>

        ))}
    </div>
    );
}