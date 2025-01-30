'use client';
import { useState, useEffect } from 'react';

interface TypewriterEffectProps {
    strings: string[];
}

export function TypewriterEffect({ strings }: TypewriterEffectProps) {
    const [currentStringIndex, setCurrentStringIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const typeSpeed = 50; // Speed of typing
        const deleteSpeed = 30; // Speed of deleting
        const delayBetweenStrings = 2000; // Pause when string is complete

        const handleTyping = () => {
            const currentString = strings[currentStringIndex];
            
            if (!isDeleting) {
                if (currentText.length < currentString.length) {
                    const timeout = setTimeout(() => {
                        setCurrentText(currentString.slice(0, currentText.length + 1));
                    }, typeSpeed);
                    return () => clearTimeout(timeout);
                } else {
                    const timeout = setTimeout(() => {
                        setIsDeleting(true);
                    }, delayBetweenStrings);
                    return () => clearTimeout(timeout);
                }
            } else {
                if (currentText.length > 0) {
                    const timeout = setTimeout(() => {
                        setCurrentText(currentString.slice(0, currentText.length - 1));
                    }, deleteSpeed);
                    return () => clearTimeout(timeout);
                } else {
                    setIsDeleting(false);
                    setCurrentStringIndex((prev) => (prev + 1) % strings.length);
                }
            }
        };

        handleTyping();
    }, [currentText, isDeleting, currentStringIndex, strings]);

    return <span className="inline-block">{currentText}</span>;
} 