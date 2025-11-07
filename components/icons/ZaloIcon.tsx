
import React from 'react';

interface IconProps {
  className?: string;
}

export const ZaloIcon: React.FC<IconProps> = ({ className }) => (
    <svg 
        viewBox="0 0 24 24" 
        fill="currentColor" 
        className={className}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M16.326 12.368l.89-3.486h-3.324v-2.18c0-.814.524-1.579 1.65-1.579h1.75V2L14.77 2c-2.85 0-4.64 1.6-4.64 4.57v2.8h-2.72v3.486h2.72v8.5h4.12v-8.5h2.434zM4.5 4.5l-2-2v19h19l2-2H4.5z" />
    </svg>
);
