import {
    Menu,
    Home,
    User,
    MessageSquare,
    LayoutGrid,
    ChevronDown,
    Mail,
    Calendar,
    ShoppingBag,
    LogIn,
    LogOut,
} from "lucide-react";

function SidebarMenu() {
    return (
        <>
            <div className="flex align-items left">
                {/* Mobile Toggle */}
                <button
                    type="button"
                    className="btn btn-text max-sm:btn-square sm:hidden"
                    aria-haspopup="dialog"
                    aria-expanded="false"
                    aria-controls="collapsible-mini-sidebar"
                    data-overlay="#collapsible-mini-sidebar"
                >
                    <Menu size={20} />
                </button>

                <aside
                    id="collapsible-mini-sidebar"
                    className="overlay [--auto-close:sm] overlay-minified:w-17 sm:shadow-none overlay-open:translate-x-0 drawer drawer-start hidden w-66 sm:absolute sm:z-0 sm:flex sm:translate-x-0 border-e border-base-content/20"
                    role="dialog"
                    tabIndex={1}
                >
                    <div className="drawer-header overlay-minified:px-3.75 py-2 w-full flex items-center justify-between gap-3">
                        <h3 className="drawer-title text-xl font-semibold overlay-minified:hidden">
                            FlyonUI
                        </h3>

                        <div className="hidden sm:block">
                            <button
                                type="button"
                                className="btn btn-circle btn-text"
                                aria-haspopup="dialog"
                                aria-expanded="false"
                                aria-controls="collapsible-mini-sidebar"
                                aria-label="Minify navigation"
                                data-overlay-minifier="#collapsible-mini-sidebar"
                            >
                                <Menu size={20} />
                                <span className="sr-only">Navigation Toggle</span>
                            </button>
                        </div>
                    </div>

                    <div className="drawer-body px-2 pt-4">
                        <ul className="menu p-0 space-y-1">
                            <li>
                                <a href="#" className="flex items-center gap-3">
                                    <Home size={20} />
                                    <span className="overlay-minified:hidden">Home</span>
                                </a>
                            </li>

                            <li>
                                <a href="#" className="flex items-center gap-3">
                                    <User size={20} />
                                    <span className="overlay-minified:hidden">Account</span>
                                </a>
                            </li>

                            <li>
                                <a href="#" className="flex items-center gap-3">
                                    <MessageSquare size={20} />
                                    <span className="overlay-minified:hidden">
                                        Notifications
                                    </span>
                                </a>
                            </li>

                            <li className="dropdown relative">
                                <button
                                    id="dropdown-default"
                                    type="button"
                                    className="dropdown-toggle flex items-center gap-3 w-full"
                                    aria-haspopup="menu"
                                    aria-expanded="false"
                                >
                                    <LayoutGrid size={20} />
                                    <span className="overlay-minified:hidden">Apps</span>
                                    <ChevronDown
                                        size={16}
                                        className="overlay-minified:hidden ml-auto"
                                    />
                                </button>

                                <ul
                                    className="dropdown-menu mt-0 hidden min-w-60"
                                    role="menu"
                                    aria-labelledby="dropdown-default"
                                >
                                    <li>
                                        <a href="#" className="flex items-center gap-3">
                                            <Mail size={20} />
                                            Email
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center gap-3">
                                            <Calendar size={20} />
                                            Calendar
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <a href="#" className="flex items-center gap-3">
                                    <ShoppingBag size={20} />
                                    <span className="overlay-minified:hidden">Product</span>
                                </a>
                            </li>

                            <li>
                                <a href="#" className="flex items-center gap-3">
                                    <LogIn size={20} />
                                    <span className="overlay-minified:hidden">Sign In</span>
                                </a>
                            </li>

                            <li>
                                <a href="#" className="flex items-center gap-3">
                                    <LogOut size={20} />
                                    <span className="overlay-minified:hidden">Sign Out</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </aside>
            </div>
        </>
    );
}

export default SidebarMenu;