'use client';

import { User, Building2, Building } from 'lucide-react';

/**
 * Composant réutilisable pour sélectionner le type de client
 * Utilisé dans CustomerModal et NewQuoteTypeModal
 */

const CUSTOMER_TYPES = [
    {
        value: 'individual',
        label: 'Particulier',
        description: 'Pour les particuliers',
        icon: User,
        activeClasses: 'border-primary/30 bg-primary-soft',
        iconActiveClasses: 'bg-primary/10 text-primary',
        textActiveClasses: 'text-primary',
        descActiveClasses: 'text-primary/80'
    },
    {
        value: 'professional',
        label: 'Professionnel',
        description: 'Entreprises',
        icon: Building2,
        activeClasses: 'border-[var(--color-info)]/30 bg-[var(--color-info-soft)]',
        iconActiveClasses: 'bg-[var(--color-info)]/10 text-[var(--color-info)]',
        textActiveClasses: 'text-[var(--color-info)]',
        descActiveClasses: 'text-[var(--color-info)]/80'
    },
    {
        value: 'syndic',
        label: 'Syndic',
        description: 'Immobilier',
        icon: Building,
        activeClasses: 'border-[var(--color-secondary)]/30 bg-[var(--color-secondary-soft)]',
        iconActiveClasses: 'bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]',
        textActiveClasses: 'text-[var(--color-secondary)]',
        descActiveClasses: 'text-[var(--color-secondary)]/80'
    }
];

export default function CustomerTypeSelector({
    value,
    onChange,
    name = 'type',
    layout = 'horizontal', // 'horizontal' | 'vertical' | 'grid'
    size = 'normal' // 'compact' | 'normal' | 'large'
}) {
    const handleChange = (newValue) => {
        if (onChange) {
            // Support both direct value callback and event-like callback
            if (typeof onChange === 'function') {
                onChange(newValue);
            }
        }
    };

    const sizeClasses = {
        compact: 'p-2 gap-2',
        normal: 'p-3 gap-3',
        large: 'p-4 gap-4'
    };

    const layoutClasses = {
        horizontal: 'flex gap-4',
        vertical: 'flex flex-col gap-3',
        grid: 'grid grid-cols-3 gap-4'
    };

    const iconSizes = {
        compact: 16,
        normal: 20,
        large: 24
    };

    return (
        <div className={layoutClasses[layout]}>
            {CUSTOMER_TYPES.map((type) => {
                const isActive = value === type.value;
                const IconComponent = type.icon;

                return (
                    <label
                        key={type.value}
                        className={`
                            flex-1 flex items-center ${sizeClasses[size]} rounded-xl border-2 cursor-pointer transition-all
                            ${isActive
                                ? type.activeClasses
                                : 'border-slate-100 hover:border-slate-200 hover:bg-slate-50'
                            }
                        `}
                    >
                        <input
                            type="radio"
                            name={name}
                            value={type.value}
                            checked={isActive}
                            onChange={() => handleChange(type.value)}
                            className="hidden"
                        />
                        <div className={`
                            p-2 rounded-full transition-colors
                            ${isActive
                                ? type.iconActiveClasses
                                : 'bg-slate-100 text-slate-400'
                            }
                        `}>
                            <IconComponent size={iconSizes[size]} />
                        </div>
                        <div>
                            <div className={`
                                font-semibold text-sm transition-colors
                                ${isActive ? type.textActiveClasses : 'text-slate-900'}
                            `}>
                                {type.label}
                            </div>
                            <div className={`
                                text-xs transition-colors
                                ${isActive ? type.descActiveClasses : 'text-slate-500'}
                            `}>
                                {type.description}
                            </div>
                        </div>
                    </label>
                );
            })}
        </div>
    );
}

// Export types for external use
export { CUSTOMER_TYPES };
