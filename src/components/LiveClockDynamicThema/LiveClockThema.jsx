import { useEffect, useState } from "react";
import "./LiveClockThema.css"; // Temalar için CSS dosyası ekliyoruz

export default function LiveClockThema() {
    const [time, setTime] = useState(new Date());
    const [theme, setTheme] = useState("light"); // Varsayılan tema

    useEffect(() => {
        const interval = setInterval(() => {
            const newTime = new Date();
            setTime(newTime);
            updateTheme(newTime); // Her saniye temayı güncelle
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const updateTheme = (currentTime) => {
        const hours = currentTime.getHours();

        if (hours >= 20 || hours < 7) {
            setTheme("dark"); // Saat 20:00 - 07:00 arası
        } else if (hours >= 7 && hours < 15) {
            setTheme("light"); // Saat 07:00 - 15:00 arası
        } else if (hours >= 15 && hours < 20) {
            setTheme("orange"); // Saat 15:00 - 20:00 arası
        }
    };

    return (
        <div className={`app ${theme}`}>
            <span>Time: {time.toLocaleTimeString()}</span>
        </div>
    );
}
