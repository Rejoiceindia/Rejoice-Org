import { useEffect, useCallback, useState } from 'react'

const useTheme = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light')

    // Function to toggle the theme
    const toggleTheme = useCallback(() => {
        const newTheme = theme === 'dark' ? 'light' : 'dark'
        document.documentElement.setAttribute('data-mode', newTheme)
        localStorage.setItem('theme', newTheme)
        setTheme(newTheme)
    }, [theme])

  // Set initial theme on component mount
    useEffect(() => {
        const storedTheme = localStorage.getItem('theme') as 'light' | 'dark'
        if (storedTheme) {
        document.documentElement.setAttribute('data-mode', storedTheme)
        setTheme(storedTheme)
        } else {
        // If no stored theme, default to light mode
        document.documentElement.setAttribute('data-mode', 'light')
        setTheme('light')
        }
    }, [])

    return { theme, toggleTheme }
}

export default useTheme
