import { Link } from 'react-router-dom';

interface Crumb {
    label: string;
    to?: string; // if 'to' is not provided, it's just text (like the current page)
}

interface BreadcrumbProps {
    crumbs: Crumb[];
}

export default function Breadcrumb({ crumbs }: BreadcrumbProps) {
    return (
        <div className="flex items-center text-xs space-x-1 text-gray-400 bg-gray-100 px-5">
            {crumbs.map((crumb, index) => (
                <div key={index} className="flex items-center space-x-1">
                    {crumb.to ? (
                        <Link to={crumb.to}>
                            <p className="hover:text-gray-800 cursor-pointer">{crumb.label}</p>
                        </Link>
                    ) : (
                        <p className="text-gray-800 cursor-pointer">{crumb.label}</p>
                    )}

                    {index < crumbs.length - 1 && (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-3"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m8.25 4.5 7.5 7.5-7.5 7.5"
                            />
                        </svg>
                    )}
                </div>
            ))}
        </div>
    );
}
