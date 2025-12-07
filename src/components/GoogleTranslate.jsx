import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const GoogleTranslate = () => {
    const [selectedLang, setSelectedLang] = useState('en');
    const [isOpen, setIsOpen] = useState(false);

    const languages = [
        { code: 'en', name: 'English', flag: '🇺🇸' },
        { code: 'hi', name: 'Hindi', flag: '🇮🇳' },
        { code: 'es', name: 'Spanish', flag: '🇪🇸' },
        { code: 'fr', name: 'French', flag: '🇫🇷' },
        { code: 'de', name: 'German', flag: '🇩🇪' },
        { code: 'it', name: 'Italian', flag: '🇮🇹' },
        { code: 'ja', name: 'Japanese', flag: '🇯🇵' },
    ];

    useEffect(() => {
        const googleTranslateElementInit = () => {
            if (window.google && window.google.translate) {
                new window.google.translate.TranslateElement(
                    {
                        pageLanguage: 'en',
                        autoDisplay: false,
                    },
                    'google_translate_element'
                );
            }
        };

        if (!document.querySelector('script[src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"]')) {
            const script = document.createElement('script');
            script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
            script.async = true;
            document.body.appendChild(script);
            window.googleTranslateElementInit = googleTranslateElementInit;
        } else if (window.google && window.google.translate) {
            googleTranslateElementInit();
        }
    }, []);

    const changeLanguage = (langCode) => {
        const select = document.querySelector('.goog-te-combo');
        if (select) {
            select.value = langCode;
            select.dispatchEvent(new Event('change'));
            setSelectedLang(langCode);
            setIsOpen(false);
        }
    };

    const currentLang = languages.find(l => l.code === selectedLang) || languages[0];

    return (
        <div className="relative z-50">
            {/* Hidden Google Translate Element */}
            <div id="google_translate_element" className="absolute opacity-0 w-0 h-0 overflow-hidden"></div>

            {/* Custom Dropdown */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 bg-white border border-gray-200 px-3 py-2 rounded-lg hover:border-primary transition-colors min-w-[140px]"
            >
                <span className="text-xl">{currentLang.flag}</span>
                <span className="text-sm font-medium text-gray-700">{currentLang.name}</span>
                <ChevronDown size={16} className={`ml-auto text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
                <div className="absolute top-full right-0 mt-2 w-full bg-white border border-gray-100 rounded-lg shadow-xl py-2 max-h-64 overflow-y-auto">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => changeLanguage(lang.code)}
                            className={`w-full flex items-center gap-3 px-4 py-2 text-sm hover:bg-orange-50 transition-colors ${selectedLang === lang.code ? 'text-primary font-bold bg-orange-50' : 'text-gray-700'
                                }`}
                        >
                            <span className="text-xl">{lang.flag}</span>
                            <span>{lang.name}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default GoogleTranslate;
