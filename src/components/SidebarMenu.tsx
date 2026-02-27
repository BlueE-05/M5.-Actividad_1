import { Home, User, MessageSquare, ShoppingBag, LogIn, LogOut } from "lucide-react";

function SidebarMenu() {
    return (
        <>
            <div className="fixed top-27 right-0 h-full z-50 bg-transparent backdrop-blur-sm border-l border-gray-200 shadow-lg">
                <button
                    type="button"
                    className="fixed top-4 right-4 z-50 sm:hidden btn btn-square btn-ghost"
                >
                </button>

                <aside
                    id="sidebar"
                    className="
                    fixed
                    top-0
                    right-0
                    h-full
                    w-64
                    bg-base-100
                    border-l
                    border-base-content/20
                    shadow-lg
                    transform
                    translate-x-full
                    transition-transform
                    duration-300
                    sm:translate-x-0
                    sm:static
                    sm:block
                "
                >
                    <div className="p-4 border-b border-base-content/10">
                        <h3 className="text-xl font-semibold">FlyonUI</h3>
                    </div>

                    <ul className="menu p-4 space-y-2">
                        <li>
                            <a className="flex items-center gap-3">
                                <Home size={20} />
                                Home
                            </a>
                        </li>

                        <li>
                            <a className="flex items-center gap-3">
                                <User size={20} />
                                Account
                            </a>
                        </li>

                        <li>
                            <a className="flex items-center gap-3">
                                <MessageSquare size={20} />
                                Notifications
                            </a>
                        </li>

                        <li>
                            <a className="flex items-center gap-3">
                                <ShoppingBag size={20} />
                                Product
                            </a>
                        </li>

                        <li>
                            <a className="flex items-center gap-3">
                                <LogIn size={20} />
                                Sign In
                            </a>
                        </li>

                        <li>
                            <a className="flex items-center gap-3">
                                <LogOut size={20} />
                                Sign Out
                            </a>
                        </li>
                    </ul>
                </aside>
            </div>
        </>
    );
}

export default SidebarMenu;