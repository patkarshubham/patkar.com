'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { navItems } from './nav-items';
import { cn } from '@/lib/utils';
import { ChevronDownIcon } from '@/icons/icons';

interface MobileMenuProps {
  isOpen: boolean;
}

export default function MainMobileNav({ isOpen }: MobileMenuProps) {
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState('');

  const toggleDropdown = (key: string) => {
    setActiveDropdown(activeDropdown === key ? '' : key);
  };

  if (!isOpen) return null;

  return (
    <div className="lg:hidden h-screen absolute top-full bg-white dark:bg-dark-primary w-full border-b border-gray-200 dark:border-gray-800">
      <div className="flex flex-col justify-between">
        <div className="flex-1 overflow-y-auto">
          <div className="pt-2 pb-3 space-y-1 px-4 sm:px-6">
            {navItems.map((item) => {
              if (item.type === 'link') {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'block px-3 py-2 rounded-md text-sm font-medium text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700',
                      {
                        'text-gray-800 dark:text-white': pathname === item.href,
                      }
                    )}
                  >
                    {item.label}
                  </Link>
                );
              }

              if (item.type === 'dropdown') {
                return (
                  <div key={item.label}>
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className={cn(
                        'flex justify-between items-center w-full px-3 py-2 rounded-md text-sm font-medium' +
                          ' text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700',
                        {
                          'text-gray-700 dark:text-gray-200': item.items.some(
                            (subItem) => pathname.includes(subItem.href)
                          ),
                        }
                      )}
                    >
                      <span>{item.label}</span>
                      <span
                        className={cn(
                          'size-4 transition-transform duration-200',
                          activeDropdown === item.label && 'rotate-180'
                        )}
                      >
                        <ChevronDownIcon />
                      </span>
                    </button>

                    {activeDropdown === item.label && (
                      <div className="mt-2 space-y-1 pl-4">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className={cn(
                              'flex items-center px-3 py-2 gap-1.5 rounded-md text-sm font-medium text-gray-500' +
                                ' dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700',
                              {
                                'px-2': 'icon' in subItem,
                                'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200':
                                  pathname.includes(subItem.href),
                              }
                            )}
                          >
                            <span>{subItem.label}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
            })}
          </div>
        </div>

        <div className="flex flex-col pt-2 pb-3 space-y-3 px-8">
          <Link
            href="/signin"
            className="text-sm block w-full border h-11 border-gray-200 px-5 py-3 rounded-full text-center font-medium text-gray-700 dark:text-gray-400 hover:text-primary-500"
          >
            Sign In
          </Link>

          <Link
            href="/signup"
            className="flex items-center px-5 py-3 gradient-btn  justify-center text-sm text-white rounded-full button-bg h-11"
          >
            Get Started Free
          </Link>
        </div>
      </div>
    </div>
  );
}
